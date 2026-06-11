import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
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
    numeral: "I",
    title: "Listening",
    icon: Headphones,
    desc: "Practice with full IELTS listening tests",
    color: "var(--terracotta)",
    label: "Section 1–4",
  },
  {
    to: "/reading",
    numeral: "II",
    title: "Reading",
    icon: BookOpen,
    desc: "Academic reading passages with questions",
    color: "var(--olive)",
    label: "Passages 1–3",
  },
  {
    to: "/writing",
    numeral: "III",
    title: "Writing",
    icon: PenLine,
    desc: "Task 1 and Task 2 guided practice",
    color: "var(--ochre)",
    label: "Task 1 & 2",
  },
  {
    to: "/speaking",
    numeral: "IV",
    title: "Speaking",
    icon: Mic,
    desc: "Model answers and topic practice",
    color: "var(--mc-sky)",
    label: "Parts 1–3",
  },
] as const;

function Practice() {
  return (
    <SiteLayout>
      <section className="container mx-auto px-4 py-16 max-w-5xl">
        <div className="text-center mb-14">
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
          {SECTIONS.map((s) => (
            <Link key={s.to} to={s.to} className="block">
              <div className="bento-card p-8 h-full flex flex-col group cursor-pointer relative overflow-hidden">
                {/* Serif numeral watermark */}
                <span
                  className="absolute top-5 right-7 font-serif text-4xl leading-none opacity-20 group-hover:opacity-50 transition-opacity duration-300"
                  style={{ color: s.color }}
                  aria-hidden="true"
                >
                  {s.numeral}
                </span>

                {/* Icon medallion */}
                <span
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border transition-transform duration-300 group-hover:-translate-y-1"
                  style={{
                    background: `color-mix(in srgb, ${s.color} 10%, transparent)`,
                    borderColor: `color-mix(in srgb, ${s.color} 30%, transparent)`,
                    color: s.color,
                  }}
                >
                  <s.icon className="w-6 h-6" strokeWidth={1.5} />
                </span>

                <h2 className="font-serif text-xl text-foreground mb-2">{s.title}</h2>
                <p className="text-sm text-muted-foreground mb-5 flex-1 leading-relaxed">
                  {s.desc}
                </p>

                {/* Label badge */}
                <div className="mb-6">
                  <span
                    className="text-[10px] font-semibold uppercase tracking-[0.14em] px-2.5 py-1 rounded-full"
                    style={{
                      color: `color-mix(in srgb, ${s.color} 80%, var(--foreground))`,
                      background: `color-mix(in srgb, ${s.color} 12%, transparent)`,
                    }}
                  >
                    {s.label}
                  </span>
                </div>

                <span
                  className="text-sm font-medium inline-flex items-center gap-2 transition-transform duration-300 group-hover:translate-x-1"
                  style={{ color: s.color }}
                >
                  Start <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
