import { ReactNode, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { Menu, X, Youtube, Send, GraduationCap, LogOut, User as UserIcon, Crown, ChevronDown, ChevronRight, Bell, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/use-auth";
import { cn } from "@/lib/utils";
import { supabase } from "@/integrations/supabase/client";

const PRACTICE_LINKS = [
  { to: "/listening" as const, label: "Listening" },
  { to: "/reading" as const, label: "Reading" },
  { to: "/writing" as const, label: "Writing" },
  { to: "/speaking" as const, label: "Speaking" },
];

export function SiteLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const { user, profile, signOut, deviceConflict } = useAuth();
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
      "px-3.5 py-2 rounded-md font-mono text-xs tracking-wide transition-colors duration-150",
      active
        ? "text-primary font-semibold relative after:absolute after:bottom-0 after:left-3 after:right-3 after:h-[2px] after:rounded-full after:bg-primary"
        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
    );

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="glass-nav sticky top-0 z-40 border-b border-border/40 shadow-[0_1px_16px_rgba(44,42,70,0.06)]">
        <div className="container mx-auto px-4 flex items-center justify-between h-14">
          <Link to="/" className="flex items-center gap-2.5 group">
            <span className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center shadow-soft transition-transform group-hover:scale-105">
              <GraduationCap className="w-4 h-4 text-white" />
            </span>
            <span className="font-serif text-[1.05rem] font-semibold tracking-tight text-foreground">
              Abduraimov Erkinjon
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-0.5">
            <Link to="/" className={navLink("/", "Home", isActive("/"))}>
              Home
            </Link>

            <div className="relative group">
              <Link
                to="/practice"
                className={cn(
                  "px-3.5 py-2 rounded-md font-mono text-xs tracking-wide transition-colors duration-150 inline-flex items-center gap-1",
                  practiceActive
                    ? "text-primary font-semibold"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                )}
              >
                Practice <ChevronDown className="w-3 h-3 opacity-60 transition-transform group-hover:rotate-180" />
              </Link>

              <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
                {/* overflow-visible so nested submenus can extend outside this panel */}
                <div className="bg-card border border-border rounded-xl shadow-[0_8px_32px_rgba(43,64,128,0.12)] py-1.5 min-w-[160px]">
                  <div className="h-[2px] w-full mb-1 rounded-t-xl overflow-hidden" style={{ background: "linear-gradient(90deg, #F5D5CB 0%, #4A9B7A 100%)" }} />

                  <Link
                    to="/listening"
                    className={cn(
                      "block px-4 py-2 font-mono text-[11px] tracking-wide transition-colors",
                      isActive("/listening") ? "bg-accent/60 text-foreground font-semibold" : "text-muted-foreground hover:bg-accent/30 hover:text-foreground"
                    )}
                  >
                    Listening
                  </Link>

                  <div className="relative group/reading">
                    <Link
                      to="/reading"
                      className={cn(
                        "flex items-center justify-between px-4 py-2 font-mono text-[11px] tracking-wide transition-colors",
                        isActive("/reading") ? "bg-accent/60 text-foreground font-semibold" : "text-muted-foreground hover:bg-accent/30 hover:text-foreground"
                      )}
                    >
                      Reading <ChevronRight className="w-3 h-3 opacity-50" />
                    </Link>

                    <div className="absolute left-full top-0 pl-1.5 opacity-0 invisible group-hover/reading:opacity-100 group-hover/reading:visible transition-all duration-150 z-50">
                      <div className="bg-card border border-border rounded-xl shadow-[0_8px_32px_rgba(43,64,128,0.12)] py-1.5 min-w-[130px] overflow-hidden">
                        <div className="h-[2px] w-full mb-1" style={{ background: "linear-gradient(90deg, #F5D5CB 0%, #4A9B7A 100%)" }} />
                        {(["1", "2", "3"] as const).map((n) => (
                          <Link
                            key={n}
                            to="/reading"
                            search={{ passage: n } as any}
                            className="block px-4 py-2 font-mono text-[11px] tracking-wide transition-colors text-muted-foreground hover:bg-accent/30 hover:text-foreground"
                          >
                            Passage {n}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="relative group/writing">
                    <Link
                      to="/writing"
                      className={cn(
                        "flex items-center justify-between px-4 py-2 font-mono text-[11px] tracking-wide transition-colors",
                        isActive("/writing") ? "bg-accent/60 text-foreground font-semibold" : "text-muted-foreground hover:bg-accent/30 hover:text-foreground"
                      )}
                    >
                      Writing <ChevronRight className="w-3 h-3 opacity-50" />
                    </Link>

                    <div className="absolute left-full top-0 pl-1.5 opacity-0 invisible group-hover/writing:opacity-100 group-hover/writing:visible transition-all duration-150 z-50">
                      <div className="bg-card border border-border rounded-xl shadow-[0_8px_32px_rgba(43,64,128,0.12)] py-1.5 min-w-[120px] overflow-hidden">
                        <div className="h-[2px] w-full mb-1" style={{ background: "linear-gradient(90deg, #F5D5CB 0%, #4A9B7A 100%)" }} />
                        {([1, 2] as const).map((n) => (
                          <Link
                            key={n}
                            to="/writing"
                            search={{ task: String(n) } as any}
                            className="block px-4 py-2 font-mono text-[11px] tracking-wide transition-colors text-muted-foreground hover:bg-accent/30 hover:text-foreground"
                          >
                            Task {n}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="relative group/speaking">
                    <Link
                      to="/speaking"
                      className={cn(
                        "flex items-center justify-between px-4 py-2 font-mono text-[11px] tracking-wide transition-colors",
                        isActive("/speaking") ? "bg-accent/60 text-foreground font-semibold" : "text-muted-foreground hover:bg-accent/30 hover:text-foreground"
                      )}
                    >
                      Speaking <ChevronRight className="w-3 h-3 opacity-50" />
                    </Link>

                    <div className="absolute left-full top-0 pl-1.5 opacity-0 invisible group-hover/speaking:opacity-100 group-hover/speaking:visible transition-all duration-150 z-50">
                      <div className="bg-card border border-border rounded-xl shadow-[0_8px_32px_rgba(43,64,128,0.12)] py-1.5 min-w-[150px] overflow-hidden">
                        <div className="h-[2px] w-full mb-1" style={{ background: "linear-gradient(90deg, #F5D5CB 0%, #4A9B7A 100%)" }} />
                        <Link
                          to="/speaking/pronunciation"
                          className="block px-4 py-2 font-mono text-[11px] tracking-wide transition-colors text-muted-foreground hover:bg-accent/30 hover:text-foreground"
                        >
                          Pronunciation
                        </Link>
                        <Link
                          to="/speaking/topics-explained"
                          className="block px-4 py-2 font-mono text-[11px] tracking-wide transition-colors text-muted-foreground hover:bg-accent/30 hover:text-foreground"
                        >
                          Topics Explained
                        </Link>
                        <span className="block px-4 py-2 font-mono text-[11px] tracking-wide text-muted-foreground/40 cursor-not-allowed">
                          Written Samples
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Link to="/videos" className={navLink("/videos", "Video Lessons", isActive("/videos"))}>
              Video Lessons
            </Link>

            <Link to="/articles" className={navLink("/articles", "Articles", isActive("/articles"))}>
              Articles
            </Link>

            <Link to="/contact-about" className={navLink("/contact-about", "Contact & About", isActive("/contact-about"))}>
              Contact & About
            </Link>
          </nav>

          <div className="hidden lg:flex items-center gap-1.5">
            {user && due && due.count > 0 && (
              <Link
                to="/vocabulary"
                className="relative inline-flex items-center p-2 rounded-md hover:bg-muted/50 transition-colors"
                aria-label="Vocabulary due"
              >
                <Bell className="w-4 h-4 text-secondary" />
                <span className="absolute -top-0.5 -right-0.5 bg-[#C07850] text-white text-[10px] font-mono font-bold rounded-full min-w-[16px] h-4 px-1 flex items-center justify-center">
                  {due.count}
                </span>
              </Link>
            )}

            {user ? (
              <>
                {profile?.is_premium && (
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono font-semibold text-[#C07850] bg-[#C07850]/10 px-2.5 py-1 rounded-full border border-[#C07850]/20 tracking-wide">
                    <Crown className="w-3 h-3" /> Premium
                  </span>
                )}

                <Link to="/account">
                  <Button variant="ghost" size="sm" className="font-mono text-xs tracking-wide h-8">
                    <UserIcon className="w-3.5 h-3.5 mr-1.5" /> Account
                  </Button>
                </Link>

                <Button variant="ghost" size="sm" className="h-8" onClick={() => signOut()}>
                  <LogOut className="w-3.5 h-3.5" />
                </Button>
              </>
            ) : (
              <>
                <Link to="/auth">
                  <Button variant="ghost" size="sm" className="font-mono text-xs tracking-wide h-8">
                    Sign In
                  </Button>
                </Link>

                <Link to="/premium">
                  <Button size="sm" className="bg-gradient-primary text-white shadow-soft hover:opacity-90 h-8 text-xs font-mono tracking-wide rounded-lg active:scale-95 transition-all">
                    Go Premium
                  </Button>
                </Link>
              </>
            )}
          </div>

          <button className="lg:hidden p-2 rounded-md hover:bg-muted/50 transition-colors" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        <div className="h-[2px] w-full" style={{ background: "linear-gradient(90deg, #F5D5CB 0%, #EAC4D5 45%, #4A9B7A 100%)" }} />

        {open && (
          <div className="lg:hidden border-t border-border/50 bg-background/95 backdrop-blur-md">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-0.5">
              <Link to="/" onClick={() => setOpen(false)} className={cn("py-2.5 px-3 rounded-md font-mono text-xs tracking-wide transition-colors", isActive("/") ? "text-primary bg-primary/8 font-semibold" : "hover:bg-muted/50")}>
                Home
              </Link>

              <Link to="/practice" onClick={() => setOpen(false)} className={cn("py-2.5 px-3 rounded-md font-mono text-xs tracking-wide transition-colors", practiceActive ? "text-primary bg-primary/8 font-semibold" : "hover:bg-muted/50")}>
                Practice
              </Link>

              <div className="pl-5 flex flex-col border-l-2 border-accent ml-3">
                <Link to="/listening" onClick={() => setOpen(false)} className="py-2 font-mono text-xs text-muted-foreground hover:text-foreground tracking-wide">
                  Listening
                </Link>

                <Link to="/reading" onClick={() => setOpen(false)} className="py-2 font-mono text-xs text-muted-foreground hover:text-foreground tracking-wide">
                  Reading
                </Link>

                <div className="pl-4 flex flex-col border-l border-accent/50 ml-1 mb-0.5">
                  {(["1", "2", "3"] as const).map((n) => (
                    <Link key={n} to="/reading" search={{ passage: n } as any} onClick={() => setOpen(false)} className="py-1.5 font-mono text-[11px] text-muted-foreground/70 hover:text-foreground tracking-wide">
                      Passage {n}
                    </Link>
                  ))}
                </div>

                <Link to="/writing" onClick={() => setOpen(false)} className="py-2 font-mono text-xs text-muted-foreground hover:text-foreground tracking-wide">
                  Writing
                </Link>

                <div className="pl-4 flex flex-col border-l border-accent/50 ml-1 mb-0.5">
                  {([1, 2] as const).map((n) => (
                    <Link key={n} to="/writing" search={{ task: String(n) } as any} onClick={() => setOpen(false)} className="py-1.5 font-mono text-[11px] text-muted-foreground/70 hover:text-foreground tracking-wide">
                      Task {n}
                    </Link>
                  ))}
                </div>

                <Link to="/speaking" onClick={() => setOpen(false)} className="py-2 font-mono text-xs text-muted-foreground hover:text-foreground tracking-wide">
                  Speaking
                </Link>

                <div className="pl-4 flex flex-col border-l border-accent/50 ml-1 mb-0.5">
                  <Link to="/speaking/pronunciation" onClick={() => setOpen(false)} className="py-1.5 font-mono text-[11px] text-muted-foreground/70 hover:text-foreground tracking-wide">
                    Pronunciation
                  </Link>
                  <Link to="/speaking/topics-explained" onClick={() => setOpen(false)} className="py-1.5 font-mono text-[11px] text-muted-foreground/70 hover:text-foreground tracking-wide">
                    Topics Explained
                  </Link>
                </div>
              </div>

              <Link to="/videos" onClick={() => setOpen(false)} className={cn("py-2.5 px-3 rounded-md font-mono text-xs tracking-wide transition-colors", isActive("/videos") ? "text-primary bg-primary/8 font-semibold" : "hover:bg-muted/50")}>
                Video Lessons
              </Link>

              <Link to="/articles" onClick={() => setOpen(false)} className={cn("py-2.5 px-3 rounded-md font-mono text-xs tracking-wide transition-colors", isActive("/articles") ? "text-primary bg-primary/8 font-semibold" : "hover:bg-muted/50")}>
                Articles
              </Link>

              <Link to="/vocabulary" onClick={() => setOpen(false)} className={cn("py-2.5 px-3 rounded-md font-mono text-xs tracking-wide transition-colors", isActive("/vocabulary") ? "text-primary bg-primary/8 font-semibold" : "hover:bg-muted/50")}>
                Vocabulary
              </Link>

              <Link to="/contact-about" onClick={() => setOpen(false)} className={cn("py-2.5 px-3 rounded-md font-mono text-xs tracking-wide transition-colors", isActive("/contact-about") ? "text-primary bg-primary/8 font-semibold" : "hover:bg-muted/50")}>
                Contact & About
              </Link>

              <div className="pt-4 border-t border-border mt-2 flex flex-col gap-2">
                {user ? (
                  <>
                    <Link to="/account" onClick={() => setOpen(false)}>
                      <Button variant="outline" className="w-full font-mono text-xs tracking-wide">
                        Account
                      </Button>
                    </Link>

                    <Button variant="ghost" className="font-mono text-xs tracking-wide" onClick={() => { signOut(); setOpen(false); }}>
                      Sign out
                    </Button>
                  </>
                ) : (
                  <>
                    <Link to="/auth" onClick={() => setOpen(false)}>
                      <Button variant="outline" className="w-full font-mono text-xs tracking-wide">
                        Sign In
                      </Button>
                    </Link>

                    <Link to="/premium" onClick={() => setOpen(false)}>
                      <Button className="w-full bg-gradient-primary text-white font-mono text-xs tracking-wide">
                        Go Premium
                      </Button>
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
          <div className="container mx-auto px-4 py-3 font-mono text-xs font-medium tracking-wide">
            ⚠ This premium account is active on another device. Please log out from your other device first, or contact the teacher to reset.
          </div>
        </div>
      )}

      <main className="flex-1">{children}</main>

      <footer className="border-t border-border/60 bg-muted/30 mt-16">
        <div className="h-[2px] w-full" style={{ background: "linear-gradient(90deg, transparent 0%, #F5D5CB 30%, #4A9B7A 70%, transparent 100%)" }} />

        <div className="container mx-auto px-4 py-14 grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center shadow-soft">
                <GraduationCap className="w-4 h-4 text-white" />
              </span>
              <span className="font-serif text-base font-semibold">Abduraimov Erkinjon</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Guided IELTS preparation from a Band 8.0 teacher in Fergana, Uzbekistan.
            </p>
          </div>

          <div>
            <h4 className="font-mono font-semibold mb-4 text-[11px] tracking-widest uppercase text-muted-foreground/80">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/practice" className="text-muted-foreground hover:text-primary transition-colors underline decoration-border underline-offset-3">
                  Practice
                </Link>
              </li>
              <li>
                <Link to="/videos" className="text-muted-foreground hover:text-primary transition-colors underline decoration-border underline-offset-3">
                  Video Lessons
                </Link>
              </li>
              <li>
                <Link to="/articles" className="text-muted-foreground hover:text-primary transition-colors underline decoration-border underline-offset-3">
                  Articles
                </Link>
              </li>
              <li>
                <Link to="/vocabulary" className="text-muted-foreground hover:text-primary transition-colors underline decoration-border underline-offset-3">
                  Vocabulary Practice
                </Link>
              </li>
              <li>
                <Link to="/premium" className="text-muted-foreground hover:text-primary transition-colors underline decoration-border underline-offset-3">
                  Premium
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono font-semibold mb-4 text-[11px] tracking-widest uppercase text-muted-foreground/80">
              Connect
            </h4>
            <div className="flex flex-col gap-3">
              <a href="https://www.youtube.com/@erkinjon_writes" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors group">
                <Youtube className="w-4 h-4 text-[#FF0000] group-hover:scale-110 transition-transform" /> YouTube Channel
              </a>

              <a href="https://t.me/augustus_flores" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors group">
                <Send className="w-4 h-4 text-[#229ED9] group-hover:scale-110 transition-transform" /> Telegram Channel
              </a>

              <a href="https://t.me/augustus_at" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors group">
                <MessageCircle className="w-4 h-4 text-secondary group-hover:scale-110 transition-transform" /> Personal Telegram
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border/40 py-5 text-center font-mono text-[11px] tracking-wider text-muted-foreground/60">
          © {new Date().getFullYear()} Abduraimov Erkinjon — Precision in Language — Made with care in Uzbekistan
        </div>
      </footer>
    </div>
  );
}
