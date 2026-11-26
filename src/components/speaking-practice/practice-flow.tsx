import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/use-auth";
import { FinishScreen } from "@/components/speaking-practice/finish-screen";
import { RecordingStep } from "@/components/speaking-practice/recording-step";
import { SessionRunner, type SessionOutcome } from "@/components/speaking-practice/session-runner";
import { GeneralOptions, MockIntro } from "@/components/speaking-practice/setup-panels";
import { saveSpeakingProgress, startSpeakingSession } from "@/lib/speaking-practice.functions";
import { DEFAULT_QUESTION_COUNT, type GeneralOptionId } from "@/lib/speaking-practice/config";
import {
  buildGeneralSteps,
  buildMockSteps,
  mockSetByNumber,
  pickNextMockSet,
} from "@/lib/speaking-practice/plan";
import { refreshBeaconToken, sendProgressBeacon } from "@/lib/speaking-practice/progress-beacon";
import { stopStream } from "@/lib/speaking-practice/recorder";
import { saveRecording, type StoredRecording } from "@/lib/speaking-practice/recordings-db";
import { unlockSpeech } from "@/lib/speaking-practice/speech";
import type { PracticeMode, RecordingType, SessionPlan } from "@/lib/speaking-practice/types";

type Stage = "choose" | "record" | "running" | "finished";
type Result = {
  outcome: SessionOutcome;
  saved: StoredRecording | null;
  hasRecordingError: boolean;
};

function detectIOS(): boolean {
  return typeof navigator !== "undefined" && /iPad|iPhone|iPod/.test(navigator.userAgent);
}

export function PracticeFlow({ mode }: { mode: PracticeMode }) {
  const { user } = useAuth();
  const start = useServerFn(startSpeakingSession);
  const save = useServerFn(saveSpeakingProgress);

  const [stage, setStage] = useState<Stage>("choose");
  const [optionId, setOptionId] = useState<GeneralOptionId>("p1");
  const [count, setCount] = useState(DEFAULT_QUESTION_COUNT);
  const [recordingType, setRecordingType] = useState<RecordingType>("audio");
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [plan, setPlan] = useState<SessionPlan | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isStarting, setIsStarting] = useState(false);
  const [result, setResult] = useState<Result | null>(null);
  const [isIOS, setIsIOS] = useState(false);
  const sessionIdRef = useRef<string | null>(null);

  useEffect(() => setIsIOS(detectIOS()), []);
  // Release the microphone/camera when it is replaced or the page closes.
  useEffect(() => () => stopStream(stream), [stream]);

  async function handleStart() {
    unlockSpeech(); // must run inside the tap, before any await (iPhone)
    setError(null);
    setIsStarting(true);
    try {
      let session: { sessionId: string; mockSet: number | null } | null = null;
      if (user) {
        try {
          session = await start({
            data: mode === "mock" ? { mode, recordingType } : { mode, optionId, recordingType },
          });
        } catch {
          session = null; // practice still works; the time is just not saved
        }
      }
      if (session) await refreshBeaconToken();
      const next = buildPlan(session);
      if (!next || next.steps.length === 0) {
        setError("There are no questions for this choice yet.");
        return;
      }
      sessionIdRef.current = next.sessionId;
      setPlan(next);
      setStage("running");
    } finally {
      setIsStarting(false);
    }
  }

  function buildPlan(
    session: { sessionId: string; mockSet: number | null } | null,
  ): SessionPlan | null {
    const sessionId = session?.sessionId ?? null;
    if (mode === "mock") {
      const set =
        (session?.mockSet != null ? mockSetByNumber(session.mockSet) : undefined) ??
        pickNextMockSet(new Map());
      return {
        sessionId,
        mode,
        label: `Mock test ${set.number}`,
        steps: buildMockSteps(set),
        allowReplay: false,
        autoAdvance: true,
        recordingType,
      };
    }
    const general = buildGeneralSteps(optionId, count);
    return {
      sessionId,
      mode,
      label: general.label,
      steps: general.steps,
      allowReplay: true,
      autoAdvance: false,
      recordingType,
    };
  }

  const saveProgress = useCallback(
    async (seconds: number, finished: boolean): Promise<number | null> => {
      const sessionId = sessionIdRef.current;
      if (!sessionId) return null;
      try {
        void refreshBeaconToken();
        const res = await save({ data: { sessionId, seconds, finished } });
        return res.savedSeconds;
      } catch {
        return null;
      }
    },
    [save],
  );

  const saveOnClose = useCallback((seconds: number) => {
    if (sessionIdRef.current) sendProgressBeacon(sessionIdRef.current, seconds);
  }, []);

  const onFinished = useCallback(
    async (outcome: SessionOutcome) => {
      let saved: StoredRecording | null = null;
      let hasRecordingError = false;
      if (plan && plan.recordingType !== "none") {
        if (outcome.recording) {
          try {
            saved = await saveRecording({
              mode: plan.mode,
              label: plan.label,
              type: plan.recordingType,
              mimeType: outcome.mimeType || outcome.recording.type,
              durationSeconds: outcome.activeSeconds,
              blob: outcome.recording,
            });
          } catch {
            hasRecordingError = true;
          }
        } else {
          hasRecordingError = true;
        }
      }
      setStream(null); // the cleanup effect stops the tracks
      setResult({ outcome, saved, hasRecordingError });
      setStage("finished");
    },
    [plan],
  );

  function reset() {
    sessionIdRef.current = null;
    setResult(null);
    setPlan(null);
    setStage(mode === "mock" ? "record" : "choose");
  }

  if (stage === "running" && plan) {
    return (
      <SessionRunner
        plan={plan}
        stream={stream}
        saveProgress={saveProgress}
        saveOnClose={saveOnClose}
        onFinished={onFinished}
      />
    );
  }

  if (stage === "finished" && result && plan) {
    return (
      <FinishScreen
        label={plan.label}
        activeSeconds={result.outcome.activeSeconds}
        savedSeconds={result.outcome.savedSeconds}
        isSignedIn={!!user}
        recording={result.saved}
        hasRecordingError={result.hasRecordingError}
        onAgain={reset}
      />
    );
  }

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-8">
      <Link
        to="/speaking/practice"
        className="inline-flex min-h-11 items-center gap-1.5 self-start text-sm font-medium text-muted-foreground hover:text-primary"
      >
        <ArrowLeft className="size-4" aria-hidden />
        Speaking practice
      </Link>

      <header>
        <p className="eyebrow mb-3 text-primary">
          {mode === "mock" ? "Full exam · Parts 1–3" : "Choose what to practise"}
        </p>
        <h1 className="font-serif text-3xl md:text-4xl">
          {mode === "mock" ? "IELTS Speaking Mock Test" : "General Training"}
        </h1>
      </header>

      {!user && (
        <p className="rounded-xl bg-[var(--tint-blue-bg)] px-4 py-3 text-sm text-[var(--tint-blue-fg)]">
          You can practise without an account.{" "}
          <Link to="/auth" className="font-semibold underline underline-offset-4">
            Sign in
          </Link>{" "}
          to save your speaking time, daily streak and finished mock tests.
        </p>
      )}

      {stage === "choose" && (
        <>
          {mode === "mock" ? (
            <MockIntro />
          ) : (
            <GeneralOptions
              optionId={optionId}
              onOptionChange={setOptionId}
              count={count}
              onCountChange={setCount}
            />
          )}
          <Button type="button" size="lg" onClick={() => setStage("record")} className="self-start">
            Next
            <ChevronRight aria-hidden />
          </Button>
        </>
      )}

      {stage === "record" && (
        <RecordingStep
          recordingType={recordingType}
          onRecordingTypeChange={setRecordingType}
          stream={stream}
          onStreamChange={setStream}
          isIOS={isIOS}
          isStarting={isStarting}
          error={error}
          onBack={() => setStage("choose")}
          onStart={() => void handleStart()}
        />
      )}
    </div>
  );
}
