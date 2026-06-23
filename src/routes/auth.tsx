import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { GraduationCap, Loader2, ArrowLeft, Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";
import { SiteLayout } from "@/components/site-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from "@/hooks/use-auth";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Sign In - Abduraimov Erkinjon" },
      { name: "description", content: "Sign in or create your free account." },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  const nav = useNavigate();
  const { user, refreshProfile } = useAuth();
  const [mode, setMode] = useState<"tabs" | "forgot">("tabs");

  useEffect(() => {
    if (user) nav({ to: "/account" });
  }, [user, nav]);

  return (
    <SiteLayout>
      <section className="container mx-auto max-w-md px-4 py-16 relative">
        <div className="ink-bleed mb-8 text-center">
          <span className="mb-5 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-primary shadow-warm">
            <GraduationCap className="h-8 w-8 text-white" />
          </span>
          <h1 className="text-3xl font-bold">Welcome</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {mode === "forgot"
              ? "Reset your password"
              : "Sign in or create an account to track your progress."}
          </p>
        </div>

        <div className="bento-card rounded-3xl p-7">
          {mode === "forgot" ? (
            <ForgotPasswordForm onBack={() => setMode("tabs")} />
          ) : (
            <Tabs defaultValue="signin">
              <TabsList className="grid w-full grid-cols-2 bg-accent">
                <TabsTrigger value="signin">Sign In</TabsTrigger>
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
              </TabsList>
              <TabsContent value="signin" className="mt-6">
                <SocialButtons />
                <SignInForm
                  onForgot={() => setMode("forgot")}
                  onReady={async () => {
                    await refreshProfile();
                    nav({ to: "/account" });
                  }}
                />
              </TabsContent>
              <TabsContent value="signup" className="mt-6">
                <SocialButtons />
                <SignUpForm
                  onReady={async () => {
                    await refreshProfile();
                    nav({ to: "/account" });
                  }}
                />
              </TabsContent>
            </Tabs>
          )}
        </div>

        <p className="mt-6 text-center font-mono text-[11px] text-muted-foreground tracking-wide">
          By signing up you agree to use this platform for personal IELTS practice.
        </p>
      </section>
    </SiteLayout>
  );
}

const MIN_PASSWORD_LENGTH = 6;

function validatePassword(pw: string): string | null {
  if (pw.length < MIN_PASSWORD_LENGTH)
    return `Password must be at least ${MIN_PASSWORD_LENGTH} characters.`;
  return null;
}

/** Turn raw Supabase/network errors into something a user can act on. */
function friendlyAuthError(error: { message?: string } | null): string {
  const msg = (error?.message ?? "").toLowerCase();
  if (
    msg.includes("failed to fetch") ||
    msg.includes("load failed") ||
    msg.includes("network") ||
    msg.includes("fetch")
  ) {
    return "Can't reach the server right now. The backend may be starting up or offline — please wait a moment and try again.";
  }
  if (msg.includes("email not confirmed") || msg.includes("not confirmed")) {
    return "Please confirm your email first — check your inbox for the confirmation link.";
  }
  if (
    msg.includes("invalid login") ||
    msg.includes("invalid credentials") ||
    msg.includes("invalid")
  ) {
    return "Incorrect email or password. Please try again.";
  }
  return error?.message || "Something went wrong. Please try again.";
}

/** Password field with a show/hide toggle. */
function PasswordInput({
  id,
  value,
  onChange,
  autoComplete,
  minLength,
}: {
  id: string;
  value: string;
  onChange: (v: string) => void;
  autoComplete: string;
  minLength?: number;
}) {
  const [show, setShow] = useState(false);
  return (
    <div className="relative">
      <Input
        id={id}
        type={show ? "text" : "password"}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoComplete={autoComplete}
        minLength={minLength}
        required
        className="pr-10"
      />
      <button
        type="button"
        tabIndex={-1}
        onClick={() => setShow((s) => !s)}
        aria-label={show ? "Hide password" : "Show password"}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
      >
        {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
      </button>
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.76h3.56c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.56-2.76c-.98.66-2.23 1.06-3.72 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.11a6.6 6.6 0 0 1 0-4.22V7.05H2.18a11 11 0 0 0 0 9.9l3.66-2.84z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.05l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38z"
      />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16.36 12.78c.02 2.5 2.19 3.33 2.21 3.34-.02.06-.35 1.2-1.15 2.38-.69 1.02-1.41 2.04-2.54 2.06-1.11.02-1.47-.66-2.74-.66-1.27 0-1.66.64-2.71.68-1.09.04-1.92-1.1-2.62-2.12-1.43-2.08-2.52-5.87-1.05-8.43.73-1.27 2.03-2.07 3.45-2.09 1.07-.02 2.08.72 2.74.72.65 0 1.88-.89 3.17-.76.54.02 2.06.22 3.03 1.64-.08.05-1.81 1.06-1.79 3.16M14.3 4.15c.58-.7.97-1.68.86-2.65-.84.03-1.85.56-2.45 1.26-.54.62-1.01 1.61-.88 2.56.93.07 1.89-.47 2.47-1.17" />
    </svg>
  );
}

/** Google / Apple OAuth sign-in buttons. */
function SocialButtons() {
  const [busy, setBusy] = useState<null | "google" | "apple">(null);

  const oauth = async (provider: "google" | "apple") => {
    setBusy(provider);
    try {
      const result = await lovable.auth.signInWithOAuth(provider, {
        redirect_uri: `${window.location.origin}/account`,
      });
      if (result?.error) {
        toast.error(friendlyAuthError(result.error));
        setBusy(null);
      }
      // On success the browser redirects to the provider, so nothing else runs here.
    } catch (e) {
      toast.error(friendlyAuthError(e instanceof Error ? e : { message: String(e) }));
      setBusy(null);
    }
  };

  return (
    <div className="mb-6 space-y-3">
      <Button
        type="button"
        variant="outline"
        className="w-full gap-2"
        disabled={busy !== null}
        onClick={() => oauth("google")}
      >
        {busy === "google" ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <>
            <GoogleIcon />
            Continue with Google
          </>
        )}
      </Button>
      <Button
        type="button"
        variant="outline"
        className="w-full gap-2"
        disabled={busy !== null}
        onClick={() => oauth("apple")}
      >
        {busy === "apple" ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <>
            <AppleIcon />
            Continue with Apple
          </>
        )}
      </Button>
      <div className="relative py-1">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center">
          <span className="bg-card px-3 text-xs uppercase tracking-wide text-muted-foreground">
            or with email
          </span>
        </div>
      </div>
    </div>
  );
}

function SignInForm({
  onForgot,
  onReady,
}: {
  onForgot: () => void;
  onReady: () => Promise<void>;
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <form
      className="space-y-4"
      onSubmit={async (event) => {
        event.preventDefault();
        setLoading(true);
        const { error } = await supabase.auth.signInWithPassword({
          email: email.trim().toLowerCase(),
          password,
        });
        if (error) {
          setLoading(false);
          toast.error(friendlyAuthError(error));
          return;
        }
        toast.success("Welcome back!");
        await onReady();
        setLoading(false);
      }}
    >
      <div>
        <Label htmlFor="signin-email">Email</Label>
        <Input
          id="signin-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          required
        />
      </div>
      <div>
        <div className="flex items-center justify-between">
          <Label htmlFor="signin-password">Password</Label>
          <button
            type="button"
            onClick={onForgot}
            className="text-xs text-primary hover:underline"
          >
            Forgot password?
          </button>
        </div>
        <PasswordInput
          id="signin-password"
          value={password}
          onChange={setPassword}
          autoComplete="current-password"
        />
      </div>
      <Button
        type="submit"
        disabled={loading}
        className="w-full bg-gradient-gold text-primary-foreground"
      >
        {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Sign In"}
      </Button>
    </form>
  );
}

function SignUpForm({ onReady }: { onReady: () => Promise<void> }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <form
      className="space-y-4"
      onSubmit={async (event) => {
        event.preventDefault();
        const pwError = validatePassword(password);
        if (pwError) {
          toast.error(pwError);
          return;
        }
        const cleanName = fullName.trim();
        if (!cleanName) {
          toast.error("Please enter your full name.");
          return;
        }
        setLoading(true);
        const cleanEmail = email.trim().toLowerCase();

        const { data, error } = await supabase.auth.signUp({
          email: cleanEmail,
          password,
          options: {
            data: { full_name: cleanName },
            emailRedirectTo: `${window.location.origin}/account`,
          },
        });

        if (error) {
          setLoading(false);
          const msg = error.message.toLowerCase();
          if (
            msg.includes("already") ||
            msg.includes("registered") ||
            msg.includes("exists")
          ) {
            toast.error("An account with this email already exists. Please sign in.");
          } else {
            toast.error(friendlyAuthError(error));
          }
          return;
        }

        // With email confirmation disabled, a session is returned immediately.
        if (!data.session) {
          // Defensive: attempt sign-in if session not returned
          const { error: signInErr } = await supabase.auth.signInWithPassword({
            email: cleanEmail,
            password,
          });
          if (signInErr) {
            setLoading(false);
            toast.error(friendlyAuthError(signInErr));
            return;
          }
        }

        // Best-effort: ensure profile row exists with full name
        try {
          const { data: userResp } = await supabase.auth.getUser();
          if (userResp.user) {
            await supabase
              .from("profiles")
              .upsert(
                { id: userResp.user.id, full_name: cleanName, email: cleanEmail },
                { onConflict: "id" },
              );
          }
        } catch {
          // ignore — trigger usually handles it
        }

        toast.success("Account created!");
        await onReady();
        setLoading(false);
      }}
    >
      <div>
        <Label htmlFor="signup-name">Full name</Label>
        <Input
          id="signup-name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          autoComplete="name"
          required
        />
      </div>
      <div>
        <Label htmlFor="signup-email">Email</Label>
        <Input
          id="signup-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          required
        />
      </div>
      <div>
        <Label htmlFor="signup-password">Password</Label>
        <PasswordInput
          id="signup-password"
          value={password}
          onChange={setPassword}
          autoComplete="new-password"
          minLength={MIN_PASSWORD_LENGTH}
        />
        <p className="mt-1 text-xs text-muted-foreground">
          At least {MIN_PASSWORD_LENGTH} characters
        </p>
      </div>
      <Button
        type="submit"
        disabled={loading}
        className="w-full bg-gradient-gold text-primary-foreground"
      >
        {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Create Account"}
      </Button>
    </form>
  );
}

function ForgotPasswordForm({ onBack }: { onBack: () => void }) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="space-y-4 text-center">
        <p className="text-sm">
          If an account exists for <strong>{email}</strong>, a password reset link has
          been sent. Please check your inbox.
        </p>
        <Button variant="outline" className="w-full" onClick={onBack}>
          Back to sign in
        </Button>
      </div>
    );
  }

  return (
    <form
      className="space-y-4"
      onSubmit={async (event) => {
        event.preventDefault();
        setLoading(true);
        const { error } = await supabase.auth.resetPasswordForEmail(
          email.trim().toLowerCase(),
          { redirectTo: `${window.location.origin}/reset-password` },
        );
        setLoading(false);
        if (error) {
          toast.error(friendlyAuthError(error));
          return;
        }
        setSent(true);
      }}
    >
      <button
        type="button"
        onClick={onBack}
        className="mb-2 inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-3 w-3" /> Back
      </button>
      <div>
        <Label htmlFor="forgot-email">Email address</Label>
        <Input
          id="forgot-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          required
        />
      </div>
      <Button
        type="submit"
        disabled={loading}
        className="w-full bg-gradient-gold text-primary-foreground"
      >
        {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Send Reset Link"}
      </Button>
    </form>
  );
}
