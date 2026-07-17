import { createFileRoute, useLocation, useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { SiteLayout } from "@/components/site-layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Lock, Crown, BookOpen, RotateCcw, Search, Clock } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useAuth } from "@/hooks/use-auth";
import { cn } from "@/lib/utils";
import {
  getTestProgressMeta,
  ProgressStatus,
  TEST_PROGRESS_OPTIONS,
  useTestStatus,
} from "@/hooks/use-test-status";
import { TestProgressBadge, TestProgressSelect } from "@/components/test-progress-controls";
import { SteveReading, McItem } from "@/components/minecraft-decorations";
import { FREE_LIMITS, effectiveIsPremium } from "@/lib/premium-content";
import { useContentOverrides } from "@/hooks/use-content-overrides";
import { PASSAGES, type Passage } from "@/lib/reading-data";

export const Route = createFileRoute("/reading")({
  head: () => ({
    meta: [
      { title: "IELTS Reading Practice | Abduraimov Erkinjon" },
      { name: "description", content: "IELTS Reading passages - Passage 1, 2 and 3 practice." },
    ],
  }),
  component: Reading,
});


const FILTERS = [
  { v: "all", label: "All" },
  { v: "1", label: "Passage 1" },
  { v: "2", label: "Passage 2" },
  { v: "3", label: "Passage 3" },
] as const;

function Reading() {
  const location = useLocation();
  const passageParam = new URLSearchParams(location.search as Record<string, string>).get("passage") as "1" | "2" | "3" | null;
  const [filter, setFilter] = useState<(typeof FILTERS)[number]["v"]>(
    () => passageParam ?? "all"
  );
  const [statusFilter, setStatusFilter] = useState<"all" | ProgressStatus>("all");
  const [search, setSearch] = useState("");
  const [active, setActive] = useState<Passage | null>(null);

  useEffect(() => {
    if (passageParam) setFilter(passageParam);
    else setFilter("all");
  }, [passageParam]);

  const { profile, user } = useAuth();
  const isPremium = !!profile?.is_premium;
  const { overrides } = useContentOverrides();
  const navigate = useNavigate();

  const passageIds = PASSAGES.map((p) => p.id);
  const { statuses, statusFor, setTestStatus, resetTest } = useTestStatus(passageIds);

  // The first few NON-premium passages stay free; explicitly premium tests are
  // never free regardless of position, so new premium tests can sit at the top
  // of the list without falling into the free slice.
  const freePassageIds = new Set(
    PASSAGES.filter((p) => !p.isPremium).slice(0, FREE_LIMITS.readingPassages).map((p) => p.id),
  );

  // BUG FIX: the PASSAGES list contains entries that share the same title /
  // htmlFile (e.g. "The Bug Picture" appears twice), which made the search
  // results show duplicates. Deduplicate by a normalised title + htmlFile key
  // before returning the filtered list.
  const searchedPassages = (() => {
    const query = search.trim().toLowerCase();
    const matched = PASSAGES.filter((p) => {
      if (!query) return true;
      return (
        p.title.toLowerCase().includes(query) ||
        p.description?.toLowerCase().includes(query) ||
        p.id.toLowerCase().includes(query)
      );
    });
    const seen = new Set<string>();
    return matched.filter((p) => {
      const key = `${p.title.trim().toLowerCase()}|${p.htmlFile ?? ""}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  })();

  const visible = searchedPassages.filter((p) => {
    const matchesPassage = filter === "all" || String(p.passageNumber) === filter;
    const matchesStatus = statusFilter === "all" || statusFor(p.id) === statusFilter;
    return matchesPassage && matchesStatus;
  });

  const passageCounts = {
    all: PASSAGES.length,
    "1": PASSAGES.filter((p) => p.passageNumber === 1).length,
    "2": PASSAGES.filter((p) => p.passageNumber === 2).length,
    "3": PASSAGES.filter((p) => p.passageNumber === 3).length,
  } as const;

  const statusCounts = {
    all: searchedPassages.length,
    not_done: searchedPassages.filter((p) => statusFor(p.id) === "not_done").length,
    not_completed: searchedPassages.filter((p) => statusFor(p.id) === "not_completed").length,
    finished: searchedPassages.filter((p) => statusFor(p.id) === "finished").length,
  } as const;

  function handleOpen(p: Passage) {
    if (!user) {
      void navigate({ to: "/auth" });
      return;
    }

    if (statusFor(p.id) === "not_done") {
      void setTestStatus(p.id, "not_completed");
    }

    if (p.htmlFile) {
      const url = new URL(p.htmlFile, window.location.origin);
      url.searchParams.set("testId", p.id);
      window.open(url.toString(), "_blank");
    } else {
      setActive(p);
    }
  }

  return (
    <SiteLayout>
      <section className="container mx-auto px-4 py-12 max-w-6xl relative">
        {/* Minecraft decorations */}
        <div className="absolute top-4 right-4 pointer-events-none select-none hidden lg:flex flex-col items-end gap-3">
          <SteveReading size={64} opacity={0.7} className="mc-bob" />
          <McItem item="book" size={22} opacity={0.15} />
        </div>
        <div className="absolute top-8 right-28 pointer-events-none opacity-[0.06] hidden xl:block">
          <McItem item="crafting-table" size={32} opacity={1} />
        </div>
        <div className="ink-bleed mb-10">
          <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-3">IELTS Reading Practice</h1>
          <p className="text-muted-foreground mb-1">Filter by passage type and open any passage in a clean reader view.</p>
          <p className="font-mono text-[11px] text-muted-foreground/70 tracking-wide italic">
            ⏱ Recommended time: Passage 1 &amp; 2 — 20 min &nbsp;|&nbsp; Passage 3 — 22 min
          </p>
        </div>

        <div className="space-y-3 mb-6">
          {/* Primary filter — passage type (heavier than the status row below) */}
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <Button
                key={f.v}
                variant={filter === f.v ? "default" : "outline"}
                size="sm"
                className="text-[13px] font-semibold rounded-full h-9 px-5"
                onClick={() => setFilter(f.v)}
              >
                {f.label} ({passageCounts[f.v]})
              </Button>
            ))}
          </div>

          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search reading passages..."
              className="h-11 pl-9 font-mono text-sm rounded-xl border-border/60"
            />
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
              All ({statusCounts.all})
            </Button>
            {TEST_PROGRESS_OPTIONS.map((option) => (
              <Button
                key={option.value}
                variant={statusFilter === option.value ? "secondary" : "ghost"}
                size="sm"
                className="text-[11px] rounded-full h-7 px-3"
                onClick={() => setStatusFilter(option.value)}
              >
                {option.label} ({statusCounts[option.value]})
              </Button>
            ))}
          </div>
        </div>

        {visible.length === 0 ? (
          <p className="text-muted-foreground py-12 text-center font-mono text-sm tracking-wide">
            No passages match your filters.
          </p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {visible.map((p) => {
              const locked =
                effectiveIsPremium(
                  "reading",
                  p.id,
                  p.isPremium || !freePassageIds.has(p.id),
                  overrides,
                ) && !isPremium;
              const status = statuses[p.id];
              const progressStatus = statusFor(p.id);
              const isFinished = progressStatus === "finished";
              const progressMeta = getTestProgressMeta(progressStatus);

              return (
                <Card
                  key={p.id}
                  className={cn("p-6 flex flex-col relative overflow-hidden", progressMeta.cardClassName)}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <Badge variant="secondary" className="bg-accent text-foreground">
                        P{p.passageNumber}
                      </Badge>
                      {p.isNew && <Badge>New</Badge>}
                      <TestProgressBadge status={progressStatus} detail={status} />
                    </div>
                    {locked && <Lock className="w-4 h-4 text-muted-foreground shrink-0 mt-1" />}
                  </div>

                  <h3
                    className={cn(
                      "font-serif text-xl font-semibold mb-2 leading-snug",
                      locked && "blur-sm select-none",
                    )}
                  >
                    {p.title}
                  </h3>

                  {p.description && (
                    <p
                      className={cn(
                        "text-sm text-muted-foreground mb-4 flex-1 line-clamp-3",
                        locked && "blur-sm select-none",
                      )}
                    >
                      {p.description}
                    </p>
                  )}

                  {/* Meta row — passage type · recommended time */}
                  <p className="flex items-center gap-1.5 text-xs text-muted-foreground mb-4">
                    <Clock className="w-3.5 h-3.5" />
                    Passage {p.passageNumber} · ~{p.passageNumber === 3 ? 22 : 20} min
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
                        onChange={(next) => setTestStatus(p.id, next)}
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
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1"
                        onClick={() => handleOpen(p)}
                      >
                        <BookOpen className="w-4 h-4 mr-1" /> Review
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 text-muted-foreground"
                        onClick={() => resetTest(p.id)}
                      >
                        <RotateCcw className="w-4 h-4 mr-1" /> Redo
                      </Button>
                    </div>
                  ) : (
                    <Button size="sm" variant="outline" className="w-full" onClick={() => handleOpen(p)}>
                      <BookOpen className="w-4 h-4 mr-1" />
                      {progressStatus === "not_completed" ? "Continue Test" : p.htmlFile ? "Open Full Test" : "Open"}
                    </Button>
                  )}
                </Card>
              );
            })}
          </div>
        )}
      </section>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <div className="flex items-center gap-2 mb-2">
              {active && (
                <Badge variant="secondary" className="bg-accent text-foreground">
                  Passage {active.passageNumber}
                </Badge>
              )}
              {active?.isNew && <Badge>New</Badge>}
            </div>
            <DialogTitle className="font-serif text-2xl">{active?.title}</DialogTitle>
          </DialogHeader>
          {active && (
            <article
              className="prose prose-neutral max-w-none mt-4 text-base leading-relaxed"
              dangerouslySetInnerHTML={{ __html: active.content ?? "" }}
            />
          )}
        </DialogContent>
      </Dialog>
    </SiteLayout>
  );
}
