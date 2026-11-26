import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronRight, Flag, RotateCcw, Volume2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { TimerRing } from "@/components/speaking-practice/timer-ring";
import { speak, stopSpeaking } from "@/lib/speaking-practice/speech";
import { SessionRecorder } from "@/lib/speaking-practice/recorder";
import type { SessionPlan, Step } from "@/lib/speaking-practice/types";
import { cn } from "@/lib/utils";

export type SessionOutcome = {
  activeSeconds: number;
  savedSeconds: number | null;
  recording: Blob | null;
  mimeType: string;
};

type Phase = "listening" | "answering" | "prep" | "speak" | "timeUp";

const TICK_MS = 250;
const HEARTBEAT_MS = 30_000;
const AUTO_ADVANCE_MS = 1200;
const TIMED_PHASES: readonly Phase[] = ["answering", "prep", "speak"];

/** Seconds allowed in a timed phase (0 = not timed). */
function phaseLimit(p: Phase, s: Step): number {
  if (s.kind === "question") return p === "answering" ? s.seconds : 0;
  if (p === "prep") return s.prepSeconds;
  if (p === "speak") return s.speakSeconds;
  return 0;
}

function phaseLabel(p: Phase): string {
  if (p === "prep") return "Prepare";
  if (p === "speak") return "Speak";
  return "Answer";
}

type Props = {
  plan: SessionPlan;
  stream: MediaStream | null;
  /** Save active seconds; resolves to the saved total, or null when not saved. */
  saveProgress: (seconds: number, finished: boolean) => Promise<number | null>;
  /** Fire-and-forget save while the page is being hidden or closed. */
  saveOnClose: (seconds: number) => void;
  onFinished: (outcome: SessionOutcome) => void;
};

/**
 * Runs one practice session: reads questions aloud, runs the timers, records,
 * and saves practice time. Shared by General Training and Mock Tests.
 */
export function SessionRunner({ plan, stream, saveProgress, saveOnClose, onFinished }: Props) {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>("listening");
  const [phaseElapsed, setPhaseElapsed] = useState(0);
  const [isHidden, setIsHidden] = useState(false);
  const [isFinishing, setIsFinishing] = useState(false);
  const [isRecording, setIsRecording] = useState(false);

  const step = plan.steps[index];
  const isLast = index === plan.steps.length - 1;

  const activeMs = useRef(0);
  const phaseMs = useRef(0);
  const lastTick = useRef<number | null>(null);
  const phaseRef = useRef<Phase>("listening");
  const stepRef = useRef<Step>(plan.steps[0]);
  const token = useRef(0); // increases on every step change, so late speech callbacks are ignored
  const recorder = useRef<SessionRecorder | null>(null);
  const done = useRef(false);

  const activeSeconds = () => Math.floor(activeMs.current / 1000);

  const changePhase = useCallback((p: Phase) => {
    phaseRef.current = p;
    phaseMs.current = 0;
    setPhaseElapsed(0);
    setPhase(p);
  }, []);

  // Record the whole session into one file.
  useEffect(() => {
    if (stream && plan.recordingType !== "none") {
      try {
        recorder.current = new SessionRecorder(stream, plan.recordingType);
        recorder.current.start();
        setIsRecording(true);
      } catch {
        recorder.current = null;
      }
    }
    return () => {
      stopSpeaking();
      if (!done.current) void recorder.current?.stop();
    };
  }, [stream, plan.recordingType]);

  // Read the step aloud, then start its timer.
  const present = useCallback(
    (s: Step) => {
      const my = ++token.current;
      stepRef.current = s;
      changePhase("listening");
      void speak(s.kind === "question" ? s.text : s.title).then(() => {
        if (token.current !== my) return;
        changePhase(s.kind === "question" ? "answering" : "prep");
      });
    },
    [changePhase],
  );

  useEffect(() => {
    const id = window.setTimeout(() => present(plan.steps[0]), 0);
    return () => window.clearTimeout(id);
  }, [plan.steps, present]);

  // Clock: counts only while the page is visible.
  useEffect(() => {
    const id = window.setInterval(() => {
      const now = performance.now();
      const visible = document.visibilityState === "visible";
      if (lastTick.current !== null && visible) {
        const dt = now - lastTick.current;
        activeMs.current += dt;
        if (TIMED_PHASES.includes(phaseRef.current)) {
          phaseMs.current += dt;
          const elapsed = Math.floor(phaseMs.current / 1000);
          setPhaseElapsed(elapsed);
          const limit = phaseLimit(phaseRef.current, stepRef.current);
          if (limit && elapsed >= limit) {
            if (phaseRef.current === "prep") {
              changePhase("speak");
              void speak("Please start speaking now.");
            } else {
              changePhase("timeUp");
            }
          }
        }
      }
      lastTick.current = visible ? now : null;
      setIsHidden(!visible);
    }, TICK_MS);
    return () => window.clearInterval(id);
  }, [changePhase]);

  // Save progress every 30 s, and when the page is hidden or closed.
  useEffect(() => {
    const id = window.setInterval(() => {
      if (!done.current) void saveProgress(activeSeconds(), false);
    }, HEARTBEAT_MS);
    const onVisibility = () => {
      if (!done.current && document.visibilityState === "hidden") saveOnClose(activeSeconds());
    };
    const onPageHide = () => {
      if (!done.current) saveOnClose(activeSeconds());
    };
    const onBeforeUnload = (e: BeforeUnloadEvent) => {
      if (done.current) return;
      e.preventDefault();
      e.returnValue = "";
    };
    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("pagehide", onPageHide);
    window.addEventListener("beforeunload", onBeforeUnload);
    return () => {
      window.clearInterval(id);
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("pagehide", onPageHide);
      window.removeEventListener("beforeunload", onBeforeUnload);
    };
  }, [saveProgress, saveOnClose]);

  const finish = useCallback(async () => {
    if (done.current) return;
    done.current = true;
    setIsFinishing(true);
    stopSpeaking();
    token.current++;
    const seconds = activeSeconds();
    const [savedSeconds, blob] = await Promise.all([
      saveProgress(seconds, true),
      recorder.current ? recorder.current.stop() : Promise.resolve(null),
    ]);
    onFinished({
      activeSeconds: seconds,
      savedSeconds,
      recording: blob,
      mimeType: recorder.current?.mimeType || blob?.type || "",
    });
  }, [saveProgress, onFinished]);

  const next = useCallback(() => {
    if (isLast) {
      void finish();
      return;
    }
    const i = index + 1;
    setIndex(i);
    present(plan.steps[i]);
  }, [isLast, finish, index, plan.steps, present]);

  // Mock tests move on by themselves when the time is up.
  useEffect(() => {
    if (!plan.autoAdvance || phase !== "timeUp") return;
    const id = window.setTimeout(next, AUTO_ADVANCE_MS);
    return () => window.clearTimeout(id);
  }, [plan.autoAdvance, phase, next]);

  const limit = phaseLimit(phase, step);
  const remaining = Math.max(0, limit - phaseElapsed);
  const progress = ((index + (phase === "timeUp" ? 1 : 0)) / plan.steps.length) * 100;
  const isCuePrep = step.kind === "cue-card" && phase === "prep";

  return (
    <div className="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-background">
      <header className="sticky top-0 z-10 border-b border-border bg-card/95 backdrop-blur">
        <div className="mx-auto flex w-full max-w-3xl items-center gap-3 px-4 py-2.5">
          <span className="badge-tint badge-tint-info shrink-0">Part {step.part}</span>
          <span className="whitespace-nowrap text-sm font-medium tabular-nums text-muted-foreground">
            {plan.isOpenEnded ? `Question ${index + 1}` : `${index + 1} / ${plan.steps.length}`}
          </span>
          <span className="hidden truncate text-sm text-muted-foreground sm:inline">
            · {plan.label}
          </span>
          <span className="flex-1" />
          {isRecording && !isFinishing && (
            <span className="flex shrink-0 items-center gap-2 text-sm font-medium text-destructive">
              <span
                className="size-2.5 animate-pulse rounded-full bg-destructive motion-reduce:animate-none"
                aria-hidden
              />
              Rec
            </span>
          )}
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={() => void finish()}
            disabled={isFinishing}
            aria-label="End session"
            title="End session"
          >
            <X aria-hidden />
          </Button>
        </div>
        {!plan.isOpenEnded && (
          <div className="h-1 w-full bg-muted" aria-hidden>
            <div
              className="h-full bg-primary transition-[width] duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        )}
      </header>

      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center gap-8 px-4 py-8 text-center">
        {step.kind === "question" ? (
          <div className="flex flex-col items-center gap-3">
            <p className="eyebrow text-primary">{step.topic}</p>
            <h1 lang="en" className="max-w-2xl font-serif text-2xl leading-snug sm:text-4xl">
              {step.text}
            </h1>
          </div>
        ) : (
          <article
            lang="en"
            className="relative w-full max-w-xl rounded-2xl border border-border bg-card p-6 text-left shadow-[var(--shadow-warm)] sm:p-8"
          >
            <p className="eyebrow mb-3 text-primary">Cue card</p>
            <h1 className="font-serif text-xl leading-snug sm:text-2xl">{step.title}</h1>
            <p className="mt-5 text-sm font-semibold">You should say:</p>
            <ul className="mt-2 space-y-1.5">
              {step.bullets.map((b) => (
                <li key={b} className="flex gap-2.5">
                  <span className="text-primary" aria-hidden>
                    ‣
                  </span>
                  {b}
                </li>
              ))}
            </ul>
            {step.explain && <p className="mt-2 italic text-muted-foreground">{step.explain}</p>}
          </article>
        )}

        <div
          className="flex min-h-[176px] flex-col items-center justify-center gap-3"
          aria-live="polite"
        >
          {phase === "listening" ? (
            <p className="flex items-center gap-2 text-lg font-medium text-primary">
              <Volume2 className="size-6 animate-pulse motion-reduce:animate-none" aria-hidden />
              Listen…
            </p>
          ) : phase === "timeUp" ? (
            <p className="flex items-center gap-2 text-lg font-medium text-[var(--tint-green-fg)]">
              <Flag className="size-5" aria-hidden />
              Time is up
            </p>
          ) : (
            <>
              <TimerRing remaining={remaining} total={limit} label={phaseLabel(phase)} />
              {phase === "prep" && (
                <p className="max-w-sm text-sm text-muted-foreground">
                  You have 1 minute to think. You can make notes.
                </p>
              )}
            </>
          )}
          {isHidden && (
            <p className="text-sm text-[var(--ochre-deep)]">Paused while the page is hidden</p>
          )}
        </div>

        {isCuePrep && (
          <div className="flex w-full max-w-xl flex-col gap-2 text-left">
            <label htmlFor="cue-notes" className="text-sm font-medium">
              Your notes (not saved)
            </label>
            <Textarea id="cue-notes" rows={4} />
          </div>
        )}
      </main>

      <footer className="sticky bottom-0 border-t border-border bg-card/95 pb-[env(safe-area-inset-bottom)] backdrop-blur">
        <div className="mx-auto flex w-full max-w-3xl flex-wrap items-center justify-center gap-3 px-4 py-3">
          {plan.allowReplay && step.kind === "question" && (
            <Button
              type="button"
              variant="outline"
              size="lg"
              onClick={() => present(step)}
              disabled={phase === "listening" || isFinishing}
            >
              <RotateCcw aria-hidden />
              Replay
            </Button>
          )}
          {isCuePrep ? (
            <Button type="button" size="lg" onClick={() => changePhase("speak")}>
              Start speaking now
            </Button>
          ) : (
            <Button
              type="button"
              size="lg"
              onClick={next}
              disabled={isFinishing || phase === "listening"}
              className={cn(isFinishing && "opacity-70")}
            >
              {isFinishing ? (
                "Saving…"
              ) : isLast ? (
                "Finish"
              ) : plan.autoAdvance ? (
                "I'm done"
              ) : (
                <>
                  <span className="sm:hidden">Next</span>
                  <span className="hidden sm:inline">Next question</span>
                </>
              )}
              {!isLast && !isFinishing && <ChevronRight aria-hidden />}
            </Button>
          )}
          {plan.isOpenEnded && !isLast && (
            <Button
              type="button"
              variant="ghost"
              size="lg"
              onClick={() => void finish()}
              disabled={isFinishing}
            >
              <Flag aria-hidden />
              Finish
            </Button>
          )}
        </div>
      </footer>
    </div>
  );
}
