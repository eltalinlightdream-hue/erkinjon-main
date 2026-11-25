import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type RefObject,
} from "react";
import { BookmarkPlus, Lightbulb } from "lucide-react";
import type { ReadingTip, VocabItem } from "@/lib/articles-data";
import type { AnnotatedTerm } from "@/lib/article-annotate";
import { cn } from "@/lib/utils";
import { speak } from "./speak";
import type { WordInfo } from "./word-sheet";

const NOTE_GAP = 16;

const TYPE_ABBR: Record<string, string> = {
  noun: "n.",
  verb: "v.",
  adjective: "adj.",
  adverb: "adv.",
  phrase: "phr.",
  "noun phrase": "n. phr.",
  "verb phrase": "v. phr.",
  "adjective phrase": "adj. phr.",
};

type Note =
  | { key: string; kind: "vocab"; term: AnnotatedTerm; info: WordInfo }
  | { key: string; kind: "tip"; tip: ReadingTip };

type Props = {
  bodyRef: RefObject<HTMLElement | null>;
  terms: AnnotatedTerm[];
  lookup: (word: string) => WordInfo | undefined;
  tips: ReadingTip[];
  /** Term id to briefly highlight (after clicking it in the text). */
  flashTermId: number | null;
  /** Changes whenever text reflows (font, size, mode). */
  layoutKey: string;
  onSave: (vocab: VocabItem) => void;
};

/** Tufte-style sidenotes: each definition sits level with the word
 *  it explains, nudged down only when it would overlap the previous. */
export function MarginNotes({
  bodyRef,
  terms,
  lookup,
  tips,
  flashTermId,
  layoutKey,
  onSave,
}: Props) {
  const asideRef = useRef<HTMLElement>(null);
  const noteRefs = useRef(new Map<string, HTMLElement>());
  const [tops, setTops] = useState<Record<string, number>>({});
  const [height, setHeight] = useState(0);

  const notes: Note[] = [
    ...terms.flatMap((term): Note[] => {
      const info = lookup(term.word);
      return info ? [{ key: `v${term.id}`, kind: "vocab", term, info }] : [];
    }),
    ...tips.map((tip, i): Note => ({ key: `t${i}`, kind: "tip", tip })),
  ];
  const notesSignature = notes.map((n) => n.key).join(",");

  const layout = useCallback(() => {
    const aside = asideRef.current;
    const body = bodyRef.current;
    if (!aside || !body) return;
    const base = aside.getBoundingClientRect().top;

    const anchored = notesSignature
      .split(",")
      .filter(Boolean)
      .map((key) => {
        const selector = key.startsWith("v")
          ? `mark[data-term="${key.slice(1)}"]`
          : `p[data-para="${tips[Number(key.slice(1))]?.paragraph}"]`;
        const anchor = body.querySelector(selector);
        return { key, desired: anchor ? anchor.getBoundingClientRect().top - base : null };
      })
      .filter((n): n is { key: string; desired: number } => n.desired !== null)
      .sort((a, b) => a.desired - b.desired);

    let cursor = 0;
    const next: Record<string, number> = {};
    for (const { key, desired } of anchored) {
      const top = Math.max(desired - 4, cursor);
      next[key] = top;
      cursor = top + (noteRefs.current.get(key)?.offsetHeight ?? 0) + NOTE_GAP;
    }
    setTops(next);
    setHeight(cursor);
  }, [bodyRef, notesSignature, tips]);

  useEffect(() => {
    layout();
    const body = bodyRef.current;
    const observer = new ResizeObserver(() => layout());
    if (body) observer.observe(body);
    window.addEventListener("resize", layout);
    void document.fonts?.ready.then(layout);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", layout);
    };
  }, [bodyRef, layout, layoutKey]);

  const register = (key: string) => (el: HTMLElement | null) => {
    if (el) noteRefs.current.set(key, el);
    else noteRefs.current.delete(key);
  };

  return (
    <aside
      ref={asideRef}
      className="relative hidden lg:block"
      style={{ minHeight: height }}
      aria-label="Margin notes"
    >
      {notes.map((note) => {
        const top = tops[note.key];
        const style = {
          top: top ?? 0,
          visibility: top === undefined ? "hidden" : "visible",
        } as const;
        return note.kind === "vocab" ? (
          <VocabNote
            key={note.key}
            ref={register(note.key)}
            style={style}
            number={note.term.id + 1}
            info={note.info}
            isFlashing={flashTermId === note.term.id}
            onSave={onSave}
          />
        ) : (
          <div
            key={note.key}
            ref={register(note.key)}
            style={style}
            className="reader-tip absolute inset-x-0 rounded-r-xl p-3 text-[13px] leading-relaxed transition-[top] duration-300"
          >
            <p className="font-mono text-[9.5px] tracking-[0.16em] uppercase text-[var(--olive)] flex items-center gap-1 mb-1">
              <Lightbulb className="w-3 h-3" /> IELTS tip
            </p>
            {note.tip.text}
          </div>
        );
      })}
    </aside>
  );
}

type VocabNoteProps = {
  ref: (el: HTMLElement | null) => void;
  style: CSSProperties;
  number: number;
  info: WordInfo;
  isFlashing: boolean;
  onSave: (vocab: VocabItem) => void;
};

function VocabNote({ ref, style, number, info, isFlashing, onSave }: VocabNoteProps) {
  const { vocab, pron } = info;
  const type = vocab.wordType ? (TYPE_ABBR[vocab.wordType] ?? vocab.wordType) : null;
  return (
    <div
      ref={ref}
      style={style}
      className={cn(
        "reader-note group absolute inset-x-0 pl-3 pr-5 text-[13px] leading-relaxed transition-[top] duration-300",
        isFlashing && "note-flash",
      )}
    >
      <div className="flex flex-wrap items-baseline gap-x-1.5">
        <span className="font-mono text-[10px] text-[var(--ochre)]">{number}</span>
        <button
          type="button"
          onClick={() => speak(vocab.word)}
          className="font-serif text-[16px] font-semibold text-left leading-snug hover:text-[var(--olive)] transition-colors"
          title="Listen"
        >
          {vocab.word}
        </button>
        {type && (
          <span className="italic text-[12px] text-muted-foreground whitespace-nowrap">{type}</span>
        )}
        <button
          type="button"
          onClick={() => onSave(vocab)}
          className="absolute right-0 top-0.5 opacity-0 group-hover:opacity-100 focus-visible:opacity-100 text-muted-foreground hover:text-[var(--olive)] transition"
          aria-label={`Save ${vocab.word}`}
        >
          <BookmarkPlus className="w-3.5 h-3.5" />
        </button>
      </div>
      {pron && <p className="font-mono text-[11px] text-muted-foreground">{pron.ipa}</p>}
      <p>{vocab.definition}</p>
      {vocab.synonyms && vocab.synonyms.length > 0 && (
        <p className="text-[var(--olive)]">≈ {vocab.synonyms.slice(0, 2).join(", ")}</p>
      )}
    </div>
  );
}
