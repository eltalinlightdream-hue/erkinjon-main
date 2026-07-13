import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useAuth } from "@/hooks/use-auth";
import { WRITING_SAMPLES, WRITING_ESSAYS } from "@/lib/writing-samples-data";
import { SiteLayout } from "@/components/site-layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Youtube, ExternalLink, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { WRITING_TASKS, getAllWritingProgress, type WritingStatus } from "@/lib/writing-data";
import { cn } from "@/lib/utils";
import { SteveMining, McItem } from "@/components/minecraft-decorations";
import { useIsPremium, PremiumCardOverlay } from "@/components/premium-lock";
import {
  isFreeWritingSample,
  isFreeWritingEssay,
  isFreeWritingSimulator,
  effectiveIsPremium,
  writingContentId,
} from "@/lib/premium-content";
import { useContentOverrides } from "@/hooks/use-content-overrides";
import { HTML_TASKS } from "@/lib/writing-simulators-data";

export const Route = createFileRoute("/writing")({
  validateSearch: (search: Record<string, unknown>) => ({
    task: (search.task as string | undefined) ?? undefined,
  }),
  head: () => ({
    meta: [
      { title: "IELTS Writing - Task 1 & Task 2 | Abduraimov Erkinjon" },
      { name: "description", content: "IELTS Writing Task 1 and Task 2 practice." },
    ],
  }),
  component: Writing,
});

const STATUS_META: Record<WritingStatus, { label: string; className: string }> = {
  not_started: {
    label: "Not started",
    className: "bg-[var(--badge-neutral-bg)] text-[var(--badge-neutral-fg)] border-transparent",
  },
  in_progress: {
    label: "In Progress",
    className: "bg-[var(--badge-progress-bg)] text-[var(--badge-progress-fg)] border-transparent",
  },
  completed: {
    label: "Completed",
    className: "bg-[var(--badge-done-bg)] text-[var(--badge-done-fg)] border-transparent",
  },
};


const TASK_TOTALS: Record<1 | 2, number> = {
  1: [...HTML_TASKS, ...WRITING_TASKS].filter((t) => t.task === 1).length,
  2: [...HTML_TASKS, ...WRITING_TASKS].filter((t) => t.task === 2).length,
};

const SAMPLE_TOTALS = {
  "t1-samples": WRITING_SAMPLES.filter((s) => s.task === 1).length,
  "t2-samples": WRITING_ESSAYS.length,
};


const TASK1_FILTERS = [
  "All",
  "Line Graph",
  "Bar Chart",
  "Table",
  "Pie Chart",
  "Map",
  "Diagram",
  "Graph",
  "Process",
] as const;
const TASK2_FILTERS = [
  "All",
  "Agree/Disagree",
  "Advantages/Disadvantages",
  "Discussion",
  "Problem/Solution",
  "Direct Question",
] as const;

type TabType = 1 | 2 | "t1-samples" | "t2-samples";

function Writing() {
  const { task: taskParam } = Route.useSearch();
  const { user } = useAuth();
  const isPremium = useIsPremium();
  const { overrides } = useContentOverrides();
  const navigate = useNavigate();
  const [tab, setTab] = useState<TabType>(() => {
    if (taskParam === "t1-samples") return "t1-samples";
    if (taskParam === "t2-samples") return "t2-samples";
    return taskParam === "2" ? 2 : 1;
  });
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("All");
  const [progress, setProgress] = useState<Record<string, { status: WritingStatus }>>({});

  useEffect(() => {
    if (taskParam === "t1-samples") setTab("t1-samples");
    else if (taskParam === "t2-samples") setTab("t2-samples");
    else if (taskParam === "2") setTab(2);
    else if (taskParam === "1") setTab(1);
  }, [taskParam]);

  useEffect(() => {
    const refresh = () => setProgress(getAllWritingProgress());
    refresh();
    window.addEventListener("writing-progress-changed", refresh);
    window.addEventListener("storage", refresh);
    return () => {
      window.removeEventListener("writing-progress-changed", refresh);
      window.removeEventListener("storage", refresh);
    };
  }, []);

  const handleTabChange = (n: TabType) => {
    setTab(n);
    setSearch("");
    setTypeFilter("All");
  };

  const isPracticeTab = tab === 1 || tab === 2;
  const activeFilters = tab === 1 ? TASK1_FILTERS : TASK2_FILTERS;

  const matchesSearch = (title: string) =>
    !search.trim() || title.toLowerCase().includes(search.trim().toLowerCase());
  const matchesType = (type: string) =>
    typeFilter === "All" || type.toLowerCase().includes(typeFilter.toLowerCase());

  const practiceTask = tab === 1 || tab === 2 ? tab : 1;
  const visibleHtml = HTML_TASKS.filter(
    (t) => t.task === practiceTask && matchesSearch(t.title) && matchesType(t.type),
  );
  const visibleTasks = WRITING_TASKS.filter(
    (t) => t.task === practiceTask && matchesSearch(t.title) && matchesType(t.type),
  );
  const hasResults = visibleHtml.length > 0 || visibleTasks.length > 0;

  const sampleTask = tab === "t1-samples" ? 1 : 2;
  const visibleSamples = WRITING_SAMPLES.filter((s) => s.task === sampleTask);

  return (
    <SiteLayout>
      <section className="container mx-auto px-4 py-12 max-w-6xl relative">
        {/* Minecraft decorations */}
        <div className="absolute top-4 right-4 pointer-events-none select-none hidden lg:flex flex-col items-end gap-3">
          <SteveMining size={64} opacity={0.65} />
          <McItem item="crafting-table" size={26} opacity={0.15} />
        </div>
        <div className="absolute top-10 right-28 pointer-events-none opacity-[0.06] hidden xl:block">
          <McItem item="sword" size={32} opacity={1} />
        </div>
        <h1 className="ink-bleed font-serif text-3xl md:text-4xl text-foreground mb-8">IELTS Writing</h1>

        {/* Video banner */}
        <div className="relative overflow-hidden rounded-[0.875rem] px-8 py-6 mb-8 flex items-center justify-between gap-4 flex-wrap border border-border shadow-card bg-gradient-to-br from-[var(--terracotta-wash)] via-card to-[var(--olive-wash)]">
          <div className="relative">
            <p className="font-serif text-lg mb-0.5">Want to watch Writing lessons?</p>
            <p className="text-sm text-muted-foreground">
              I have dedicated Writing playlists on my Video Lessons page.
            </p>
          </div>
          <Link to="/videos">
            <Button className="relative shrink-0 text-sm">
              <Youtube className="w-4 h-4 mr-2" /> Watch Video Lessons
            </Button>
          </Link>
        </div>

        {/* Tab switcher */}
        <div className="flex flex-wrap gap-1 rounded-xl bg-muted p-1 mb-6 w-fit">
          {([1, 2] as const).map((n) => (
            <button
              key={n}
              onClick={() => handleTabChange(n)}
              className={cn(
                "px-5 py-2 rounded-lg font-mono text-xs tracking-widest uppercase font-semibold transition-all duration-200",
                tab === n
                  ? "bg-background shadow-soft text-foreground"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              Task {n}
              <span className="ml-1.5 font-mono text-[10px] font-normal opacity-55 tracking-normal normal-case">
                ({TASK_TOTALS[n]})
              </span>
            </button>
          ))}
          {(["t1-samples", "t2-samples"] as const).map((key) => (
            <button
              key={key}
              onClick={() => handleTabChange(key)}
              className={cn(
                "px-5 py-2 rounded-lg font-mono text-xs tracking-widest uppercase font-semibold transition-all duration-200",
                tab === key
                  ? "bg-background shadow-soft text-foreground"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {key === "t1-samples" ? "Task 1 Samples" : "Task 2 Samples"}
              <span className="ml-1.5 font-mono text-[10px] font-normal opacity-55 tracking-normal normal-case">
                ({SAMPLE_TOTALS[key]})
              </span>
            </button>
          ))}
        </div>

        {/* Search + type filters — only for practice tabs */}
        {isPracticeTab && (
          <div className="space-y-3 mb-8">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by title..."
                className="pl-9 font-mono text-sm h-9 rounded-xl border-border"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {activeFilters.map((f) => (
                <Button
                  key={f}
                  variant={typeFilter === f ? "default" : "outline"}
                  size="sm"
                  className="font-mono text-[11px] tracking-wide rounded-full h-8 px-4"
                  onClick={() => setTypeFilter(f)}
                >
                  {f}
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Practice tasks grid */}
        {isPracticeTab && (
          <>
            {!hasResults && (
              <p className="text-muted-foreground py-16 text-center font-mono text-sm tracking-wide">
                No results found.
              </p>
            )}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {visibleHtml.map((task) => {
                const locked =
                  effectiveIsPremium(
                    "writing",
                    writingContentId.simulator(task.id),
                    !isFreeWritingSimulator(task.id),
                    overrides,
                  ) && !isPremium;
                const card = (
                  <Card className="overflow-hidden h-full flex flex-col hover:-translate-y-1 active:-translate-y-1 cursor-pointer">
                    <div className="relative aspect-[16/10] bg-[var(--paper-deep)] p-3 flex items-center justify-center">
                      {task.image ? (
                        <img
                          src={task.image}
                          alt={task.title}
                          className="w-full h-full object-cover rounded-lg border border-border/60"
                          loading="lazy"
                        />
                      ) : (
                        <div className="font-serif text-4xl text-muted-foreground/70">
                          Task {task.task}
                        </div>
                      )}
                      <span className="absolute top-3 left-3 text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[var(--badge-neutral-bg)] text-[var(--badge-neutral-fg)] shadow-card">
                        Not started
                      </span>
                      <span className="absolute top-3 right-3 bg-card/90 text-foreground rounded-full p-1.5 shadow-card">
                        <ExternalLink className="w-3 h-3" />
                      </span>
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary" className="bg-accent text-foreground">
                          {task.type}
                        </Badge>
                        {task.isNew && <Badge>New</Badge>}
                      </div>
                      <h3 className="font-serif text-lg font-semibold leading-snug mb-2">
                        {task.title}
                      </h3>
                      <p className="text-sm text-muted-foreground flex-1">{task.description}</p>
                      <p className="text-xs text-muted-foreground mt-3 inline-flex items-center gap-1">
                        <ExternalLink className="w-3 h-3" /> Opens full practice simulator
                      </p>
                    </div>
                  </Card>
                );

                if (locked) {
                  return (
                    <div key={task.id} className="relative rounded-xl overflow-hidden h-full">
                      <div className="pointer-events-none select-none blur-[2px] opacity-60 h-full">
                        {card}
                      </div>
                      <PremiumCardOverlay />
                    </div>
                  );
                }

                return (
                  <button
                    key={task.id}
                    onClick={() => {
                      if (!user) {
                        void navigate({ to: "/auth" });
                        return;
                      }
                      window.open(task.htmlFile, "_blank");
                    }}
                    className="block text-left"
                  >
                    {card}
                  </button>
                );
              })}
              {visibleTasks.map((task) => {
                const status = progress[task.id]?.status ?? "not_started";
                const meta = STATUS_META[status];
                return (
                  <Link
                    key={task.id}
                    to="/writing/$taskId"
                    params={{ taskId: task.id }}
                    className="block"
                  >
                    <Card className="overflow-hidden h-full flex flex-col hover:-translate-y-1 active:-translate-y-1">
                      <div className="relative aspect-[16/10] bg-[var(--paper-deep)] p-3 flex items-center justify-center">
                        {task.image ? (
                          <img
                            src={task.image}
                            alt={task.title}
                            className="w-full h-full object-cover rounded-lg border border-border/60"
                            loading="lazy"
                          />
                        ) : (
                          <div className="font-serif text-4xl text-muted-foreground/70">
                            Task {task.task}
                          </div>
                        )}
                        <span
                          className={cn(
                            "absolute top-3 left-3 text-[11px] font-semibold px-2.5 py-0.5 rounded-full border shadow-card",
                            meta.className,
                          )}
                        >
                          {meta.label}
                        </span>
                      </div>
                      <div className="p-5 flex flex-col flex-1">
                        <Badge
                          variant="secondary"
                          className="self-start mb-2 bg-accent text-foreground"
                        >
                          {task.type}
                        </Badge>
                        <h3 className="font-serif text-lg font-semibold leading-snug mb-2">
                          {task.title}
                        </h3>
                        <p className="text-sm text-muted-foreground flex-1">{task.description}</p>
                      </div>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </>
        )}

        {/* Samples tabs */}
        {tab === "t1-samples" && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {visibleSamples.map((sample) => {
              const locked =
                effectiveIsPremium(
                  "writing",
                  writingContentId.sample(sample.id),
                  !isFreeWritingSample(sample.id),
                  overrides,
                ) && !isPremium;
              const card = (
                <Card className="overflow-hidden h-full flex flex-col hover:-translate-y-1 active:-translate-y-1">
                  <div className="relative aspect-[16/10] bg-[var(--paper-deep)] p-3 flex items-center justify-center">
                    {sample.coverImage ? (
                      <img
                        src={sample.coverImage}
                        alt={`Report ${sample.reportNumber}`}
                        className="w-full h-full object-cover rounded-lg border border-border/60"
                        loading="lazy"
                      />
                    ) : (
                      <div className="font-serif text-4xl text-muted-foreground/70">
                        R{sample.reportNumber}
                      </div>
                    )}
                    <span className="absolute top-3 left-3 text-[11px] font-semibold bg-card/90 text-foreground px-2.5 py-0.5 rounded-full shadow-card">
                      Report {sample.reportNumber}
                    </span>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <Badge
                      variant="secondary"
                      className="self-start mb-2 bg-accent text-foreground"
                    >
                      {sample.chartType}
                    </Badge>
                    <p className="text-sm text-foreground/80 leading-snug flex-1 line-clamp-3 mb-3">
                      {sample.question}
                    </p>
                    <p className="font-mono text-[10px] text-muted-foreground tracking-wider">
                      {sample.wordCount} words
                    </p>
                  </div>
                </Card>
              );

              if (locked) {
                return (
                  <div key={sample.id} className="relative rounded-xl overflow-hidden h-full">
                    <div className="pointer-events-none select-none blur-[2px] opacity-60 h-full">
                      {card}
                    </div>
                    <PremiumCardOverlay />
                  </div>
                );
              }

              return (
                <Link key={sample.id} to="/writing/sample/$id" params={{ id: sample.id }}>
                  {card}
                </Link>
              );
            })}
          </div>
        )}

        {tab === "t2-samples" && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WRITING_ESSAYS.map((essay) => {
              const locked =
                effectiveIsPremium(
                  "writing",
                  writingContentId.essay(essay.id),
                  !isFreeWritingEssay(essay.id),
                  overrides,
                ) && !isPremium;
              const card = (
                <Card className="overflow-hidden h-full flex flex-col hover:-translate-y-1 active:-translate-y-1">
                  <div className="relative aspect-[16/10] bg-[var(--paper-deep)] p-3 flex items-center justify-center">
                    <div className="font-serif text-4xl text-muted-foreground/70">
                      T{essay.testNumber}
                    </div>
                    <span className="absolute top-3 left-3 text-[11px] font-semibold bg-card/90 text-foreground px-2.5 py-0.5 rounded-full shadow-card">
                      Test {essay.testNumber}
                    </span>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <Badge
                      variant="secondary"
                      className="self-start mb-2 bg-accent text-foreground"
                    >
                      Essay
                    </Badge>
                    <p className="text-sm text-foreground/80 leading-snug flex-1 line-clamp-3 mb-3">
                      {essay.question}
                    </p>
                    <p className="font-mono text-[10px] text-muted-foreground tracking-wider">
                      {essay.wordCount} words
                    </p>
                  </div>
                </Card>
              );

              if (locked) {
                return (
                  <div key={essay.id} className="relative rounded-xl overflow-hidden h-full">
                    <div className="pointer-events-none select-none blur-[2px] opacity-60 h-full">
                      {card}
                    </div>
                    <PremiumCardOverlay />
                  </div>
                );
              }

              return (
                <Link key={essay.id} to="/writing/essay/$id" params={{ id: essay.id }}>
                  {card}
                </Link>
              );
            })}
          </div>
        )}
      </section>
    </SiteLayout>
  );
}
