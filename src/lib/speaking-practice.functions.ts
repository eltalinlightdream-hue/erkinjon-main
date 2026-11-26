import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import {
  DAILY_GOAL_SECONDS,
  GENERAL_OPTIONS,
  PRACTICE_TIME_ZONE,
} from "@/lib/speaking-practice/config";
import { MOCK_SETS, pickNextMockSet } from "@/lib/speaking-practice/plan";

const recordingType = z.enum(["none", "audio", "video"]);

const startInput = z.discriminatedUnion("mode", [
  z.object({
    mode: z.literal("general"),
    optionId: z.enum(GENERAL_OPTIONS.map((o) => o.id) as [string, ...string[]]),
    recordingType,
  }),
  z.object({ mode: z.literal("mock"), recordingType }),
]);

/**
 * Starts the practice timer in the database. For mock tests it also chooses the
 * set: a set is never repeated until the student has completed every set.
 */
export const startSpeakingSession = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator(startInput.parse)
  .handler(async ({ data, context }) => {
    let mockSet: number | null = null;
    let parts: number[] = [1, 2, 3];
    let label: string;

    if (data.mode === "mock") {
      const { data: done, error } = await context.supabase
        .from("speaking_practice_sessions")
        .select("mock_set")
        .eq("user_id", context.userId)
        .eq("mode", "mock")
        .eq("completed", true);
      if (error) throw new Error(error.message);
      const counts = new Map<number, number>();
      for (const r of done ?? []) {
        if (r.mock_set !== null) counts.set(r.mock_set, (counts.get(r.mock_set) ?? 0) + 1);
      }
      mockSet = pickNextMockSet(counts).number;
      label = `Mock test ${mockSet}`;
    } else {
      const option = GENERAL_OPTIONS.find((o) => o.id === data.optionId) ?? GENERAL_OPTIONS[0];
      parts = [...option.parts];
      label = option.label;
    }

    const { data: sessionId, error } = await context.supabase.rpc("start_speaking_session", {
      p_mode: data.mode,
      p_parts: parts,
      p_recording_type: data.recordingType,
      p_label: label,
      p_mock_set: mockSet,
    });
    if (error || !sessionId) throw new Error(error?.message ?? "Could not start the session");
    return { sessionId, mockSet };
  });

export const saveSpeakingProgress = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator(
    z.object({
      sessionId: z.string().uuid(),
      seconds: z
        .number()
        .int()
        .min(0)
        .max(24 * 60 * 60),
      finished: z.boolean(),
    }).parse,
  )
  .handler(async ({ data, context }) => {
    const { data: saved, error } = await context.supabase.rpc("speaking_session_progress", {
      p_session_id: data.sessionId,
      p_active_seconds: data.seconds,
      p_finished: data.finished,
    });
    if (error) throw new Error(error.message);
    return { savedSeconds: saved ?? 0 };
  });

/** YYYY-MM-DD in the practice time zone, `offsetDays` days from now. */
function practiceDay(offsetDays = 0): string {
  const d = new Date(Date.now() + offsetDays * 86_400_000);
  return new Intl.DateTimeFormat("en-CA", { timeZone: PRACTICE_TIME_ZONE }).format(d);
}

/** Consecutive goal days ending today (or yesterday, if today's goal is not met yet). */
function currentStreak(secondsByDay: ReadonlyMap<string, number>): number {
  const met = (offset: number) =>
    (secondsByDay.get(practiceDay(offset)) ?? 0) >= DAILY_GOAL_SECONDS;
  let offset = met(0) ? 0 : -1;
  let streak = 0;
  while (met(offset)) {
    streak++;
    offset--;
  }
  return streak;
}

const STATS_WINDOW_DAYS = 120;

export const speakingStats = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const [windowRes, mocksRes] = await Promise.all([
      context.supabase
        .from("speaking_practice_sessions")
        .select("id, mode, label, mock_set, duration_seconds, completed, started_at, day_tashkent")
        .eq("user_id", context.userId)
        .gte("day_tashkent", practiceDay(-STATS_WINDOW_DAYS))
        .order("started_at", { ascending: false }),
      context.supabase
        .from("speaking_practice_sessions")
        .select("mock_set")
        .eq("user_id", context.userId)
        .eq("mode", "mock")
        .eq("completed", true),
    ]);
    if (windowRes.error) throw new Error(windowRes.error.message);
    if (mocksRes.error) throw new Error(mocksRes.error.message);

    const rows = windowRes.data ?? [];
    const secondsByDay = new Map<string, number>();
    for (const r of rows) {
      secondsByDay.set(
        r.day_tashkent,
        (secondsByDay.get(r.day_tashkent) ?? 0) + r.duration_seconds,
      );
    }

    const week = Array.from({ length: 7 }, (_, i) => {
      const day = practiceDay(i - 6);
      return { day, seconds: secondsByDay.get(day) ?? 0 };
    });

    const mockSetsDone = new Set(
      (mocksRes.data ?? []).map((r) => r.mock_set).filter((n): n is number => n !== null),
    );

    return {
      goalSeconds: DAILY_GOAL_SECONDS,
      todaySeconds: secondsByDay.get(practiceDay(0)) ?? 0,
      streak: currentStreak(secondsByDay),
      week,
      mocksCompleted: mockSetsDone.size,
      mocksTotal: MOCK_SETS.length,
      recent: rows.slice(0, 6).map((r) => ({
        id: r.id,
        mode: r.mode as "general" | "mock",
        label: r.label,
        seconds: r.duration_seconds,
        completed: r.completed,
        startedAt: r.started_at,
      })),
    };
  });

export type SpeakingStats = Awaited<ReturnType<typeof speakingStats>>;
