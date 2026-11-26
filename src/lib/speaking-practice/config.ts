// One place for the IELTS Speaking structure, timers and goals.
// Change numbers here; no other code needs to change.

export type PartConfig = {
  part: number;
  /** "questions": a list of spoken questions. "cue-card": prepare, then talk about one card. */
  kind: "questions" | "cue-card";
  secondsPerQuestion?: number;
  prepSeconds?: number;
  speakSeconds?: number;
};

export const IELTS_PARTS: readonly PartConfig[] = [
  { part: 1, kind: "questions", secondsPerQuestion: 45 },
  { part: 2, kind: "cue-card", prepSeconds: 60, speakSeconds: 120 },
  { part: 3, kind: "questions", secondsPerQuestion: 60 },
];

export const GENERAL_OPTIONS = [
  {
    id: "p1",
    parts: [1],
    label: "Part 1 only",
    help: "Short questions about you and familiar topics",
  },
  {
    id: "p2",
    parts: [2],
    label: "Part 2 only",
    help: "One cue card: 1 minute to prepare, up to 2 minutes to speak",
  },
  { id: "p3", parts: [3], label: "Part 3 only", help: "Discussion questions on one topic" },
  {
    id: "p1p3",
    parts: [1, 3],
    label: "Part 1 + Part 3",
    help: "Part 1 first, then Part 3, like the real exam",
  },
] as const;

export type GeneralOptionId = (typeof GENERAL_OPTIONS)[number]["id"];

export const QUESTION_COUNTS = [3, 5, 8, 10] as const;
export const DEFAULT_QUESTION_COUNT = 5;

/** Part 1 in General Training takes at most this many questions from one topic. */
export const PART1_PER_TOPIC = 4;

/** In a mock test, cap the questions per part so a test stays close to the real 11–14 minutes. */
export const MOCK_MAX_PART1_QUESTIONS = 8;
export const MOCK_MAX_PART3_QUESTIONS = 6;

/** A day counts towards the streak once the student practises this long. */
export const DAILY_GOAL_SECONDS = 15 * 60;

/** Days are counted in this time zone (most students are in Uzbekistan). */
export const PRACTICE_TIME_ZONE = "Asia/Tashkent";

export function partConfig(part: number) {
  return IELTS_PARTS.find((p) => p.part === part);
}
