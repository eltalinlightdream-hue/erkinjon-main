import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { Reveal } from "@/components/reveal";
import { Headphones, BookOpen, PenLine, Mic, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/practice")({
  head: () => ({
    meta: [
      { title: "Practice — Abduraimov Erkinjon" },
      {
        name: "description",
        content: "Four practice areas: Listening, Reading, Writing and Speaking.",
      },
    ],
  }),
  component: Practice,
});

const SECTIONS = [
  {
    to: "/listening",
    title: "Listening",
    icon: Headphones,
    desc: "Practice with full IELTS listening tests",
    tile: "icon-tile-coral",
    accent: "var(--tint-coral-fg)",
    badgeTint: "badge-tint-new",
    label: "Section 1–4",
  },
  {
    to: "/reading",
    title: "Reading",
    icon: BookOpen,
    desc: "Academic reading passages with questions",
    tile: "icon-tile-green",
    accent: "var(--tint-green-fg)",
    badgeTint: "badge-tint-done",
    label: "Passages 1–3",
  },
  {
    to: "/writing",
    title: "Writing",
    icon: PenLine,
    desc: "Task 1 and Task 2 guided practice",
    tile: "icon-tile-ochre",
    accent: "var(--tint-ochre-fg)",
    badgeTint: "badge-tint-progress",
    label: "Task 1 & 2",
  },
  {
    to: "/speaking",
    title: "Speaking",
    icon: Mic,
    desc: "Model answers and topic practice",
    tile: "icon-tile-blue",
    accent: "var(--tint-blue-fg)",
    badgeTint: "badge-tint-info",
    label: "Parts 1–3",
  },
] as const;

function Practice() {
  return (
    <SiteLayout>
      <section className="container mx-auto px-4 py-16 max-w-5xl">
        <div className="ink-bleed text-center mb-14">
          <p className="eyebrow text-primary mb-4">The practice rooms</p>
          <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Practice</h1>
          <p className="text-muted-foreground max-w-md mx-auto">
            Pick a skill and start — every section is built around real IELTS question types.
          </p>
          <div className="ornament-rule max-w-xs mx-auto mt-8" aria-hidden="true">
            <span className="font-serif text-lg leading-none select-none">❦</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {SECTIONS.map((s, i) => (
            <Reveal key={s.to} className="h-full" delay={(i % 2) * 80}>
              <Link to={s.to} className="block h-full">
                <div className="bento-card p-8 h-full flex flex-col group cursor-pointer relative overflow-hidden">
                  {/* Icon in colored square */}
                  <span
                    className={`icon-tile ${s.tile} w-14 h-14 mb-6 transition-transform duration-300 group-hover:-translate-y-1 group-active:-translate-y-1`}
                  >
                    <s.icon className="w-6 h-6" strokeWidth={1.5} />
                  </span>

                  <h2 className="font-serif text-xl text-foreground mb-2">{s.title}</h2>
                  <p className="text-sm text-muted-foreground mb-5 flex-1 leading-relaxed">
                    {s.desc}
                  </p>

                  {/* Label badge */}
                  <div className="mb-6">
                    <span className={`badge-tint ${s.badgeTint}`}>{s.label}</span>
                  </div>

                  <span
                    className="text-sm font-medium inline-flex items-center gap-2 transition-transform duration-300 group-hover:translate-x-1 group-active:translate-x-1"
                    style={{ color: s.accent }}
                  >
                    Start <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
