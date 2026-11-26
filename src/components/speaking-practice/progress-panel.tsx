import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { Link } from "@tanstack/react-router";
import { Flame, Loader2 } from "lucide-react";
import { useAuth } from "@/hooks/use-auth";
import { speakingStats, type SpeakingStats } from "@/lib/speaking-practice.functions";
import { cn } from "@/lib/utils";

const WEEKDAY = new Intl.DateTimeFormat("en-GB", { weekday: "narrow", timeZone: "UTC" });

function minutes(seconds: number): number {
  return Math.floor(seconds / 60);
}

function GoalRing({ seconds, goal }: { seconds: number; goal: number }) {
  const size = 112;
  const stroke = 9;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const fraction = Math.min(1, seconds / goal);
  const isMet = fraction >= 1;
  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90" aria-hidden>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          strokeWidth={stroke}
          className="fill-none stroke-muted"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c * (1 - fraction)}
          className={cn("fill-none", isMet ? "stroke-secondary" : "stroke-primary")}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-serif text-3xl tabular-nums leading-none">{minutes(seconds)}</span>
        <span className="text-xs text-muted-foreground">of {minutes(goal)} min</span>
      </div>
    </div>
  );
}

function WeekBars({ week, goal }: { week: SpeakingStats["week"]; goal: number }) {
  const max = Math.max(goal, ...week.map((d) => d.seconds));
  return (
    <div
      className="flex h-24 items-end gap-1.5"
      role="list"
      aria-label="Speaking minutes, last 7 days"
    >
      {week.map((d, i) => {
        const isToday = i === week.length - 1;
        const isMet = d.seconds >= goal;
        return (
          <div
            key={d.day}
            role="listitem"
            aria-label={`${d.day}: ${minutes(d.seconds)} minutes`}
            className="flex flex-1 flex-col items-center gap-1"
          >
            <div className="flex h-16 w-full items-end overflow-hidden rounded-md bg-muted">
              <div
                className={cn("w-full rounded-md", isMet ? "bg-secondary" : "bg-primary/70")}
                style={{ height: `${Math.max(d.seconds > 0 ? 6 : 0, (d.seconds / max) * 100)}%` }}
              />
            </div>
            <span
              className={cn(
                "text-[0.7rem]",
                isToday ? "font-semibold text-foreground" : "text-muted-foreground",
              )}
            >
              {WEEKDAY.format(new Date(`${d.day}T12:00:00Z`))}
            </span>
          </div>
        );
      })}
    </div>
  );
}

function formatDuration(seconds: number): string {
  const m = Math.floor(seconds / 60);
  return m > 0 ? `${m} min` : `${seconds} s`;
}

/** The signed-in student's own speaking progress (nobody else can see it). */
export function ProgressPanel() {
  const { user, loading } = useAuth();
  const fetchStats = useServerFn(speakingStats);
  const { data, isLoading, isError } = useQuery({
    queryKey: ["speaking-stats", user?.id],
    queryFn: () => fetchStats(),
    enabled: !!user,
    staleTime: 30_000,
  });

  if (loading) return null;

  if (!user) {
    return (
      <aside className="bento-card flex flex-col gap-3 p-6">
        <p className="eyebrow text-primary">Your progress</p>
        <p className="font-serif text-xl leading-snug">
          Track your speaking time and keep a daily streak.
        </p>
        <p className="text-sm text-muted-foreground">
          Practice works without an account, but your minutes are only saved when you sign in.
        </p>
        <Link
          to="/auth"
          className="text-sm font-semibold text-primary underline-offset-4 hover:underline"
        >
          Sign in →
        </Link>
      </aside>
    );
  }

  if (isLoading) {
    return (
      <aside className="bento-card flex min-h-48 items-center justify-center p-6" aria-busy>
        <Loader2
          className="size-5 animate-spin text-muted-foreground"
          aria-label="Loading progress"
        />
      </aside>
    );
  }

  if (isError || !data) {
    return (
      <aside className="bento-card p-6 text-sm text-muted-foreground">
        Your speaking progress is not available right now. You can still practise.
      </aside>
    );
  }

  return (
    <aside className="bento-card flex flex-col gap-6 p-6">
      <div className="flex items-center justify-between">
        <p className="eyebrow text-primary">Today</p>
        <span
          className={cn(
            "badge-tint inline-flex items-center gap-1",
            data.streak > 0 ? "badge-tint-progress" : "badge-tint-neutral",
          )}
        >
          <Flame className="size-3.5" aria-hidden />
          {data.streak} day{data.streak === 1 ? "" : "s"} streak
        </span>
      </div>

      <div className="flex items-center gap-5">
        <GoalRing seconds={data.todaySeconds} goal={data.goalSeconds} />
        <p className="text-sm text-muted-foreground">
          {data.todaySeconds >= data.goalSeconds
            ? "Daily goal reached. Great work!"
            : `Speak ${minutes(data.goalSeconds)} minutes a day to keep your streak.`}
        </p>
      </div>

      <WeekBars week={data.week} goal={data.goalSeconds} />

      <div className="flex items-baseline justify-between border-t border-border pt-4">
        <span className="text-sm text-muted-foreground">Mock tests finished</span>
        <span className="font-serif text-xl tabular-nums">
          {data.mocksCompleted}
          <span className="text-sm text-muted-foreground"> / {data.mocksTotal}</span>
        </span>
      </div>

      {data.recent.length > 0 && (
        <ul className="flex flex-col gap-2 text-sm">
          {data.recent.map((r) => (
            <li key={r.id} className="flex items-center justify-between gap-3">
              <span className="truncate">
                {r.label}
                {!r.completed && <span className="text-muted-foreground"> · not finished</span>}
              </span>
              <span className="shrink-0 tabular-nums text-muted-foreground">
                {formatDuration(r.seconds)}
              </span>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
}
