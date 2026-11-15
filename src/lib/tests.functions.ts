import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { supabaseAdmin } from "@/integrations/supabase/client.server";
import { PASSAGES } from "@/lib/reading-data";
import { TESTS } from "@/lib/listening-data";

/**
 * Student progress is stored in `test_progress` (one row per user + test),
 * written by `useTestStatus` on the Reading and Listening pages. A test
 * counts as completed when its status is "finished".
 */

export type FinishedTest = {
  id: string;
  testId: string;
  title: string;
  section: "reading" | "listening" | "other";
  score: number | null;
  total: number | null;
  band: number | null;
  completedAt: string;
};

export type LeaderboardRow = {
  userId: string;
  name: string;
  tests: number;
  avgBand: number | null;
  rank: number;
};

const LEADERBOARD_SIZE = 10;

type CatalogueEntry = { title: string; section: FinishedTest["section"] };
let catalogue: Map<string, CatalogueEntry> | null = null;

/** Built on first use (server-side only) so the passage data stays out of client bundles. */
function getCatalogue(): Map<string, CatalogueEntry> {
  catalogue ??= new Map<string, CatalogueEntry>([
    ...PASSAGES.map((p) => [p.id, { title: p.title, section: "reading" as const }] as const),
    ...TESTS.map((t) => [t.id, { title: t.title, section: "listening" as const }] as const),
  ]);
  return catalogue;
}

/** Fallback title for ids no longer in the catalogue: "p1-baobabs" → "P1 Baobabs". */
function humanizeTestId(testId: string): string {
  return testId
    .split(/[-_]+/)
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

/** Rough band from a raw score — only available when the test recorded one. */
export function bandFromScore(score: number | null, total: number | null): number | null {
  if (score === null || !total) return null;
  return Number(((score / total) * 9).toFixed(1));
}

function averageBand(bands: Array<number | null>): number | null {
  const known = bands.filter((b): b is number => b !== null);
  if (known.length === 0) return null;
  return Number((known.reduce((a, b) => a + b, 0) / known.length).toFixed(1));
}

/** The signed-in student's finished tests, newest first. */
export const myFinishedTests = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }): Promise<FinishedTest[]> => {
    const { data, error } = await context.supabase
      .from("test_progress")
      .select("id, test_id, score, total, completed_at, updated_at")
      .eq("user_id", context.userId)
      .eq("status", "finished")
      .order("completed_at", { ascending: false, nullsFirst: false });
    if (error) throw new Error("Could not load your test progress.");

    const titles = getCatalogue();
    return (data ?? []).map((r) => {
      const entry = titles.get(r.test_id);
      return {
        id: r.id,
        testId: r.test_id,
        title: entry?.title ?? humanizeTestId(r.test_id),
        section: entry?.section ?? "other",
        score: r.score,
        total: r.total,
        band: bandFromScore(r.score, r.total),
        completedAt: r.completed_at ?? r.updated_at,
      };
    });
  });

/** Top students by tests finished since `since` (the client's local week start). */
export const weeklyLeaderboard = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .inputValidator(z.object({ since: z.string().datetime() }).parse)
  .handler(async ({ data }): Promise<LeaderboardRow[]> => {
    // Admin client: aggregation spans all users. Only first names leave the server.
    const { data: rows, error } = await supabaseAdmin
      .from("test_progress")
      .select("user_id, score, total")
      .eq("status", "finished")
      .gte("completed_at", data.since);
    if (error) throw new Error("Could not load the leaderboard.");

    const byUser = new Map<string, Array<number | null>>();
    for (const r of rows ?? []) {
      byUser.set(r.user_id, [...(byUser.get(r.user_id) ?? []), bandFromScore(r.score, r.total)]);
    }
    const userIds = [...byUser.keys()];
    if (userIds.length === 0) return [];

    const { data: profiles, error: profErr } = await supabaseAdmin
      .from("profiles")
      .select("id, full_name, email")
      .in("id", userIds);
    if (profErr) throw new Error("Could not load the leaderboard.");
    const profileById = new Map((profiles ?? []).map((p) => [p.id, p]));

    return userIds
      .map((userId) => {
        const p = profileById.get(userId);
        const bands = byUser.get(userId) ?? [];
        const name = (p?.full_name?.split(" ")[0] || p?.email?.split("@")[0] || "Student").slice(
          0,
          24,
        );
        return { userId, name, tests: bands.length, avgBand: averageBand(bands) };
      })
      .sort((a, b) => b.tests - a.tests || (b.avgBand ?? -1) - (a.avgBand ?? -1))
      .slice(0, LEADERBOARD_SIZE)
      .map((r, i) => ({ ...r, rank: i + 1 }));
  });
