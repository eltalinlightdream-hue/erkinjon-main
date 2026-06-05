import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useRef, useEffect } from "react";
import { SiteLayout } from "@/components/site-layout";
import { Button } from "@/components/ui/button";
import { BookOpen, PenLine, Youtube, Crown, ArrowRight, Newspaper } from "lucide-react";
import {
  SteveWaving,
  EnderDragonSilhouette,
  McItem,
  GrassBlock,
  Creeper,
} from "@/components/minecraft-decorations";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Abduraimov Erkinjon — Master IELTS with Guided Practice" },
      { name: "description", content: "Free IELTS materials, online practice, video lessons and premium guidance from a Band 8.0 teacher in Uzbekistan." },
    ],
  }),
  component: Index,
});

const FEATURES = [
  { icon: BookOpen, title: "Free Materials", desc: "Tips, model answers and downloadable PDFs across all four IELTS skills." },
  { icon: PenLine, title: "Online Practice", desc: "Real IELTS prompts, mini-quizzes, and a Part 2 topic randomizer." },
  { icon: Newspaper, title: "Articles", desc: "Read helpful IELTS articles, study advice, and practical language-learning tips." },
  { icon: Crown, title: "Premium Membership", desc: "Unlock model answers, premium PDFs, and exclusive video lessons." },
  { icon: Youtube, title: "YouTube Lessons", desc: "Watch full playlists on Writing, Speaking, Reading, Listening and Grammar." },
];

function Index() {
  const navigate = useNavigate();
  const keyboardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = keyboardRef.current;
    if (!el) return;
    let timer: ReturnType<typeof setTimeout>;

    const onMove = (e: MouseEvent) => {
      const x = (window.innerWidth / 2 - e.clientX) / 45;
      const y = (window.innerHeight / 2 - e.clientY) / 45;
      el.style.animation = "none";
      el.style.transform = `rotateX(${25 + y}deg) rotateY(${-10 + x}deg) translateZ(10px)`;
      clearTimeout(timer);
      timer = setTimeout(() => {
        el.style.animation = "floating 6s ease-in-out infinite";
        el.style.transform = "";
      }, 1200);
    };

    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      clearTimeout(timer);
    };
  }, []);

  const goTo = (path: string) => {
    navigate({ to: path as Parameters<typeof navigate>[0]["to"] });
  };

  return (
    <SiteLayout>
      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden flex flex-col items-center pb-8">
        {/* Ender Dragon silhouette background */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 pointer-events-none select-none z-0">
          <EnderDragonSilhouette width={600} height={240} opacity={0.07} />
        </div>

        {/* Steve waving — top right */}
        <div className="absolute top-6 right-4 md:right-12 pointer-events-none select-none z-10 mc-bob hidden sm:block">
          <SteveWaving size={80} opacity={0.9} />
        </div>

        {/* Creeper — top left (small mascot) */}
        <div className="absolute top-8 left-4 md:left-10 pointer-events-none select-none z-10 hidden md:block">
          <Creeper size={40} opacity={0.7} />
        </div>

        {/* Scattered item decorations */}
        <div className="absolute bottom-32 left-8 pointer-events-none opacity-10 hidden lg:block">
          <McItem item="pickaxe" size={36} opacity={1} />
        </div>
        <div className="absolute bottom-28 right-8 pointer-events-none opacity-10 hidden lg:block">
          <McItem item="crafting-table" size={32} opacity={1} />
        </div>
        <div className="absolute top-32 right-36 pointer-events-none opacity-[0.06] hidden xl:block">
          <McItem item="torch" size={28} opacity={1} />
        </div>

        {/* Hero text */}
        <div className="relative container mx-auto px-4 pt-20 md:pt-28 pb-10 max-w-3xl text-center z-10">
          {/* IELTS band badge */}
          <span
            className="ink-bleed inline-flex items-center gap-2 px-4 py-1.5 bg-[#2D2D2D] border-2 border-[#5A5A5A] font-mono text-[10px] tracking-wider text-[#9A9A9A] mb-8 shadow-[3px_3px_0px_rgba(0,0,0,0.5)]"
            style={{ animationDelay: "0.05s" }}
          >
            <GrassBlock size={12} opacity={1} />
            Taught by an IELTS Band 8.0 teacher from Uzbekistan
          </span>

          <h1
            className="ink-bleed text-2xl md:text-4xl font-bold mb-5 text-[#F5F5F5]"
            style={{ animationDelay: "0.25s" }}
          >
            Master IELTS with{" "}
            <span className="text-[#7DBD50]">guided practice</span>
          </h1>

          <p
            className="ink-bleed text-base md:text-lg text-[#9A9A9A] max-w-xl mx-auto mb-10 leading-relaxed font-sans"
            style={{ animationDelay: "0.4s" }}
          >
            Friendly lessons, real exam strategies, and structured practice — built for Uzbek learners who want a real score jump.
          </p>

          <div
            className="ink-bleed flex flex-col sm:flex-row gap-3 justify-center"
            style={{ animationDelay: "0.55s" }}
          >
            <Link to="/reading">
              <Button
                size="lg"
                className="bg-[#5D8A3C] text-white border-2 border-[#3D6B21] shadow-[4px_4px_0px_#1A3A10] hover:bg-[#7DBD50] hover:shadow-[6px_6px_0px_#1A3A10] active:shadow-[2px_2px_0px_#1A3A10] active:translate-x-0.5 active:translate-y-0.5 h-12 px-8 transition-all duration-100 font-serif text-[10px] tracking-widest uppercase"
              >
                Start Practicing Free <ArrowRight className="ml-1.5 w-4 h-4" />
              </Button>
            </Link>
            <Link to="/premium">
              <Button
                size="lg"
                variant="outline"
                className="h-12 px-8 border-2 border-[#5A5A5A] bg-[#2D2D2D] text-[#F5F5F5] hover:bg-[#3A3A3A] hover:border-[#FFD700] shadow-[4px_4px_0px_rgba(0,0,0,0.5)] hover:shadow-[6px_6px_0px_rgba(0,0,0,0.5)] active:shadow-[2px_2px_0px_rgba(0,0,0,0.5)] active:translate-x-0.5 active:translate-y-0.5 transition-all duration-100 font-serif text-[10px] tracking-widest uppercase"
              >
                Get Premium Access
              </Button>
            </Link>
          </div>
        </div>

        {/* ── 3D KEYBOARD ── */}
        <div className="keyboard-scene relative pb-16 md:pb-24 z-10">
          <div
            className="keyboard-frame animate-floating"
            ref={keyboardRef}
            id="keyboard-container"
          >
            {/* Key legend */}
            <div className="flex justify-between items-center mb-4 px-1 opacity-50">
              <div className="flex gap-2">
                <div className="w-2 h-2 bg-[#C0392B]" />
                <div className="w-2 h-2 bg-[#FFD700]" />
                <div className="w-2 h-2 bg-[#5D8A3C]" />
              </div>
              <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-[#6A6A6A]">IELTS PAD</span>
            </div>

            <div className="grid grid-cols-4 gap-3 md:gap-[14px] w-[270px] md:w-[340px]">
              {/* Row 1 — utility keys */}
              <div className="keycap keycap-grey h-10 md:h-11">
                <div className="keycap-top font-mono text-[10px]">Esc</div>
                <div className="keycap-skirt" />
              </div>
              <div className="keycap keycap-grey h-10 md:h-11">
                <div className="keycap-top font-mono text-[10px]">Tab</div>
                <div className="keycap-skirt" />
              </div>
              <div className="keycap keycap-grey h-10 md:h-11">
                <div className="keycap-top font-mono text-xs">/</div>
                <div className="keycap-skirt" />
              </div>
              <div className="keycap keycap-grey h-10 md:h-11">
                <div className="keycap-top font-mono text-xs">*</div>
                <div className="keycap-skirt" />
              </div>

              {/* Row 2 — L R W S */}
              <div className="keycap keycap-cream h-14 md:h-16" onClick={() => goTo("/listening")} title="Listening">
                <div className="keycap-top font-mono text-2xl md:text-3xl font-bold text-[#7DBD50]">L</div>
                <div className="keycap-skirt" />
              </div>
              <div className="keycap keycap-cream h-14 md:h-16" onClick={() => goTo("/reading")} title="Reading">
                <div className="keycap-top font-mono text-2xl md:text-3xl font-bold text-[#6AAFE6]">R</div>
                <div className="keycap-skirt" />
              </div>
              <div className="keycap keycap-cream h-14 md:h-16" onClick={() => goTo("/writing")} title="Writing">
                <div className="keycap-top font-mono text-2xl md:text-3xl font-bold text-[#FFD700]">W</div>
                <div className="keycap-skirt" />
              </div>
              <div className="keycap keycap-cream h-14 md:h-16" onClick={() => goTo("/speaking")} title="Speaking">
                <div className="keycap-top font-mono text-2xl md:text-3xl font-bold text-[#C0392B]">S</div>
                <div className="keycap-skirt" />
              </div>

              {/* Row 3 — V + Enter (wide) */}
              <div className="keycap keycap-dark h-14 md:h-16" onClick={() => goTo("/vocabulary")} title="Vocabulary">
                <div className="keycap-top font-mono text-2xl md:text-3xl font-bold text-[#8B6343]">V</div>
                <div className="keycap-skirt" />
              </div>
              <div className="keycap keycap-blue col-span-3 h-14 md:h-16" onClick={() => goTo("/practice")} title="Start Practicing">
                <div className="keycap-top font-mono text-[11px] tracking-widest text-[#F5F5F5]">
                  ENTER ↵
                </div>
                <div className="keycap-skirt" />
              </div>
            </div>

            {/* Keyboard footer text */}
            <div className="flex justify-around mt-4 font-mono text-[9px] tracking-[0.22em] uppercase text-[#5A5A5A]">
              <span>Precision</span>
              <span>Language</span>
              <span>Mastery</span>
            </div>
          </div>
        </div>
      </section>

      {/* Minecraft grass divider */}
      <div className="w-full h-1 bg-[#5D8A3C]" />
      <div className="w-full h-0.5 bg-[#3D6B21]" />

      {/* ─── FEATURES BENTO GRID ──────────────────────────────────── */}
      <section className="container mx-auto px-4 py-20 max-w-6xl relative">
        {/* Section scattered items */}
        <div className="absolute top-12 right-4 opacity-[0.06] pointer-events-none hidden xl:block">
          <McItem item="compass" size={40} opacity={1} />
        </div>
        <div className="absolute bottom-12 left-4 opacity-[0.06] pointer-events-none hidden xl:block">
          <McItem item="sword" size={36} opacity={1} />
        </div>

        <div className="text-center max-w-xl mx-auto mb-14">
          <h2 className="text-lg md:text-xl font-bold mb-3 text-[#F5F5F5]">
            Everything you need to reach <span className="text-[#7DBD50]">Band 7+</span>
          </h2>
          <p className="text-[#9A9A9A] text-sm md:text-base leading-relaxed font-sans">
            From free strategy guides to premium model answers, every resource is built for the real test.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-5">

          {/* Online Practice */}
          <div className="md:col-span-3 lg:col-span-4 bento-card p-8 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-[#5D8A3C]/20 border-2 border-[#5D8A3C]/40 text-[#7DBD50] flex items-center justify-center mb-6">
                <PenLine className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-[0.7rem] text-[#7DBD50] mb-3 leading-relaxed">Online Practice</h3>
              <p className="text-[#9A9A9A] text-sm leading-relaxed font-sans">
                Real IELTS prompts, mini-quizzes, and a Part 2 topic randomizer.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-2">
              <span className="font-mono text-[9px] tracking-widest uppercase px-2.5 py-1 bg-[#5D8A3C]/15 border border-[#5D8A3C]/30 text-[#7DBD50] animate-[subtlePulse_3s_ease-in-out_infinite]">
                ● ACTIVE NOW
              </span>
              <McItem item="pickaxe" size={16} opacity={0.4} />
            </div>
          </div>

          {/* Free Materials — wide */}
          <div className="md:col-span-3 lg:col-span-8 bento-card p-8 flex flex-col justify-center overflow-hidden relative">
            {/* Grass top accent */}
            <div className="absolute top-0 left-0 right-0 h-[4px] bg-[#5D8A3C]" />
            <div className="absolute top-[4px] left-0 right-0 h-[2px] bg-[#3D6B21]" />
            <div className="w-12 h-12 bg-[#6AAFE6]/20 border-2 border-[#6AAFE6]/40 text-[#6AAFE6] flex items-center justify-center mb-6">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-[0.7rem] text-[#6AAFE6] mb-3 leading-relaxed">Free Materials</h3>
            <p className="text-[#9A9A9A] text-sm leading-relaxed mb-6 font-sans">
              Tips, model answers and downloadable PDFs across all four IELTS skills.
            </p>
            <Link
              to="/practice"
              className="text-[#7DBD50] font-mono text-[11px] font-semibold tracking-wider inline-flex items-center gap-2 hover:text-[#9AEB6D] group"
            >
              ▸ Browse Library
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          {/* YouTube Lessons */}
          <div className="md:col-span-2 lg:col-span-4 bento-card p-8 group">
            <div className="w-12 h-12 bg-[#C0392B]/20 border-2 border-[#C0392B]/40 text-[#C0392B] flex items-center justify-center mb-6">
              <Youtube className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-[0.7rem] text-[#F5F5F5] mb-3 leading-relaxed">YouTube Lessons</h3>
            <p className="text-[#9A9A9A] text-sm leading-relaxed mb-5 font-sans">
              Watch full playlists on Writing, Speaking, Reading, Listening and Grammar.
            </p>
            <div className="aspect-video bg-[#1A1A1A] overflow-hidden relative border-2 border-[#5A5A5A]">
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12 bg-[#C0392B] flex items-center justify-center shadow-[3px_3px_0px_rgba(0,0,0,0.5)]">
                  <span className="text-white text-xl ml-0.5">▶</span>
                </div>
              </div>
              <div className="absolute inset-0 opacity-10 bg-[#C0392B]" />
            </div>
          </div>

          {/* Articles */}
          <div className="md:col-span-2 lg:col-span-4 bento-card p-8">
            <div className="w-12 h-12 bg-[#8B6343]/20 border-2 border-[#8B6343]/40 text-[#C09040] flex items-center justify-center mb-6">
              <Newspaper className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-[0.7rem] text-[#F5F5F5] mb-3 leading-relaxed">Articles</h3>
            <p className="text-[#9A9A9A] text-sm leading-relaxed mb-6 font-sans">
              Read helpful IELTS articles, study advice, and practical language-learning tips.
            </p>
            <div className="space-y-2.5">
              {[3, 4, 2].map((w, i) => (
                <div key={i} className="h-[3px] bg-[#8B6343]/50" style={{ width: `${w * 20}%` }} />
              ))}
            </div>
            <div className="mt-4 flex justify-end">
              <McItem item="book" size={20} opacity={0.3} />
            </div>
          </div>

          {/* Premium — dark Minecraft style */}
          <div className="md:col-span-2 lg:col-span-4 bento-card p-8 bg-[#1A0A2E] border-[#4A0A6A]" style={{ boxShadow: "4px 4px 0px rgba(74,10,106,0.5)" }}>
            <div className="absolute top-0 left-0 right-0 h-[4px] bg-[#9B59B6]" />
            <div className="w-12 h-12 bg-[#9B59B6]/20 border-2 border-[#9B59B6]/40 flex items-center justify-center mb-6">
              <Crown className="w-5 h-5 text-[#FFD700]" />
            </div>
            <h3 className="font-serif text-[0.7rem] mb-3 text-[#FFD700] leading-relaxed">Premium Membership</h3>
            <p className="text-[#9A9A9A] text-sm leading-relaxed mb-8 font-sans">
              Unlock model answers, premium PDFs, and exclusive video lessons.
            </p>
            <Link to="/premium">
              <button className="w-full bg-[#FFD700] text-[#1A1A1A] font-serif text-[9px] font-semibold tracking-widest py-3 border-2 border-[#C09A00] shadow-[3px_3px_0px_#8A6A00] hover:bg-[#FFE050] active:shadow-[1px_1px_0px_#8A6A00] active:translate-x-0.5 active:translate-y-0.5 transition-all uppercase">
                ★ Upgrade Now
              </button>
            </Link>
          </div>

        </div>
      </section>
    </SiteLayout>
  );
}
