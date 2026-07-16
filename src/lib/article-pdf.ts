import type { Article } from "@/lib/articles-data";

/**
 * Zero-dependency, client-side PDF generator for an article + its vocabulary
 * and pronunciation. Produces a real `.pdf` file and triggers a browser
 * download (no print dialog).
 *
 * It writes a minimal but valid PDF 1.4 document using the three standard
 * Helvetica fonts (regular / bold / oblique) with WinAnsi encoding — which
 * covers all Latin text, smart quotes, dashes and accented letters used in the
 * articles. No font embedding, so the output stays tiny and needs no external
 * library.
 */

// ─── A4 geometry (points) ──────────────────────────────────────────
const PAGE_W = 595.28;
const PAGE_H = 841.89;
const MARGIN = 50;
const CONTENT_W = PAGE_W - MARGIN * 2;

type FontKey = "F1" | "F2" | "F3"; // Helvetica, Helvetica-Bold, Helvetica-Oblique

// Accent color (terracotta) for rules/eyebrow, in 0..1 rgb.
const ACCENT = "0.78 0.38 0.25";
const INK = "0.11 0.11 0.13";
const MUTED = "0.34 0.34 0.36";

// ─── Helvetica glyph widths (units per 1000 em) ─────────────────────
// Enough for accurate line wrapping; unknown glyphs fall back to 556.
const WIDTHS: Record<string, number> = {
  " ": 278, "!": 278, '"': 355, "#": 556, $: 556, "%": 889, "&": 667, "'": 191,
  "(": 333, ")": 333, "*": 389, "+": 584, ",": 278, "-": 333, ".": 278, "/": 278,
  "0": 556, "1": 556, "2": 556, "3": 556, "4": 556, "5": 556, "6": 556, "7": 556,
  "8": 556, "9": 556, ":": 278, ";": 278, "<": 584, "=": 584, ">": 584, "?": 556,
  "@": 1015, A: 667, B: 667, C: 722, D: 722, E: 667, F: 611, G: 778, H: 722,
  I: 278, J: 500, K: 667, L: 556, M: 833, N: 722, O: 778, P: 667, Q: 778, R: 722,
  S: 667, T: 611, U: 722, V: 667, W: 944, X: 667, Y: 667, Z: 611, "[": 278,
  "\\": 278, "]": 278, "^": 469, _: 556, "`": 333, a: 556, b: 556, c: 500, d: 556,
  e: 556, f: 278, g: 556, h: 556, i: 222, j: 222, k: 500, l: 222, m: 833, n: 556,
  o: 556, p: 556, q: 556, r: 333, s: 500, t: 278, u: 556, v: 500, w: 722, x: 500,
  y: 500, z: 500, "{": 334, "|": 260, "}": 334, "~": 584,
  // typographic punctuation
  "‘": 222, "’": 222, "“": 333, "”": 333, "•": 350,
  "–": 556, "—": 1000, "…": 1000,
};

function charWidth(ch: string): number {
  return WIDTHS[ch] ?? 556;
}

function textWidth(str: string, size: number): number {
  let w = 0;
  for (const ch of str) w += charWidth(ch);
  return (w / 1000) * size;
}

// ─── Unicode → WinAnsi (cp1252) byte string ─────────────────────────
const WINANSI_MAP: Record<number, number> = {
  0x2018: 0x91, 0x2019: 0x92, 0x201c: 0x93, 0x201d: 0x94, 0x2022: 0x95,
  0x2013: 0x96, 0x2014: 0x97, 0x2026: 0x85, 0x2122: 0x99, 0x20ac: 0x80,
};

function toWinAnsi(str: string): string {
  let out = "";
  for (const ch of str) {
    const cp = ch.codePointAt(0) ?? 0x3f;
    let byte: number;
    if (cp <= 0xff) byte = cp;
    else byte = WINANSI_MAP[cp] ?? 0x3f;
    out += String.fromCharCode(byte);
  }
  return out;
}

function escapePdf(str: string): string {
  return toWinAnsi(str)
    .replace(/\\/g, "\\\\")
    .replace(/\(/g, "\\(")
    .replace(/\)/g, "\\)");
}

function normalize(text: string): string {
  return text.replace(/\s+/g, " ").trim();
}

// ─── Document builder ───────────────────────────────────────────────
class PdfDoc {
  private pages: string[][] = [[]];
  private page = 0;
  private y = MARGIN; // distance from top of the current page

  private newPage() {
    this.pages.push([]);
    this.page += 1;
    this.y = MARGIN;
  }

  private ensure(height: number) {
    if (this.y + height > PAGE_H - MARGIN) this.newPage();
  }

  /** Draw a single, already-wrapped line at the current cursor. */
  private lineAt(text: string, size: number, font: FontKey, color: string, x: number) {
    const lineHeight = size * 1.38;
    this.ensure(lineHeight);
    const baseline = this.y + size;
    const pdfY = (PAGE_H - baseline).toFixed(2);
    this.pages[this.page].push(
      `BT /${font} ${size} Tf ${color} rg 1 0 0 1 ${x.toFixed(2)} ${pdfY} Tm (${escapePdf(
        text,
      )}) Tj ET`,
    );
    this.y += lineHeight;
  }

  /** Wrap and draw a paragraph of text. */
  paragraph(
    text: string,
    opts: { size?: number; font?: FontKey; color?: string; indent?: number; after?: number } = {},
  ) {
    const { size = 11, font = "F1", color = INK, indent = 0, after = 6 } = opts;
    const clean = normalize(text);
    if (!clean) return;
    const x = MARGIN + indent;
    const avail = CONTENT_W - indent;

    for (const line of wrapLines(clean, size, avail)) {
      this.lineAt(line, size, font, color, x);
    }
    this.y += after;
  }

  /** Vertical whitespace. */
  space(h: number) {
    this.y += h;
  }

  /** A horizontal rule at the current cursor. */
  rule(color: string = ACCENT, weight = 1.4) {
    this.ensure(weight + 6);
    const pdfY = (PAGE_H - this.y).toFixed(2);
    this.pages[this.page].push(
      `${color} RG ${weight} w ${MARGIN} ${pdfY} m ${PAGE_W - MARGIN} ${pdfY} l S`,
    );
    this.y += weight + 6;
  }

  /** Force following content onto a fresh page (unless already at the top). */
  pageBreak() {
    if (this.y > MARGIN) this.newPage();
  }

  /** Serialize to a Uint8Array. */
  build(): Uint8Array {
    const objects: string[] = [];
    const offsets: number[] = [];
    let body = "%PDF-1.4\n%âãÏÓ\n";

    const addObject = (content: string) => {
      offsets.push(body.length);
      const num = objects.length + 1;
      body += `${num} 0 obj\n${content}\nendobj\n`;
      objects.push(content);
      return num;
    };

    // Reserve object numbers deterministically.
    // 1 catalog, 2 pages, 3-5 fonts, then per page: content + page object.
    const n = this.pages.length;
    const kids = Array.from({ length: n }, (_, i) => `${7 + i * 2} 0 R`).join(" ");

    addObject("<< /Type /Catalog /Pages 2 0 R >>"); // 1
    addObject(`<< /Type /Pages /Kids [${kids}] /Count ${n} >>`); // 2
    addObject("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>"); // 3
    addObject(
      "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>",
    ); // 4
    addObject(
      "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Oblique /Encoding /WinAnsiEncoding >>",
    ); // 5

    for (let i = 0; i < n; i++) {
      const stream = this.pages[i].join("\n");
      addObject(`<< /Length ${stream.length} >>\nstream\n${stream}\nendstream`); // content (6, 8, ...)
      addObject(
        `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${PAGE_W} ${PAGE_H}] ` +
          `/Resources << /Font << /F1 3 0 R /F2 4 0 R /F3 5 0 R >> >> /Contents ${6 + i * 2} 0 R >>`,
      ); // page (7, 9, ...)
    }

    const xrefOffset = body.length;
    const count = objects.length + 1;
    let xref = `xref\n0 ${count}\n0000000000 65535 f \n`;
    for (const off of offsets) {
      xref += `${off.toString().padStart(10, "0")} 00000 n \n`;
    }
    body += xref;
    body += `trailer\n<< /Size ${count} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`;

    const bytes = new Uint8Array(body.length);
    for (let i = 0; i < body.length; i++) bytes[i] = body.charCodeAt(i) & 0xff;
    return bytes;
  }
}

function wrapLines(text: string, size: number, maxWidth: number): string[] {
  const words = text.split(" ");
  const lines: string[] = [];
  let current = "";

  for (const word of words) {
    const candidate = current ? `${current} ${word}` : word;
    if (textWidth(candidate, size) <= maxWidth) {
      current = candidate;
      continue;
    }
    if (current) lines.push(current);
    if (textWidth(word, size) > maxWidth) {
      // Break an over-long word across lines by character.
      let chunk = "";
      for (const ch of word) {
        if (textWidth(chunk + ch, size) <= maxWidth) chunk += ch;
        else {
          if (chunk) lines.push(chunk);
          chunk = ch;
        }
      }
      current = chunk;
    } else {
      current = word;
    }
  }
  if (current) lines.push(current);
  return lines.length ? lines : [""];
}

// ─── Article → PdfDoc content ───────────────────────────────────────
function renderArticleBody(doc: PdfDoc, html: string) {
  const parsed = new DOMParser().parseFromString(html, "text/html");
  const blocks = Array.from(parsed.body.children);

  for (const el of blocks) {
    const tag = el.tagName.toLowerCase();
    const text = el.textContent ?? "";

    if (tag === "h2") {
      doc.space(8);
      doc.paragraph(text, { size: 15, font: "F2", after: 4 });
    } else if (tag === "h3") {
      doc.space(6);
      doc.paragraph(text, { size: 12.5, font: "F2", after: 3 });
    } else if (tag === "blockquote") {
      doc.paragraph(text, { size: 11, font: "F3", color: MUTED, indent: 16, after: 8 });
    } else if (tag === "ul" || tag === "ol") {
      const items = Array.from(el.querySelectorAll(":scope > li"));
      items.forEach((li, idx) => {
        const marker = tag === "ol" ? `${idx + 1}.` : "•";
        doc.paragraph(`${marker}  ${li.textContent ?? ""}`, { indent: 14, after: 3 });
      });
      doc.space(5);
    } else {
      doc.paragraph(text, { size: 11, after: 8 });
    }
  }
}

/** Build the full PDF for an article and trigger a browser download. */
export function downloadArticlePdf(article: Article) {
  const doc = new PdfDoc();

  // Header
  doc.paragraph(`${article.topic}  ·  ${article.difficulty}  ·  ${article.readingTime} min read`, {
    size: 8.5,
    font: "F2",
    color: ACCENT,
    after: 4,
  });
  doc.paragraph(article.title, { size: 22, font: "F2", after: 6 });
  if (article.description) {
    doc.paragraph(article.description, { size: 11.5, font: "F3", color: MUTED, after: 4 });
  }
  const dateLabel = new Date(article.date).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  doc.paragraph(`${dateLabel}  ·  Abduraimov Erkinjon`, { size: 9, color: MUTED, after: 6 });
  doc.rule();
  doc.space(6);

  // Body
  renderArticleBody(doc, article.content);

  // Vocabulary
  if (article.vocabulary.length > 0) {
    doc.pageBreak();
    doc.paragraph(`Vocabulary (${article.vocabulary.length})`, { size: 16, font: "F2", after: 2 });
    doc.rule("0.85 0.85 0.87", 0.8);
    doc.space(4);
    for (const v of article.vocabulary) {
      const head = v.wordType ? `${v.word}   [${v.wordType}]` : v.word;
      doc.paragraph(head, { size: 12.5, font: "F2", after: 2 });
      doc.paragraph(v.definition, { size: 10.5, after: v.example ? 2 : 8 });
      if (v.example) {
        doc.paragraph(`“${v.example}”`, { size: 10, font: "F3", color: MUTED, after: 8 });
      }
    }
  }

  // Pronunciation
  if (article.pronunciation.length > 0) {
    doc.pageBreak();
    doc.paragraph(`Pronunciation (${article.pronunciation.length})`, {
      size: 16,
      font: "F2",
      after: 2,
    });
    doc.rule("0.85 0.85 0.87", 0.8);
    doc.space(4);
    for (const p of article.pronunciation) {
      doc.paragraph(`${p.word}   ${p.ipa}`, { size: 12.5, font: "F2", after: 2 });
      doc.paragraph(`Syllables: ${p.syllables}`, { size: 10.5, after: 2 });
      doc.paragraph(`Tip: ${p.tip}`, { size: 10, font: "F3", color: MUTED, after: 8 });
    }
  }

  const bytes = doc.build();
  const blob = new Blob([bytes], { type: "application/pdf" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${article.slug}.pdf`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}
