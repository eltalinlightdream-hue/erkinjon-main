import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { Button } from "@/components/ui/button";
import { BookOpen, PenLine, Youtube, Crown, ArrowRight, Newspaper, Award, Layers, Zap } from "lucide-react";
import {
  EnderDragonSilhouette,
  McItem,
  GrassBlock,
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

/* ─── Minecraft night landscape — full-bleed hero background ───────
   Original SVG illustration (no external assets / licensing).  A blocky
   night scene: navy sky, pixel stars, a glowing square "moon" in the
   accent teal, layered hills with teal grass caps.  The moon glow is
   the same accent glow reused on the CTA + card hovers + stats. */
function MinecraftNightScene() {
  const cols = 30;
  const colW = 960 / cols;

  // Front hill: rolling, snapped to a 16px pixel grid
  const front = Array.from({ length: cols }, (_, i) => {
    const wave = Math.sin(i * 0.5) * 24 + Math.sin(i * 0.17) * 16;
    return Math.round((332 + wave) / 16) * 16;
  });
  // Back hill: lower-frequency, sits higher and darker
  const back = Array.from({ length: cols }, (_, i) => {
    const wave = Math.sin(i * 0.32 + 1.2) * 30;
    return Math.round((286 + wave) / 16) * 16;
  });

  const stars = [
    [70, 60], [140, 110], [220, 48], [300, 90], [380, 40],
    [470, 120], [540, 66], [620, 100], [690, 54], [770, 130],
    [840, 70], [110, 170], [260, 150], [430, 175], [600, 158],
    [760, 184], [900, 120], [40, 130], [500, 30], [820, 30],
  ];

  return (
    <svg
      viewBox="0 0 960 480"
      preserveAspectRatio="xMidYMax slice"
      className="absolute inset-0 w-full h-full"
      shapeRendering="crispEdges"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="mc-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0B1220" />
          <stop offset="55%" stopColor="#0E1626" />
          <stop offset="100%" stopColor="#122A3E" />
        </linearGradient>
        <filter id="mc-moon-glow" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="10" />
        </filter>
      </defs>

      {/* Sky */}
      <rect x="0" y="0" width="960" height="480" fill="url(#mc-sky)" />

      {/* Faint teal horizon band */}
      <rect x="0" y="250" width="960" height="60" fill="#14B8A6" opacity="0.05" />

      {/* Stars (pixel squares) */}
      {stars.map(([x, y], i) => (
        <rect
          key={i}
          x={x}
          y={y}
          width={i % 4 === 0 ? 4 : 3}
          height={i % 4 === 0 ? 4 : 3}
          fill="#E2E8F0"
          opacity={0.35 + (i % 3) * 0.2}
        />
      ))}

      {/* Square Minecraft moon with accent glow */}
      <rect x="780" y="64" width="56" height="56" fill="#14B8A6" opacity="0.45" filter="url(#mc-moon-glow)" />
      <rect x="784" y="68" width="48" height="48" fill="#E8EEF5" />
      <rect x="784" y="68" width="48" height="48" fill="none" stroke="#14B8A6" strokeWidth="2" opacity="0.5" />
      <rect x="800" y="80" width="8" height="8" fill="#CBD5E1" opacity="0.6" />
      <rect x="816" y="96" width="6" height="6" fill="#CBD5E1" opacity="0.5" />

      {/* Faint dragon drifting across the sky */}
      <g transform="translate(150 92)" opacity="0.10">
        <EnderDragonSilhouette width={220} height={88} opacity={1} />
      </g>

      {/* Back hill range (darker) */}
      {back.map((h, i) => (
        <g key={`b${i}`}>
          <rect x={i * colW} y={h} width={colW + 1} height={480 - h} fill="#0C1A2C" />
          <rect x={i * colW} y={h} width={colW + 1} height={10} fill="#0F766E" opacity="0.55" />
        </g>
      ))}

      {/* Front hill range with teal grass caps */}
      {front.map((h, i) => (
        <g key={`f${i}`}>
          <rect x={i * colW} y={h} width={colW + 1} height={480 - h} fill="#0A1626" />
          <rect x={i * colW} y={h} width={colW + 1} height={14} fill="#0D9488" />
          <rect x={i * colW} y={h} width={colW + 1} height={3} fill="#14B8A6" opacity="0.85" />
        </g>
      ))}

      {/* A couple of blocky pixel trees on the front ridge */}
      {[210, 540, 720].map((tx, i) => {
        const h = front[Math.round(tx / colW)] ?? 332;
        return (
          <g key={`t${i}`}>
            <rect x={tx} y={h - 26} width={10} height={26} fill="#0F2A2E" />
            <rect x={tx - 12} y={h - 50} width={34} height={26} fill="#0D9488" opacity="0.85" />
            <rect x={tx - 12} y={h - 50} width={34} height={4} fill="#14B8A6" opacity="0.7" />
          </g>
        );
      })}
    </svg>
  );
}

function Index() {
  return (
    <SiteLayout>
      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden flex flex-col items-center pb-8">
        {/* Minecraft night landscape background */}
        <div className="absolute inset-0 pointer-events-none select-none z-0">
          <MinecraftNightScene />
          {/* Fade the scene into the page so text stays readable */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(14,22,38,0.55) 0%, rgba(14,22,38,0.35) 35%, rgba(14,22,38,0.85) 78%, var(--background) 100%)",
            }}
          />
        </div>

        {/* Hero text */}
        <div className="relative container mx-auto px-4 pt-20 md:pt-28 pb-10 max-w-3xl text-center z-10">
          {/* IELTS band badge */}
          <span
            className="ink-bleed inline-flex items-center gap-2 px-4 py-1.5 bg-[#16223A] border-2 border-[#2A3A54] font-mono text-[10px] tracking-wider text-[#CBD5E1] mb-8 shadow-[3px_3px_0px_rgba(0,0,0,0.5)]"
            style={{ animationDelay: "0.05s" }}
          >
            <GrassBlock size={12} opacity={1} />
            Taught by an IELTS Band 8.0 teacher from Uzbekistan
          </span>

          <h1
            className="ink-bleed text-2xl md:text-4xl font-bold mb-5 text-[#F1F5F9]"
            style={{ animationDelay: "0.25s" }}
          >
            Master IELTS with{" "}
            <span className="text-[#2DD4BF]">guided practice</span>
          </h1>

          <p
            className="ink-bleed text-base md:text-lg text-[#CBD5E1] max-w-xl mx-auto mb-10 leading-relaxed font-sans"
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
                className="bg-[#0D9488] text-white border-2 border-[#0F766E] shadow-[4px_4px_0px_#062E2A] hover:bg-[#14B8A6] hover:shadow-[4px_4px_0px_#062E2A,0_0_18px_rgba(20,184,166,0.5)] active:shadow-[2px_2px_0px_#062E2A] active:translate-x-0.5 active:translate-y-0.5 h-12 px-8 transition-all duration-150 font-serif text-[10px] tracking-widest uppercase"
              >
                Start Practicing Free <ArrowRight className="ml-1.5 w-4 h-4" />
              </Button>
            </Link>
            {/* SECONDARY: Get Premium Access — demoted to ghost/outline on the hero */}
            <Link to="/premium">
              <Button
                size="lg"
                variant="outline"
                className="h-12 px-8 border-2 border-[#2A3A54] bg-transparent text-[#CBD5E1] hover:bg-[#1E2C44] hover:text-[#F1F5F9] hover:border-[#14B8A6] shadow-none active:translate-x-0.5 active:translate-y-0.5 transition-all duration-150 font-serif text-[10px] tracking-widest uppercase"
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
                <div className="w-10 h-10 mb-3 bg-[#0D9488]/15 border-2 border-[#0D9488]/40 text-[#2DD4BF] flex items-center justify-center mc-bob">
                  <s.icon className="w-5 h-5" />
                </div>
                <div className="font-serif text-lg md:text-2xl text-[#2DD4BF] leading-none mb-2">
                  {s.value}
                </div>
                <div className="font-mono text-[10px] md:text-[11px] tracking-wide text-[#CBD5E1] leading-snug">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teal accent divider */}
      <div className="w-full h-1 bg-[#0D9488]" />
      <div className="w-full h-0.5 bg-[#0F766E]" />

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
          <h2 className="text-lg md:text-xl font-bold mb-3 text-[#F1F5F9]">
            Everything you need to reach <span className="text-[#2DD4BF]">Band 7+</span>
          </h2>
          <p className="text-[#CBD5E1] text-sm md:text-base leading-relaxed font-sans">
            From free strategy guides to premium model answers, every resource is built for the real test.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-5">

          {/* Online Practice */}
          <div className="md:col-span-3 lg:col-span-4 bento-card p-8 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-[#0D9488]/15 border-2 border-[#0D9488]/40 text-[#2DD4BF] flex items-center justify-center mb-6">
                <PenLine className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-[0.7rem] text-[#2DD4BF] mb-3 leading-relaxed">Online Practice</h3>
              <p className="text-[#CBD5E1] text-sm leading-relaxed font-sans">
                Real IELTS prompts, mini-quizzes, and a Part 2 topic randomizer.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-2">
              <span className="font-mono text-[9px] tracking-widest uppercase px-2.5 py-1 bg-[#0D9488]/15 border border-[#0D9488]/40 text-[#2DD4BF] animate-[subtlePulse_3s_ease-in-out_infinite]">
                ● ACTIVE NOW
              </span>
              <McItem item="pickaxe" size={16} opacity={0.4} />
            </div>
          </div>

          {/* Free Materials — wide */}
          <div className="md:col-span-3 lg:col-span-8 bento-card p-8 flex flex-col justify-center overflow-hidden relative">
            {/* Teal top accent */}
            <div className="absolute top-0 left-0 right-0 h-[4px] bg-[#0D9488]" />
            <div className="absolute top-[4px] left-0 right-0 h-[2px] bg-[#0F766E]" />
            <div className="w-12 h-12 bg-[#0D9488]/15 border-2 border-[#0D9488]/40 text-[#2DD4BF] flex items-center justify-center mb-6">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-[0.7rem] text-[#2DD4BF] mb-3 leading-relaxed">Free Materials</h3>
            <p className="text-[#CBD5E1] text-sm leading-relaxed mb-6 font-sans">
              Tips, model answers and downloadable PDFs across all four IELTS skills.
            </p>
            <Link
              to="/practice"
              className="text-[#2DD4BF] font-mono text-[11px] font-semibold tracking-wider inline-flex items-center gap-2 hover:text-[#5EEAD4] group"
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
            <h3 className="font-serif text-[0.7rem] text-[#F1F5F9] mb-3 leading-relaxed">YouTube Lessons</h3>
            <p className="text-[#CBD5E1] text-sm leading-relaxed mb-5 font-sans">
              Watch full playlists on Writing, Speaking, Reading, Listening and Grammar.
            </p>
            <div className="aspect-video bg-[#0B1220] overflow-hidden relative border-2 border-[#2A3A54]">
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
            <div className="w-12 h-12 bg-[#0D9488]/15 border-2 border-[#0D9488]/40 text-[#2DD4BF] flex items-center justify-center mb-6">
              <Newspaper className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-[0.7rem] text-[#F1F5F9] mb-3 leading-relaxed">Articles</h3>
            <p className="text-[#CBD5E1] text-sm leading-relaxed mb-6 font-sans">
              Read helpful IELTS articles, study advice, and practical language-learning tips.
            </p>
            <div className="space-y-2.5">
              {[3, 4, 2].map((w, i) => (
                <div key={i} className="h-[3px] bg-[#0D9488]/45" style={{ width: `${w * 20}%` }} />
              ))}
            </div>
            <div className="mt-4 flex justify-end">
              <McItem item="book" size={20} opacity={0.3} />
            </div>
          </div>

          {/* Premium — navy card with the gold premium accent */}
          <div className="md:col-span-2 lg:col-span-4 bento-card p-8 bg-[#141C30] border-[#3D3416] shadow-[4px_4px_0px_rgba(0,0,0,0.5)] relative">
            <div className="absolute top-0 left-0 right-0 h-[4px] bg-[#FFD700]" />
            <div className="absolute top-[4px] left-0 right-0 h-[2px] bg-[#C09A00]" />
            <div className="w-12 h-12 bg-[#FFD700]/15 border-2 border-[#FFD700]/40 flex items-center justify-center mb-6">
              <Crown className="w-5 h-5 text-[#FFD700]" />
            </div>
            <h3 className="font-serif text-[0.7rem] mb-3 text-[#FFD700] leading-relaxed">Premium Membership</h3>
            <p className="text-[#CBD5E1] text-sm leading-relaxed mb-8 font-sans">
              Unlock model answers, premium PDFs, and exclusive video lessons.
            </p>
            <Link to="/premium">
              <button className="w-full bg-[#FFD700] text-[#0E1626] font-serif text-[9px] font-semibold tracking-widest py-3 border-2 border-[#C09A00] shadow-[3px_3px_0px_#8A6A00] hover:bg-[#FFE050] hover:shadow-[3px_3px_0px_#8A6A00,0_0_14px_rgba(255,215,0,0.45)] active:shadow-[1px_1px_0px_#8A6A00] active:translate-x-0.5 active:translate-y-0.5 transition-all uppercase">
                ★ Upgrade Now
              </button>
            </Link>
          </div>

        </div>
      </section>
    </SiteLayout>
  );
}
