/* ────────────────────────────────────────────────────────────────
   Article annotation — pure string transform (safe on the server).

   Takes an article's trusted HTML body and returns a copy where:
   • every <p> carries data-para (1-based) and data-letter (A, B, …)
   • the first occurrence of each vocabulary item is wrapped in
     <mark class="rt rt-vocab" data-term data-word data-n>
   • collocations → <mark class="rt rt-col">, linking words →
     <mark class="rt rt-link"> (styled only by Study-mode lenses)
   • empty <div data-checkpoint="i" data-noselect> placeholders are
     inserted after the paragraph each question belongs to.

   Only text inside <p> elements is annotated, and no visible text
   is added, so textContent stays identical to the source HTML
   (saved highlights rely on that).
   ──────────────────────────────────────────────────────────────── */

export const LINKING_WORDS: readonly string[] = [
  "however",
  "therefore",
  "moreover",
  "furthermore",
  "in addition",
  "although",
  "whereas",
  "instead",
  "because of",
  "because",
  "as a result",
  "consequently",
  "for example",
  "for instance",
  "such as",
  "in contrast",
  "nevertheless",
  "nonetheless",
  "meanwhile",
  "thus",
  "hence",
  "despite",
  "in theory",
  "at best",
  "so far",
  "firstly",
  "secondly",
  "finally",
  "similarly",
  "in particular",
  "rather than",
  "indeed",
  "but",
  "yet",
];

type TermKind = "vocab" | "col" | "link";

interface TermEntry {
  text: string;
  kind: TermKind;
  pattern: string;
  matcher: RegExp;
}

export interface AnnotatedTerm {
  /** 0-based, in reading order. */
  id: number;
  /** The vocabulary item's headword, exactly as in the data. */
  word: string;
  /** 1-based paragraph the first occurrence sits in. */
  para: number;
}

export interface AnnotateOptions {
  vocab: readonly string[];
  collocations?: readonly string[];
  /** For each question (by index), the 1-based paragraph it follows. */
  checkpoints?: readonly number[];
}

export interface AnnotateResult {
  html: string;
  terms: AnnotatedTerm[];
  paragraphCount: number;
}

function escapeRegExp(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function escapeAttr(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
}

/** Pattern for one word allowing common English inflections. */
function inflect(word: string): string {
  const w = escapeRegExp(word);
  const forms = [`${w}(?:s|es|d|ed|ing)?`];
  if (/e$/i.test(word)) forms.push(`${escapeRegExp(word.slice(0, -1))}ing`);
  if (/y$/i.test(word)) forms.push(`${escapeRegExp(word.slice(0, -1))}ies`);
  return forms.length === 1 ? forms[0] : `(?:${forms.join("|")})`;
}

/** Inflect the first word of a phrase ("usher in" → "ushered in"). */
function phrasePattern(text: string, allowInflection: boolean): string {
  const [first, ...rest] = text.trim().split(/\s+/);
  const head = allowInflection ? inflect(first) : escapeRegExp(first);
  return [head, ...rest.map(escapeRegExp)].join("\\s+");
}

function buildEntries(opts: AnnotateOptions): TermEntry[] {
  const raw: { text: string; kind: TermKind }[] = [
    ...opts.vocab.map((text) => ({ text, kind: "vocab" as const })),
    ...(opts.collocations ?? []).map((text) => ({ text, kind: "col" as const })),
    ...LINKING_WORDS.map((text) => ({ text, kind: "link" as const })),
  ];
  return raw
    .filter((e) => e.text.trim().length > 0)
    .map((e) => {
      const pattern = phrasePattern(e.text, e.kind !== "link");
      return { ...e, pattern, matcher: new RegExp(`^(?:${pattern})$`, "i") };
    })
    .sort((a, b) => b.text.length - a.text.length);
}

/** A, B, …, Z, AA, AB, … */
export function paragraphLetter(index: number): string {
  let n = index;
  let out = "";
  do {
    out = String.fromCharCode(65 + (n % 26)) + out;
    n = Math.floor(n / 26) - 1;
  } while (n >= 0);
  return out;
}

export function annotateArticle(html: string, opts: AnnotateOptions): AnnotateResult {
  const entries = buildEntries(opts);
  const combined = entries.length
    ? new RegExp(`(?<![\\w’'-])(?:${entries.map((e) => e.pattern).join("|")})(?![\\w’'-])`, "gi")
    : null;

  const terms: AnnotatedTerm[] = [];
  const usedVocab = new Set<string>();
  let para = 0;
  let pDepth = 0;

  const annotateText = (text: string): string => {
    if (!combined || pDepth === 0) return text;
    return text.replace(combined, (match) => {
      const entry = entries.find((e) => e.matcher.test(match));
      if (!entry) return match;
      if (entry.kind === "vocab") {
        if (usedVocab.has(entry.text)) return match;
        usedVocab.add(entry.text);
        const id = terms.length;
        terms.push({ id, word: entry.text, para });
        return `<mark class="rt rt-vocab" data-term="${id}" data-n="${id + 1}" data-word="${escapeAttr(entry.text)}" tabindex="0" role="button">${match}</mark>`;
      }
      return `<mark class="rt rt-${entry.kind}">${match}</mark>`;
    });
  };

  const checkpointsAfter = (p: number): string =>
    (opts.checkpoints ?? [])
      .map((target, qi) =>
        target === p ? `<div data-checkpoint="${qi}" data-noselect="true"></div>` : "",
      )
      .join("");

  const out = html
    .split(/(<[^>]+>)/)
    .map((segment) => {
      if (!segment.startsWith("<")) return annotateText(segment);
      if (/^<p[\s>]/i.test(segment)) {
        para += 1;
        pDepth += 1;
        const attrs = ` data-para="${para}" data-letter="${paragraphLetter(para - 1)}"`;
        return segment.replace(/^<p/i, `<p${attrs}`);
      }
      if (/^<\/p\s*>/i.test(segment)) {
        pDepth = Math.max(0, pDepth - 1);
        return segment + checkpointsAfter(para);
      }
      return segment;
    })
    .join("");

  return { html: out, terms, paragraphCount: para };
}
