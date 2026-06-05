import { ReactNode, useState, useRef, useCallback } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { Menu, X, Youtube, Send, LogOut, User as UserIcon, Crown, ChevronDown, ChevronRight, BookOpen, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/use-auth";
import { useTheme } from "@/hooks/use-theme";
import { cn } from "@/lib/utils";
import { supabase } from "@/integrations/supabase/client";
import { McItem, GrassBlock } from "@/components/minecraft-decorations";

const PRACTICE_LINKS = [
  { to: "/listening" as const, label: "Listening" },
  { to: "/reading" as const, label: "Reading" },
  { to: "/writing" as const, label: "Writing" },
  { to: "/speaking" as const, label: "Speaking" },
];

export function SiteLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [practiceOpen, setPracticeOpen] = useState(false);
  const [readingOpen, setReadingOpen] = useState(false);
  const [writingOpen, setWritingOpen] = useState(false);
  const [speakingOpen, setSpeakingOpen] = useState(false);
  const practiceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const readingTimer  = useRef<ReturnType<typeof setTimeout> | null>(null);
  const writingTimer  = useRef<ReturnType<typeof setTimeout> | null>(null);
  const speakingTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const makeHover = useCallback(
    (
      setter: (v: boolean) => void,
      timerRef: React.MutableRefObject<ReturnType<typeof setTimeout> | null>
    ) => ({
      onMouseEnter: () => {
        if (timerRef.current) clearTimeout(timerRef.current);
        setter(true);
      },
      onMouseLeave: () => {
        timerRef.current = setTimeout(() => setter(false), 120);
      },
    }),
    []
  );

  const { user, profile, signOut, deviceConflict } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const loc = useLocation();
  const { data: due } = useQuery({
    queryKey: ["due-count", user?.id],
    queryFn: async () => {
      if (!user) return { count: 0 };
      const { count, error } = await supabase
        .from("vocabulary_words")
        .select("id", { count: "exact", head: true })
        .eq("user_id", user.id)
        .lte("next_review", new Date().toISOString());
      if (error) return { count: 0 };
      return { count: count ?? 0 };
    },
    enabled: !!user,
    refetchInterval: 60_000,
    retry: false,
  });
  const isActive = (p: string) => loc.pathname === p;
  const practiceActive = PRACTICE_LINKS.some((l) => isActive(l.to)) || isActive("/practice") || loc.pathname.startsWith("/speaking/");

  const navLink = (path: string, label: string, active: boolean) =>
    cn(
      "px-3.5 py-2 font-mono text-xs tracking-wide transition-colors duration-150 relative",
      active
        ? "text-[#7DBD50] font-semibold bg-[#3D6B21]/20 border border-[#5D8A3C]/40"
        : "text-[#9A9A9A] hover:text-[#F5F5F5] hover:bg-[#3A3A3A]"
    );

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* ─── NAVIGATION ─────────────────────────────────────────── */}
      <header className="glass-nav sticky top-0 z-40">
        <div className="container mx-auto px-4 flex items-center justify-between h-14">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <span className="w-8 h-8 bg-[#5D8A3C] flex items-center justify-center shadow-[2px_2px_0px_#2A5015] border border-[#3D6B21] group-hover:bg-[#7DBD50] transition-colors">
              <GrassBlock size={20} />
            </span>
            <span className="font-serif text-[0.65rem] font-semibold tracking-tight text-[#F5F5F5] leading-tight hidden sm:block">
              Abduraimov<br />
              <span className="text-[#7DBD50]">Erkinjon</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            <Link to="/" className={navLink("/", "Home", isActive("/"))}>Home</Link>

            {/* Practice dropdown — state-driven for reliable nested flyouts */}
            <div className="relative" {...makeHover(setPracticeOpen, practiceTimer)}>
              <Link
                to="/practice"
                className={cn(
                  "px-3.5 py-2 font-mono text-xs tracking-wide transition-colors duration-150 inline-flex items-center gap-1 relative",
                  practiceActive
                    ? "text-[#7DBD50] font-semibold bg-[#3D6B21]/20 border border-[#5D8A3C]/40"
                    : "text-[#9A9A9A] hover:text-[#F5F5F5] hover:bg-[#3A3A3A]"
                )}
              >
                Practice <ChevronDown className={cn("w-3 h-3 opacity-60 transition-transform", practiceOpen && "rotate-180")} />
              </Link>
              {practiceOpen && (
                <div className="absolute left-0 top-full pt-1 z-50">
                  <div className="bg-[#2D2D2D] border-2 border-[#5A5A5A] shadow-[4px_4px_0px_rgba(0,0,0,0.6)] py-1.5 min-w-[160px] overflow-visible">
                    <div className="h-[3px] w-full mb-1 bg-[#5D8A3C]" />

                    {/* Listening */}
                    <Link
                      to="/listening"
                      className={cn(
                        "block px-4 py-2 font-mono text-[11px] tracking-wide transition-colors",
                        isActive("/listening") ? "bg-[#3D6B21]/40 text-[#7DBD50] font-semibold" : "text-[#9A9A9A] hover:bg-[#3D6B21]/20 hover:text-[#F5F5F5]"
                      )}
                    >
                      🎧 Listening
                    </Link>

                    {/* Reading flyout */}
                    <div className="relative" {...makeHover(setReadingOpen, readingTimer)}>
                      <Link
                        to="/reading"
                        className={cn(
                          "flex items-center justify-between px-4 py-2 font-mono text-[11px] tracking-wide transition-colors",
                          isActive("/reading") ? "bg-[#3D6B21]/40 text-[#7DBD50] font-semibold" : "text-[#9A9A9A] hover:bg-[#3D6B21]/20 hover:text-[#F5F5F5]"
                        )}
                      >
                        📖 Reading <ChevronRight className="w-3 h-3 opacity-50" />
                      </Link>
                      {readingOpen && (
                        <div className="absolute left-full top-0 z-50">
                          <div className="bg-[#2D2D2D] border-2 border-[#5A5A5A] shadow-[4px_4px_0px_rgba(0,0,0,0.6)] py-1.5 min-w-[130px]">
                            <div className="h-[3px] w-full mb-1 bg-[#5D8A3C]" />
                            {(["1", "2", "3"] as const).map((n) => (
                              <Link
                                key={n}
                                to="/reading"
                                search={{ passage: n } as any}
                                className="block px-4 py-2 font-mono text-[11px] tracking-wide transition-colors text-[#9A9A9A] hover:bg-[#3D6B21]/20 hover:text-[#F5F5F5]"
                              >
                                Passage {n}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Writing flyout */}
                    <div className="relative" {...makeHover(setWritingOpen, writingTimer)}>
                      <Link
                        to="/writing"
                        className={cn(
                          "flex items-center justify-between px-4 py-2 font-mono text-[11px] tracking-wide transition-colors",
                          isActive("/writing") ? "bg-[#3D6B21]/40 text-[#7DBD50] font-semibold" : "text-[#9A9A9A] hover:bg-[#3D6B21]/20 hover:text-[#F5F5F5]"
                        )}
                      >
                        ✏️ Writing <ChevronRight className="w-3 h-3 opacity-50" />
                      </Link>
                      {writingOpen && (
                        <div className="absolute left-full top-0 z-50">
                          <div className="bg-[#2D2D2D] border-2 border-[#5A5A5A] shadow-[4px_4px_0px_rgba(0,0,0,0.6)] py-1.5 min-w-[120px]">
                            <div className="h-[3px] w-full mb-1 bg-[#5D8A3C]" />
                            {([1, 2] as const).map((n) => (
                              <Link
                                key={n}
                                to="/writing"
                                search={{ task: String(n) } as any}
                                className="block px-4 py-2 font-mono text-[11px] tracking-wide transition-colors text-[#9A9A9A] hover:bg-[#3D6B21]/20 hover:text-[#F5F5F5]"
                              >
                                Task {n}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Speaking flyout */}
                    <div className="relative" {...makeHover(setSpeakingOpen, speakingTimer)}>
                      <Link
                        to="/speaking"
                        className={cn(
                          "flex items-center justify-between px-4 py-2 font-mono text-[11px] tracking-wide transition-colors",
                          isActive("/speaking") || loc.pathname.startsWith("/speaking/") ? "bg-[#3D6B21]/40 text-[#7DBD50] font-semibold" : "text-[#9A9A9A] hover:bg-[#3D6B21]/20 hover:text-[#F5F5F5]"
                        )}
                      >
                        🎤 Speaking <ChevronRight className="w-3 h-3 opacity-50" />
                      </Link>
                      {speakingOpen && (
                        <div className="absolute left-full top-0 z-50">
                          <div className="bg-[#2D2D2D] border-2 border-[#5A5A5A] shadow-[4px_4px_0px_rgba(0,0,0,0.6)] py-1.5 min-w-[170px]">
                            <div className="h-[3px] w-full mb-1 bg-[#5D8A3C]" />
                            <Link
                              to="/speaking/pronunciation"
                              className={cn(
                                "block px-4 py-2 font-mono text-[11px] tracking-wide transition-colors",
                                isActive("/speaking/pronunciation") ? "bg-[#3D6B21]/40 text-[#7DBD50] font-semibold" : "text-[#9A9A9A] hover:bg-[#3D6B21]/20 hover:text-[#F5F5F5]"
                              )}
                            >
                              🗣 Pronunciation
                            </Link>
                            <Link
                              to="/speaking/topics-explained"
                              className={cn(
                                "block px-4 py-2 font-mono text-[11px] tracking-wide transition-colors",
                                isActive("/speaking/topics-explained") ? "bg-[#3D6B21]/40 text-[#7DBD50] font-semibold" : "text-[#9A9A9A] hover:bg-[#3D6B21]/20 hover:text-[#F5F5F5]"
                              )}
                            >
                              💬 Topics Explained
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link to="/videos" className={navLink("/videos", "Video Lessons", isActive("/videos"))}>Video Lessons</Link>
            <Link to="/articles" className={navLink("/articles", "Articles", isActive("/articles"))}>Articles</Link>
            <Link to="/contact-about" className={navLink("/contact-about", "Contact & About", isActive("/contact-about"))}>Contact &amp; About</Link>
          </nav>

          {/* Desktop auth */}
          <div className="hidden lg:flex items-center gap-1.5">
            {/* Dark/Light mode toggle */}
            <button
              onClick={toggleTheme}
              title="Toggle Dark/Light Mode"
              aria-label="Toggle Dark/Light Mode"
              style={{
                width: 40,
                height: 40,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: theme === "dark"
                  ? "2px solid #6AAFE6"
                  : "2px solid #5D8A3C",
                background: theme === "dark" ? "#1A1A2E" : "#E8F5E8",
                boxShadow: theme === "dark"
                  ? "3px 3px 0px #0A0A1A, inset 0 0 8px rgba(106,175,230,0.2)"
                  : "3px 3px 0px #B0D0B0, inset 0 0 8px rgba(93,138,60,0.2)",
                cursor: "pointer",
                flexShrink: 0,
                imageRendering: "pixelated",
                transition: "all 0.3s ease",
              }}
            >
              <span style={{ fontSize: 18, lineHeight: 1 }}>
                {theme === "dark" ? "🌙" : "☀️"}
              </span>
            </button>
            {user && (
              <Link
                to="/vocabulary"
                className="relative inline-flex items-center gap-1.5 px-2.5 py-1.5 hover:bg-[#3A3A3A] transition-colors font-mono text-xs font-semibold text-[#5D8A3C]"
                aria-label="Vocabulary"
              >
                <BookOpen className="w-4 h-4" />
                <span>Vocabulary</span>
                {due && due.count > 0 && (
                  <span className="bg-[#C0392B] text-white text-[10px] font-mono font-bold min-w-[16px] h-4 px-1 flex items-center justify-center">
                    {due.count}
                  </span>
                )}
              </Link>
            )}
            {user ? (
              <>
                {profile?.is_premium && (
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono font-semibold text-[#FFD700] bg-[#FFD700]/10 px-2.5 py-1 border border-[#FFD700]/30 tracking-wide">
                    <Crown className="w-3 h-3" /> Premium
                  </span>
                )}
                <Link to="/account">
                  <Button variant="ghost" size="sm" className="font-mono text-xs tracking-wide h-8 text-[#9A9A9A] hover:text-[#F5F5F5] hover:bg-[#3A3A3A]">
                    <UserIcon className="w-3.5 h-3.5 mr-1.5" /> Account
                  </Button>
                </Link>
                <Button variant="ghost" size="sm" className="h-8 text-[#9A9A9A] hover:text-[#F5F5F5] hover:bg-[#3A3A3A]" onClick={() => signOut()}>
                  <LogOut className="w-3.5 h-3.5" />
                </Button>
              </>
            ) : (
              <>
                <Link to="/auth">
                  <Button variant="ghost" size="sm" className="font-mono text-xs tracking-wide h-8 text-[#9A9A9A] hover:text-[#F5F5F5] hover:bg-[#3A3A3A]">Sign In</Button>
                </Link>
                <Link to="/premium">
                  <Button size="sm" className="bg-[#5D8A3C] text-white h-8 text-xs font-mono tracking-wide border border-[#3D6B21] shadow-[3px_3px_0px_#1A3A10] hover:bg-[#7DBD50] active:shadow-[1px_1px_0px_#1A3A10] active:translate-x-0.5 active:translate-y-0.5 transition-all">
                    Go Premium
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 hover:bg-[#3A3A3A] transition-colors border border-[#5A5A5A]"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="w-5 h-5 text-[#F5F5F5]" /> : <Menu className="w-5 h-5 text-[#F5F5F5]" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden border-t-2 border-[#5D8A3C] bg-[#242424]">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-0.5">
              <Link to="/" onClick={() => setOpen(false)} className={cn("py-2.5 px-3 font-mono text-xs tracking-wide transition-colors", isActive("/") ? "text-[#7DBD50] bg-[#3D6B21]/20 border-l-2 border-[#5D8A3C]" : "text-[#9A9A9A] hover:bg-[#3A3A3A] hover:text-[#F5F5F5]")}>Home</Link>
              <Link to="/practice" onClick={() => setOpen(false)} className={cn("py-2.5 px-3 font-mono text-xs tracking-wide transition-colors", practiceActive ? "text-[#7DBD50] bg-[#3D6B21]/20 border-l-2 border-[#5D8A3C]" : "text-[#9A9A9A] hover:bg-[#3A3A3A] hover:text-[#F5F5F5]")}>Practice</Link>
              <div className="pl-5 flex flex-col border-l-2 border-[#5D8A3C]/40 ml-3">
                <Link to="/listening" onClick={() => setOpen(false)} className="py-2 font-mono text-xs text-[#9A9A9A] hover:text-[#F5F5F5] tracking-wide">🎧 Listening</Link>
                <Link to="/reading" onClick={() => setOpen(false)} className="py-2 font-mono text-xs text-[#9A9A9A] hover:text-[#F5F5F5] tracking-wide">📖 Reading</Link>
                <div className="pl-4 flex flex-col border-l border-[#5D8A3C]/20 ml-1 mb-0.5">
                  {(["1", "2", "3"] as const).map((n) => (
                    <Link key={n} to="/reading" search={{ passage: n } as any} onClick={() => setOpen(false)} className="py-1.5 font-mono text-[11px] text-[#6A6A6A] hover:text-[#F5F5F5] tracking-wide">
                      Passage {n}
                    </Link>
                  ))}
                </div>
                <Link to="/writing" onClick={() => setOpen(false)} className="py-2 font-mono text-xs text-[#9A9A9A] hover:text-[#F5F5F5] tracking-wide">✏️ Writing</Link>
                <div className="pl-4 flex flex-col border-l border-[#5D8A3C]/20 ml-1 mb-0.5">
                  {([1, 2] as const).map((n) => (
                    <Link key={n} to="/writing" search={{ task: String(n) } as any} onClick={() => setOpen(false)} className="py-1.5 font-mono text-[11px] text-[#6A6A6A] hover:text-[#F5F5F5] tracking-wide">
                      Task {n}
                    </Link>
                  ))}
                </div>
                <Link to="/speaking" onClick={() => setOpen(false)} className="py-2 font-mono text-xs text-[#9A9A9A] hover:text-[#F5F5F5] tracking-wide">🎤 Speaking</Link>
                <div className="pl-4 flex flex-col border-l border-[#5D8A3C]/20 ml-1 mb-0.5">
                  <Link to="/speaking/pronunciation" onClick={() => setOpen(false)} className="py-1.5 font-mono text-[11px] text-[#6A6A6A] hover:text-[#F5F5F5] tracking-wide">🗣 Pronunciation</Link>
                  <Link to="/speaking/topics-explained" onClick={() => setOpen(false)} className="py-1.5 font-mono text-[11px] text-[#6A6A6A] hover:text-[#F5F5F5] tracking-wide">💬 Topics Explained</Link>
                </div>
              </div>
              <Link to="/videos" onClick={() => setOpen(false)} className={cn("py-2.5 px-3 font-mono text-xs tracking-wide transition-colors", isActive("/videos") ? "text-[#7DBD50] bg-[#3D6B21]/20 border-l-2 border-[#5D8A3C]" : "text-[#9A9A9A] hover:bg-[#3A3A3A] hover:text-[#F5F5F5]")}>Video Lessons</Link>
              <Link to="/articles" onClick={() => setOpen(false)} className={cn("py-2.5 px-3 font-mono text-xs tracking-wide transition-colors", isActive("/articles") ? "text-[#7DBD50] bg-[#3D6B21]/20 border-l-2 border-[#5D8A3C]" : "text-[#9A9A9A] hover:bg-[#3A3A3A] hover:text-[#F5F5F5]")}>Articles</Link>
              <Link to="/vocabulary" onClick={() => setOpen(false)} className={cn("py-2.5 px-3 font-mono text-xs tracking-wide transition-colors", isActive("/vocabulary") ? "text-[#7DBD50] bg-[#3D6B21]/20 border-l-2 border-[#5D8A3C]" : "text-[#9A9A9A] hover:bg-[#3A3A3A] hover:text-[#F5F5F5]")}>Vocabulary</Link>
              <Link to="/contact-about" onClick={() => setOpen(false)} className={cn("py-2.5 px-3 font-mono text-xs tracking-wide transition-colors", isActive("/contact-about") ? "text-[#7DBD50] bg-[#3D6B21]/20 border-l-2 border-[#5D8A3C]" : "text-[#9A9A9A] hover:bg-[#3A3A3A] hover:text-[#F5F5F5]")}>Contact &amp; About</Link>
              <div className="pt-3 border-t-2 border-[#5A5A5A] mt-2">
                <button
                  onClick={toggleTheme}
                  className="w-full flex items-center gap-3 py-2.5 px-3 font-mono text-xs tracking-wide transition-colors"
                  style={{ color: theme === "dark" ? "#6AAFE6" : "#5D8A3C" }}
                >
                  <span style={{ fontSize: 16 }}>{theme === "dark" ? "🌙" : "☀️"}</span>
                  {theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
                </button>
              </div>
              <div className="pt-2 border-t-2 border-[#5A5A5A] flex flex-col gap-2">
                {user ? (
                  <>
                    <Link to="/account" onClick={() => setOpen(false)}>
                      <Button variant="outline" className="w-full font-mono text-xs tracking-wide border-[#5A5A5A] text-[#F5F5F5] hover:bg-[#3A3A3A]">Account</Button>
                    </Link>
                    <Button variant="ghost" className="font-mono text-xs tracking-wide text-[#9A9A9A] hover:text-[#F5F5F5]" onClick={() => { signOut(); setOpen(false); }}>Sign out</Button>
                  </>
                ) : (
                  <>
                    <Link to="/auth" onClick={() => setOpen(false)}>
                      <Button variant="outline" className="w-full font-mono text-xs tracking-wide border-[#5A5A5A] text-[#F5F5F5] hover:bg-[#3A3A3A]">Sign In</Button>
                    </Link>
                    <Link to="/premium" onClick={() => setOpen(false)}>
                      <Button className="w-full bg-[#5D8A3C] text-white font-mono text-xs tracking-wide border border-[#3D6B21] shadow-[3px_3px_0px_#1A3A10] hover:bg-[#7DBD50]">Go Premium</Button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </header>

      {deviceConflict && (
        <div className="bg-[#C0392B]/20 border-b-2 border-[#C0392B]/50 text-[#F5F5F5]">
          <div className="container mx-auto px-4 py-3 font-mono text-xs font-medium tracking-wide">
            ⚠ This premium account is active on another device. Please log out from your other device first, or contact the teacher to reset.
          </div>
        </div>
      )}

      <main className="flex-1">{children}</main>

      {/* ─── FOOTER ─────────────────────────────────────────────── */}
      <footer className="border-t-4 border-[#5D8A3C] bg-[#1A1A1A] mt-16 relative overflow-hidden">
        <div className="h-2 w-full bg-[#5D8A3C]" />
        <div className="h-1 w-full bg-[#3D6B21]" />

        <div className="absolute top-8 right-8 opacity-[0.04] pointer-events-none hidden xl:block">
          <McItem item="crafting-table" size={120} opacity={1} />
        </div>
        <div className="absolute bottom-8 left-8 opacity-[0.04] pointer-events-none hidden xl:block">
          <McItem item="pickaxe" size={80} opacity={1} />
        </div>

        <div className="container mx-auto px-4 py-14 grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-8 h-8 bg-[#5D8A3C] flex items-center justify-center border border-[#3D6B21] shadow-[2px_2px_0px_#1A3A10]">
                <GrassBlock size={20} />
              </span>
              <span className="font-serif text-[0.6rem] font-semibold text-[#F5F5F5] leading-snug">
                Abduraimov<br />
                <span className="text-[#7DBD50]">Erkinjon</span>
              </span>
            </div>
            <p className="text-sm text-[#9A9A9A] leading-relaxed font-sans">
              Guided IELTS preparation from a Band 8.0 teacher in Fergana, Uzbekistan.
            </p>
            <div className="flex gap-1.5 mt-4">
              {["#5D8A3C","#8B6343","#8A8A8A","#FFD700","#6AAFE6"].map((c, i) => (
                <div
                  key={i}
                  className="w-5 h-5 border border-black/40"
                  style={{ background: c, boxShadow: "2px 2px 0px rgba(0,0,0,0.5)" }}
                />
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-serif text-[0.55rem] mb-4 text-[#7DBD50] tracking-widest uppercase">⛏ Explore</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/practice" className="text-[#9A9A9A] hover:text-[#7DBD50] transition-colors font-mono text-xs">▸ Practice</Link></li>
              <li><Link to="/videos" className="text-[#9A9A9A] hover:text-[#7DBD50] transition-colors font-mono text-xs">▸ Video Lessons</Link></li>
              <li><Link to="/articles" className="text-[#9A9A9A] hover:text-[#7DBD50] transition-colors font-mono text-xs">▸ Articles</Link></li>
              <li><Link to="/vocabulary" className="text-[#9A9A9A] hover:text-[#7DBD50] transition-colors font-mono text-xs">▸ Vocabulary Practice</Link></li>
              <li><Link to="/premium" className="text-[#FFD700] hover:text-[#FFE050] transition-colors font-mono text-xs">▸ Premium ★</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-[0.55rem] mb-4 text-[#7DBD50] tracking-widest uppercase">📡 Connect</h4>
            <div className="flex flex-col gap-3">
              <a href="https://www.youtube.com/@erkinjon_writes" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2.5 text-sm text-[#9A9A9A] hover:text-[#F5F5F5] transition-colors font-mono text-xs">
                <Youtube className="w-4 h-4 text-[#FF0000]" /> YouTube Channel
              </a>
              <a href="https://t.me/augustus_flores" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2.5 text-sm text-[#9A9A9A] hover:text-[#F5F5F5] transition-colors font-mono text-xs">
                <Send className="w-4 h-4 text-[#229ED9]" /> Telegram Channel
              </a>
              <a href="https://t.me/augustus_at" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2.5 text-sm text-[#9A9A9A] hover:text-[#F5F5F5] transition-colors font-mono text-xs">
                <MessageCircle className="w-4 h-4 text-[#5D8A3C]" /> Personal Telegram
              </a>
            </div>
          </div>
        </div>

        <div className="border-t-2 border-[#3A3A3A] py-5 text-center font-mono text-[10px] tracking-wider text-[#5A5A5A]">
          © {new Date().getFullYear()} Abduraimov Erkinjon — <span className="text-[#5D8A3C]">Mine for Knowledge</span> — Made with care in Uzbekistan
        </div>
      </footer>
    </div>
  );
}
