import { Link } from "@tanstack/react-router";
import { Crown, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/use-auth";

/** True only when the signed-in user has active, device-valid Premium. */
export function useIsPremium(): boolean {
  const { profile, deviceConflict } = useAuth();
  return !!profile?.is_premium && !deviceConflict;
}

/**
 * Absolute overlay for a locked grid card. Drop it inside a container
 * with `position: relative`; tapping it sends the student to Premium
 * (or sign-in first, if they have no account yet).
 */
export function PremiumCardOverlay({ label = "Premium content" }: { label?: string }) {
  const { user } = useAuth();
  return (
    <Link
      to={user ? "/premium" : "/auth"}
      aria-label="Unlock with Premium"
      className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-5 py-6 rounded-[inherit] backdrop-blur-[3px] bg-background/75 transition-colors hover:bg-background/85"
    >
      <span className="w-12 h-12 rounded-2xl bg-gradient-primary inline-flex items-center justify-center shadow-warm mb-3">
        <Crown className="w-5 h-5 text-white" />
      </span>
      <p className="font-serif text-base font-semibold mb-1">{label}</p>
      <p className="font-mono text-[10px] text-muted-foreground mb-3 max-w-[210px] leading-relaxed tracking-wide">
        Become a Premium member to open this.
      </p>
      <span className="inline-flex items-center gap-1.5 rounded-md bg-gradient-primary text-white font-mono text-[11px] tracking-wider px-3 py-1.5">
        <Crown className="w-3.5 h-3.5" /> Unlock with Premium
      </span>
    </Link>
  );
}

/**
 * Full-width notice used to guard a detail route when a student opens
 * a Premium item directly by URL.
 */
export function PremiumRequired({ title = "This is Premium content" }: { title?: string }) {
  const { user } = useAuth();
  return (
    <section className="container mx-auto px-4 py-20 max-w-lg text-center">
      <span className="w-16 h-16 rounded-2xl bg-gradient-primary inline-flex items-center justify-center shadow-warm mb-6">
        <Lock className="w-7 h-7 text-white" />
      </span>
      <h1 className="font-serif text-2xl font-semibold mb-3">{title}</h1>
      <p className="text-muted-foreground mb-8 leading-relaxed">
        This material is only available to Premium members. Unlock the full library — every model
        answer, sample and practice test — with one-time Premium access.
      </p>
      <div className="flex items-center justify-center gap-3 flex-wrap">
        <Link to={user ? "/premium" : "/auth"}>
          <Button className="bg-gradient-primary text-white font-mono text-xs tracking-wider">
            <Crown className="w-4 h-4 mr-1.5" /> {user ? "Become Premium" : "Sign in first"}
          </Button>
        </Link>
      </div>
    </section>
  );
}
