import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Flame, Trophy } from "lucide-react";
import { useAuth } from "@/hooks/use-auth";
import { speakingStats } from "@/lib/speaking-practice.functions";
import { cn } from "@/lib/utils";

function minutes(seconds: number): number {
  return Math.floor(seconds / 60);
}

const STRIP = "bento-card flex flex-wrap items-center gap-x-8 gap-y-4 px-6 py-5";

/**
 * The signed-in student's own speaking progress in one strip: streak, today's
 * minutes towards the daily goal, and finished mock tests. Nobody else sees it.
 */
export function ProgressStrip() {
  const { user, loading } = useAuth();
  const fetchStats = useServerFn(speakingStats);
  const { data, isLoading, isError } = useQuery({
    queryKey: ["speaking-stats", user?.id],
    queryFn: () => fetchStats(),
    enabled: !!user,
    staleTime: 30_000,
  });

  if (loading || (user && isLoading)) {
    return (
      <div
        className={cn(STRIP, "h-[84px] animate-pulse")}
        aria-busy
        aria-label="Loading progress"
      />
    );
  }

  if (!user) {
    return (
      <div className={cn(STRIP, "justify-between")}>
        <div className="flex items-center gap-4">
          <span className="icon-tile icon-tile-ochre h-11 w-11 shrink-0">
            <Flame className="h-5 w-5" strokeWidth={1.5} />
          </span>
          <p className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">Track your speaking time.</span> Sign in
            to keep a daily streak and see which mock tests you have finished.
          </p>
        </div>
        <Link
          to="/auth"
          className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-transform duration-300 hover:translate-x-1"
        >
          Sign in <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    );
  }

  if (isError || !data) {
    return (
      <div className={cn(STRIP, "text-sm text-muted-foreground")}>
        Your speaking progress is not available right now. You can still practise.
      </div>
    );
  }

  const fraction = Math.min(1, data.todaySeconds / data.goalSeconds);
  const isGoalMet = fraction >= 1;
  return (
    <div className={STRIP}>
      <div className="flex items-center gap-3">
        <span className="icon-tile icon-tile-ochre h-11 w-11 shrink-0">
          <Flame className="h-5 w-5" strokeWidth={1.5} />
        </span>
        <div>
          <p className="font-serif text-xl leading-none tabular-nums">
            {data.streak} day{data.streak === 1 ? "" : "s"}
          </p>
          <p className="text-xs text-muted-foreground">streak</p>
        </div>
      </div>

      <div className="min-w-48 flex-1">
        <div className="mb-1.5 flex justify-between text-xs text-muted-foreground">
          <span>{isGoalMet ? "Daily goal reached" : "Today"}</span>
          <span className="tabular-nums">
            {minutes(data.todaySeconds)} / {minutes(data.goalSeconds)} min
          </span>
        </div>
        <div
          className="h-2 overflow-hidden rounded-full bg-muted"
          role="progressbar"
          aria-label="Speaking minutes today"
          aria-valuemin={0}
          aria-valuemax={minutes(data.goalSeconds)}
          aria-valuenow={Math.min(minutes(data.todaySeconds), minutes(data.goalSeconds))}
        >
          <div
            className={cn("h-full rounded-full", isGoalMet ? "bg-secondary" : "bg-primary")}
            style={{ width: `${fraction * 100}%` }}
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <span className="icon-tile icon-tile-coral h-11 w-11 shrink-0">
          <Trophy className="h-5 w-5" strokeWidth={1.5} />
        </span>
        <div>
          <p className="font-serif text-xl leading-none tabular-nums">
            {data.mocksCompleted}
            <span className="text-sm text-muted-foreground"> / {data.mocksTotal}</span>
          </p>
          <p className="text-xs text-muted-foreground">mock tests done</p>
        </div>
      </div>
    </div>
  );
}
