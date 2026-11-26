import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Dumbbell, FolderOpen, Timer } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SiteLayout } from "@/components/site-layout";
import { Reveal } from "@/components/reveal";
import { ProgressStrip } from "@/components/speaking-practice/progress-panel";

export const Route = createFileRoute("/speaking_/practice")({
  head: () => ({
    meta: [
      { title: "IELTS Speaking Practice Tests | Abduraimov Erkinjon" },
      {
        name: "description",
        content:
          "Practise IELTS Speaking out loud: questions are read to you, timers run like the real exam, and you can record yourself on your own device.",
      },
    ],
  }),
  component: SpeakingPractice,
});

type Section = {
  to: "/speaking/practice/mock" | "/speaking/practice/general" | "/speaking/practice/recordings";
  title: string;
  icon: LucideIcon;
  desc: string;
  tile: string;
  accent: string;
  badgeTint: string;
  label: string;
  cta: string;
};

const SECTIONS: Section[] = [
  {
    to: "/speaking/practice/mock",
    title: "Mock Test",
    icon: Timer,
    desc: "A full speaking exam with real timings and no replay.",
    tile: "icon-tile-coral",
    accent: "var(--tint-coral-fg)",
    badgeTint: "badge-tint-new",
    label: "Parts 1–3 · 11–14 min",
    cta: "Start",
  },
  {
    to: "/speaking/practice/general",
    title: "General Training",
    icon: Dumbbell,
    desc: "Practise one part at a time, as many questions as you like. Replay any question.",
    tile: "icon-tile-green",
    accent: "var(--tint-green-fg)",
    badgeTint: "badge-tint-done",
    label: "Part 1 · 2 · 3 · Unlimited",
    cta: "Start",
  },
  {
    to: "/speaking/practice/recordings",
    title: "My Recordings",
    icon: FolderOpen,
    desc: "Listen to your answers again and download them.",
    tile: "icon-tile-blue",
    accent: "var(--tint-blue-fg)",
    badgeTint: "badge-tint-info",
    label: "On this device",
    cta: "Open",
  },
];

function SpeakingPractice() {
  return (
    <SiteLayout>
      <section className="container mx-auto max-w-5xl px-4 py-16">
        <Link
          to="/speaking"
          className="mb-6 inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary"
        >
          <ArrowLeft className="size-4" aria-hidden />
          Speaking
        </Link>

        <div className="ink-bleed mb-12 text-center">
          <p className="eyebrow mb-4 text-primary">IELTS Speaking</p>
          <h1 className="mb-4 font-serif text-3xl text-foreground md:text-4xl">Practice Tests</h1>
          <p className="mx-auto max-w-md text-muted-foreground">
            Questions are read aloud and timed like the real exam. Answer out loud.
          </p>
          <div className="ornament-rule mx-auto mt-8 max-w-xs" aria-hidden="true">
            <span className="select-none font-serif text-lg leading-none">❦</span>
          </div>
        </div>

        <Reveal className="mb-8">
          <ProgressStrip />
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-3">
          {SECTIONS.map((s, i) => (
            <Reveal key={s.to} className="h-full" delay={i * 80}>
              <Link to={s.to} className="block h-full">
                <div className="bento-card group relative flex h-full cursor-pointer flex-col overflow-hidden p-8">
                  <span
                    className={`icon-tile ${s.tile} mb-6 h-14 w-14 transition-transform duration-300 group-hover:-translate-y-1 group-active:-translate-y-1`}
                  >
                    <s.icon className="h-6 w-6" strokeWidth={1.5} />
                  </span>
                  <h2 className="mb-2 font-serif text-xl text-foreground">{s.title}</h2>
                  <p className="mb-5 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {s.desc}
                  </p>
                  <div className="mb-6">
                    <span className={`badge-tint ${s.badgeTint}`}>{s.label}</span>
                  </div>
                  <span
                    className="inline-flex items-center gap-2 text-sm font-medium transition-transform duration-300 group-hover:translate-x-1 group-active:translate-x-1"
                    style={{ color: s.accent }}
                  >
                    {s.cta} <ArrowRight className="h-4 w-4" />
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
