import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { Headphones, BookOpen, PenLine, Mic, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/practice")({
  head: () => ({ meta: [
    { title: "Practice — Abduraimov Erkinjon" },
    { name: "description", content: "Four practice areas: Listening, Reading, Writing and Speaking." },
  ]}),
  component: Practice,
});

const SECTIONS = [
  { to: "/listening", title: "Listening", icon: Headphones, desc: "Practice with full IELTS listening tests", tint: "bg-sage/15 text-sage" },
  { to: "/reading",   title: "Reading",   icon: BookOpen,   desc: "Academic reading passages with questions", tint: "bg-gold/15 text-gold" },
  { to: "/writing",   title: "Writing",   icon: PenLine,    desc: "Task 1 and Task 2 guided practice", tint: "bg-secondary/15 text-secondary" },
  { to: "/speaking",  title: "Speaking",  icon: Mic,        desc: "Model answers and topic practice", tint: "bg-accent text-foreground" },
] as const;

function Practice() {
  return (
    <SiteLayout>
      <section className="container mx-auto px-4 py-16 max-w-5xl">
        <div className="relative text-center mb-16">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-96 h-24 bg-accent/50 rounded-full blur-3xl pointer-events-none" />
          <h1 className="relative text-4xl md:text-5xl font-bold mb-3">Practice</h1>
          <p className="relative text-lg text-muted-foreground">
            Pick a skill and start — every section is built around real IELTS question types.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {SECTIONS.map((s) => (
            <Link key={s.to} to={s.to} className="block">
              <div className="bento-card rounded-3xl p-8 h-full flex flex-col group cursor-pointer">
                <span className={`w-14 h-14 rounded-2xl ${s.tint} flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110`}>
                  <s.icon className="w-6 h-6" />
                </span>
                <h2 className="font-serif text-2xl font-semibold mb-2">{s.title}</h2>
                <p className="text-sm text-muted-foreground mb-8 flex-1 leading-relaxed">{s.desc}</p>
                <span className="font-mono text-[11px] font-semibold text-secondary tracking-widest uppercase inline-flex items-center gap-2 group-hover:translate-x-1 transition-transform duration-200">
                  Start <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
