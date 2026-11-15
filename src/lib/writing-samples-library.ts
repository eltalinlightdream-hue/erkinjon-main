/* Shared types + constants for the IELTS writing samples library.
   Pure module — no data imports, safe to use on the client. The data itself
   lives behind server functions in writing-samples.functions.ts. */

export type SampleTask = 1 | 2;
export type SampleKind = "essay" | "file" | "image" | "video";

export const TASK1_SAMPLE_TYPES = [
  "Line Graph",
  "Bar Chart",
  "Table",
  "Pie Chart",
  "Map",
  "Process",
  "Mixed",
] as const;

export const TASK2_SAMPLE_TYPES = [
  "Agree/Disagree",
  "Discussion",
  "Advantages/Disadvantages",
  "Positive/Negative Development",
  "Problem/Solution",
  "Direct Question",
  "Two-Part Question",
  "Other",
] as const;

export const SAMPLE_PAGE_SIZE = 24;
export const SAMPLE_MAX_LIMIT = 480;

export interface SampleImage {
  src: string;
  w: number;
  h: number;
}

export interface SampleImageSet {
  thumb: SampleImage;
  full: SampleImage;
}

export interface SampleFile {
  href: string;
  name: string;
  ext: string;
  size: number;
}

/** Everything a list card needs — kept small so a page of 24 is cheap. */
export interface SampleCard {
  id: string;
  task: SampleTask;
  number: number;
  kind: SampleKind;
  type: string;
  question: string;
  wordCount: number;
  band?: string;
  thumb?: SampleImage;
  imageCount: number;
  fileExt?: string;
}

export interface SampleDetail extends SampleCard {
  questionSource: "original" | "reconstructed" | "file-name" | "caption" | "none";
  content: string;
  date?: string;
  note?: string;
  videoUrl?: string;
  images: SampleImageSet[];
  file?: SampleFile;
  vocabulary: { word: string; definition: string }[];
}

export interface SampleNeighbour {
  id: string;
  number: number;
  type: string;
}

export interface SampleListResult {
  items: SampleCard[];
  total: number;
  typeCounts: Record<string, number>;
  taskTotals: Record<SampleTask, number>;
}

export interface SampleDetailResult {
  sample: SampleDetail;
  prev: SampleNeighbour | null;
  next: SampleNeighbour | null;
  position: number;
  total: number;
}

/** Labels shown on cards: "Report 12" / "Test 12", plus a compact catalogue code. */
export function sampleLabel(task: SampleTask, number: number): string {
  return task === 1 ? `Report ${number}` : `Test ${number}`;
}

export function sampleCode(task: SampleTask, number: number): string {
  return `${task === 1 ? "R" : "T"}·${String(number).padStart(3, "0")}`;
}

/** Detail route for a sample — Task 1 and Task 2 keep their existing URLs. */
export function sampleRoute(task: SampleTask): "/writing/sample/$id" | "/writing/essay/$id" {
  return task === 1 ? "/writing/sample/$id" : "/writing/essay/$id";
}

/* Each type gets one swatch from the atelier palette, so a tag's colour means
   the same thing on every card (and in the filter chips). */
const TYPE_SWATCH: Record<string, string> = {
  "Line Graph": "var(--terracotta)",
  "Bar Chart": "var(--olive)",
  Table: "var(--ochre)",
  "Pie Chart": "var(--mc-sky)",
  Map: "var(--mc-dirt-dark)",
  Process: "var(--terracotta-deep)",
  Mixed: "var(--ink-soft)",
  "Agree/Disagree": "var(--terracotta)",
  Discussion: "var(--olive)",
  "Advantages/Disadvantages": "var(--ochre)",
  "Positive/Negative Development": "var(--mc-sky)",
  "Problem/Solution": "var(--mc-dirt-dark)",
  "Direct Question": "var(--terracotta-deep)",
  "Two-Part Question": "var(--olive-deep)",
};

export function typeSwatch(type: string): string {
  return TYPE_SWATCH[type] ?? "var(--ink-soft)";
}

export function formatFileSize(bytes: number): string {
  if (bytes < 1024 * 1024) return `${Math.max(1, Math.round(bytes / 1024))} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}
