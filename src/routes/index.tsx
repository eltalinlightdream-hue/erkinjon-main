import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { Button } from "@/components/ui/button";
import { BookOpen, PenLine, Youtube, Crown, ArrowRight, Newspaper } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Abduraimov Erkinjon — Master IELTS with Guided Practice" },
      {
        name: "description",
        content:
          "Free IELTS materials, online practice, video lessons and premium guidance from a Band 8.0 teacher in Uzbekistan.",
      },
    ],
  }),
  component: Index,
});

/* ─── Study-desk illustration — hero side panel ─────────────────
   Original thin-line SVG in the atelier style: an arched window with
   a cypress beyond, an open notebook, a fountain pen and an espresso
   cup on a desk. Strokes use theme variables so it adapts to both
   the ivory and espresso modes. */
function StudyDeskScene() {
  const ink = {
    stroke: "var(--ink-soft)",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    fill: "none",
  };
  const terra = { ...ink, stroke: "var(--terracotta)" };
  const olive = { ...ink, stroke: "var(--olive)" };

  return (
    <svg viewBox="0 0 420 380" className="w-full h-auto" aria-hidden="true">
      {/* Arched window */}
      <path d="M270 40 a55 55 0 0 1 110 0 v120 h-110 z" {...ink} />
      <path d="M325 -2 v162 M270 95 h110" {...ink} />
      {/* Sun through the window */}
      <circle cx="350" cy="62" r="14" {...terra} />
      {/* Cypress beyond the window */}
      <path d="M296 152 C300 120 302 96 296 76 C290 96 292 120 296 152 z" {...olive} />
      {/* Horizon line in window */}
      <path d="M272 132 h106" {...olive} opacity="0.6" />

      {/* Desk line */}
      <path d="M16 312 h388" {...ink} />
      <path d="M48 312 v36 M372 312 v36" {...ink} opacity="0.5" />

      {/* Open notebook */}
      <path d="M60 236 C92 222 130 222 150 234 L150 302 C130 290 92 290 60 304 z" {...ink} />
      <path d="M150 234 C170 222 208 222 240 236 L240 304 C208 290 170 290 150 302 z" {...ink} />
      <path d="M150 234 v68" {...ink} opacity="0.5" />
      {/* Writing lines */}
      <path
        d="M78 248 c18 -6 38 -7 56 -3 M78 262 c18 -6 38 -7 56 -3 M78 276 c14 -5 28 -6 40 -4"
        {...terra}
        opacity="0.8"
      />
      <path d="M166 245 c18 -4 38 -3 58 3 M166 259 c18 -4 38 -3 58 3" {...ink} opacity="0.45" />

      {/* Fountain pen resting on the right page */}
      <path d="M212 286 L262 246 l8 8 L222 296 l-12 2 z" {...terra} />
      <path d="M258 250 l6 6" {...ink} opacity="0.6" />

      {/* Espresso cup */}
      <path d="M306 270 h52 v12 a26 22 0 0 1 -52 0 z" {...ink} />
      <path d="M358 274 h8 a10 10 0 0 1 0 20 h-9" {...ink} />
      <path d="M296 312 h74" {...ink} opacity="0" />
      <path d="M320 258 c0 -7 7 -7 7 -14 M338 258 c0 -7 7 -7 7 -14" {...ink} opacity="0.45" />

      {/* Small stack of books, left */}
      <rect x="20" y="282" width="74" height="13" rx="3" {...olive} />
      <rect x="28" y="268" width="60" height="13" rx="3" {...ink} />
      <rect x="24" y="254" width="66" height="13" rx="3" {...terra} />

      {/* Swallows */}
      <path d="M60 80 C68 71 77 71 83 77 C89 71 98 71 106 80" {...ink} opacity="0.5" />
      <path d="M130 50 C136 43 143 43 148 48 C153 43 160 43 166 50" {...ink} opacity="0.4" />
    </svg>
  );
}

/* Decorative section divider: ── ❦ ── */
function OrnamentDivider() {
  return (
    <div className="ornament-rule max-w-md mx-auto px-4" aria-hidden="true">
      <span className="font-serif text-xl leading-none select-none">❦</span>
    </div>
  );
}

const FEATURES = [
  {
    n: "01",
    title: "Online Practice",
    body: "Real IELTS prompts, timed mini-quizzes and a Part 2 topic randomizer — practise all four skills the way they appear on the actual exam.",
    to: "/practice" as const,
    cta: "Begin a practice session",
    icon: PenLine,
    tag: "All four skills",
  },
  {
    n: "02",
    title: "Free Materials",
    body: "Tips, model answers and downloadable PDFs across Listening, Reading, Writing and Speaking. A growing library, free from the first page.",
    to: "/practice" as const,
    cta: "Browse the library",
    icon: BookOpen,
    tag: "Always free",
  },
  {
    n: "03",
    title: "Video Lessons",
    body: "Full playlists on Writing, Speaking, Reading, Listening and Grammar — recorded with the same patience as a private lesson.",
    to: "/videos" as const,
    cta: "Watch the lessons",
    icon: Youtube,
    tag: "On YouTube",
  },
  {
    n: "04",
    title: "Articles",
    body: "Essays on study habits, common mistakes and practical language learning — short readings to keep your English moving between sessions.",
    to: "/articles" as const,
    cta: "Read the latest",
    icon: Newspaper,
    tag: "Study notes",
  },
  {
    n: "05",
    title: "Premium Membership",
    body: "Model answers, premium PDFs and exclusive video lessons — the full atelier, opened. For students who want every advantage on exam day.",
    to: "/premium" as const,
    cta: "Unlock Premium",
    icon: Crown,
    tag: "Full access",
    premium: true,
  },
];

function Index() {
  return (
    <SiteLayout>
      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        {/* Soft warm washes behind the hero */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full bg-[var(--terracotta)]/[0.07] blur-3xl" />
          <div className="absolute top-1/2 -left-40 w-[420px] h-[420px] rounded-full bg-[var(--olive)]/[0.08] blur-3xl" />
        </div>

        <div className="relative container mx-auto px-4 pt-16 md:pt-24 pb-16 md:pb-24">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left: editorial headline */}
            <div className="lg:col-span-7 max-w-2xl">
              <p
                className="ink-bleed eyebrow text-primary mb-6"
                style={{ animationDelay: "0.05s" }}
              >
                Scuola d'inglese · IELTS preparation
              </p>

              <h1
                className="ink-bleed font-serif text-4xl md:text-6xl text-foreground mb-6"
                style={{ animationDelay: "0.2s" }}
              >
                Master IELTS with <em className="text-primary">guided practice</em>
              </h1>

              <p
                className="ink-bleed text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl mb-9"
                style={{ animationDelay: "0.35s" }}
              >
                Friendly lessons, real exam strategies and structured practice — built for Uzbek
                learners who want a real score jump, taught with the patience of a small studio
                school.
              </p>

              <div
                className="ink-bleed flex flex-col sm:flex-row gap-3"
                style={{ animationDelay: "0.5s" }}
              >
                <Link to="/reading">
                  <Button size="lg" className="px-8 text-sm">
                    Start Practising Free <ArrowRight className="ml-1 w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/premium">
                  <Button size="lg" variant="outline" className="px-8 text-sm">
                    Get Premium Access
                  </Button>
                </Link>
              </div>

              {/* Inline editorial stats with serif numerals */}
              <div
                className="ink-bleed mt-12 flex items-center gap-6 md:gap-10"
                style={{ animationDelay: "0.65s" }}
              >
                {[
                  { value: "8.0", label: "Teacher's IELTS band" },
                  { value: "4", label: "Core skills covered" },
                  { value: "Free", label: "To start, always" },
                ].map((s, i) => (
                  <div key={i} className="flex items-center gap-6 md:gap-10">
                    {i > 0 && <div className="w-px h-10 bg-border" aria-hidden="true" />}
                    <div>
                      <div className="font-serif text-2xl md:text-3xl text-foreground leading-none mb-1.5">
                        {s.value}
                      </div>
                      <div className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                        {s.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: illustration panel with overlapping quote card */}
            <div className="lg:col-span-5 relative ink-bleed" style={{ animationDelay: "0.45s" }}>
              <div className="relative rounded-3xl bg-gradient-to-br from-[var(--terracotta-wash)] via-card to-[var(--olive-wash)] border border-border shadow-soft p-8 md:p-10">
                <StudyDeskScene />

                {/* Band 8.0 seal */}
                <div className="absolute -top-5 -right-4 md:-right-6 w-24 h-24 rounded-full bg-primary text-primary-foreground flex flex-col items-center justify-center shadow-warm rotate-6 select-none">
                  <span className="text-[9px] uppercase tracking-[0.18em] opacity-90">Band</span>
                  <span className="font-serif text-2xl leading-none">8.0</span>
                  <span className="text-[9px] uppercase tracking-[0.18em] opacity-90 mt-0.5">
                    Teacher
                  </span>
                </div>
              </div>

              {/* Overlapping pull-quote card */}
              <figure className="relative md:absolute md:-bottom-8 md:-left-8 mt-4 md:mt-0 max-w-[280px] bg-card border border-border rounded-2xl shadow-soft p-5">
                <blockquote className="font-serif italic text-[15px] text-foreground leading-snug">
                  “A band score is built sentence by sentence — we simply begin.”
                </blockquote>
                <figcaption className="mt-3 text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                  Erkinjon · your teacher
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      <OrnamentDivider />

      {/* ─── FEATURES — numbered editorial rows ───────────────────── */}
      <section className="container mx-auto px-4 py-20 max-w-5xl">
        <div className="text-center max-w-xl mx-auto mb-16">
          <p className="eyebrow text-secondary mb-4">The curriculum</p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            Everything you need to reach <em className="text-primary">Band 7+</em>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            From free strategy guides to premium model answers, every resource is built for the real
            test.
          </p>
        </div>

        <div className="flex flex-col">
          {FEATURES.map((f, i) => (
            <article
              key={f.n}
              className={`group grid md:grid-cols-12 gap-6 md:gap-10 items-center py-10 md:py-12 ${
                i > 0 ? "border-t border-border" : ""
              }`}
            >
              {/* Serif numeral */}
              <div className={`md:col-span-2 ${i % 2 === 1 ? "md:order-3 md:text-right" : ""}`}>
                <span
                  className={`font-serif text-5xl md:text-6xl leading-none transition-colors duration-300 ${
                    f.premium
                      ? "text-[var(--ochre)]/50 group-hover:text-[var(--ochre)]"
                      : "text-primary/30 group-hover:text-primary"
                  }`}
                >
                  {f.n}
                </span>
              </div>

              {/* Text */}
              <div className={`md:col-span-7 ${i % 2 === 1 ? "md:order-2" : ""}`}>
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="font-serif text-xl md:text-2xl text-foreground">{f.title}</h3>
                  <span
                    className={`hidden sm:inline-block text-[10px] font-semibold uppercase tracking-[0.14em] px-2.5 py-1 rounded-full ${
                      f.premium
                        ? "bg-[var(--ochre-wash)] text-[var(--ochre-deep)]"
                        : "bg-[var(--olive-wash)] text-[var(--olive-deep)]"
                    }`}
                  >
                    {f.tag}
                  </span>
                </div>
                <p className="text-sm md:text-[15px] text-muted-foreground leading-relaxed mb-4 max-w-lg">
                  {f.body}
                </p>
                <Link
                  to={f.to}
                  className={`inline-flex items-center gap-2 text-sm font-medium transition-colors ${
                    f.premium
                      ? "text-[var(--ochre)] hover:text-[var(--ochre-deep)]"
                      : "text-primary hover:text-[var(--terracotta-deep)]"
                  }`}
                >
                  {f.cta}
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>

              {/* Icon medallion */}
              <div
                className={`hidden md:flex md:col-span-3 justify-center ${
                  i % 2 === 1 ? "md:order-1" : ""
                }`}
              >
                <div
                  className={`w-24 h-24 rounded-2xl flex items-center justify-center border transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-soft ${
                    f.premium
                      ? "bg-[var(--ochre-wash)] border-[var(--ochre)]/25 text-[var(--ochre)]"
                      : "bg-[var(--terracotta-wash)] border-primary/20 text-primary"
                  }`}
                >
                  <f.icon className="w-9 h-9" strokeWidth={1.5} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ─── PULL QUOTE ────────────────────────────────────────────── */}
      <section className="container mx-auto px-4 pb-20 max-w-3xl text-center">
        <OrnamentDivider />
        <blockquote className="font-serif italic text-2xl md:text-3xl text-foreground leading-snug mt-12 mb-6">
          “Language is learned in small, faithful sittings — not in a panic the week before the
          exam.”
        </blockquote>
        <p className="eyebrow text-muted-foreground">From the teaching notes</p>
      </section>

      {/* ─── CLOSING CTA ───────────────────────────────────────────── */}
      <section className="container mx-auto px-4 pb-24 max-w-5xl">
        <div className="rounded-3xl bg-gradient-to-br from-[var(--terracotta-wash)] via-card to-[var(--olive-wash)] border border-border shadow-soft px-8 py-14 md:px-16 text-center">
          <p className="eyebrow text-primary mb-4">Si comincia</p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            Ready when you are.
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto leading-relaxed mb-8">
            Open a practice passage now — no account needed — or join Premium for the complete study
            programme.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/reading">
              <Button size="lg" className="px-8 text-sm">
                Start Practising Free <ArrowRight className="ml-1 w-4 h-4" />
              </Button>
            </Link>
            <Link to="/premium">
              <Button size="lg" variant="outline" className="px-8 text-sm">
                Get Premium Access
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
