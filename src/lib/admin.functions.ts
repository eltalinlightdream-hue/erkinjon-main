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
  is_premium: boolean;
  activated_at: string | null;
  created_at: string;
  last_sign_in_at: string | null;
  email_confirmed: boolean;
  device_bound: boolean;
  device_last_seen: string | null;
}

export interface AdminCode {
  code: string;
  note: string | null;
  created_at: string;
  used_at: string | null;
  used_by: string | null;
  used_by_email: string | null;
  used_by_name: string | null;
}

async function getAuthUserEmail(userId: string): Promise<string | null> {
  const { data, error } = await supabaseAdmin.auth.admin.getUserById(userId);
  if (error) throw new Error("Could not look up that account.");
  return data.user?.email ?? null;
}

export const adminListStudents = createServerFn({ method: "POST" })
  .middleware([requireAdmin])
  .handler(async (): Promise<AdminStudent[]> => {
    const [{ data: profiles, error: profErr }, { data: usersPage, error: usersErr }] =
      await Promise.all([
        supabaseAdmin.from("profiles").select("*"),
        supabaseAdmin.auth.admin.listUsers({ page: 1, perPage: 1000 }),
      ]);
    if (profErr) throw new Error("Could not load student profiles.");
    if (usersErr) throw new Error("Could not load student accounts.");

    const authById = new Map(usersPage.users.map((u) => [u.id, u]));

    return (profiles ?? [])
      .map((p): AdminStudent => {
        const authUser = authById.get(p.id);
        return {
          id: p.id,
          email: authUser?.email ?? p.email,
          full_name: p.full_name,
          is_premium: p.is_premium,
          activated_at: p.activated_at,
          created_at: p.created_at,
          last_sign_in_at: authUser?.last_sign_in_at ?? null,
          email_confirmed: Boolean(authUser?.email_confirmed_at),
          device_bound: Boolean(p.device_fingerprint),
          device_last_seen: p.device_last_seen,
        };
      })
      .sort((a, b) => (a.created_at < b.created_at ? 1 : -1));
  });

export const adminSetPremium = createServerFn({ method: "POST" })
  .middleware([requireAdmin])
  .inputValidator(z.object({ userId: z.string().uuid(), premium: z.boolean() }).parse)
  .handler(async ({ data }) => {
    if (!data.premium && isAdminEmail(await getAuthUserEmail(data.userId))) {
      throw new Error("The admin account is always premium and cannot be downgraded.");
    }

    const { data: updated, error } = await supabaseAdmin
      .from("profiles")
      .update({
        is_premium: data.premium,
        activated_at: data.premium ? new Date().toISOString() : null,
        // Unbinding the device on downgrade lets a re-activated student
        // start fresh on whichever device they use next.
        ...(data.premium ? {} : { device_fingerprint: null, device_last_seen: null }),
      })
      .eq("id", data.userId)
      .select("is_premium, activated_at")
      .single();
    if (error) throw new Error("Could not update premium status.");
    return { ok: true, is_premium: updated.is_premium, activated_at: updated.activated_at };
  });

export const adminResetStudentDevice = createServerFn({ method: "POST" })
  .middleware([requireAdmin])
  .inputValidator(z.object({ userId: z.string().uuid() }).parse)
  .handler(async ({ data }) => {
    const { error } = await supabaseAdmin
      .from("profiles")
      .update({ device_fingerprint: null, device_last_seen: null })
      .eq("id", data.userId);
    if (error) throw new Error("Could not reset the device binding.");
    return { ok: true };
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

export const adminListCodes = createServerFn({ method: "POST" })
  .middleware([requireAdmin])
  .handler(async (): Promise<AdminCode[]> => {
    const { data: codes, error } = await supabaseAdmin
      .from("activation_codes")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) throw new Error("Could not load activation codes.");

    const userIds = [...new Set((codes ?? []).map((c) => c.used_by).filter(Boolean))] as string[];
    let profileById = new Map<string, { email: string | null; full_name: string | null }>();
    if (userIds.length > 0) {
      const { data: profiles } = await supabaseAdmin
        .from("profiles")
        .select("id, email, full_name")
        .in("id", userIds);
      profileById = new Map(
        (profiles ?? []).map((p) => [p.id, { email: p.email, full_name: p.full_name }]),
      );
    }

    return (codes ?? []).map((c): AdminCode => {
      const holder = c.used_by ? profileById.get(c.used_by) : undefined;
      return {
        code: c.code,
        note: c.note,
        created_at: c.created_at,
        used_at: c.used_at,
        used_by: c.used_by,
        used_by_email: holder?.email ?? null,
        used_by_name: holder?.full_name ?? null,
      };
    });
  });

// No 0/O/1/I so codes stay easy to read out loud or copy by hand.
const CODE_ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

function generateActivationCode(): string {
  const bytes = new Uint8Array(8);
  crypto.getRandomValues(bytes);
  const chars = Array.from(bytes, (b) => CODE_ALPHABET[b % CODE_ALPHABET.length]);
  return `ERK-${chars.slice(0, 4).join("")}-${chars.slice(4).join("")}`;
}

export const adminCreateCodes = createServerFn({ method: "POST" })
  .middleware([requireAdmin])
  .inputValidator(
    z.object({
      count: z.number().int().min(1).max(50),
      note: z.string().trim().max(200).optional(),
    }).parse,
  )
  .handler(async ({ data }) => {
    const rows = Array.from({ length: data.count }, () => ({
      code: generateActivationCode(),
      note: data.note || null,
    }));
    const { error } = await supabaseAdmin.from("activation_codes").insert(rows);
    if (error) throw new Error("Could not create activation codes. Please try again.");
    return { ok: true, codes: rows.map((r) => r.code) };
  });

export const adminDeleteCode = createServerFn({ method: "POST" })
  .middleware([requireAdmin])
  .inputValidator(
    z.object({
      code: z
        .string()
        .min(4)
        .max(64)
        .regex(/^[A-Za-z0-9_-]+$/),
    }).parse,
  )
  .handler(async ({ data }) => {
    const { data: deleted, error } = await supabaseAdmin
      .from("activation_codes")
      .delete()
      .eq("code", data.code)
      .is("used_by", null)
      .select("code");
    if (error) throw new Error("Could not delete this code.");
    if (!deleted || deleted.length === 0) {
      throw new Error("Only unused codes can be deleted.");
    }
    return { ok: true };
  });

/* ────────────────────────────────────────────────────────────────
   Content free/premium overrides. Each row is an admin exception to
   the built-in "first N free" defaults, keyed by (content_type,
   content_id). Absent row = use the default. The admin Content panel
   deletes a row (rather than storing it) when a choice matches the
   default, so the table only ever holds genuine exceptions.
   ──────────────────────────────────────────────────────────────── */

export interface AdminContentOverride {
  content_type: string;
  content_id: string;
  is_premium: boolean;
  updated_at: string;
}

const contentSectionSchema = z.enum(["listening", "reading", "writing", "speaking"]);
const contentIdSchema = z.string().trim().min(1).max(200);

export const adminListContentOverrides = createServerFn({ method: "POST" })
  .middleware([requireAdmin])
  .handler(async (): Promise<AdminContentOverride[]> => {
    const { data, error } = await supabaseAdmin
      .from("content_premium_overrides")
      .select("content_type, content_id, is_premium, updated_at");
    if (error) throw new Error("Could not load content overrides.");
    return data ?? [];
  });

export const adminSetContentPremium = createServerFn({ method: "POST" })
  .middleware([requireAdmin])
  .inputValidator(
    z.object({
      contentType: contentSectionSchema,
      contentId: contentIdSchema,
      isPremium: z.boolean(),
    }).parse,
  )
  .handler(async ({ data, context }) => {
    const { error } = await supabaseAdmin.from("content_premium_overrides").upsert(
      {
        content_type: data.contentType,
        content_id: data.contentId,
        is_premium: data.isPremium,
        updated_at: new Date().toISOString(),
        updated_by: context.userId,
      },
      { onConflict: "content_type,content_id" },
    );
    if (error) throw new Error("Could not update this item.");
    return { ok: true };
  });

export const adminBulkUpsertContentPremium = createServerFn({ method: "POST" })
  .middleware([requireAdmin])
  .inputValidator(
    z.object({
      contentType: contentSectionSchema,
      contentIds: z.array(contentIdSchema).min(1).max(2000),
      isPremium: z.boolean(),
    }).parse,
  )
  .handler(async ({ data, context }) => {
    const now = new Date().toISOString();
    const rows = data.contentIds.map((contentId) => ({
      content_type: data.contentType,
      content_id: contentId,
      is_premium: data.isPremium,
      updated_at: now,
      updated_by: context.userId,
    }));
    const { error } = await supabaseAdmin
      .from("content_premium_overrides")
      .upsert(rows, { onConflict: "content_type,content_id" });
    if (error) throw new Error("Could not update these items.");
    return { ok: true, count: rows.length };
  });

export const adminResetContentOverride = createServerFn({ method: "POST" })
  .middleware([requireAdmin])
  .inputValidator(
    z.object({
      contentType: contentSectionSchema,
      contentIds: z.array(contentIdSchema).min(1).max(2000),
    }).parse,
  )
  .handler(async ({ data }) => {
    const { error } = await supabaseAdmin
      .from("content_premium_overrides")
      .delete()
      .eq("content_type", data.contentType)
      .in("content_id", data.contentIds);
    if (error) throw new Error("Could not reset these items to default.");
    return { ok: true };
  });
