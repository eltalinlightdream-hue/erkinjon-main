import { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/use-auth";

export function PremiumGate({ children, label = "Premium content" }: { children: ReactNode; label?: string }) {
  const { profile, deviceConflict, user } = useAuth();
  const unlocked = !!profile?.is_premium && !deviceConflict;
  if (unlocked) return <>{children}</>;
  return (
    <div className="relative rounded-2xl border border-border overflow-hidden">
      {/* Blurred preview */}
      <div className="pointer-events-none select-none blur-sm opacity-35 p-6 max-h-64 overflow-hidden">
        {children}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8"
        style={{ background: "linear-gradient(to bottom, rgba(248,246,242,0.2) 0%, rgba(248,246,242,0.97) 45%)" }}>
        <span className="w-14 h-14 rounded-2xl bg-gradient-primary inline-flex items-center justify-center shadow-warm mb-4">
          <Crown className="w-6 h-6 text-white" />
        </span>
        <p className="font-serif text-lg font-semibold mb-1">{label}</p>
        <p className="font-mono text-[11px] text-muted-foreground mb-5 max-w-xs leading-relaxed tracking-wide">
          Unlock model answers, PDFs, video attachments and more with Premium Access.
        </p>
        <Link to={user ? "/premium" : "/auth"}>
          <Button
            size="sm"
            className="bg-gradient-primary text-white font-mono text-[11px] tracking-wider active:scale-95 transition-all"
          >
            <Crown className="w-3.5 h-3.5 mr-1.5" /> Unlock with Premium
          </Button>
        </Link>
      </div>
    </div>
  );
}
