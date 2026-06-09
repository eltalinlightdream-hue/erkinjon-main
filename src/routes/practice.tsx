import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { Headphones, BookOpen, PenLine, Mic, ArrowRight } from "lucide-react";
import { SteveReading, McItem, Pig } from "@/components/minecraft-decorations";

export const Route = createFileRoute("/practice")({
  head: () => ({ meta: [
    { title: "Practice — Abduraimov Erkinjon" },
    { name: "description", content: "Four practice areas: Listening, Reading, Writing and Speaking." },
  ]}),
  component: Practice,
});

const SECTIONS = [
  {
    to: "/listening",
    title: "Listening",
    icon: Headphones,
    desc: "Practice with full IELTS listening tests",
    color: "#2DD4BF",
    borderColor: "#0D9488",
    bgColor: "#0D948815",
    label: "Section 1–4",
    item: "torch" as const,
  },
  {
    to: "/reading",
    title: "Reading",
    icon: BookOpen,
    desc: "Academic reading passages with questions",
    color: "#6AAFE6",
    borderColor: "#2A5CA0",
    bgColor: "#6AAFE615",
    label: "Passages 1–3",
    item: "book" as const,
  },
  {
    to: "/writing",
    title: "Writing",
    icon: PenLine,
    desc: "Task 1 and Task 2 guided practice",
    color: "#FFD700",
    borderColor: "#C09A00",
    bgColor: "#FFD70015",
    label: "Task 1 & 2",
    item: "crafting-table" as const,
  },
  {
    to: "/speaking",
    title: "Speaking",
    icon: Mic,
    desc: "Model answers and topic practice",
    color: "#C0392B",
    borderColor: "#8A2010",
    bgColor: "#C0392B15",
    label: "Parts 1–3",
    item: "compass" as const,
  },
] as const;

function Practice() {
  return (
    <SiteLayout>
      <section className="container mx-auto px-4 py-16 max-w-5xl relative">

        {/* Pig mascot — top-left corner */}
        <div className="absolute -top-2 left-0 pointer-events-none select-none z-10 hidden md:block">
          <Pig size={52} opacity={0.7} />
        </div>

        {/* Steve reading — top right */}
        <div className="absolute top-0 right-0 pointer-events-none select-none z-10 hidden lg:block">
          <SteveReading size={64} opacity={0.65} />
        </div>

        {/* Compass for navigation */}
        <div className="absolute top-8 right-24 pointer-events-none opacity-[0.06] hidden xl:block">
          <McItem item="compass" size={40} opacity={1} />
        </div>

        <div className="relative text-center mb-16">

          <h1 className="relative text-xl md:text-2xl font-bold mb-3 text-[#F1F5F9]">
            ⛏ Practice
          </h1>
          <p className="relative text-base text-[#CBD5E1] font-sans">
            Pick a skill and start — every section is built around real IELTS question types.
          </p>

          {/* Block row */}
          <div className="flex justify-center gap-2 mt-4">
            {["#0D9488","#6AAFE6","#FFD700","#C0392B"].map((c, i) => (
              <div
                key={i}
                className="w-4 h-4 border border-black/40"
                style={{ background: c, boxShadow: "2px 2px 0px rgba(0,0,0,0.4)" }}
              />
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {SECTIONS.map((s) => (
            <Link key={s.to} to={s.to} className="block">
              <div
                className="bento-card p-8 h-full flex flex-col group cursor-pointer relative overflow-hidden"
                style={{ borderColor: s.borderColor }}
              >
                {/* Colored top bar */}
                <div className="absolute top-0 left-0 right-0 h-[4px]" style={{ background: s.color }} />
                <div className="absolute top-[4px] left-0 right-0 h-[2px]" style={{ background: s.borderColor }} />

                {/* Block corner decoration */}
                <div
                  className="absolute top-3 right-3 w-3 h-3"
                  style={{
                    background: s.color,
                    boxShadow: `inset -1px -1px 0 rgba(0,0,0,0.4), inset 1px 1px 0 rgba(255,255,255,0.2)`,
                    opacity: 0.5
                  }}
                />

                {/* Icon */}
                <span
                  className="w-14 h-14 flex items-center justify-center mb-6 border-2 transition-all duration-200 group-hover:scale-110"
                  style={{
                    background: s.bgColor,
                    borderColor: s.borderColor,
                    color: s.color,
                    boxShadow: `2px 2px 0px rgba(0,0,0,0.4)`,
                  }}
                >
                  <s.icon className="w-6 h-6" />
                </span>

                <h2
                  className="font-serif text-[0.75rem] font-semibold mb-2 leading-relaxed"
                  style={{ color: s.color }}
                >
                  {s.title}
                </h2>
                <p className="text-sm text-[#CBD5E1] mb-4 flex-1 leading-relaxed font-sans">{s.desc}</p>

                {/* Label badge */}
                <div className="mb-6">
                  <span
                    className="font-mono text-[9px] px-2 py-0.5 border"
                    style={{ color: s.color, borderColor: s.borderColor, background: s.bgColor }}
                  >
                    {s.label}
                  </span>
                </div>

                {/* Item + Start */}
                <div className="flex items-center justify-between">
                  <span
                    className="font-mono text-[11px] font-semibold tracking-widest uppercase inline-flex items-center gap-2 group-hover:translate-x-1 transition-transform duration-200"
                    style={{ color: s.color }}
                  >
                    ▸ Start <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                  <McItem item={s.item} size={20} opacity={0.3} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom decorations */}
        <div className="flex justify-center gap-4 mt-12 opacity-[0.06]">
          <McItem item="pickaxe" size={28} opacity={1} />
          <McItem item="sword" size={28} opacity={1} />
          <McItem item="torch" size={22} opacity={1} />
          <McItem item="book" size={24} opacity={1} />
          <McItem item="chest" size={28} opacity={1} />
        </div>
      </section>
    </SiteLayout>
  );
}
