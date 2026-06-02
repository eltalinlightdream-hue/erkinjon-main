import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useRef, useEffect } from "react";
import { SiteLayout } from "@/components/site-layout";
import { Button } from "@/components/ui/button";
import { BookOpen, PenLine, Youtube, Crown, Star, ArrowRight, Newspaper } from "lucide-react";

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
        {/* Ambient background */}
        <div className="absolute inset-0 bg-gradient-warm pointer-events-none" />
        <div
          className="absolute top-20 -left-32 w-[500px] h-[500px] rounded-full opacity-25 blur-[120px] pointer-events-none"
          style={{ background: "radial-gradient(circle, #85d7b2 0%, transparent 70%)" }}
        />
        <div
          className="absolute top-10 -right-32 w-[500px] h-[500px] rounded-full opacity-20 blur-[120px] pointer-events-none"
          style={{ background: "radial-gradient(circle, #b5c4ff 0%, transparent 70%)" }}
        />

        {/* Hero text */}
        <div className="relative container mx-auto px-4 pt-20 md:pt-28 pb-10 max-w-3xl text-center">
          <span
            className="ink-bleed inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card border border-border font-mono text-[11px] tracking-wider text-muted-foreground mb-8 shadow-soft"
            style={{ animationDelay: "0.05s" }}
          >
            <Star className="w-3.5 h-3.5 text-[#C07850] fill-current" />
            Taught by an IELTS Band 8.0 teacher from Uzbekistan
          </span>

          <h1
            className="ink-bleed text-4xl md:text-[3.6rem] font-bold tracking-tight mb-5 leading-[1.1]"
            style={{ animationDelay: "0.25s" }}
          >
            Master IELTS with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-primary">guided practice</span>
          </h1>

          <p
            className="ink-bleed text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed"
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
                className="bg-gradient-primary text-white shadow-warm hover:opacity-90 hover:-translate-y-0.5 active:scale-95 h-12 px-8 rounded-xl transition-all duration-200"
              >
                Start Practicing Free <ArrowRight className="ml-1.5 w-4 h-4" />
              </Button>
            </Link>
            <Link to="/premium">
              <Button
                size="lg"
                variant="outline"
                className="h-12 px-8 rounded-xl border-border hover:bg-muted/60 hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
              >
                Get Premium Access
              </Button>
            </Link>
          </div>
        </div>

        {/* ── 3D KEYBOARD ── */}
        <div className="keyboard-scene relative pb-16 md:pb-24">
          <div
            className="keyboard-frame animate-floating"
            ref={keyboardRef}
            id="keyboard-container"
          >
            {/* Key legend */}
            <div className="flex justify-between items-center mb-4 px-1 opacity-50">
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-red-400" />
                <div className="w-2 h-2 rounded-full bg-yellow-400" />
                <div className="w-2 h-2 rounded-full bg-green-400" />
              </div>
              <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-muted-foreground">IELTS PAD</span>
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
              <div
                className="keycap keycap-cream h-14 md:h-16"
                onClick={() => goTo("/listening")}
                title="Listening"
              >
                <div className="keycap-top font-serif text-2xl md:text-3xl font-bold">L</div>
                <div className="keycap-skirt" />
              </div>
              <div
                className="keycap keycap-cream h-14 md:h-16"
                onClick={() => goTo("/reading")}
                title="Reading"
              >
                <div className="keycap-top font-serif text-2xl md:text-3xl font-bold">R</div>
                <div className="keycap-skirt" />
              </div>
              <div
                className="keycap keycap-cream h-14 md:h-16"
                onClick={() => goTo("/writing")}
                title="Writing"
              >
                <div className="keycap-top font-serif text-2xl md:text-3xl font-bold">W</div>
                <div className="keycap-skirt" />
              </div>
              <div
                className="keycap keycap-cream h-14 md:h-16"
                onClick={() => goTo("/speaking")}
                title="Speaking"
              >
                <div className="keycap-top font-serif text-2xl md:text-3xl font-bold">S</div>
                <div className="keycap-skirt" />
              </div>

              {/* Row 3 — V + Enter (wide) */}
              <div
                className="keycap keycap-dark h-14 md:h-16"
                onClick={() => goTo("/vocabulary")}
                title="Vocabulary"
              >
                <div className="keycap-top font-serif text-2xl md:text-3xl font-bold">V</div>
                <div className="keycap-skirt" />
              </div>
              <div
                className="keycap keycap-blue col-span-3 h-14 md:h-16"
                onClick={() => goTo("/practice")}
                title="Start Practicing"
              >
                <div className="keycap-top font-mono text-[11px] tracking-widest">
                  ENTER ↵
                </div>
                <div className="keycap-skirt" />
              </div>
            </div>

            {/* Keyboard footer text */}
            <div className="flex justify-around mt-4 font-mono text-[9px] tracking-[0.22em] uppercase text-[#8E96A3]">
              <span>Precision</span>
              <span>Language</span>
              <span>Mastery</span>
            </div>
          </div>
        </div>
      </section>

      {/* Signature gradient divider */}
      <div
        className="w-full h-px"
        style={{ background: "linear-gradient(90deg, transparent 0%, #F5D5CB 25%, #4A9B7A 75%, transparent 100%)" }}
      />

      {/* ─── FEATURES BENTO GRID ──────────────────────────────────── */}
      <section className="container mx-auto px-4 py-20 max-w-6xl">
        <div className="text-center max-w-xl mx-auto mb-14">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Everything you need to reach Band 7+</h2>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            From free strategy guides to premium model answers, every resource is built for the real test.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-5">

          {/* Online Practice — narrow */}
          <div className="md:col-span-3 lg:col-span-4 bento-card p-8 rounded-3xl flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center mb-6 transition-transform hover:scale-110">
                <PenLine className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-[1.4rem] text-primary mb-3">Online Practice</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Real IELTS prompts, mini-quizzes, and a Part 2 topic randomizer.
              </p>
            </div>
            <div className="mt-8">
              <span className="font-mono text-[10px] tracking-widest uppercase px-2.5 py-1 bg-secondary/6 rounded border border-secondary/15 text-secondary animate-[subtlePulse_3s_ease-in-out_infinite]">
                ACTIVE NOW
              </span>
            </div>
          </div>

          {/* Free Materials — wide */}
          <div className="md:col-span-3 lg:col-span-8 bento-card p-8 rounded-3xl flex flex-col justify-center overflow-hidden relative">
            {/* Decorative top accent */}
            <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-3xl" style={{ background: "linear-gradient(90deg, #F5D5CB 0%, #4A9B7A 100%)" }} />
            <div className="w-12 h-12 rounded-xl bg-primary/8 text-primary flex items-center justify-center mb-6 transition-transform hover:scale-110">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-[1.4rem] text-primary mb-3">Free Materials</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Tips, model answers and downloadable PDFs across all four IELTS skills.
            </p>
            <Link
              to="/practice"
              className="text-primary font-mono text-[11px] font-semibold tracking-wider inline-flex items-center gap-2 hover:translate-x-1 transition-transform group"
            >
              Browse Library
              <span className="group-hover:translate-x-0.5 transition-transform">↗</span>
            </Link>
          </div>

          {/* YouTube Lessons */}
          <div className="md:col-span-2 lg:col-span-4 bento-card p-8 rounded-3xl group">
            <div className="w-12 h-12 rounded-xl bg-red-50 text-red-500 flex items-center justify-center mb-6 transition-transform group-hover:scale-110">
              <Youtube className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-[1.4rem] text-primary mb-3">YouTube Lessons</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-5">
              Watch full playlists on Writing, Speaking, Reading, Listening and Grammar.
            </p>
            <div className="aspect-video rounded-xl bg-muted/60 overflow-hidden relative border border-border/50">
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center shadow-warm">
                  <span className="text-white text-xl ml-0.5">▶</span>
                </div>
              </div>
            </div>
          </div>

          {/* Articles */}
          <div className="md:col-span-2 lg:col-span-4 bento-card p-8 rounded-3xl">
            <div className="w-12 h-12 rounded-xl bg-accent text-[#C07850] flex items-center justify-center mb-6 transition-transform hover:scale-110">
              <Newspaper className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-[1.4rem] text-primary mb-3">Articles</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Read helpful IELTS articles, study advice, and practical language-learning tips.
            </p>
            <div className="space-y-2.5">
              <div className="h-[3px] bg-gradient-to-r from-accent to-border/30 w-3/4 rounded-full" />
              <div className="h-[3px] bg-gradient-to-r from-accent to-border/30 w-1/2 rounded-full" />
              <div className="h-[3px] bg-gradient-to-r from-accent to-border/30 w-2/3 rounded-full" />
            </div>
          </div>

          {/* Premium — dark card */}
          <div className="md:col-span-2 lg:col-span-4 bento-card p-8 rounded-3xl bg-primary text-white border-transparent">
            <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center mb-6 transition-transform hover:scale-110">
              <Crown className="w-5 h-5 text-white" />
            </div>
            <h3 className="font-serif text-[1.4rem] mb-3">Premium Membership</h3>
            <p className="text-white/70 text-sm leading-relaxed mb-8">
              Unlock model answers, premium PDFs, and exclusive video lessons.
            </p>
            <Link to="/premium">
              <button className="w-full bg-white text-primary font-mono text-[11px] font-semibold tracking-widest py-3 rounded-xl hover:bg-white/90 active:scale-95 transition-all uppercase">
                Upgrade
              </button>
            </Link>
          </div>

        </div>
      </section>
    </SiteLayout>
  );
}
