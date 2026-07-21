import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { SiteLayout } from "@/components/site-layout";
import { Reveal } from "@/components/reveal";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  ChevronRight,
  Lightbulb,
  MessageSquareQuote,
} from "lucide-react";
import { HighlightedText, useDefinitionPopup } from "@/components/highlighted-text";
import {
  PART_LABELS,
  SPEAKING_PHRASES,
  SPEAKING_TOPICS,
  findSpeakingTopic,
  topicsByPart,
  type SpeakingTopic,
} from "@/lib/speaking-samples-data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { useIsPremium, PremiumCardOverlay, PremiumRequired } from "@/components/premium-lock";
import { isFreeSpeakingTopic, effectiveIsPremium } from "@/lib/premium-content";
import { useContentOverrides } from "@/hooks/use-content-overrides";

type SamplesSearch = {
  topic?: string;
  part?: 1 | 2 | 3 | "phrases";
};

export const Route = createFileRoute("/speaking_/written-samples")({
  validateSearch: (search: Record<string, unknown>): SamplesSearch => ({
    topic: typeof search.topic === "string" ? search.topic : undefined,
    part:
      search.part === "phrases"
        ? "phrases"
        : ["1", "2", "3"].includes(String(search.part))
          ? (Number(search.part) as 1 | 2 | 3)
          : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Speaking Written Samples | Abduraimov Erkinjon" },
      {
        name: "description",
        content:
          "Model IELTS Speaking answers for Part 1, Part 2 and Part 3, with key language explained.",
      },
    ],
  }),
  component: WrittenSamples,
});

/* ── Topic card (index view) ─────────────────────────────────── */

function TopicCard({ topic }: { topic: SpeakingTopic }) {
  const isPremium = useIsPremium();
  const { overrides } = useContentOverrides();
  const locked =
    effectiveIsPremium("speaking", topic.id, !isFreeSpeakingTopic(topic.id), overrides) &&
    !isPremium;
  const count = topic.questions.length;
  const inner = (
    <div className="bento-card p-6 h-full flex flex-col cursor-pointer">
      <div className="flex items-start justify-between gap-3 mb-3">
        <span className="text-3xl leading-none">{topic.emoji}</span>
        <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-primary bg-primary/10 px-2.5 py-1 rounded-full whitespace-nowrap">
          {count} {count === 1 ? "question" : "questions"}
        </span>
      </div>
      <h3 className="font-serif text-lg leading-snug mb-2 text-foreground group-hover:text-primary group-active:text-primary transition-colors">
        {topic.title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed flex-1">{topic.description}</p>
      <span className="mt-4 text-sm font-medium text-primary inline-flex items-center gap-1.5">
        Open{" "}
        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-active:translate-x-0.5 transition-transform" />
      </span>
    </div>
  );

  if (locked) {
    return (
      <Reveal className="h-full">
        <div className="relative rounded-2xl overflow-hidden h-full">
          <div className="pointer-events-none select-none blur-[2px] opacity-60 h-full">
            {inner}
          </div>
          <PremiumCardOverlay label="Premium topic" />
        </div>
      </Reveal>
    );
  }

  return (
    <Reveal className="h-full">
      <Link
        to="/speaking/written-samples"
        search={{ topic: topic.id }}
        className="group block h-full"
      >
        {inner}
      </Link>
    </Reveal>
  );
}

/* ── Part section header ─────────────────────────────────────── */

function PartHeader({ part }: { part: 1 | 2 | 3 }) {
  const { name, sub } = PART_LABELS[part];
  return (
    <div className="flex items-center gap-4 mb-6">
      <span className="font-serif text-sm bg-primary text-primary-foreground px-3.5 py-1.5 rounded-full shadow-card whitespace-nowrap">
        {name}
      </span>
      <div>
        <p className="eyebrow text-primary">{sub}</p>
      </div>
      <div className="flex-1 h-px bg-gradient-to-r from-primary/40 to-transparent" />
    </div>
  );
}

/* ── Topic detail view ───────────────────────────────────────── */

function TopicView({ topic }: { topic: SpeakingTopic }) {
  const { open, node } = useDefinitionPopup();
  const { name, sub } = PART_LABELS[topic.part];

  return (
    <section className="container mx-auto px-4 py-10 max-w-3xl">
      {node}

      <Link
        to="/speaking/written-samples"
        search={{ part: topic.part }}
        className="text-[11px] font-semibold tracking-[0.16em] text-muted-foreground hover:text-primary inline-flex items-center gap-1.5 mb-8 uppercase transition-colors"
      >
        <ArrowLeft className="w-3.5 h-3.5" /> All topics
      </Link>

      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="text-[10px] font-semibold uppercase tracking-[0.12em] bg-primary text-primary-foreground px-2.5 py-1 rounded-full">
          {name} · {sub}
        </span>
        <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-primary bg-primary/10 px-2.5 py-1 rounded-full">
          {topic.questions.length} {topic.questions.length === 1 ? "question" : "questions"}
        </span>
      </div>

      <h1 className="font-serif text-xl md:text-2xl leading-relaxed mb-3 text-foreground">
        {topic.emoji} {topic.title}
      </h1>
      <p className="text-muted-foreground mb-4">{topic.description}</p>

      <p className="mb-10 text-xs text-primary inline-flex items-center gap-1.5 bg-primary/5 border border-primary/20 rounded-full px-4 py-2">
        💡 Tap any{" "}
        <span className="bg-primary/15 border-b border-dotted border-primary px-1 rounded-sm">
          highlighted phrase
        </span>{" "}
        to see what it means.
      </p>

      {/* Part 2 cue card */}
      {topic.cueCard && (
        <div className="mb-10 bg-card border border-primary/25 rounded-2xl shadow-card p-6">
          <p className="eyebrow text-primary mb-3 inline-flex items-center gap-2">
            <MessageSquareQuote className="w-3.5 h-3.5" /> Cue Card — you should say:
          </p>
          <ul className="space-y-1.5">
            {topic.cueCard.map((point) => (
              <li
                key={point}
                className="text-sm text-foreground/90 font-mono flex items-start gap-2"
              >
                <ChevronRight
                  className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0"
                  aria-hidden="true"
                />{" "}
                {point}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="space-y-12">
        {topic.questions.map((question, qi) => (
          <div key={question.q}>
            {/* Question */}
            <div className="flex items-start gap-3 mb-5">
              <span className="shrink-0 w-8 h-8 bg-primary text-primary-foreground font-serif text-sm flex items-center justify-center rounded-full shadow-card">
                {qi + 1}
              </span>
              <h2 className="font-serif text-[0.85rem] leading-relaxed text-foreground pt-1">
                {question.q}
              </h2>
            </div>

            {/* Answers — collapsible accordion, first version open */}
            <Accordion
              type="multiple"
              defaultValue={question.answers.length > 0 ? [question.answers[0].label] : []}
              className="space-y-3 md:pl-11"
            >
              {question.answers.map((answer) => (
                <AccordionItem
                  key={answer.label}
                  value={answer.label}
                  className="bg-card border border-border rounded-2xl shadow-card border-l-4 border-l-primary border-b overflow-hidden"
                >
                  <AccordionTrigger className="px-5 py-4 hover:no-underline hover:bg-primary/5 transition-colors">
                    <span className="text-[10px] font-semibold tracking-[0.12em] uppercase text-primary bg-primary/10 rounded-full px-2.5 py-0.5">
                      {answer.label}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-5 pb-5">
                    <HighlightedText text={answer.text} onWordClick={open} />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}
      </div>

      <div className="mt-14 pt-8 border-t-2 border-border flex justify-between items-center flex-wrap gap-3">
        <Link
          to="/speaking/written-samples"
          search={{ part: topic.part }}
          className="text-sm font-medium text-muted-foreground hover:text-primary inline-flex items-center gap-1.5 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to topics
        </Link>
        <Link
          to="/speaking"
          className="text-sm font-medium text-primary hover:text-[var(--terracotta-deep)] inline-flex items-center gap-1.5 transition-colors"
        >
          <BookOpen className="w-3.5 h-3.5" /> Speaking home
        </Link>
      </div>
    </section>
  );
}

/* ── Useful phrases section ──────────────────────────────────── */

function PhrasesView() {
  const { open, node } = useDefinitionPopup();

  if (SPEAKING_PHRASES.length === 0) {
    return (
      <div className="max-w-xl mx-auto text-center border-2 border-dashed border-primary/30 rounded-2xl px-6 py-14 bg-primary/5">
        {node}
        <Lightbulb className="w-8 h-8 text-primary mx-auto mb-4" />
        <h2 className="font-serif text-lg text-foreground mb-2">Useful Phrases — coming soon</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          This section will collect useful phrases, tips and language chunks for the speaking test.
          Check back soon — content is on its way.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      {node}
      {SPEAKING_PHRASES.map((group) => (
        <div key={group.id}>
          <div className="flex items-center gap-4 mb-6">
            <span className="font-serif text-sm bg-primary text-primary-foreground px-3.5 py-1.5 rounded-full shadow-card whitespace-nowrap">
              {group.emoji} {group.title}
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-primary/40 to-transparent" />
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mb-5">{group.description}</p>
          <div className="space-y-4">
            {group.items.map((item) => (
              <div
                key={item.heading}
                className="bg-card border border-border rounded-2xl shadow-card p-5 border-l-4 border-l-primary"
              >
                <h3 className="font-serif text-base text-foreground mb-2">{item.heading}</h3>
                <HighlightedText text={item.text} onWordClick={open} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ── Index view: parts → topic cards ─────────────────────────── */

function IndexView({ part }: { part?: 1 | 2 | 3 | "phrases" }) {
  const navigate = useNavigate();
  // No "All Parts" view — default to Part 1 when nothing is selected
  const active = part ?? 1;
  const total = SPEAKING_TOPICS.reduce((n, t) => n + t.questions.length, 0);

  return (
    <section className="container mx-auto px-4 py-12 max-w-5xl">
      <div className="ink-bleed text-center mb-12">
        <p className="eyebrow text-primary mb-4">🎤 IELTS Speaking</p>
        <h1 className="font-serif text-2xl md:text-3xl leading-relaxed mb-4 text-foreground">
          Written Samples
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Real model answers for all three parts of the speaking test — {total} questions in total.
          Pick a topic, read the answers, and tap the highlighted phrases to learn the key language.
        </p>
      </div>

      {/* Part filter tabs */}
      <div className="flex justify-center gap-2 mb-12 flex-wrap">
        {([1, 2, 3] as const).map((p) => (
          <button
            key={p}
            onClick={() => navigate({ to: "/speaking/written-samples", search: { part: p } })}
            className={cn(
              "font-mono text-[11px] tracking-wider px-4 py-2 border-2 transition-colors inline-flex items-center gap-2",
              active === p
                ? "bg-primary text-primary-foreground border-primary shadow-card"
                : "border-border text-muted-foreground hover:text-foreground hover:border-primary/50",
            )}
          >
            {PART_LABELS[p].name}
            <span
              className={cn(
                "text-[10px] font-semibold rounded-full px-1.5 py-0.5 leading-none",
                active === p
                  ? "bg-primary-foreground/20 text-primary-foreground"
                  : "bg-primary/10 text-primary",
              )}
            >
              {topicsByPart(p).length}
            </span>
          </button>
        ))}
        <button
          onClick={() => navigate({ to: "/speaking/written-samples", search: { part: "phrases" } })}
          className={cn(
            "font-mono text-[11px] tracking-wider px-4 py-2 border-2 transition-colors inline-flex items-center gap-2",
            active === "phrases"
              ? "bg-primary text-primary-foreground border-primary shadow-card"
              : "border-border text-muted-foreground hover:text-foreground hover:border-primary/50",
          )}
        >
          <Lightbulb className="w-3.5 h-3.5" />
          Useful Phrases
        </button>
      </div>

      {active === "phrases" ? (
        <PhrasesView />
      ) : (
        <div>
          <PartHeader part={active} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {topicsByPart(active).map((t) => (
              <TopicCard key={t.id} topic={t} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

function WrittenSamples() {
  const { topic: topicId, part } = Route.useSearch();
  const topic = topicId ? findSpeakingTopic(topicId) : undefined;
  const isPremium = useIsPremium();
  const { overrides } = useContentOverrides();

  // Scroll to top when switching between index and topic views
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [topicId]);

  const topicLocked =
    !!topic &&
    effectiveIsPremium("speaking", topic.id, !isFreeSpeakingTopic(topic.id), overrides) &&
    !isPremium;

  return (
    <SiteLayout>
      {topic ? (
        topicLocked ? (
          <PremiumRequired title="This speaking topic is Premium" />
        ) : (
          <TopicView topic={topic} />
        )
      ) : (
        <IndexView part={part} />
      )}
    </SiteLayout>
  );
}
