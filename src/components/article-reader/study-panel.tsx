import type { ComprehensionQuestion, PronunciationItem, VocabItem } from "@/lib/articles-data";
import { paragraphLetter, type AnnotatedTerm } from "@/lib/article-annotate";
import { cn } from "@/lib/utils";
import { QuestionCard } from "./question-card";
import { PronunciationCard, WordCard } from "./word-bank";
import type { WordInfo } from "./word-sheet";

/* ─── Lens bar ───────────────────────────────────────────────── */

export type LensKey = "vocab" | "col" | "link";
export type Lenses = Record<LensKey, boolean>;

const LENS_META: { key: LensKey; label: string; dot: string }[] = [
  { key: "vocab", label: "Key words", dot: "bg-[var(--ochre)]" },
  { key: "col", label: "Collocations", dot: "bg-[var(--lens-col)]" },
  { key: "link", label: "Linking words", dot: "bg-[var(--terracotta)]" },
];

type LensBarProps = {
  lenses: Lenses;
  available: Record<LensKey, number>;
  onToggle: (key: LensKey) => void;
};

export function LensBar({ lenses, available, onToggle }: LensBarProps) {
  return (
    <div className="flex flex-wrap items-center gap-2 mb-8" role="group" aria-label="Highlight">
      <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-muted-foreground mr-1">
        Highlight
      </span>
      {LENS_META.filter((l) => available[l.key] > 0).map((l) => (
        <button
          key={l.key}
          type="button"
          aria-pressed={lenses[l.key]}
          onClick={() => onToggle(l.key)}
          className={cn(
            `reader-lens reader-lens-${l.key} inline-flex items-center gap-2 h-8 px-3.5 rounded-full border text-[12px] font-semibold transition`,
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--olive)]",
            !lenses[l.key] && "opacity-60 hover:opacity-100",
          )}
        >
          <span className={cn("w-2 h-2 rounded-full", l.dot)} aria-hidden />
          {l.label}
          <span className="font-mono text-[10px] opacity-60">{available[l.key]}</span>
        </button>
      ))}
    </div>
  );
}

/* ─── Study panel ────────────────────────────────────────────── */

export type StudyTab = "words" | "questions" | "sounds";

type Props = {
  tab: StudyTab;
  onTabChange: (tab: StudyTab) => void;
  activePara: number;
  terms: AnnotatedTerm[];
  lookup: (word: string) => WordInfo | undefined;
  vocabulary: VocabItem[];
  pronunciation: PronunciationItem[];
  questions: ComprehensionQuestion[];
  selectedWord: string | null;
  onJumpToWord: (word: string) => void;
  onSave: (vocab: VocabItem) => void;
};

export function StudyPanel({
  tab,
  onTabChange,
  activePara,
  terms,
  lookup,
  vocabulary,
  pronunciation,
  questions,
  selectedWord,
  onJumpToWord,
  onSave,
}: Props) {
  const letter = paragraphLetter(activePara - 1);
  const inPara = terms.filter((t) => t.para === activePara);
  const tabs: { key: StudyTab; label: string; count: number }[] = [
    { key: "words", label: "Words", count: vocabulary.length },
    { key: "questions", label: "Questions", count: questions.length },
    { key: "sounds", label: "Sounds", count: pronunciation.length },
  ];

  return (
    <aside className="hidden lg:block" aria-label="Study panel">
      <div className="sticky top-[calc(3.5rem+56px)] max-h-[calc(100vh-3.5rem-72px)] overflow-y-auto overscroll-contain py-8 pr-1 [scrollbar-width:thin]">
        <div className="flex gap-1 rounded-xl bg-muted p-1" role="tablist">
          {tabs.map((t) => (
            <button
              key={t.key}
              type="button"
              role="tab"
              aria-selected={tab === t.key}
              onClick={() => onTabChange(t.key)}
              className={cn(
                "flex-1 h-8 rounded-lg text-[13px] transition",
                tab === t.key
                  ? "bg-background font-semibold shadow-sm"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {t.label}
              <span className="ml-1 font-mono text-[10px] opacity-60">{t.count}</span>
            </button>
          ))}
        </div>

        {tab === "words" && (
          <div className="mt-5 space-y-3">
            <p className="font-mono text-[10px] tracking-[0.16em] uppercase text-muted-foreground">
              Paragraph {letter} · {inPara.length} key {inPara.length === 1 ? "word" : "words"}
            </p>
            {inPara.length === 0 && (
              <p className="text-sm text-muted-foreground italic">
                No key words here. Keep reading, or pick one below.
              </p>
            )}
            {inPara.map((t) => {
              const info = lookup(t.word);
              if (!info) return null;
              return (
                <div
                  key={t.id}
                  className={cn(
                    "rounded-2xl transition-shadow",
                    selectedWord === t.word && "ring-2 ring-[var(--ochre)]",
                  )}
                >
                  <WordCard vocab={info.vocab} onSave={onSave} number={t.id + 1} />
                </div>
              );
            })}

            <div className="pt-4">
              <p className="font-mono text-[10px] tracking-[0.16em] uppercase text-muted-foreground mb-2">
                All key words
              </p>
              <div className="flex flex-wrap gap-1.5">
                {vocabulary.map((v) => {
                  const isMarked = terms.some((t) => t.word === v.word);
                  return (
                    <button
                      key={v.word}
                      type="button"
                      onClick={() => onJumpToWord(v.word)}
                      disabled={!isMarked}
                      title={isMarked ? "Jump to this word" : "Not marked in the text"}
                      className={cn(
                        "rounded-full border border-border px-2.5 py-1 text-[12px] transition",
                        isMarked
                          ? "hover:border-[var(--ochre)] hover:bg-[var(--ochre-wash)]"
                          : "opacity-60 cursor-default",
                        selectedWord === v.word && "border-[var(--ochre)] bg-[var(--ochre-wash)]",
                      )}
                    >
                      {v.word}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {tab === "questions" && (
          <div className="mt-5 space-y-3">
            {questions.length === 0 ? (
              <p className="text-sm text-muted-foreground italic">
                No questions for this article yet.
              </p>
            ) : (
              questions.map((q) => (
                <QuestionCard
                  key={q.question}
                  question={q}
                  isCurrent={q.paragraph === activePara}
                />
              ))
            )}
          </div>
        )}

        {tab === "sounds" && (
          <div className="mt-5 space-y-3">
            {pronunciation.map((p) => (
              <PronunciationCard key={p.word} item={p} />
            ))}
          </div>
        )}
      </div>
    </aside>
  );
}
