import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { GraduationCap, Loader2, Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";
import { SiteLayout } from "@/components/site-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/reset-password")({
  head: () => ({
    meta: [
      { title: "Reset Password - Abduraimov Erkinjon" },
      { name: "description", content: "Set a new password for your account." },
    ],
  }),
  component: ResetPasswordPage,
});

function ResetPasswordPage() {
  const nav = useNavigate();
  const [ready, setReady] = useState(false);
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const MIN_PASSWORD_LENGTH = 6;

  // Supabase auto-detects the recovery token from the URL hash on load.
  useEffect(() => {
    const { data: sub } = supabase.auth.onAuthStateChange((event) => {
      if (event === "PASSWORD_RECOVERY" || event === "SIGNED_IN") {
        setReady(true);
      }
    });
    // also check if a session already exists
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) setReady(true);
    });
    return () => sub.subscription.unsubscribe();
  }, []);

  return (
    <SiteLayout>
      <section className="container mx-auto max-w-md px-4 py-16">
        <div className="ink-bleed mb-8 text-center">
          <span className="mb-5 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-primary shadow-warm">
            <GraduationCap className="h-8 w-8 text-white" />
          </span>
          <h1 className="text-3xl font-bold">Reset Password</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Choose a new password for your account.
          </p>
        </div>

        <div className="bento-card rounded-3xl p-7">
          <form
            className="space-y-4"
            onSubmit={async (event) => {
              event.preventDefault();
              if (password.length < MIN_PASSWORD_LENGTH) {
                toast.error(`Password must be at least ${MIN_PASSWORD_LENGTH} characters.`);
                return;
              }
              if (password !== confirm) {
                toast.error("Passwords do not match.");
                return;
              }
              if (!ready) {
                toast.error("Reset link is invalid or expired. Request a new one.");
                return;
              }
              setLoading(true);
              const { error } = await supabase.auth.updateUser({ password });
              setLoading(false);
              if (error) {
                toast.error(error.message);
                return;
              }
              await supabase.auth.signOut();
              toast.success("Password updated! You can now sign in.");
              nav({ to: "/auth" });
            }}
          >
            <div>
              <Label htmlFor="new-password">New password</Label>
              <div className="relative">
                <Input
                  id="new-password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  minLength={MIN_PASSWORD_LENGTH}
                  autoComplete="new-password"
                  required
                  className="pr-10"
                />
                <button
                  type="button"
                  tabIndex={-1}
                  onClick={() => setShowPassword((s) => !s)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                At least {MIN_PASSWORD_LENGTH} characters
              </p>
            </div>
            <div>
              <Label htmlFor="confirm-password">Confirm new password</Label>
              <div className="relative">
                <Input
                  id="confirm-password"
                  type={showPassword ? "text" : "password"}
                  value={confirm}
                  onChange={(e) => setConfirm(e.target.value)}
                  minLength={MIN_PASSWORD_LENGTH}
                  autoComplete="new-password"
                  required
                  className="pr-10"
                />
              </div>
            </div>
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-primary text-white font-mono text-xs tracking-wide h-11 active:scale-95 transition-all"
            >
              {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Update Password"}
            </Button>
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}