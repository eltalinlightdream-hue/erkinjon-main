// Shared types for the speaking practice engine (General Training and Mock Tests).

export type SpeakingSet = {
  /** Set number from the source PDFs (SPEAKING-1 … SPEAKING-40). */
  number: number;
  part1: { title: string; questions: string[] };
  /** null when the set has no cue card (those sets are not used as mock tests). */
  part2: { title: string; bullets: string[]; explain: string | null } | null;
  part3: { title: string; questions: string[] };
};

export type RecordingType = "none" | "audio" | "video";
export type PracticeMode = "general" | "mock";

export type QuestionStep = {
  kind: "question";
  part: number;
  topic: string;
  text: string;
  /** Answer time in seconds. */
  seconds: number;
};

export type CueCardStep = {
  kind: "cue-card";
  part: number;
  title: string;
  bullets: string[];
  explain: string | null;
  prepSeconds: number;
  speakSeconds: number;
};

export type Step = QuestionStep | CueCardStep;

export type SessionPlan = {
  /** Database session id, or null when progress is not saved (guest or offline). */
  sessionId: string | null;
  mode: PracticeMode;
  /** e.g. "Part 1 + Part 3" or "Mock test 12" */
  label: string;
  steps: Step[];
  allowReplay: boolean;
  /** Move on automatically when the time runs out (mock tests). */
  autoAdvance: boolean;
  recordingType: RecordingType;
};
