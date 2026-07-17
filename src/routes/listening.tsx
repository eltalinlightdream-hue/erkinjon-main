import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Headphones, Lock, Crown, RotateCcw } from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/hooks/use-auth";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import {
  getTestProgressMeta,
  ProgressStatus,
  TEST_PROGRESS_OPTIONS,
  useTestStatus,
} from "@/hooks/use-test-status";
import { TestProgressBadge, TestProgressSelect } from "@/components/test-progress-controls";
import { Sheep, McItem } from "@/components/minecraft-decorations";
import { FREE_LIMITS, effectiveIsPremium } from "@/lib/premium-content";
import { useContentOverrides } from "@/hooks/use-content-overrides";
import { TESTS, type ListeningTest } from "@/lib/listening-data";

export const Route = createFileRoute("/listening")({
  head: () => ({
    meta: [
      { title: "IELTS Listening | Abduraimov Erkinjon" },
      { name: "description", content: "IELTS Listening practice tests — Section 1 to Section 4." },
    ],
  }),
  component: Listening,
});


const FILTERS = [
  { v: "all", label: "All" },
  { v: "full", label: "Full tests" },
  { v: "1", label: "Section 1" },
  { v: "2", label: "Section 2" },
  { v: "3", label: "Section 3" },
  { v: "4", label: "Section 4" },
] as const;

function Listening() {
  const [filter, setFilter] = useState<"all" | "full" | "1" | "2" | "3" | "4">("all");
  const [statusFilter, setStatusFilter] = useState<"all" | ProgressStatus>("all");
  const { profile, user } = useAuth();
  const isPremium = !!profile?.is_premium;
  const { overrides } = useContentOverrides();
  const navigate = useNavigate();

  const testIds = TESTS.map((t) => t.id);
  const { statuses, statusFor, setTestStatus, resetTest } = useTestStatus(testIds);

  // The first few tests stay free; everything after that is Premium-only.
  const freeTestIds = new Set(TESTS.slice(0, FREE_LIMITS.listeningTests).map((t) => t.id));

  const sectionCounts = {
    all: TESTS.length,
    full: TESTS.filter((t) => t.section === 0).length,
    "1": TESTS.filter((t) => t.section === 1).length,
    "2": TESTS.filter((t) => t.section === 2).length,
    "3": TESTS.filter((t) => t.section === 3).length,
    "4": TESTS.filter((t) => t.section === 4).length,
  };

  const visible = TESTS.filter((t) => {
    const matchesSection =
      filter === "all" || (filter === "full" ? t.section === 0 : String(t.section) === filter);
    const matchesStatus = statusFilter === "all" || statusFor(t.id) === statusFilter;
    return matchesSection && matchesStatus;
  });

  function openTest(test: ListeningTest) {
    if (!user) {
      void navigate({ to: "/auth" });
      return;
    }
    if (statusFor(test.id) === "not_done") {
      void setTestStatus(test.id, "not_completed");
    }
    window.open(test.htmlFile, "_blank");
  }

  return (
    <SiteLayout>
      <section className="container mx-auto px-4 py-12 max-w-6xl relative">
        {/* Minecraft decorations */}
        <div className="absolute top-4 right-4 pointer-events-none select-none hidden lg:flex flex-col items-end gap-3">
          <Sheep size={56} opacity={0.65} />
          <McItem item="torch" size={24} opacity={0.15} className="mc-flicker" />
        </div>
        <div className="absolute top-6 right-24 pointer-events-none opacity-[0.06] hidden xl:block">
          <McItem item="pickaxe" size={32} opacity={1} />
        </div>
        <div className="ink-bleed mb-10">
          <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-3">IELTS Listening</h1>
          <p className="text-muted-foreground mb-1">
            Full listening tests with built-in audio player, timer, and answer checker.
          </p>
          <p className="font-mono text-[11px] text-muted-foreground/70 tracking-wide italic">
            Time: Sections 1-4 — 30 min total | Each section approx. 7-8 min
          </p>
        </div>

        <div className="space-y-3 mb-8">
          {/* Primary filter — section (heavier than the status row below) */}
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <Button
                key={f.v}
                variant={filter === f.v ? "default" : "outline"}
                size="sm"
                className="text-[13px] font-semibold rounded-full h-9 px-5"
                onClick={() => setFilter(f.v)}
              >
                {f.label} ({sectionCounts[f.v]})
              </Button>
            ))}
          </div>
          {/* Secondary filter — status (smaller, quieter) */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground mr-1">
              Status
            </span>
            <Button
              variant={statusFilter === "all" ? "secondary" : "ghost"}
              size="sm"
              className="text-[11px] rounded-full h-7 px-3"
              onClick={() => setStatusFilter("all")}
            >
              All
            </Button>
            {TEST_PROGRESS_OPTIONS.map((option) => (
              <Button
                key={option.value}
                variant={statusFilter === option.value ? "secondary" : "ghost"}
                size="sm"
                className="text-[11px] rounded-full h-7 px-3"
                onClick={() => setStatusFilter(option.value)}
              >
                {option.label}
              </Button>
            ))}
          </div>
        </div>

        {visible.length === 0 ? (
          <p className="text-muted-foreground py-12 text-center font-mono text-sm tracking-wide">No tests in this section yet.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {visible.map((t) => {
              const locked =
                effectiveIsPremium("listening", t.id, !freeTestIds.has(t.id), overrides) &&
                !isPremium;
              const status = statuses[t.id];
              const progressStatus = statusFor(t.id);
              const isFinished = progressStatus === "finished";
              const progressMeta = getTestProgressMeta(progressStatus);

              return (
                <Card
                  key={t.id}
                  className={cn("p-6 flex flex-col relative overflow-hidden", progressMeta.cardClassName)}
                >
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <Badge variant={t.section === 0 ? "info" : "secondary"} className={t.section === 0 ? undefined : "bg-accent text-foreground"}>
                        {t.section === 0 ? "Full test" : `Section ${t.section}`}
                      </Badge>
                      {t.isNew && <Badge>New</Badge>}
                      <TestProgressBadge status={progressStatus} detail={status} />
                    </div>
                    <div className="flex items-center gap-2 shrink-0 mt-1">
                      <span className="text-xs text-muted-foreground whitespace-nowrap">
                        {t.questions} questions
                      </span>
                      {locked && <Lock className="w-4 h-4 text-muted-foreground" />}
                    </div>
                  </div>

                  <h3
                    className={cn(
                      "font-serif text-xl font-semibold mb-2 leading-snug",
                      locked && "blur-sm select-none",
                    )}
                  >
                    {t.title}
                  </h3>

                  <p
                    className={cn(
                      "text-sm text-muted-foreground mb-5 flex-1 line-clamp-2",
                      locked && "blur-sm select-none",
                    )}
                  >
                    {t.description}
                  </p>

                  {status?.completedAt && (
                    <p className="text-xs text-muted-foreground mb-3">
                      Completed {new Date(status.completedAt).toLocaleDateString()}
                    </p>
                  )}

                  {!locked && (
                    <div className="mb-3">
                      <TestProgressSelect
                        value={progressStatus}
                        onChange={(next) => setTestStatus(t.id, next)}
                      />
                    </div>
                  )}

                  {locked ? (
                    <Link to={user ? "/premium" : "/auth"}>
                      <Button size="sm" className="w-full bg-gradient-gold text-primary-foreground">
                        <Crown className="w-4 h-4 mr-1" /> Unlock with Premium
                      </Button>
                    </Link>
                  ) : isFinished ? (
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1" onClick={() => openTest(t)}>
                        <Headphones className="w-4 h-4 mr-1" /> Review
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 text-muted-foreground"
                        onClick={() => resetTest(t.id)}
                      >
                        <RotateCcw className="w-4 h-4 mr-1" /> Redo
                      </Button>
                    </div>
                  ) : (
                    <Button size="sm" variant="outline" className="w-full" onClick={() => openTest(t)}>
                      <Headphones className="w-4 h-4 mr-1" />
                      {progressStatus === "not_completed" ? "Continue Test" : "Start Test"}
                    </Button>
                  )}
                </Card>
              );
            })}
          </div>
        )}
      </section>
    </SiteLayout>
  );
}
