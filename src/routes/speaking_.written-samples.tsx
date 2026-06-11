import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Fragment, useEffect, useRef, useState } from "react";
import { SiteLayout } from "@/components/site-layout";
import { ArrowLeft, ArrowRight, BookOpen, MessageSquareQuote, X as XIcon } from "lucide-react";
import {
  PART_LABELS,
  SPEAKING_TOPICS,
  findSpeakingTopic,
  topicsByPart,
  type SpeakingTopic,
} from "@/lib/speaking-samples-data";
import { cn } from "@/lib/utils";

type SamplesSearch = {
  topic?: string;
  part?: 1 | 2 | 3;
};

export const Route = createFileRoute("/speaking_/written-samples")({
  validateSearch: (search: Record<string, unknown>): SamplesSearch => ({
    topic: typeof search.topic === "string" ? search.topic : undefined,
    part: ["1", "2", "3"].includes(String(search.part))
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

/* ── Tap-a-word definition popup ─────────────────────────────── */

interface DefPopup {
  x: number;
  y: number;
  phrase: string;
  definition: string;
}

function useDefinitionPopup() {
  const [popup, setPopup] = useState<DefPopup | null>(null);
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!popup) return;
    const close = (e: MouseEvent | TouchEvent) => {
      if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
        setPopup(null);
      }
    };
    const closeOnScroll = () => setPopup(null);
    document.addEventListener("mousedown", close);
    document.addEventListener("touchstart", close);
    window.addEventListener("scroll", closeOnScroll, true);
    return () => {
      document.removeEventListener("mousedown", close);
      document.removeEventListener("touchstart", close);
      window.removeEventListener("scroll", closeOnScroll, true);
    };
  }, [popup]);

  const open = (e: React.MouseEvent, phrase: string, definition: string) => {
    e.stopPropagation();
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    // Clamp horizontally so the card never leaves the viewport
    const cardW = Math.min(300, window.innerWidth - 24);
    const x = Math.min(
      Math.max(rect.left + rect.width / 2, cardW / 2 + 12),
      window.innerWidth - cardW / 2 - 12,
    );
    setPopup({ x, y: rect.top - 10, phrase, definition });
  };

  const node = popup ? (
    <div
      ref={popupRef}
      className="fixed z-[9999] w-[min(300px,calc(100vw-24px))] bg-popover border border-primary/40 rounded-xl shadow-warm p-3.5"
      style={{ left: popup.x, top: popup.y, transform: "translate(-50%, -100%)" }}
    >
      <div
        className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0"
        style={{
          borderLeft: "7px solid transparent",
          borderRight: "7px solid transparent",
          borderTop: "7px solid var(--terracotta)",
        }}
      />
      <div className="flex items-start justify-between gap-2 mb-1.5">
        <span className="font-serif text-sm italic text-primary leading-snug">
          “{popup.phrase}”
        </span>
        <button
          onClick={() => setPopup(null)}
          className="shrink-0 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Close definition"
        >
          <XIcon className="w-3.5 h-3.5" />
        </button>
      </div>
      <p className="text-[13px] leading-relaxed text-foreground/90">{popup.definition}</p>
    </div>
  ) : null;

  return { open, node };
}

/* ── Renders [[phrase|definition]] markup as tappable highlights ── */

function HighlightedText({
  text,
  onWordClick,
}: {
  text: string;
  onWordClick: (e: React.MouseEvent, phrase: string, definition: string) => void;
}) {
  const paragraphs = text.split("\n\n");
  return (
    <>
      {paragraphs.map((para, pi) => {
        const parts = para.split(/(\[\[.+?\]\])/g);
        return (
          <p
            key={pi}
            className="my-3 leading-[1.9] text-[15px] text-foreground/90 first:mt-0 last:mb-0"
          >
            {parts.map((part, i) => {
              const m = part.match(/^\[\[(.+?)\|(.+?)\]\]$/);
              if (!m) return <Fragment key={i}>{part}</Fragment>;
              const [, phrase, definition] = m;
              return (
                <button
                  key={i}
                  type="button"
                  onClick={(e) => onWordClick(e, phrase, definition)}
                  className="inline bg-primary/10 text-primary border-b border-dotted border-primary px-0.5 rounded-sm cursor-pointer hover:bg-primary/20 transition-colors font-medium text-left"
                  title="Tap for definition"
                >
                  {phrase}
                </button>
              );
            })}
          </p>
        );
      })}
    </>
  );
}

/* ── Topic card (index view) ─────────────────────────────────── */

function TopicCard({ topic }: { topic: SpeakingTopic }) {
  const count = topic.questions.length;
  return (
    <Link to="/speaking/written-samples" search={{ topic: topic.id }}>
      <div className="bento-card p-6 h-full flex flex-col cursor-pointer group">
        <div className="flex items-start justify-between gap-3 mb-3">
          <span className="text-3xl leading-none">{topic.emoji}</span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-primary bg-primary/10 px-2.5 py-1 rounded-full whitespace-nowrap">
            {count} {count === 1 ? "question" : "questions"}
          </span>
        </div>
        <h3 className="font-serif text-lg leading-snug mb-2 text-foreground group-hover:text-primary transition-colors">
          {topic.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed flex-1">{topic.description}</p>
        <span className="mt-4 text-sm font-medium text-primary inline-flex items-center gap-1.5">
          Open{" "}
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </span>
      </div>
    </Link>
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
                <span className="text-primary mt-0.5">▸</span> {point}
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

            {/* Answers */}
            <div className="space-y-5 md:pl-11">
              {question.answers.map((answer) => (
                <div
                  key={answer.label}
                  className="bg-card border border-border rounded-2xl shadow-card p-5 border-l-4 border-l-primary"
                >
                  <span className="inline-block text-[10px] font-semibold tracking-[0.12em] uppercase text-primary bg-primary/10 rounded-full px-2.5 py-0.5 mb-3">
                    {answer.label}
                  </span>
                  <HighlightedText text={answer.text} onWordClick={open} />
                </div>
              ))}
            </div>
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

/* ── Index view: parts → topic cards ─────────────────────────── */

function IndexView({ part }: { part?: 1 | 2 | 3 }) {
  const navigate = useNavigate();
  const parts = part ? [part] : ([1, 2, 3] as const);
  const total = SPEAKING_TOPICS.reduce((n, t) => n + t.questions.length, 0);

  return (
    <section className="container mx-auto px-4 py-12 max-w-5xl">
      <div className="text-center mb-12">
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
        <button
          onClick={() => navigate({ to: "/speaking/written-samples", search: {} })}
          className={cn(
            "font-mono text-[11px] tracking-wider px-4 py-2 border-2 transition-colors",
            !part
              ? "bg-primary text-primary-foreground border-primary shadow-card"
              : "border-border text-muted-foreground hover:text-foreground hover:border-primary/50",
          )}
        >
          All Parts
        </button>
        {([1, 2, 3] as const).map((p) => (
          <button
            key={p}
            onClick={() => navigate({ to: "/speaking/written-samples", search: { part: p } })}
            className={cn(
              "font-mono text-[11px] tracking-wider px-4 py-2 border-2 transition-colors",
              part === p
                ? "bg-primary text-primary-foreground border-primary shadow-card"
                : "border-border text-muted-foreground hover:text-foreground hover:border-primary/50",
            )}
          >
            {PART_LABELS[p].name}
          </button>
        ))}
      </div>

      <div className="space-y-14">
        {parts.map((p) => (
          <div key={p}>
            <PartHeader part={p} />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {topicsByPart(p).map((t) => (
                <TopicCard key={t.id} topic={t} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function WrittenSamples() {
  const { topic: topicId, part } = Route.useSearch();
  const topic = topicId ? findSpeakingTopic(topicId) : undefined;

  // Scroll to top when switching between index and topic views
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [topicId]);

  return <SiteLayout>{topic ? <TopicView topic={topic} /> : <IndexView part={part} />}</SiteLayout>;
}
