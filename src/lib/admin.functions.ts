import { createMiddleware, createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { supabaseAdmin } from "@/integrations/supabase/client.server";
import { isAdminEmail } from "@/lib/admin-config";

// Every admin function goes through this middleware: a valid session is not
// enough, the JWT email must match the site owner. The database mirrors this
// check in `is_admin()`, so even a bypass here would hit RLS/trigger walls.
const requireAdmin = createMiddleware({ type: "function" })
  .middleware([requireSupabaseAuth])
  .server(async ({ next, context }) => {
    const email = typeof context.claims.email === "string" ? context.claims.email : null;
    if (!isAdminEmail(email)) {
      throw new Error("Not authorized: admin access only.");
    }
    return next({ context });
  });

export interface AdminStudent {
  id: string;
  email: string | null;
  full_name: string | null;
  created_at: string;
  last_sign_in_at: string | null;
  email_confirmed: boolean;
  /** Progress tracking, visible to the admin only. */
  tests_total: number;
  tests_week: number;
  avg_band: number | null;
  words_total: number;
  last_test_at: string | null;
}

async function getAuthUserEmail(userId: string): Promise<string | null> {
  const { data, error } = await supabaseAdmin.auth.admin.getUserById(userId);
  if (error) throw new Error("Could not look up that account.");
  return data.user?.email ?? null;
}

export const adminListStudents = createServerFn({ method: "POST" })
  .middleware([requireAdmin])
  .handler(async (): Promise<AdminStudent[]> => {
    const weekAgo = new Date(Date.now() - 7 * 86_400_000).toISOString();

    const [
      { data: profiles, error: profErr },
      { data: usersPage, error: usersErr },
      { data: results, error: resultsErr },
      { data: words, error: wordsErr },
    ] = await Promise.all([
      supabaseAdmin.from("profiles").select("*"),
      supabaseAdmin.auth.admin.listUsers({ page: 1, perPage: 1000 }),
      supabaseAdmin.from("test_results").select("user_id, band, score, total, completed_at"),
      supabaseAdmin.from("vocabulary_words").select("user_id"),
    ]);
    if (profErr) throw new Error("Could not load student profiles.");
    if (usersErr) throw new Error("Could not load student accounts.");
    if (resultsErr) throw new Error("Could not load student test results.");
    if (wordsErr) throw new Error("Could not load student vocabulary counts.");

    const authById = new Map(usersPage.users.map((u) => [u.id, u]));

    interface Tracking {
      testsTotal: number;
      testsWeek: number;
      bandSum: number;
      bandCount: number;
      wordsTotal: number;
      lastTestAt: string | null;
    }
    const trackingById = new Map<string, Tracking>();
    const trackingFor = (userId: string): Tracking => {
      const existing = trackingById.get(userId);
      if (existing) return existing;
      const fresh: Tracking = {
        testsTotal: 0,
        testsWeek: 0,
        bandSum: 0,
        bandCount: 0,
        wordsTotal: 0,
        lastTestAt: null,
      };
      trackingById.set(userId, fresh);
      return fresh;
    };
    for (const r of results ?? []) {
      const t = trackingFor(r.user_id);
      t.testsTotal += 1;
      if (r.completed_at >= weekAgo) t.testsWeek += 1;
      const band = r.band ?? (r.total ? (r.score / r.total) * 9 : null);
      if (band !== null) {
        t.bandSum += band;
        t.bandCount += 1;
      }
      if (!t.lastTestAt || r.completed_at > t.lastTestAt) t.lastTestAt = r.completed_at;
    }
    for (const w of words ?? []) {
      trackingFor(w.user_id).wordsTotal += 1;
    }

    return (profiles ?? [])
      .map((p): AdminStudent => {
        const authUser = authById.get(p.id);
        const t = trackingById.get(p.id);
        return {
          id: p.id,
          email: authUser?.email ?? p.email,
          full_name: p.full_name,
          created_at: p.created_at,
          last_sign_in_at: authUser?.last_sign_in_at ?? null,
          email_confirmed: Boolean(authUser?.email_confirmed_at),
          tests_total: t?.testsTotal ?? 0,
          tests_week: t?.testsWeek ?? 0,
          avg_band: t && t.bandCount > 0 ? Number((t.bandSum / t.bandCount).toFixed(1)) : null,
          words_total: t?.wordsTotal ?? 0,
          last_test_at: t?.lastTestAt ?? null,
        };
      })
      .sort((a, b) => (a.created_at < b.created_at ? 1 : -1));
  });

export const adminUpdateStudentName = createServerFn({ method: "POST" })
  .middleware([requireAdmin])
  .inputValidator(
    z.object({ userId: z.string().uuid(), fullName: z.string().trim().min(1).max(120) }).parse,
  )
  .handler(async ({ data }) => {
    const { error } = await supabaseAdmin
      .from("profiles")
      .update({ full_name: data.fullName })
      .eq("id", data.userId);
    if (error) throw new Error("Could not update the student's name.");
    return { ok: true };
  });

export const adminDeleteStudent = createServerFn({ method: "POST" })
  .middleware([requireAdmin])
  .inputValidator(z.object({ userId: z.string().uuid() }).parse)
  .handler(async ({ data, context }) => {
    if (data.userId === context.userId || isAdminEmail(await getAuthUserEmail(data.userId))) {
      throw new Error("The admin account cannot be deleted.");
    }
    const { error } = await supabaseAdmin.auth.admin.deleteUser(data.userId);
    if (error) throw new Error("Could not delete this student.");
    return { ok: true };
  });
