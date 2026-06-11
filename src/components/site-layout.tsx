import { ReactNode, useState, useRef, useCallback } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import {
  Menu,
  X,
  Youtube,
  Send,
  LogOut,
  User as UserIcon,
  Crown,
  ChevronDown,
  ChevronRight,
  BookOpen,
  MessageCircle,
  Sun,
  Moon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/use-auth";
import { useTheme } from "@/hooks/use-theme";
import { cn } from "@/lib/utils";
import { supabase } from "@/integrations/supabase/client";
import { GrassBlock } from "@/components/minecraft-decorations";

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
  const readingTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const writingTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const speakingTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const makeHover = useCallback(
    (
      setter: (v: boolean) => void,
      timerRef: React.MutableRefObject<ReturnType<typeof setTimeout> | null>,
    ) => ({
      onMouseEnter: () => {
        if (timerRef.current) clearTimeout(timerRef.current);
        setter(true);
      },
      onMouseLeave: () => {
        timerRef.current = setTimeout(() => setter(false), 120);
      },
    }),
    [],
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
  const practiceActive =
    PRACTICE_LINKS.some((l) => isActive(l.to)) ||
    isActive("/practice") ||
    loc.pathname.startsWith("/speaking/");

  const navLink = (path: string, label: string, active: boolean) =>
    cn(
      "px-3.5 py-2 rounded-full text-[13px] font-medium transition-colors duration-200 relative",
      active
        ? "text-primary after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-0.5 after:w-4 after:h-px after:bg-primary"
        : "text-[var(--nav-text)] hover:text-[var(--nav-text-hover)] hover:bg-[var(--nav-hover-bg)]",
    );

  const dropdownItem = (active: boolean) =>
    cn(
      "block mx-1.5 px-3.5 py-2 rounded-lg text-[13px] transition-colors",
      active
        ? "text-primary bg-primary/5 font-medium"
        : "text-[var(--nav-text)] hover:bg-[var(--nav-hover-bg)] hover:text-[var(--nav-text-hover)]",
    );

  const dropdownPanel =
    "bg-[var(--nav-dropdown-bg)] border border-[var(--nav-border)] rounded-2xl shadow-warm py-2 overflow-hidden";

  return (
    <div className="min-h-screen flex flex-col">
      {/* ─── NAVIGATION ─────────────────────────────────────────── */}
      <header className="glass-nav sticky top-0 z-40">
        <div className="container mx-auto px-4 flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <span className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
              <GrassBlock size={18} />
            </span>
            <span className="font-serif text-[15px] tracking-tight text-foreground leading-tight hidden sm:block">
              Abduraimov <span className="italic text-primary">Erkinjon</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link to="/" className={navLink("/", "Home", isActive("/"))}>
              Home
            </Link>

            {/* Practice dropdown — state-driven for reliable nested flyouts */}
            <div className="relative" {...makeHover(setPracticeOpen, practiceTimer)}>
              <Link
                to="/practice"
                className={cn(
                  "px-3.5 py-2 rounded-full text-[13px] font-medium transition-colors duration-200 inline-flex items-center gap-1 relative",
                  practiceActive
                    ? "text-primary"
                    : "text-[var(--nav-text)] hover:text-[var(--nav-text-hover)] hover:bg-[var(--nav-hover-bg)]",
                )}
              >
                Practice{" "}
                <ChevronDown
                  className={cn(
                    "w-3 h-3 opacity-60 transition-transform",
                    practiceOpen && "rotate-180",
                  )}
                />
              </Link>
              {practiceOpen && (
                <div className="absolute left-0 top-full pt-2 z-50">
                  <div className={cn(dropdownPanel, "min-w-[180px] !overflow-visible")}>
                    {/* Listening */}
                    <Link to="/listening" className={dropdownItem(isActive("/listening"))}>
                      Listening
                    </Link>

                    {/* Reading flyout */}
                    <div className="relative" {...makeHover(setReadingOpen, readingTimer)}>
                      <Link
                        to="/reading"
                        className={cn(
                          dropdownItem(isActive("/reading")),
                          "flex items-center justify-between",
                        )}
                      >
                        Reading <ChevronRight className="w-3 h-3 opacity-50" />
                      </Link>
                      {readingOpen && (
                        <div className="absolute left-full top-0 pl-1 z-50">
                          <div className={cn(dropdownPanel, "min-w-[150px]")}>
                            {(["1", "2", "3"] as const).map((n) => (
                              <Link
                                key={n}
                                to="/reading"
                                search={{ passage: n } as any}
                                className={dropdownItem(false)}
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
                          dropdownItem(isActive("/writing")),
                          "flex items-center justify-between",
                        )}
                      >
                        Writing <ChevronRight className="w-3 h-3 opacity-50" />
                      </Link>
                      {writingOpen && (
                        <div className="absolute left-full top-0 pl-1 z-50">
                          <div className={cn(dropdownPanel, "min-w-[160px]")}>
                            {([1, 2] as const).map((n) => (
                              <Link
                                key={n}
                                to="/writing"
                                search={{ task: String(n) } as any}
                                className={dropdownItem(false)}
                              >
                                Task {n}
                              </Link>
                            ))}
                            <div className="h-px bg-[var(--nav-border)] mx-4 my-1.5" />
                            {(["t1-samples", "t2-samples"] as const).map((key) => (
                              <Link
                                key={key}
                                to="/writing"
                                search={{ task: key } as any}
                                className={dropdownItem(false)}
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
                          dropdownItem(
                            isActive("/speaking") || loc.pathname.startsWith("/speaking/"),
                          ),
                          "flex items-center justify-between",
                        )}
                      >
                        Speaking <ChevronRight className="w-3 h-3 opacity-50" />
                      </Link>
                      {speakingOpen && (
                        <div className="absolute left-full top-0 pl-1 z-50">
                          <div className={cn(dropdownPanel, "min-w-[190px]")}>
                            <Link
                              to="/speaking/pronunciation"
                              className={dropdownItem(isActive("/speaking/pronunciation"))}
                            >
                              Pronunciation
                            </Link>
                            <Link
                              to="/speaking/topics-explained"
                              className={dropdownItem(isActive("/speaking/topics-explained"))}
                            >
                              Topics Explained
                            </Link>
                            <Link
                              to="/speaking/written-samples"
                              className={dropdownItem(isActive("/speaking/written-samples"))}
                            >
                              Written Samples
                            </Link>
                            <div className="h-px bg-[var(--nav-border)] mx-4 my-1.5" />
                            {([1, 2, 3] as const).map((p) => (
                              <Link
                                key={p}
                                to="/speaking/written-samples"
                                search={{ part: p } as any}
                                className={cn(dropdownItem(false), "pl-6 text-xs")}
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

            <Link to="/videos" className={navLink("/videos", "Video Lessons", isActive("/videos"))}>
              Video Lessons
            </Link>
            <Link
              to="/articles"
              className={navLink("/articles", "Articles", isActive("/articles"))}
            >
              Articles
            </Link>
            <Link
              to="/contact-about"
              className={navLink("/contact-about", "Contact & About", isActive("/contact-about"))}
            >
              Contact &amp; About
            </Link>
          </nav>

          {/* Desktop auth */}
          <div className="hidden lg:flex items-center gap-1.5">
            {/* Dark/Light mode toggle */}
            <button
              onClick={toggleTheme}
              title="Toggle Dark/Light Mode"
              aria-label="Toggle Dark/Light Mode"
              className="w-9 h-9 rounded-full flex items-center justify-center text-[var(--nav-text)] hover:text-[var(--nav-text-hover)] hover:bg-[var(--nav-hover-bg)] transition-colors cursor-pointer"
            >
              {theme === "dark" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>
            {user && (
              <Link
                to="/vocabulary"
                className="relative inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full hover:bg-[var(--nav-hover-bg)] transition-colors text-[13px] font-medium text-primary"
                aria-label="Vocabulary"
              >
                <BookOpen className="w-4 h-4" />
                <span>Vocabulary</span>
                {due && due.count > 0 && (
                  <span className="bg-primary text-primary-foreground text-[10px] font-semibold min-w-[18px] h-[18px] px-1 rounded-full flex items-center justify-center">
                    {due.count}
                  </span>
                )}
              </Link>
            )}
            {user ? (
              <>
                {profile?.is_premium && (
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold tracking-[0.14em] uppercase text-[var(--ochre-deep)] bg-[var(--ochre-wash)] px-2.5 py-1 rounded-full border border-[var(--ochre)]/30">
                    <Crown className="w-3 h-3" /> Premium
                  </span>
                )}
                <Link to="/account">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-[13px] h-8 text-[var(--nav-text)] hover:text-[var(--nav-text-hover)]"
                  >
                    <UserIcon className="w-3.5 h-3.5 mr-1.5" /> Account
                  </Button>
                </Link>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 text-[var(--nav-text)] hover:text-[var(--nav-text-hover)]"
                  onClick={() => signOut()}
                >
                  <LogOut className="w-3.5 h-3.5" />
                </Button>
              </>
            ) : (
              <>
                <Link to="/auth">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-[13px] h-8 text-[var(--nav-text)] hover:text-[var(--nav-text-hover)]"
                  >
                    Sign In
                  </Button>
                </Link>
                <Link to="/premium">
                  <Button size="sm" className="h-8 text-xs">
                    Go Premium
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-[var(--nav-hover-bg)] transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? (
              <X className="w-5 h-5 text-foreground" />
            ) : (
              <Menu className="w-5 h-5 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden border-t border-[var(--nav-border)] bg-[var(--nav-dropdown-bg)]">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-0.5">
              <Link
                to="/"
                onClick={() => setOpen(false)}
                className={cn(
                  "py-2.5 px-3 rounded-lg text-sm font-medium transition-colors",
                  isActive("/")
                    ? "text-primary bg-primary/5"
                    : "text-[var(--nav-text)] hover:bg-[var(--nav-hover-bg)] hover:text-[var(--nav-text-hover)]",
                )}
              >
                Home
              </Link>
              <Link
                to="/practice"
                onClick={() => setOpen(false)}
                className={cn(
                  "py-2.5 px-3 rounded-lg text-sm font-medium transition-colors",
                  practiceActive
                    ? "text-primary bg-primary/5"
                    : "text-[var(--nav-text)] hover:bg-[var(--nav-hover-bg)] hover:text-[var(--nav-text-hover)]",
                )}
              >
                Practice
              </Link>
              <div className="pl-5 flex flex-col border-l border-primary/25 ml-3">
                <Link
                  to="/listening"
                  onClick={() => setOpen(false)}
                  className="py-2 text-sm text-[var(--nav-text)] hover:text-[var(--nav-text-hover)]"
                >
                  Listening
                </Link>
                <Link
                  to="/reading"
                  onClick={() => setOpen(false)}
                  className="py-2 text-sm text-[var(--nav-text)] hover:text-[var(--nav-text-hover)]"
                >
                  Reading
                </Link>
                <div className="pl-4 flex flex-col border-l border-primary/15 ml-1 mb-0.5">
                  {(["1", "2", "3"] as const).map((n) => (
                    <Link
                      key={n}
                      to="/reading"
                      search={{ passage: n } as any}
                      onClick={() => setOpen(false)}
                      className="py-1.5 text-[13px] text-muted-foreground hover:text-foreground"
                    >
                      Passage {n}
                    </Link>
                  ))}
                </div>
                <Link
                  to="/writing"
                  onClick={() => setOpen(false)}
                  className="py-2 text-sm text-[var(--nav-text)] hover:text-[var(--nav-text-hover)]"
                >
                  Writing
                </Link>
                <div className="pl-4 flex flex-col border-l border-primary/15 ml-1 mb-0.5">
                  {([1, 2] as const).map((n) => (
                    <Link
                      key={n}
                      to="/writing"
                      search={{ task: String(n) } as any}
                      onClick={() => setOpen(false)}
                      className="py-1.5 text-[13px] text-muted-foreground hover:text-foreground"
                    >
                      Task {n}
                    </Link>
                  ))}
                  {(["t1-samples", "t2-samples"] as const).map((key) => (
                    <Link
                      key={key}
                      to="/writing"
                      search={{ task: key } as any}
                      onClick={() => setOpen(false)}
                      className="py-1.5 text-[13px] text-muted-foreground hover:text-foreground"
                    >
                      {key === "t1-samples" ? "Task 1 Samples" : "Task 2 Samples"}
                    </Link>
                  ))}
                </div>
                <Link
                  to="/speaking"
                  onClick={() => setOpen(false)}
                  className="py-2 text-sm text-[var(--nav-text)] hover:text-[var(--nav-text-hover)]"
                >
                  Speaking
                </Link>
                <div className="pl-4 flex flex-col border-l border-primary/15 ml-1 mb-0.5">
                  <Link
                    to="/speaking/pronunciation"
                    onClick={() => setOpen(false)}
                    className="py-1.5 text-[13px] text-muted-foreground hover:text-foreground"
                  >
                    Pronunciation
                  </Link>
                  <Link
                    to="/speaking/topics-explained"
                    onClick={() => setOpen(false)}
                    className="py-1.5 text-[13px] text-muted-foreground hover:text-foreground"
                  >
                    Topics Explained
                  </Link>
                  <Link
                    to="/speaking/written-samples"
                    onClick={() => setOpen(false)}
                    className="py-1.5 text-[13px] text-muted-foreground hover:text-foreground"
                  >
                    Written Samples
                  </Link>
                  <div className="pl-4 flex flex-col border-l border-primary/10 ml-1 mb-0.5">
                    {([1, 2, 3] as const).map((p) => (
                      <Link
                        key={p}
                        to="/speaking/written-samples"
                        search={{ part: p } as any}
                        onClick={() => setOpen(false)}
                        className="py-1.5 text-[13px] text-muted-foreground hover:text-foreground"
                      >
                        Samples · Part {p}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <Link
                to="/videos"
                onClick={() => setOpen(false)}
                className={cn(
                  "py-2.5 px-3 rounded-lg text-sm font-medium transition-colors",
                  isActive("/videos")
                    ? "text-primary bg-primary/5"
                    : "text-[var(--nav-text)] hover:bg-[var(--nav-hover-bg)] hover:text-[var(--nav-text-hover)]",
                )}
              >
                Video Lessons
              </Link>
              <Link
                to="/articles"
                onClick={() => setOpen(false)}
                className={cn(
                  "py-2.5 px-3 rounded-lg text-sm font-medium transition-colors",
                  isActive("/articles")
                    ? "text-primary bg-primary/5"
                    : "text-[var(--nav-text)] hover:bg-[var(--nav-hover-bg)] hover:text-[var(--nav-text-hover)]",
                )}
              >
                Articles
              </Link>
              <Link
                to="/vocabulary"
                onClick={() => setOpen(false)}
                className={cn(
                  "py-2.5 px-3 rounded-lg text-sm font-medium transition-colors",
                  isActive("/vocabulary")
                    ? "text-primary bg-primary/5"
                    : "text-[var(--nav-text)] hover:bg-[var(--nav-hover-bg)] hover:text-[var(--nav-text-hover)]",
                )}
              >
                Vocabulary
              </Link>
              <Link
                to="/contact-about"
                onClick={() => setOpen(false)}
                className={cn(
                  "py-2.5 px-3 rounded-lg text-sm font-medium transition-colors",
                  isActive("/contact-about")
                    ? "text-primary bg-primary/5"
                    : "text-[var(--nav-text)] hover:bg-[var(--nav-hover-bg)] hover:text-[var(--nav-text-hover)]",
                )}
              >
                Contact &amp; About
              </Link>
              <div className="pt-3 border-t border-[var(--nav-border)] mt-2">
                <button
                  onClick={toggleTheme}
                  className="w-full flex items-center gap-3 py-2.5 px-3 rounded-lg text-sm font-medium text-[var(--nav-text)] hover:bg-[var(--nav-hover-bg)] transition-colors"
                >
                  {theme === "dark" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
                  {theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
                </button>
              </div>
              <div className="pt-2 border-t border-[var(--nav-border)] flex flex-col gap-2">
                {user ? (
                  <>
                    <Link to="/account" onClick={() => setOpen(false)}>
                      <Button variant="outline" className="w-full text-sm">
                        Account
                      </Button>
                    </Link>
                    <Button
                      variant="ghost"
                      className="text-sm text-[var(--nav-text)] hover:text-[var(--nav-text-hover)]"
                      onClick={() => {
                        signOut();
                        setOpen(false);
                      }}
                    >
                      Sign out
                    </Button>
                  </>
                ) : (
                  <>
                    <Link to="/auth" onClick={() => setOpen(false)}>
                      <Button variant="outline" className="w-full text-sm">
                        Sign In
                      </Button>
                    </Link>
                    <Link to="/premium" onClick={() => setOpen(false)}>
                      <Button className="w-full text-sm">Go Premium</Button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </header>

      {deviceConflict && (
        <div className="bg-destructive/10 border-b border-destructive/30 text-destructive">
          <div className="container mx-auto px-4 py-3 text-sm font-medium">
            This premium account is active on another device. Please log out from your other device
            first, or contact the teacher to reset.
          </div>
        </div>
      )}

      <main className="flex-1">{children}</main>

      {/* ─── FOOTER ─────────────────────────────────────────────── */}
      <footer className="border-t border-border bg-card/60 mt-20">
        <div className="container mx-auto px-4 py-16 grid gap-12 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5 mb-5">
              <span className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                <GrassBlock size={18} />
              </span>
              <span className="font-serif text-lg text-foreground leading-tight">
                Abduraimov <span className="italic text-primary">Erkinjon</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Guided IELTS preparation from a Band 8.0 teacher in Fergana, Uzbekistan — patient
              lessons, honest feedback, real results.
            </p>
          </div>

          {/* Explore */}
          <div className="md:col-span-2">
            <h4 className="eyebrow text-foreground/70 mb-5">Explore</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/practice"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Practice
                </Link>
              </li>
              <li>
                <Link
                  to="/videos"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Video Lessons
                </Link>
              </li>
              <li>
                <Link
                  to="/articles"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Articles
                </Link>
              </li>
              <li>
                <Link
                  to="/vocabulary"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Vocabulary
                </Link>
              </li>
              <li>
                <Link
                  to="/premium"
                  className="text-[var(--ochre)] hover:text-[var(--ochre-deep)] transition-colors font-medium"
                >
                  Premium
                </Link>
              </li>
            </ul>
          </div>

          {/* Practice */}
          <div className="md:col-span-2">
            <h4 className="eyebrow text-foreground/70 mb-5">Practice</h4>
            <ul className="space-y-3 text-sm">
              {PRACTICE_LINKS.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="md:col-span-3">
            <h4 className="eyebrow text-foreground/70 mb-5">Connect</h4>
            <div className="flex flex-col gap-3 text-sm">
              <a
                href="https://www.youtube.com/@erkinjon_writes"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 text-muted-foreground hover:text-primary transition-colors"
              >
                <Youtube className="w-4 h-4" /> YouTube Channel
              </a>
              <a
                href="https://t.me/augustus_flores"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 text-muted-foreground hover:text-primary transition-colors"
              >
                <Send className="w-4 h-4" /> Telegram Channel
              </a>
              <a
                href="https://t.me/augustus_at"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 text-muted-foreground hover:text-primary transition-colors"
              >
                <MessageCircle className="w-4 h-4" /> Personal Telegram
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border">
          <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
            <span>© {new Date().getFullYear()} Abduraimov Erkinjon</span>
            <span className="font-serif italic text-sm text-foreground/60">
              Lo studio è il viaggio — made with care in Uzbekistan
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
