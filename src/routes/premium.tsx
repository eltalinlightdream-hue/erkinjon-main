import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { SiteLayout } from "@/components/site-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check, Crown, Send, Lock, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useAuth } from "@/hooks/use-auth";
import { getDeviceFingerprint } from "@/lib/fingerprint";
import { redeemActivationCode } from "@/lib/premium.functions";

export const Route = createFileRoute("/premium")({
  head: () => ({
    meta: [
      { title: "Premium Access — Abduraimov Erkinjon" },
      { name: "description", content: "Unlock all model answers, premium PDFs, video attachments and 1-on-1 feedback channels." },
      { property: "og:title", content: "Premium IELTS Access" },
      { property: "og:description", content: "Unlock all premium IELTS materials and lessons." },
    ],
  }),
  component: Premium,
});

const FEATURES = [
  "Full library of Band 8.0+ model answers (Writing Task 1 & 2)",
  "Speaking Part 1, 2, 3 model answers with audio cues",
  "Premium PDFs: vocabulary lists, grammar packs, exam strategies",
  "Attached worksheets on every video lesson",
  "Priority replies on Telegram",
  "Lifetime access — no monthly fee",
];

function Premium() {
  const { user, profile, refreshProfile } = useAuth();
  const navigate = useNavigate();
  const redeem = useServerFn(redeemActivationCode);
  const [code, setCode] = useState("");
  const [busy, setBusy] = useState(false);

  const isPremium = !!profile?.is_premium;

  const onRedeem = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      navigate({ to: "/auth" });
      return;
    }
    if (!code.trim()) return;
    setBusy(true);
    try {
      await redeem({ data: { code: code.trim(), deviceFingerprint: getDeviceFingerprint() } });
      toast.success("Premium activated! Welcome aboard.");
      setCode("");
      await refreshProfile();
      navigate({ to: "/account" });
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Could not redeem code.";
      toast.error(msg);
    } finally {
      setBusy(false);
    }
  };

  return (
    <SiteLayout>
      {/* Hero */}
      <div className="relative overflow-hidden border-b border-border/40 bg-gradient-warm">
        <div className="absolute top-0 right-0 w-[500px] h-[300px] rounded-full opacity-20 blur-[100px] pointer-events-none"
          style={{ background: "radial-gradient(circle, #C07850 0%, transparent 70%)" }} />
        <div className="container mx-auto px-4 py-16 max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C07850]/10 border border-[#C07850]/25 font-mono text-[11px] tracking-widest text-[#C07850] mb-6">
            <Crown className="w-3.5 h-3.5" /> Premium Access
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Go from Band 6 to Band 7+</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            One-time payment. Lifetime access. All my premium IELTS material in one place.
          </p>
        </div>
      </div>

      <section className="container mx-auto px-4 py-14 max-w-4xl">
        <div className="grid md:grid-cols-[1.2fr,1fr] gap-6">

          {/* Features card */}
          <div className="bento-card rounded-3xl overflow-hidden">
            <div className="h-[3px]" style={{ background: "linear-gradient(90deg, #C07850 0%, #FFD9A8 50%, #D97706 100%)" }} />
            <div className="p-8">
              <h2 className="font-serif text-2xl font-semibold mb-1">What you get</h2>
              <p className="text-sm text-muted-foreground mb-6">Everything below, unlocked instantly.</p>
              <ul className="space-y-3.5 mb-8">
                {FEATURES.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <span className="w-5 h-5 rounded-full bg-secondary/12 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-secondary" />
                    </span>
                    <span className="leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-6 border-t border-border/60">
                <div className="flex items-baseline gap-2.5 mb-1">
                  <span className="text-4xl font-bold font-serif">40,000 UZS</span>
                  <span className="text-sm text-muted-foreground line-through">50,000</span>
                </div>
                <p className="font-mono text-[11px] text-muted-foreground tracking-wide">One-time payment · Lifetime access · One device per account</p>
              </div>
            </div>
          </div>

          {/* Action card */}
          <div className="bento-card rounded-3xl p-8">
            {isPremium ? (
              <div className="text-center py-6">
                <span className="w-16 h-16 rounded-2xl bg-gradient-primary inline-flex items-center justify-center mb-5 shadow-warm">
                  <Crown className="w-7 h-7 text-white" />
                </span>
                <h3 className="font-serif text-xl font-semibold mb-2">You're Premium 🎉</h3>
                <p className="text-sm text-muted-foreground mb-6">Enjoy full access to every model answer, PDF and worksheet.</p>
                <Link to="/account">
                  <Button variant="outline" className="w-full font-mono text-xs tracking-wide">Go to my account</Button>
                </Link>
              </div>
            ) : (
              <>
                <h3 className="font-serif text-xl font-semibold mb-1">Step 1 — Pay via Telegram</h3>
                <p className="text-sm text-muted-foreground mb-5">
                  Message me on Telegram to pay (Payme / Click / cash). I'll send you a personal activation code right after.
                </p>
                <a href="https://t.me/augustus_flores" target="_blank" rel="noreferrer">
                  <Button className="w-full bg-[#229ED9] hover:bg-[#229ED9]/90 text-white mb-7 font-mono text-xs tracking-wide active:scale-95 transition-all">
                    <Send className="w-4 h-4 mr-2" /> Message on Telegram
                  </Button>
                </a>

                <h3 className="font-serif text-xl font-semibold mb-1">Step 2 — Redeem your code</h3>
                <p className="text-sm text-muted-foreground mb-5">
                  Already have a code? Enter it below to unlock instantly.
                </p>
                <form onSubmit={onRedeem} className="space-y-3">
                  <Input
                    value={code}
                    onChange={(e) => setCode(e.target.value.toUpperCase())}
                    placeholder="ABCD-1234"
                    className="font-mono tracking-widest uppercase text-center text-lg h-12 border-border/60 focus:border-primary bg-background"
                    autoComplete="off"
                  />
                  <Button
                    type="submit"
                    disabled={busy || !code.trim()}
                    className="w-full bg-gradient-primary text-white font-mono text-xs tracking-wide h-11 active:scale-95 transition-all"
                  >
                    {busy
                      ? <Loader2 className="w-4 h-4 animate-spin" />
                      : <><Lock className="w-4 h-4 mr-2" /> {user ? "Activate Premium" : "Sign in to activate"}</>
                    }
                  </Button>
                </form>
                {!user && (
                  <p className="font-mono text-[11px] text-muted-foreground mt-4 text-center tracking-wide">
                    You need an account first.{" "}
                    <Link to="/auth" className="text-secondary font-semibold hover:underline">Create one →</Link>
                  </p>
                )}
              </>
            )}
          </div>
        </div>

        <p className="font-mono text-[11px] text-muted-foreground text-center mt-8 max-w-xl mx-auto tracking-wide leading-relaxed">
          Each activation code binds your account to a single device. If you change devices, contact me on Telegram and I'll reset it for you within 24 hours.
        </p>
      </section>
    </SiteLayout>
  );
}
