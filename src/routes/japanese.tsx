import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { Languages, MessagesSquare, BookText, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/japanese")({
  head: () => ({
    meta: [
      { title: "Learn Japanese — Free Video Lessons | Abduraimov Erkinjon" },
      {
        name: "description",
        content:
          "A free, self-paced introduction to Japanese — the hiragana and katakana syllabaries, everyday phrases and beginner grammar, taught through embedded video lessons.",
      },
    ],
  }),
  component: JapaneseHub,
});

const SECTIONS = [
  {
    n: "01",
    title: "Alphabet",
    tag: "Start here",
    body: "Master the two Japanese syllabaries — hiragana and katakana — the foundation that everything else is built on.",
    cta: "Learn the kana",
    icon: Languages,
    to: "/japanese/alphabet" as const,
  },
  {
    n: "02",
    title: "Topics & Phrases",
    tag: "Speaking",
    body: "Everyday speaking topics — greetings, numbers, family, food, shopping and travel — the language you'll actually use first.",
    cta: "Start speaking",
    icon: MessagesSquare,
    to: "/japanese/topics" as const,
  },
  {
    n: "03",
    title: "Grammar",
    tag: "Step by step",
    body: "A beginner grammar course in order — sentence structure, particles, verbs and tenses — so nothing ever feels out of sequence.",
    cta: "Learn the grammar",
    icon: BookText,
    to: "/japanese/grammar" as const,
  },
];

function JapaneseHub() {
  return (
    <SiteLayout>
      {/* ─── INTRO ────────────────────────────────────────────────── */}
      <section className="container mx-auto px-4 pt-16 md:pt-20 pb-4 max-w-5xl">
        <p className="eyebrow text-primary mb-6">日本語 · Japanese language learning</p>
        <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-6 max-w-3xl">
          Begin Japanese, <em className="text-primary">one character at a time</em>
        </h1>
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
          A free, self-paced introduction to Japanese. Start with the two syllabaries, then move on
          to everyday phrases and the first rules of grammar — every lesson is a short video you can
          watch right here on the page.
        </p>
      </section>

      {/* ─── TWO NUMBERED CARDS ───────────────────────────────────── */}
      <section className="container mx-auto px-4 py-10 md:py-14 max-w-5xl">
        <div className="flex flex-col">
          {SECTIONS.map((s, i) => (
            <Link
              key={s.n}
              to={s.to}
              className={`group grid md:grid-cols-12 gap-6 md:gap-10 items-center py-10 md:py-12 ${
                i > 0 ? "border-t border-border" : ""
              }`}
            >
              {/* Serif numeral */}
              <div className={`md:col-span-2 ${i % 2 === 1 ? "md:order-3 md:text-right" : ""}`}>
                <span className="font-serif text-5xl md:text-6xl leading-none text-primary/30 transition-colors duration-300 group-hover:text-primary">
                  {s.n}
                </span>
              </div>

              {/* Text */}
              <div className={`md:col-span-7 ${i % 2 === 1 ? "md:order-2" : ""}`}>
                <div className="flex items-center gap-3 mb-3">
                  <h2 className="font-serif text-xl md:text-2xl text-foreground">{s.title}</h2>
                  <span className="hidden sm:inline-block text-[10px] font-semibold uppercase tracking-[0.14em] px-2.5 py-1 rounded-full bg-[var(--olive-wash)] text-[var(--olive-deep)]">
                    {s.tag}
                  </span>
                </div>
                <p className="text-sm md:text-[15px] text-muted-foreground leading-relaxed mb-4 max-w-lg">
                  {s.body}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors group-hover:text-[var(--terracotta-deep)]">
                  {s.cta}
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>

              {/* Icon medallion */}
              <div
                className={`hidden md:flex md:col-span-3 justify-center ${
                  i % 2 === 1 ? "md:order-1" : ""
                }`}
              >
                <div className="w-24 h-24 rounded-2xl flex items-center justify-center border bg-[var(--terracotta-wash)] border-primary/20 text-primary transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-soft">
                  <s.icon className="w-9 h-9" strokeWidth={1.5} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ─── CLOSING QUOTE ────────────────────────────────────────── */}
      <section className="container mx-auto px-4 pb-24 max-w-3xl text-center">
        <div className="ornament-rule max-w-md mx-auto px-4" aria-hidden="true">
          <span className="font-serif text-xl leading-none select-none">❦</span>
        </div>
        <blockquote className="font-serif italic text-2xl md:text-3xl text-foreground leading-snug mt-12 mb-6">
          「千里の道も一歩から」
          <br />
          Even a journey of a thousand miles begins with a single step.
        </blockquote>
        <p className="eyebrow text-muted-foreground">A Japanese proverb</p>
      </section>
    </SiteLayout>
  );
}
