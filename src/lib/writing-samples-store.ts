/* Server-side index over every writing sample: the hand-curated samples in
   writing-samples-data.ts plus the ones imported from the Telegram backup
   (src/data/writing-samples/*.json). Only imported dynamically from server
   function handlers, so none of this text ships in the client bundle. */
import { WRITING_ESSAYS, WRITING_SAMPLES } from "@/lib/writing-samples-data";
import importedTask1 from "@/data/writing-samples/imported-task1.json";
import importedTask2 from "@/data/writing-samples/imported-task2.json";
import legacyCovers from "@/data/writing-samples/legacy-covers.json";
import type {
  SampleCard,
  SampleDetail,
  SampleImageSet,
  SampleKind,
  SampleListResult,
  SampleNeighbour,
  SampleTask,
} from "@/lib/writing-samples-library";

interface ImportedRecord {
  id: string;
  number: number;
  task: number;
  kind: string;
  type: string;
  question?: string;
  questionSource?: string;
  content?: string;
  wordCount?: number;
  band?: string;
  date?: string;
  note?: string;
  videoUrl?: string;
  images?: SampleImageSet[];
  file?: SampleDetail["file"];
}

interface IndexedSample {
  detail: SampleDetail;
  haystack: string;
}

/* The curated Task 1 data uses free-form chart labels; map them onto the
   controlled filter vocabulary. */
function normaliseChartType(raw: string): string {
  const s = raw.toLowerCase();
  if (s.startsWith("mixed") || s.includes("+")) return "Mixed";
  if (s.includes("line")) return "Line Graph";
  if (s.includes("bar")) return "Bar Chart";
  if (s.includes("pie")) return "Pie Chart";
  if (s.includes("table")) return "Table";
  if (s.includes("map") || s.includes("plan")) return "Map";
  if (s.includes("process") || s.includes("diagram")) return "Process";
  return "Mixed";
}

/* Essay types for the curated Task 2 samples (they carry no type field). */
const LEGACY_T2_TYPES: Record<string, string> = {
  "t2-1": "Discussion",
  "t2-2": "Discussion",
  "t2-3": "Agree/Disagree",
  "t2-4": "Discussion",
  "t2-5": "Discussion",
  "t2-6": "Discussion",
  "t2-7": "Advantages/Disadvantages",
  "t2-8": "Agree/Disagree",
  "t2-9": "Agree/Disagree",
  "t2-10": "Agree/Disagree",
  "t2-11": "Two-Part Question",
  "t2-12": "Positive/Negative Development",
  "t2-13": "Agree/Disagree",
  "t2-14": "Two-Part Question",
  "t2-15": "Problem/Solution",
  "t2-17": "Agree/Disagree",
  "t2-18": "Two-Part Question",
  "t2-19": "Discussion",
  "t2-20": "Discussion",
  "t2-21": "Two-Part Question",
  "t2-22": "Advantages/Disadvantages",
  "t2-23": "Advantages/Disadvantages",
  "t2-24": "Direct Question",
  "t2-25": "Advantages/Disadvantages",
  "t2-26": "Two-Part Question",
  "t2-27": "Problem/Solution",
  "t2-28": "Agree/Disagree",
};

const COVERS = legacyCovers as Record<string, SampleImageSet>;

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z#0-9]+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function coverSet(src: string | undefined): SampleImageSet[] {
  if (!src) return [];
  const converted = COVERS[src];
  if (converted) return [converted];
  // SVG and other formats are served as-is; dimensions are unknown.
  const image = { src, w: 1200, h: 750 };
  return [{ thumb: image, full: image }];
}

function index(detail: SampleDetail): IndexedSample {
  const haystack = [detail.question, detail.type, detail.note ?? "", stripHtml(detail.content)]
    .join(" ")
    .toLowerCase();
  return { detail, haystack };
}

function fromLegacyTask1(): IndexedSample[] {
  return WRITING_SAMPLES.filter((s) => s.task === 1).map((s) => {
    const images = coverSet(s.coverImage);
    return index({
      id: s.id,
      task: 1,
      number: s.reportNumber,
      kind: "essay",
      type: normaliseChartType(s.chartType),
      question: s.question,
      questionSource: "original",
      content: s.content,
      wordCount: s.wordCount,
      images,
      thumb: images[0]?.thumb,
      imageCount: images.length,
      vocabulary: s.vocabulary,
    });
  });
}

function fromLegacyTask2(): IndexedSample[] {
  return WRITING_ESSAYS.map((e) =>
    index({
      id: e.id,
      task: 2,
      number: e.testNumber,
      kind: "essay",
      type: LEGACY_T2_TYPES[e.id] ?? "Other",
      question: e.question,
      questionSource: "original",
      content: e.content,
      wordCount: e.wordCount,
      images: [],
      imageCount: 0,
      vocabulary: e.vocabulary,
    }),
  );
}

function fromImported(records: ImportedRecord[], task: SampleTask): IndexedSample[] {
  return records.map((r) => {
    const images = r.images ?? [];
    return index({
      id: r.id,
      task,
      number: r.number,
      kind: r.kind as SampleKind,
      type: r.type,
      question: r.question ?? "",
      questionSource: (r.questionSource as SampleDetail["questionSource"]) ?? "none",
      content: r.content ?? "",
      wordCount: r.wordCount ?? 0,
      band: r.band,
      date: r.date,
      note: r.note,
      videoUrl: r.videoUrl,
      images,
      file: r.file,
      thumb: images[0]?.thumb,
      imageCount: images.length,
      fileExt: r.file?.ext,
      vocabulary: [],
    });
  });
}

let cache: Record<SampleTask, IndexedSample[]> | null = null;

function all(): Record<SampleTask, IndexedSample[]> {
  if (!cache) {
    const byNumber = (a: IndexedSample, b: IndexedSample) => a.detail.number - b.detail.number;
    cache = {
      1: [...fromLegacyTask1(), ...fromImported(importedTask1 as ImportedRecord[], 1)].sort(
        byNumber,
      ),
      2: [...fromLegacyTask2(), ...fromImported(importedTask2 as ImportedRecord[], 2)].sort(
        byNumber,
      ),
    };
  }
  return cache;
}

function toCard(d: SampleDetail): SampleCard {
  return {
    id: d.id,
    task: d.task,
    number: d.number,
    kind: d.kind,
    type: d.type,
    question: d.question,
    wordCount: d.wordCount,
    band: d.band,
    thumb: d.thumb,
    imageCount: d.imageCount,
    fileExt: d.fileExt,
  };
}

function matchesQuery(entry: IndexedSample, terms: string[]): boolean {
  return terms.every((t) => entry.haystack.includes(t));
}

export function listSamples(params: {
  task: SampleTask;
  type?: string;
  q?: string;
  limit: number;
}): SampleListResult {
  const data = all();
  const terms = (params.q ?? "")
    .toLowerCase()
    .split(/\s+/)
    .filter((t) => t.length > 0)
    .slice(0, 8);
  const searched = terms.length
    ? data[params.task].filter((e) => matchesQuery(e, terms))
    : data[params.task];

  // Counts reflect the search but not the type filter, so every chip shows
  // how many results it would give.
  const typeCounts: Record<string, number> = {};
  for (const e of searched) typeCounts[e.detail.type] = (typeCounts[e.detail.type] ?? 0) + 1;

  const filtered = params.type ? searched.filter((e) => e.detail.type === params.type) : searched;
  return {
    items: filtered.slice(0, params.limit).map((e) => toCard(e.detail)),
    total: filtered.length,
    typeCounts,
    taskTotals: { 1: data[1].length, 2: data[2].length },
  };
}

function neighbour(entry: IndexedSample | undefined): SampleNeighbour | null {
  return entry
    ? { id: entry.detail.id, number: entry.detail.number, type: entry.detail.type }
    : null;
}

export function getSample(task: SampleTask, id: string) {
  const list = all()[task];
  const i = list.findIndex((e) => e.detail.id === id);
  if (i === -1) return null;
  return {
    sample: list[i].detail,
    prev: neighbour(list[i - 1]),
    next: neighbour(list[i + 1]),
    position: i + 1,
    total: list.length,
  };
}

export function sampleTotals(): Record<SampleTask, number> {
  const data = all();
  return { 1: data[1].length, 2: data[2].length };
}
