import { BookmarkPlus, Volume2 } from "lucide-react";
import type { PronunciationItem, VocabItem } from "@/lib/articles-data";
import { Reveal } from "@/components/reveal";
import { speak } from "./speak";
import { useCanSpeak } from "./use-reader";

type WordCardProps = {
  vocab: VocabItem;
  onSave: (vocab: VocabItem) => void;
  /** Footnote number when the word is marked in the text. */
  number?: number;
};

export function WordCard({ vocab, onSave, number }: WordCardProps) {
  const speakable = useCanSpeak();
  return (
    <article className="reader-card rounded-2xl p-5 flex flex-col">
      <header className="flex items-baseline justify-between gap-2">
        <h3 className="font-serif text-xl font-semibold leading-tight">
          {number !== undefined && (
            <sup className="font-mono text-[10px] text-[var(--ochre)] mr-1">{number}</sup>
          )}
          {vocab.word}
        </h3>
        {vocab.wordType && (
          <span className="font-mono text-[9px] tracking-[0.14em] uppercase text-muted-foreground shrink-0">
            {vocab.wordType}
          </span>
        )}
      </header>
      <p className="text-sm leading-relaxed mt-2">{vocab.definition}</p>
      {vocab.example && (
        <p className="text-[13px] italic text-muted-foreground mt-2">“{vocab.example}”</p>
      )}
      {vocab.synonyms && vocab.synonyms.length > 0 && (
        <p className="text-[13px] mt-2 text-[var(--olive)]">≈ {vocab.synonyms.join(", ")}</p>
      )}
      <div className="mt-auto pt-4 flex gap-2">
        <button
          type="button"
          onClick={() => onSave(vocab)}
          className="reader-chip-btn inline-flex items-center gap-1.5"
        >
          <BookmarkPlus className="w-3.5 h-3.5" /> Save
        </button>
        {speakable && (
          <button
            type="button"
            onClick={() => speak(vocab.word)}
            className="reader-chip-btn inline-flex items-center gap-1.5"
            aria-label={`Listen to ${vocab.word}`}
          >
            <Volume2 className="w-3.5 h-3.5" /> Listen
          </button>
        )}
      </div>
    </article>
  );
}

export function PronunciationCard({ item }: { item: PronunciationItem }) {
  const speakable = useCanSpeak();
  return (
    <article className="reader-card rounded-2xl p-5">
      <header className="flex items-start justify-between gap-2">
        <h3 className="font-serif text-xl font-bold">{item.word}</h3>
        {speakable && (
          <button
            type="button"
            onClick={() => speak(item.word)}
            className="reader-chip-btn inline-flex items-center gap-1.5 shrink-0"
            aria-label={`Listen to ${item.word}`}
          >
            <Volume2 className="w-3.5 h-3.5" /> Listen
          </button>
        )}
      </header>
      <p className="font-mono text-[15px] text-[var(--olive)] mt-2 tracking-wide">{item.ipa}</p>
      <p className="text-[13px] text-muted-foreground mt-1">
        Syllables:{" "}
        <span className="font-mono font-semibold text-foreground tracking-wider">
          {item.syllables}
        </span>
      </p>
      <p className="font-mono text-[11px] text-muted-foreground bg-muted/60 rounded-xl p-3 mt-3 leading-relaxed">
        💡 {item.tip}
      </p>
    </article>
  );
}

type WordBankProps = {
  vocabulary: VocabItem[];
  pronunciation: PronunciationItem[];
  numberOf: (word: string) => number | undefined;
  onSave: (vocab: VocabItem) => void;
};

/** Full word list + pronunciation guide shown after the article. */
export function WordBank({ vocabulary, pronunciation, numberOf, onSave }: WordBankProps) {
  return (
    <>
      {vocabulary.length > 0 && (
        <section className="mt-16" aria-labelledby="word-bank-heading">
          <p className="font-mono text-[10px] tracking-[0.16em] uppercase text-[var(--olive)]">
            Word bank
          </p>
          <h2 id="word-bank-heading" className="font-serif text-3xl font-bold mt-1 mb-6">
            {vocabulary.length} words to keep
          </h2>
          <Reveal className="grid sm:grid-cols-2 gap-3">
            {vocabulary.map((v) => (
              <WordCard key={v.word} vocab={v} onSave={onSave} number={numberOf(v.word)} />
            ))}
          </Reveal>
        </section>
      )}

      {pronunciation.length > 0 && (
        <section className="mt-14" aria-labelledby="pron-heading">
          <p className="font-mono text-[10px] tracking-[0.16em] uppercase text-[var(--olive)]">
            Read aloud
          </p>
          <h2 id="pron-heading" className="font-serif text-3xl font-bold mt-1 mb-6">
            Pronunciation guide
          </h2>
          <Reveal className="grid sm:grid-cols-2 gap-3">
            {pronunciation.map((p) => (
              <PronunciationCard key={p.word} item={p} />
            ))}
          </Reveal>
        </section>
      )}
    </>
  );
}
