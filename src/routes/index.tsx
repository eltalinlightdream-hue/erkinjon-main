import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { Button } from "@/components/ui/button";
import { BookOpen, PenLine, Youtube, Crown, ArrowRight, Newspaper, Award, Layers, Zap } from "lucide-react";
import { McItem, GrassBlock } from "@/components/minecraft-decorations";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Abduraimov Erkinjon — Master IELTS with Guided Practice" },
      { name: "description", content: "Free IELTS materials, online practice, video lessons and premium guidance from a Band 8.0 teacher in Uzbekistan." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden flex flex-col items-center pb-8">
        {/* Sunset plains — full-bleed hero photo.  hero-sunset.jpg is the
            real photograph; if it isn't in the repo yet the illustrated
            sunset-plains.png renders as the fallback layer. */}
        <div className="absolute inset-0 pointer-events-none select-none z-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('/backgrounds/hero-sunset.jpg'), url('/backgrounds/sunset-plains.png')",
            }}
          />
          {/* Warm dusk scrim — sampled from the photo's brown/sienna shadows
              so the bright sky stays visible but text remains readable */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(31,21,12,0.60) 0%, rgba(46,26,14,0.38) 38%, rgba(31,21,12,0.80) 76%, var(--background) 100%)",
            }}
          />
        </div>

        {/* Hero text */}
        <div className="relative container mx-auto px-4 pt-20 md:pt-28 pb-10 max-w-3xl text-center z-10">
          {/* IELTS band badge */}
          <span
            className="ink-bleed inline-flex items-center gap-2 px-4 py-1.5 bg-[#2B1E12] border-2 border-[#4D3823] font-mono text-[10px] tracking-wider text-[#E3D5BD] mb-8 shadow-[3px_3px_0px_rgba(0,0,0,0.5)]"
            style={{ animationDelay: "0.05s" }}
          >
            <GrassBlock size={12} opacity={1} />
            Taught by an IELTS Band 8.0 teacher from Uzbekistan
          </span>

          <h1
            className="ink-bleed text-2xl md:text-4xl font-bold mb-5 text-[#FAF3E6] [text-shadow:3px_3px_0_rgba(22,15,8,0.75)]"
            style={{ animationDelay: "0.25s" }}
          >
            Master IELTS with{" "}
            <span className="text-[#FBBF24]">guided practice</span>
          </h1>

          <p
            className="ink-bleed text-base md:text-lg text-[#E3D5BD] max-w-xl mx-auto mb-10 leading-relaxed font-sans [text-shadow:0_1px_8px_rgba(22,15,8,0.9)]"
            style={{ animationDelay: "0.4s" }}
          >
            Friendly lessons, real exam strategies, and structured practice — built for Uzbek learners who want a real score jump.
          </p>

          <div
            className="ink-bleed flex flex-col sm:flex-row gap-3 justify-center"
            style={{ animationDelay: "0.55s" }}
          >
            {/* PRIMARY: Start Practicing Free — filled teal with accent glow */}
            <Link to="/reading">
              <Button
                size="lg"
                className="bg-[#D97706] text-white border-2 border-[#B45309] shadow-[4px_4px_0px_#451F06] hover:bg-[#F59E0B] hover:shadow-[4px_4px_0px_#451F06,0_0_18px_rgba(245,158,11,0.5)] active:shadow-[2px_2px_0px_#451F06] active:translate-x-0.5 active:translate-y-0.5 h-12 px-8 transition-all duration-150 font-serif text-[10px] tracking-widest uppercase"
              >
                Start Practicing Free <ArrowRight className="ml-1.5 w-4 h-4" />
              </Button>
            </Link>
            {/* SECONDARY: Get Premium Access — demoted to ghost/outline on the hero */}
            <Link to="/premium">
              <Button
                size="lg"
                variant="outline"
                className="h-12 px-8 border-2 border-[#4D3823] bg-transparent text-[#E3D5BD] hover:bg-[#3A2A19] hover:text-[#FAF3E6] hover:border-[#F59E0B] shadow-none active:translate-x-0.5 active:translate-y-0.5 transition-all duration-150 font-serif text-[10px] tracking-widest uppercase"
              >
                Get Premium Access
              </Button>
            </Link>
          </div>
        </div>

        {/* ── Animated stat strip (replaces the keyboard widget) ── */}
        <div
          className="ink-bleed relative z-10 w-full max-w-3xl px-4 pb-16 md:pb-24"
          style={{ animationDelay: "0.7s" }}
        >
          <div className="grid grid-cols-3 gap-3 md:gap-5">
            {[
              { icon: Award, value: "8.0", label: "Teacher's IELTS Band", glow: false },
              { icon: Layers, value: "4", label: "Core Skills Covered", glow: true },
              { icon: Zap, value: "Free", label: "Start at Zero Cost", glow: false },
            ].map((s, i) => (
              <div
                key={i}
                className={`bento-card p-5 md:p-6 flex flex-col items-center text-center ${s.glow ? "glow-accent-soft" : ""}`}
              >
                <div className="w-10 h-10 mb-3 bg-[#D97706]/15 border-2 border-[#D97706]/40 text-[#FBBF24] flex items-center justify-center mc-bob">
                  <s.icon className="w-5 h-5" />
                </div>
                <div className="font-serif text-lg md:text-2xl text-[#FBBF24] leading-none mb-2">
                  {s.value}
                </div>
                <div className="font-mono text-[10px] md:text-[11px] tracking-wide text-[#E3D5BD] leading-snug">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teal accent divider */}
      <div className="w-full h-1 bg-[#D97706]" />
      <div className="w-full h-0.5 bg-[#B45309]" />

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
          <h2 className="text-lg md:text-xl font-bold mb-3 text-[#FAF3E6]">
            Everything you need to reach <span className="text-[#FBBF24]">Band 7+</span>
          </h2>
          <p className="text-[#E3D5BD] text-sm md:text-base leading-relaxed font-sans">
            From free strategy guides to premium model answers, every resource is built for the real test.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-5">

          {/* Online Practice */}
          <div className="md:col-span-3 lg:col-span-4 bento-card p-8 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-[#D97706]/15 border-2 border-[#D97706]/40 text-[#FBBF24] flex items-center justify-center mb-6">
                <PenLine className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-[0.7rem] text-[#FBBF24] mb-3 leading-relaxed">Online Practice</h3>
              <p className="text-[#E3D5BD] text-sm leading-relaxed font-sans">
                Real IELTS prompts, mini-quizzes, and a Part 2 topic randomizer.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-2">
              <span className="font-mono text-[9px] tracking-widest uppercase px-2.5 py-1 bg-[#D97706]/15 border border-[#D97706]/40 text-[#FBBF24] animate-[subtlePulse_3s_ease-in-out_infinite]">
                ● ACTIVE NOW
              </span>
              <McItem item="pickaxe" size={16} opacity={0.4} />
            </div>
          </div>

          {/* Free Materials — wide */}
          <div className="md:col-span-3 lg:col-span-8 bento-card p-8 flex flex-col justify-center overflow-hidden relative">
            {/* Teal top accent */}
            <div className="absolute top-0 left-0 right-0 h-[4px] bg-[#D97706]" />
            <div className="absolute top-[4px] left-0 right-0 h-[2px] bg-[#B45309]" />
            <div className="w-12 h-12 bg-[#D97706]/15 border-2 border-[#D97706]/40 text-[#FBBF24] flex items-center justify-center mb-6">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-[0.7rem] text-[#FBBF24] mb-3 leading-relaxed">Free Materials</h3>
            <p className="text-[#E3D5BD] text-sm leading-relaxed mb-6 font-sans">
              Tips, model answers and downloadable PDFs across all four IELTS skills.
            </p>
            <Link
              to="/practice"
              className="text-[#FBBF24] font-mono text-[11px] font-semibold tracking-wider inline-flex items-center gap-2 hover:text-[#FCD34D] group"
            >
              ▸ Browse Library
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          {/* YouTube Lessons — keeps YouTube's brand red */}
          <div className="md:col-span-2 lg:col-span-4 bento-card p-8 group">
            <div className="w-12 h-12 bg-[#DC2626]/15 border-2 border-[#DC2626]/40 text-[#F87171] flex items-center justify-center mb-6">
              <Youtube className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-[0.7rem] text-[#FAF3E6] mb-3 leading-relaxed">YouTube Lessons</h3>
            <p className="text-[#E3D5BD] text-sm leading-relaxed mb-5 font-sans">
              Watch full playlists on Writing, Speaking, Reading, Listening and Grammar.
            </p>
            <div className="aspect-video bg-[#160F08] overflow-hidden relative border-2 border-[#4D3823]">
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12 bg-[#DC2626] flex items-center justify-center shadow-[3px_3px_0px_rgba(0,0,0,0.5)]">
                  <span className="text-white text-xl ml-0.5">▶</span>
                </div>
              </div>
              <div className="absolute inset-0 opacity-10 bg-[#DC2626]" />
            </div>
          </div>

          {/* Articles */}
          <div className="md:col-span-2 lg:col-span-4 bento-card p-8">
            <div className="w-12 h-12 bg-[#D97706]/15 border-2 border-[#D97706]/40 text-[#FBBF24] flex items-center justify-center mb-6">
              <Newspaper className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-[0.7rem] text-[#FAF3E6] mb-3 leading-relaxed">Articles</h3>
            <p className="text-[#E3D5BD] text-sm leading-relaxed mb-6 font-sans">
              Read helpful IELTS articles, study advice, and practical language-learning tips.
            </p>
            <div className="space-y-2.5">
              {[3, 4, 2].map((w, i) => (
                <div key={i} className="h-[3px] bg-[#D97706]/45" style={{ width: `${w * 20}%` }} />
              ))}
            </div>
            <div className="mt-4 flex justify-end">
              <McItem item="book" size={20} opacity={0.3} />
            </div>
          </div>

          {/* Premium — navy card with the gold premium accent */}
          <div className="md:col-span-2 lg:col-span-4 bento-card p-8 bg-[#281C10] border-[#3D3416] shadow-[4px_4px_0px_rgba(0,0,0,0.5)] relative">
            <div className="absolute top-0 left-0 right-0 h-[4px] bg-[#FFD700]" />
            <div className="absolute top-[4px] left-0 right-0 h-[2px] bg-[#C09A00]" />
            <div className="w-12 h-12 bg-[#FFD700]/15 border-2 border-[#FFD700]/40 flex items-center justify-center mb-6">
              <Crown className="w-5 h-5 text-[#FFD700]" />
            </div>
            <h3 className="font-serif text-[0.7rem] mb-3 text-[#FFD700] leading-relaxed">Premium Membership</h3>
            <p className="text-[#E3D5BD] text-sm leading-relaxed mb-8 font-sans">
              Unlock model answers, premium PDFs, and exclusive video lessons.
            </p>
            <Link to="/premium">
              <button className="w-full bg-[#FFD700] text-[#1F150C] font-serif text-[9px] font-semibold tracking-widest py-3 border-2 border-[#C09A00] shadow-[3px_3px_0px_#8A6A00] hover:bg-[#FFE050] hover:shadow-[3px_3px_0px_#8A6A00,0_0_14px_rgba(255,215,0,0.45)] active:shadow-[1px_1px_0px_#8A6A00] active:translate-x-0.5 active:translate-y-0.5 transition-all uppercase">
                ★ Upgrade Now
              </button>
            </Link>
          </div>

        </div>
      </section>
    </SiteLayout>
  );
}
