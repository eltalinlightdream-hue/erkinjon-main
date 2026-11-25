import { BookmarkPlus, Languages, Volume2 } from "lucide-react";
import type { PronunciationItem, VocabItem } from "@/lib/articles-data";
import { Drawer, DrawerContent, DrawerDescription, DrawerTitle } from "@/components/ui/drawer";
import { speak } from "./speak";
import { useCanSpeak } from "./use-reader";

export interface WordInfo {
  vocab: VocabItem;
  pron?: PronunciationItem;
}

type Props = {
  word: WordInfo | null;
  onOpenChange: (open: boolean) => void;
  onSave: (vocab: VocabItem) => void;
};

/** Mobile bottom sheet shown when a highlighted word is tapped. */
export function WordSheet({ word, onOpenChange, onSave }: Props) {
  return (
    <Drawer open={!!word} onOpenChange={onOpenChange} shouldScaleBackground={false}>
      <DrawerContent className="px-5 pb-8 pt-2">
        {word && <WordSheetBody word={word} onSave={onSave} />}
      </DrawerContent>
    </Drawer>
  );
}

function WordSheetBody({ word, onSave }: { word: WordInfo; onSave: Props["onSave"] }) {
  const { vocab, pron } = word;
  const speakable = useCanSpeak();
  const meta = [pron?.ipa, vocab.wordType].filter(Boolean).join(" · ");
  const translateUrl = `https://translate.google.com/?sl=en&text=${encodeURIComponent(vocab.word)}&op=translate`;

  return (
    <div className="mx-auto w-full max-w-md">
      <div className="flex items-start justify-between gap-3 mt-3">
        <DrawerTitle className="font-serif text-3xl font-semibold leading-tight">
          {vocab.word}
        </DrawerTitle>
        {speakable && (
          <button
            type="button"
            onClick={() => speak(vocab.word)}
            className="shrink-0 grid place-items-center w-10 h-10 rounded-full bg-[var(--olive-wash)] text-[var(--olive-deep)] active:scale-95 transition-transform"
            aria-label={`Listen to ${vocab.word}`}
          >
            <Volume2 className="w-5 h-5" />
          </button>
        )}
      </div>
      {meta && <p className="font-mono text-sm text-[var(--olive)] mt-1">{meta}</p>}

      <DrawerDescription className="text-[15px] leading-relaxed text-foreground mt-3">
        {vocab.definition}
      </DrawerDescription>
      {vocab.example && (
        <p className="text-sm italic text-muted-foreground mt-2 border-l-2 border-[var(--ochre)] pl-3">
          “{vocab.example}”
        </p>
      )}

      {vocab.synonyms && vocab.synonyms.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-4">
          {vocab.synonyms.map((s) => (
            <span
              key={s}
              className="rounded-full bg-[var(--olive-wash)] text-[var(--olive-deep)] px-3 py-1 text-xs font-medium"
            >
              ≈ {s}
            </span>
          ))}
        </div>
      )}

      <div className="grid grid-cols-2 gap-2.5 mt-6">
        <a
          href={translateUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-border py-3 text-sm font-semibold hover:bg-muted transition-colors"
        >
          <Languages className="w-4 h-4" /> Translate
        </a>
        <button
          type="button"
          onClick={() => onSave(vocab)}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--olive)] text-white py-3 text-sm font-semibold hover:bg-[var(--olive-deep)] active:scale-[0.98] transition"
        >
          <BookmarkPlus className="w-4 h-4" /> Save word
        </button>
      </div>
    </div>
  );
}
