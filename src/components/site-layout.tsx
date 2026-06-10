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
        ? "text-[#FBBF24] font-semibold bg-[#B45309]/20 border border-[#D97706]/40"
        : "text-[#E3D5BD] hover:text-[#FAF3E6] hover:bg-[#3A2A19]"
    );

  return (
    <div className="min-h-screen flex flex-col">
      {/* ─── NAVIGATION ─────────────────────────────────────────── */}
      <header className="glass-nav sticky top-0 z-40">
        <div className="container mx-auto px-4 flex items-center justify-between h-14">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <span className="w-8 h-8 bg-[#D97706] flex items-center justify-center shadow-[2px_2px_0px_#451F06] border border-[#B45309] group-hover:bg-[#FBBF24] transition-colors">
              <GrassBlock size={20} />
            </span>
            <span className="font-serif text-[0.65rem] font-semibold tracking-tight text-[#FAF3E6] leading-tight hidden sm:block">
              Abduraimov<br />
              <span className="text-[#FBBF24]">Erkinjon</span>
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
                    ? "text-[#FBBF24] font-semibold bg-[#B45309]/20 border border-[#D97706]/40"
                    : "text-[#E3D5BD] hover:text-[#FAF3E6] hover:bg-[#3A2A19]"
                )}
              >
                Practice <ChevronDown className={cn("w-3 h-3 opacity-60 transition-transform", practiceOpen && "rotate-180")} />
              </Link>
              {practiceOpen && (
                <div className="absolute left-0 top-full pt-1 z-50">
                  <div className="bg-[#2B1E12] border-2 border-[#4D3823] shadow-[4px_4px_0px_rgba(0,0,0,0.6)] py-1.5 min-w-[160px] overflow-visible">
                    <div className="h-[3px] w-full mb-1 bg-[#D97706]" />

                    {/* Listening */}
                    <Link
                      to="/listening"
                      className={cn(
                        "block px-4 py-2 font-mono text-[11px] tracking-wide transition-colors",
                        isActive("/listening") ? "bg-[#B45309]/40 text-[#FBBF24] font-semibold" : "text-[#E3D5BD] hover:bg-[#B45309]/20 hover:text-[#FAF3E6]"
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
                          isActive("/reading") ? "bg-[#B45309]/40 text-[#FBBF24] font-semibold" : "text-[#E3D5BD] hover:bg-[#B45309]/20 hover:text-[#FAF3E6]"
                        )}
                      >
                        📖 Reading <ChevronRight className="w-3 h-3 opacity-50" />
                      </Link>
                      {readingOpen && (
                        <div className="absolute left-full top-0 z-50">
                          <div className="bg-[#2B1E12] border-2 border-[#4D3823] shadow-[4px_4px_0px_rgba(0,0,0,0.6)] py-1.5 min-w-[130px]">
                            <div className="h-[3px] w-full mb-1 bg-[#D97706]" />
                            {(["1", "2", "3"] as const).map((n) => (
                              <Link
                                key={n}
                                to="/reading"
                                search={{ passage: n } as any}
                                className="block px-4 py-2 font-mono text-[11px] tracking-wide transition-colors text-[#E3D5BD] hover:bg-[#B45309]/20 hover:text-[#FAF3E6]"
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
                          isActive("/writing") ? "bg-[#B45309]/40 text-[#FBBF24] font-semibold" : "text-[#E3D5BD] hover:bg-[#B45309]/20 hover:text-[#FAF3E6]"
                        )}
                      >
                        ✏️ Writing <ChevronRight className="w-3 h-3 opacity-50" />
                      </Link>
                      {writingOpen && (
                        <div className="absolute left-full top-0 z-50">
                          <div className="bg-[#2B1E12] border-2 border-[#4D3823] shadow-[4px_4px_0px_rgba(0,0,0,0.6)] py-1.5 min-w-[120px]">
                            <div className="h-[3px] w-full mb-1 bg-[#D97706]" />
                            {([1, 2] as const).map((n) => (
                              <Link
                                key={n}
                                to="/writing"
                                search={{ task: String(n) } as any}
                                className="block px-4 py-2 font-mono text-[11px] tracking-wide transition-colors text-[#E3D5BD] hover:bg-[#B45309]/20 hover:text-[#FAF3E6]"
                              >
                                Task {n}
                              </Link>
                            ))}
                            <div className="h-px bg-[#4D3823] mx-2 my-1" />
                            {(["t1-samples", "t2-samples"] as const).map((key) => (
                              <Link
                                key={key}
                                to="/writing"
                                search={{ task: key } as any}
                                className="block px-4 py-2 font-mono text-[11px] tracking-wide transition-colors text-[#E3D5BD] hover:bg-[#B45309]/20 hover:text-[#FAF3E6]"
                              >
                                {key === "t1-samples" ? "Task 1 Samples" : "Task 2 Samples"}
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
                          isActive("/speaking") || loc.pathname.startsWith("/speaking/") ? "bg-[#B45309]/40 text-[#FBBF24] font-semibold" : "text-[#E3D5BD] hover:bg-[#B45309]/20 hover:text-[#FAF3E6]"
                        )}
                      >
                        🎤 Speaking <ChevronRight className="w-3 h-3 opacity-50" />
                      </Link>
                      {speakingOpen && (
                        <div className="absolute left-full top-0 z-50">
                          <div className="bg-[#2B1E12] border-2 border-[#4D3823] shadow-[4px_4px_0px_rgba(0,0,0,0.6)] py-1.5 min-w-[170px]">
                            <div className="h-[3px] w-full mb-1 bg-[#D97706]" />
                            <Link
                              to="/speaking/pronunciation"
                              className={cn(
                                "block px-4 py-2 font-mono text-[11px] tracking-wide transition-colors",
                                isActive("/speaking/pronunciation") ? "bg-[#B45309]/40 text-[#FBBF24] font-semibold" : "text-[#E3D5BD] hover:bg-[#B45309]/20 hover:text-[#FAF3E6]"
                              )}
                            >
                              🗣 Pronunciation
                            </Link>
                            <Link
                              to="/speaking/topics-explained"
                              className={cn(
                                "block px-4 py-2 font-mono text-[11px] tracking-wide transition-colors",
                                isActive("/speaking/topics-explained") ? "bg-[#B45309]/40 text-[#FBBF24] font-semibold" : "text-[#E3D5BD] hover:bg-[#B45309]/20 hover:text-[#FAF3E6]"
                              )}
                            >
                              💬 Topics Explained
                            </Link>
                            <Link
                              to="/speaking/written-samples"
                              className={cn(
                                "block px-4 py-2 font-mono text-[11px] tracking-wide transition-colors",
                                isActive("/speaking/written-samples") ? "bg-[#B45309]/40 text-[#FBBF24] font-semibold" : "text-[#E3D5BD] hover:bg-[#B45309]/20 hover:text-[#FAF3E6]"
                              )}
                            >
                              📝 Written Samples
                            </Link>
                            <div className="h-px bg-[#4D3823] mx-2 my-1" />
                            {([1, 2, 3] as const).map((p) => (
                              <Link
                                key={p}
                                to="/speaking/written-samples"
                                search={{ part: p } as any}
                                className="block pl-7 pr-4 py-1.5 font-mono text-[11px] tracking-wide transition-colors text-[#BFA887] hover:bg-[#B45309]/20 hover:text-[#FAF3E6]"
                              >
                                Samples · Part {p}
                              </Link>
                            ))}
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
                  ? "2px solid #F59E0B"
                  : "2px solid #D97706",
                background: theme === "dark" ? "#20160C" : "#FBEEDC",
                boxShadow: theme === "dark"
                  ? "3px 3px 0px #120C06, inset 0 0 8px rgba(245,158,11,0.25)"
                  : "3px 3px 0px #E8CFA4, inset 0 0 8px rgba(217,119,6,0.2)",
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
                className="relative inline-flex items-center gap-1.5 px-2.5 py-1.5 hover:bg-[#3A2A19] transition-colors font-mono text-xs font-semibold text-[#D97706]"
                aria-label="Vocabulary"
              >
                <BookOpen className="w-4 h-4" />
                <span>Vocabulary</span>
                {due && due.count > 0 && (
                  <span className="bg-[#DC2626] text-white text-[10px] font-mono font-bold min-w-[16px] h-4 px-1 flex items-center justify-center">
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
                  <Button variant="ghost" size="sm" className="font-mono text-xs tracking-wide h-8 text-[#E3D5BD] hover:text-[#FAF3E6] hover:bg-[#3A2A19]">
                    <UserIcon className="w-3.5 h-3.5 mr-1.5" /> Account
                  </Button>
                </Link>
                <Button variant="ghost" size="sm" className="h-8 text-[#E3D5BD] hover:text-[#FAF3E6] hover:bg-[#3A2A19]" onClick={() => signOut()}>
                  <LogOut className="w-3.5 h-3.5" />
                </Button>
              </>
            ) : (
              <>
                <Link to="/auth">
                  <Button variant="ghost" size="sm" className="font-mono text-xs tracking-wide h-8 text-[#E3D5BD] hover:text-[#FAF3E6] hover:bg-[#3A2A19]">Sign In</Button>
                </Link>
                <Link to="/premium">
                  <Button size="sm" className="bg-[#FFD700] text-[#1F150C] h-8 text-xs font-mono font-semibold tracking-wide border border-[#C09A00] shadow-[3px_3px_0px_#8A6A00] hover:bg-[#FFE050] hover:shadow-[3px_3px_0px_#8A6A00,0_0_14px_rgba(255,215,0,0.45)] active:shadow-[1px_1px_0px_#8A6A00] active:translate-x-0.5 active:translate-y-0.5 transition-all">
                    Go Premium
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 hover:bg-[#3A2A19] transition-colors border border-[#4D3823]"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="w-5 h-5 text-[#FAF3E6]" /> : <Menu className="w-5 h-5 text-[#FAF3E6]" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden border-t-2 border-[#D97706] bg-[#251A0F]">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-0.5">
              <Link to="/" onClick={() => setOpen(false)} className={cn("py-2.5 px-3 font-mono text-xs tracking-wide transition-colors", isActive("/") ? "text-[#FBBF24] bg-[#B45309]/20 border-l-2 border-[#D97706]" : "text-[#E3D5BD] hover:bg-[#3A2A19] hover:text-[#FAF3E6]")}>Home</Link>
              <Link to="/practice" onClick={() => setOpen(false)} className={cn("py-2.5 px-3 font-mono text-xs tracking-wide transition-colors", practiceActive ? "text-[#FBBF24] bg-[#B45309]/20 border-l-2 border-[#D97706]" : "text-[#E3D5BD] hover:bg-[#3A2A19] hover:text-[#FAF3E6]")}>Practice</Link>
              <div className="pl-5 flex flex-col border-l-2 border-[#D97706]/40 ml-3">
                <Link to="/listening" onClick={() => setOpen(false)} className="py-2 font-mono text-xs text-[#E3D5BD] hover:text-[#FAF3E6] tracking-wide">🎧 Listening</Link>
                <Link to="/reading" onClick={() => setOpen(false)} className="py-2 font-mono text-xs text-[#E3D5BD] hover:text-[#FAF3E6] tracking-wide">📖 Reading</Link>
                <div className="pl-4 flex flex-col border-l border-[#D97706]/20 ml-1 mb-0.5">
                  {(["1", "2", "3"] as const).map((n) => (
                    <Link key={n} to="/reading" search={{ passage: n } as any} onClick={() => setOpen(false)} className="py-1.5 font-mono text-[11px] text-[#BFA887] hover:text-[#FAF3E6] tracking-wide">
                      Passage {n}
                    </Link>
                  ))}
                </div>
                <Link to="/writing" onClick={() => setOpen(false)} className="py-2 font-mono text-xs text-[#E3D5BD] hover:text-[#FAF3E6] tracking-wide">✏️ Writing</Link>
                <div className="pl-4 flex flex-col border-l border-[#D97706]/20 ml-1 mb-0.5">
                  {([1, 2] as const).map((n) => (
                    <Link key={n} to="/writing" search={{ task: String(n) } as any} onClick={() => setOpen(false)} className="py-1.5 font-mono text-[11px] text-[#BFA887] hover:text-[#FAF3E6] tracking-wide">
                      Task {n}
                    </Link>
                  ))}
                  {(["t1-samples", "t2-samples"] as const).map((key) => (
                    <Link key={key} to="/writing" search={{ task: key } as any} onClick={() => setOpen(false)} className="py-1.5 font-mono text-[11px] text-[#BFA887] hover:text-[#FAF3E6] tracking-wide">
                      {key === "t1-samples" ? "Task 1 Samples" : "Task 2 Samples"}
                    </Link>
                  ))}
                </div>
                <Link to="/speaking" onClick={() => setOpen(false)} className="py-2 font-mono text-xs text-[#E3D5BD] hover:text-[#FAF3E6] tracking-wide">🎤 Speaking</Link>
                <div className="pl-4 flex flex-col border-l border-[#D97706]/20 ml-1 mb-0.5">
                  <Link to="/speaking/pronunciation" onClick={() => setOpen(false)} className="py-1.5 font-mono text-[11px] text-[#BFA887] hover:text-[#FAF3E6] tracking-wide">🗣 Pronunciation</Link>
                  <Link to="/speaking/topics-explained" onClick={() => setOpen(false)} className="py-1.5 font-mono text-[11px] text-[#BFA887] hover:text-[#FAF3E6] tracking-wide">💬 Topics Explained</Link>
                  <Link to="/speaking/written-samples" onClick={() => setOpen(false)} className="py-1.5 font-mono text-[11px] text-[#BFA887] hover:text-[#FAF3E6] tracking-wide">📝 Written Samples</Link>
                  <div className="pl-4 flex flex-col border-l border-[#D97706]/20 ml-1 mb-0.5">
                    {([1, 2, 3] as const).map((p) => (
                      <Link key={p} to="/speaking/written-samples" search={{ part: p } as any} onClick={() => setOpen(false)} className="py-1.5 font-mono text-[11px] text-[#BFA887] hover:text-[#FAF3E6] tracking-wide">
                        Samples · Part {p}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <Link to="/videos" onClick={() => setOpen(false)} className={cn("py-2.5 px-3 font-mono text-xs tracking-wide transition-colors", isActive("/videos") ? "text-[#FBBF24] bg-[#B45309]/20 border-l-2 border-[#D97706]" : "text-[#E3D5BD] hover:bg-[#3A2A19] hover:text-[#FAF3E6]")}>Video Lessons</Link>
              <Link to="/articles" onClick={() => setOpen(false)} className={cn("py-2.5 px-3 font-mono text-xs tracking-wide transition-colors", isActive("/articles") ? "text-[#FBBF24] bg-[#B45309]/20 border-l-2 border-[#D97706]" : "text-[#E3D5BD] hover:bg-[#3A2A19] hover:text-[#FAF3E6]")}>Articles</Link>
              <Link to="/vocabulary" onClick={() => setOpen(false)} className={cn("py-2.5 px-3 font-mono text-xs tracking-wide transition-colors", isActive("/vocabulary") ? "text-[#FBBF24] bg-[#B45309]/20 border-l-2 border-[#D97706]" : "text-[#E3D5BD] hover:bg-[#3A2A19] hover:text-[#FAF3E6]")}>Vocabulary</Link>
              <Link to="/contact-about" onClick={() => setOpen(false)} className={cn("py-2.5 px-3 font-mono text-xs tracking-wide transition-colors", isActive("/contact-about") ? "text-[#FBBF24] bg-[#B45309]/20 border-l-2 border-[#D97706]" : "text-[#E3D5BD] hover:bg-[#3A2A19] hover:text-[#FAF3E6]")}>Contact &amp; About</Link>
              <div className="pt-3 border-t-2 border-[#4D3823] mt-2">
                <button
                  onClick={toggleTheme}
                  className="w-full flex items-center gap-3 py-2.5 px-3 font-mono text-xs tracking-wide transition-colors"
                  style={{ color: theme === "dark" ? "#F59E0B" : "#D97706" }}
                >
                  <span style={{ fontSize: 16 }}>{theme === "dark" ? "🌙" : "☀️"}</span>
                  {theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
                </button>
              </div>
              <div className="pt-2 border-t-2 border-[#4D3823] flex flex-col gap-2">
                {user ? (
                  <>
                    <Link to="/account" onClick={() => setOpen(false)}>
                      <Button variant="outline" className="w-full font-mono text-xs tracking-wide border-[#4D3823] text-[#FAF3E6] hover:bg-[#3A2A19]">Account</Button>
                    </Link>
                    <Button variant="ghost" className="font-mono text-xs tracking-wide text-[#E3D5BD] hover:text-[#FAF3E6]" onClick={() => { signOut(); setOpen(false); }}>Sign out</Button>
                  </>
                ) : (
                  <>
                    <Link to="/auth" onClick={() => setOpen(false)}>
                      <Button variant="outline" className="w-full font-mono text-xs tracking-wide border-[#4D3823] text-[#FAF3E6] hover:bg-[#3A2A19]">Sign In</Button>
                    </Link>
                    <Link to="/premium" onClick={() => setOpen(false)}>
                      <Button className="w-full bg-[#FFD700] text-[#1F150C] font-mono font-semibold text-xs tracking-wide border border-[#C09A00] shadow-[3px_3px_0px_#8A6A00] hover:bg-[#FFE050] hover:shadow-[3px_3px_0px_#8A6A00,0_0_14px_rgba(255,215,0,0.45)]">Go Premium</Button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </header>

      {deviceConflict && (
        <div className="bg-[#DC2626]/20 border-b-2 border-[#DC2626]/50 text-[#FAF3E6]">
          <div className="container mx-auto px-4 py-3 font-mono text-xs font-medium tracking-wide">
            ⚠ This premium account is active on another device. Please log out from your other device first, or contact the teacher to reset.
          </div>
        </div>
      )}


      <main className="flex-1">{children}</main>

      {/* ─── FOOTER ─────────────────────────────────────────────── */}
      <footer className="border-t-4 border-[#D97706] bg-card mt-16 relative overflow-hidden">
        <div className="h-2 w-full bg-[#D97706]" />
        <div className="h-1 w-full bg-[#B45309]" />

        <div className="absolute top-8 right-8 opacity-[0.04] pointer-events-none hidden xl:block">
          <McItem item="crafting-table" size={120} opacity={1} />
        </div>
        <div className="absolute bottom-8 left-8 opacity-[0.04] pointer-events-none hidden xl:block">
          <McItem item="pickaxe" size={80} opacity={1} />
        </div>

        <div className="container mx-auto px-4 py-14 grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-8 h-8 bg-[#D97706] flex items-center justify-center border border-[#B45309] shadow-[2px_2px_0px_#451F06]">
                <GrassBlock size={20} />
              </span>
              <span className="font-serif text-[0.6rem] font-semibold text-foreground leading-snug">
                Abduraimov<br />
                <span className="text-[#FBBF24]">Erkinjon</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed font-sans">
              Guided IELTS preparation from a Band 8.0 teacher in Fergana, Uzbekistan.
            </p>
            <div className="flex gap-1.5 mt-4">
              {["#D97706","#F59E0B","#2B1E12","#FFD700","#E3D5BD"].map((c, i) => (
                <div
                  key={i}
                  className="w-5 h-5 border border-black/40"
                  style={{ background: c, boxShadow: "2px 2px 0px rgba(0,0,0,0.5)" }}
                />
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-serif text-[0.55rem] mb-4 text-[#FBBF24] tracking-widest uppercase">⛏ Explore</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/practice" className="text-muted-foreground hover:text-[#FBBF24] transition-colors font-mono text-xs">▸ Practice</Link></li>
              <li><Link to="/videos" className="text-muted-foreground hover:text-[#FBBF24] transition-colors font-mono text-xs">▸ Video Lessons</Link></li>
              <li><Link to="/articles" className="text-muted-foreground hover:text-[#FBBF24] transition-colors font-mono text-xs">▸ Articles</Link></li>
              <li><Link to="/vocabulary" className="text-muted-foreground hover:text-[#FBBF24] transition-colors font-mono text-xs">▸ Vocabulary Practice</Link></li>
              <li><Link to="/premium" className="text-[#FFD700] hover:text-[#FFE050] transition-colors font-mono text-xs">▸ Premium ★</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-[0.55rem] mb-4 text-[#FBBF24] tracking-widest uppercase">📡 Connect</h4>
            <div className="flex flex-col gap-3">
              <a href="https://www.youtube.com/@erkinjon_writes" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors font-mono text-xs">
                <Youtube className="w-4 h-4 text-[#FF0000]" /> YouTube Channel
              </a>
              <a href="https://t.me/augustus_flores" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors font-mono text-xs">
                <Send className="w-4 h-4 text-[#229ED9]" /> Telegram Channel
              </a>
              <a href="https://t.me/augustus_at" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors font-mono text-xs">
                <MessageCircle className="w-4 h-4 text-[#D97706]" /> Personal Telegram
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border py-5 text-center font-mono text-[10px] tracking-wider text-muted-foreground">
          © {new Date().getFullYear()} Abduraimov Erkinjon — <span className="text-[#D97706]">Mine for Knowledge</span> — Made with care in Uzbekistan
        </div>
      </footer>
    </div>
  );
}
