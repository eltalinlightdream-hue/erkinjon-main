/**
 * Types and pure helpers for the public "Student results" showcase.
 * Data lives in `src/data/student-results.ts`; this module only knows the
 * scoring rules, so it can also verify that data (see the colocated test).
 */

export type ExamKind = "ielts" | "cefr";
export type SkillKey = "listening" | "reading" | "writing" | "speaking";
export type Skills = Readonly<Record<SkillKey, number>>;
export type CefrLevel = "B1" | "B2" | "C1" | "C2";

/** A redacted image of the official result, served from `/public`. */
export interface ResultProof {
  /** Full-size redacted image (opened in a dialog). */
  src: string;
  /** Small preview of the same image (featured cards only). */
  thumb: string;
  width: number;
  height: number;
  kind: "certificate" | "screenshot";
}

interface BaseResult {
  /** Stable, URL-safe id — also used as the React key. */
  id: string;
  /** Given name + family name, as printed on the certificate. */
  name: string;
  /** Overall score exactly as printed on the certificate. */
  overall: number;
  /** CEFR level exactly as printed (or the official band mapping for IELTS). */
  level: CefrLevel;
  skills: Skills;
  /** Month of the test or certificate issue, `YYYY-MM`. Omit when unknown. */
  month?: string;
  /** Redacted proof image. Omit until a privacy-safe copy is available. */
  proof?: ResultProof;
}

export interface IeltsResult extends BaseResult {
  exam: "ielts";
  /** e.g. "Academic". Omit when the source does not say. */
  module?: "Academic" | "General Training";
}

export interface CefrResult extends BaseResult {
  /** Uzbekistan's national multilevel CEFR certificate (scored out of 75). */
  exam: "cefr";
}

export type StudentResult = IeltsResult | CefrResult;

export const SKILL_ORDER: readonly SkillKey[] = ["listening", "reading", "writing", "speaking"];

export const SKILL_LABELS: Readonly<Record<SkillKey, string>> = {
  listening: "Listening",
  reading: "Reading",
  writing: "Writing",
  speaking: "Speaking",
};

/** Homepage section anchor — the footer's "Student Results" link targets it. */
export const RESULTS_SECTION_ID = "student-results";

/** `max` is the top of each exam's scale: IELTS bands 0–9, national CEFR 0–75. */
export const EXAM_META: Readonly<Record<ExamKind, { label: string; max: number }>> = {
  ielts: { label: "IELTS", max: 9 },
  cefr: { label: "CEFR", max: 75 },
};

/** Mean of the four skill scores. */
function skillMean(skills: Skills): number {
  return SKILL_ORDER.reduce((sum, key) => sum + skills[key], 0) / SKILL_ORDER.length;
}

/**
 * IELTS overall band: the mean of the four skills rounded to the nearest half
 * band, where .25 rounds up to .5 and .75 rounds up to the next whole band.
 */
export function ieltsOverall(skills: Skills): number {
  const mean = skillMean(skills);
  const whole = Math.floor(mean);
  const fraction = mean - whole;
  if (fraction < 0.25) return whole;
  if (fraction < 0.75) return whole + 0.5;
  return whole + 1;
}

/** National multilevel overall: the mean of the four skills, rounded half up. */
export function multilevelOverall(skills: Skills): number {
  return Math.round(skillMean(skills));
}

/** Official IELTS → CEFR alignment, as printed on IELTS Test Report Forms. */
export function ieltsLevel(band: number): CefrLevel | null {
  if (band >= 8.5) return "C2";
  if (band >= 7) return "C1";
  if (band >= 5.5) return "B2";
  if (band >= 4) return "B1";
  return null;
}

/** National multilevel score bands (out of 75). */
export function multilevelLevel(score: number): CefrLevel | null {
  if (score >= 65) return "C1";
  if (score >= 51) return "B2";
  if (score >= 38) return "B1";
  return null;
}

export function expectedOverall(result: StudentResult): number {
  return result.exam === "ielts" ? ieltsOverall(result.skills) : multilevelOverall(result.skills);
}

export function expectedLevel(result: StudentResult): CefrLevel | null {
  return result.exam === "ielts" ? ieltsLevel(result.overall) : multilevelLevel(result.overall);
}

/** IELTS bands always show one decimal ("7.0"); multilevel scores are integers. */
export function formatScore(exam: ExamKind, value: number): string {
  return exam === "ielts" ? value.toFixed(1) : String(value);
}

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/**
 * "2026-09" → "Sep 2026". Formatted by hand (not Intl) so the server and the
 * browser always render the same string — no hydration mismatch.
 */
export function formatResultMonth(month: string): string {
  const [year, m] = month.split("-");
  const label = MONTHS[Number(m) - 1];
  return label && year ? `${label} ${year}` : month;
}

/** IELTS first (highest band first), then CEFR (highest score first). */
export function rankResults(results: readonly StudentResult[]): StudentResult[] {
  const examOrder: Record<ExamKind, number> = { ielts: 0, cefr: 1 };
  return [...results].sort(
    (a, b) =>
      examOrder[a.exam] - examOrder[b.exam] ||
      b.overall - a.overall ||
      a.name.localeCompare(b.name),
  );
}

export interface Showcase {
  featured: StudentResult | undefined;
  /** Shown up front: next two IELTS results and the top two CEFR results. */
  others: StudentResult[];
  /** Everything else, revealed by "Show all". */
  rest: StudentResult[];
}

/**
 * Homepage layout: the top IELTS result as the feature, then a first row that
 * always represents both exams, then the remaining results in ranked order.
 * Every result appears exactly once.
 */
export function pickShowcase(results: readonly StudentResult[]): Showcase {
  const ranked = rankResults(results);
  const ielts = ranked.filter((r) => r.exam === "ielts");
  const cefr = ranked.filter((r) => r.exam === "cefr");
  const featured = ielts[0] ?? ranked[0];
  const others = [...ielts.slice(1, 3), ...cefr.slice(0, 2)].filter((r) => r !== featured);
  const rest = ranked.filter((r) => r !== featured && !others.includes(r));
  return { featured, others, rest };
}

export function examTitle(result: StudentResult): string {
  if (result.exam === "ielts") {
    return result.module ? `IELTS ${result.module}` : "IELTS";
  }
  return "CEFR · National";
}
