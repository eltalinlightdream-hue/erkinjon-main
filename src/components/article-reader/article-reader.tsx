import { useCallback, useEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import { createPortal } from "react-dom";
import { CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import type { Article, VocabItem } from "@/lib/articles-data";
import { annotateArticle } from "@/lib/article-annotate";
import { downloadArticlePdf } from "@/lib/article-pdf";
import { HighlightableContent } from "@/components/highlightable-content";
import { SaveVocabModal } from "@/components/save-vocab-modal";
import { cn } from "@/lib/utils";
import { ArticleHeader } from "./article-header";
import { MarginNotes } from "./margin-notes";
import { QuestionCard } from "./question-card";
import { ReaderToolbar, type ReaderMode } from "./reader-toolbar";
import { LensBar, StudyPanel, type LensKey, type Lenses, type StudyTab } from "./study-panel";
import {
  useActiveParagraph,
  useMediaQuery,
  useReaderPrefs,
  useReadingProgress,
} from "./use-reader";
import { WordBank } from "./word-bank";
import { WordSheet, type WordInfo } from "./word-sheet";

const READ_KEY = "erkinjon_read_articles";
const FLASH_MS = 1400;

function getReadSlugs(): Set<string> {
  try {
    return new Set(JSON.parse(localStorage.getItem(READ_KEY) ?? "[]"));
  } catch {
    return new Set();
  }
}

function markSlugRead(slug: string): void {
  try {
    const slugs = getReadSlugs();
    slugs.add(slug);
    localStorage.setItem(READ_KEY, JSON.stringify([...slugs]));
  } catch {
    /* storage unavailable */
  }
}

type Props = {
  article: Article;
  mode: ReaderMode;
  onModeChange: (mode: ReaderMode) => void;
};

/**
 * Article reader with three faces:
 *  • Desktop "Read"  — magazine layout with margin notes beside each key word
 *  • Desktop "Study" — lettered paragraphs, highlight lenses, synced side panel
 *  • Mobile          — focus reader: tap a word for a bottom sheet, inline checks
 */
export function ArticleReader({ article, mode, onModeChange }: Props) {
  const bodyRef = useRef<HTMLDivElement | null>(null);
  const columnRef = useRef<HTMLDivElement>(null);
  const [prefs, setPrefs] = useReaderPrefs();
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const view: ReaderMode = isDesktop ? mode : "read";

  const questions = useMemo(() => article.questions ?? [], [article]);
  const tips = useMemo(() => article.tips ?? [], [article]);

  const annotated = useMemo(
    () =>
      annotateArticle(article.content, {
        vocab: article.vocabulary.map((v) => v.word),
        collocations: article.collocations,
        checkpoints: questions.map((q) => q.paragraph),
      }),
    [article, questions],
  );

  const stats = useMemo(() => {
    const text = article.content.replace(/<[^>]+>/g, " ");
    return {
      wordCount: text.split(/\s+/).filter(Boolean).length,
      lensCounts: {
        vocab: annotated.terms.length,
        col: (annotated.html.match(/rt-col/g) ?? []).length,
        link: (annotated.html.match(/rt-link/g) ?? []).length,
      } satisfies Record<LensKey, number>,
    };
  }, [article.content, annotated]);

  const lookup = useMemo(() => {
    const vocab = new Map(article.vocabulary.map((v) => [v.word.toLowerCase(), v]));
    const pron = new Map(article.pronunciation.map((p) => [p.word.toLowerCase(), p]));
    return (word: string): WordInfo | undefined => {
      const v = vocab.get(word.toLowerCase());
      return v ? { vocab: v, pron: pron.get(v.word.toLowerCase()) } : undefined;
    };
  }, [article]);

  const activePara = useActiveParagraph(bodyRef, annotated.html);
  const progress = useReadingProgress(columnRef);
  const minutesLeft = Math.max(1, Math.ceil(article.readingTime * (1 - progress)));

  const [sheetWord, setSheetWord] = useState<WordInfo | null>(null);
  const [flashTermId, setFlashTermId] = useState<number | null>(null);
  const [selectedWord, setSelectedWord] = useState<string | null>(null);
  const [studyTab, setStudyTab] = useState<StudyTab>("words");
  const [lenses, setLenses] = useState<Lenses>({ vocab: true, col: true, link: true });
  const [saveTarget, setSaveTarget] = useState<VocabItem | null>(null);
  const [isFinished, setIsFinished] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [checkpointHosts, setCheckpointHosts] = useState<HTMLElement[]>([]);

  useEffect(() => setIsFinished(getReadSlugs().has(article.slug)), [article.slug]);

  useEffect(() => {
    if (flashTermId === null) return;
    const id = setTimeout(() => setFlashTermId(null), FLASH_MS);
    return () => clearTimeout(id);
  }, [flashTermId]);

  const activateWord = useCallback(
    (word: string, termId: number) => {
      if (isDesktop && view === "study") {
        setSelectedWord(word);
        setStudyTab("words");
      } else if (isDesktop) {
        setFlashTermId(termId);
      } else {
        const info = lookup(word);
        if (info) setSheetWord(info);
      }
    },
    [isDesktop, view, lookup],
  );

  // Clicks / Enter on highlighted words inside the article body.
  useEffect(() => {
    const body = bodyRef.current;
    if (!body) return;
    const markFrom = (target: EventTarget | null) =>
      (target as HTMLElement | null)?.closest?.<HTMLElement>("mark.rt-vocab") ?? null;
    const onClick = (e: MouseEvent) => {
      const mark = markFrom(e.target);
      const selection = window.getSelection();
      if (!mark || (selection && !selection.isCollapsed)) return;
      activateWord(mark.dataset.word ?? "", Number(mark.dataset.term));
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Enter" && e.key !== " ") return;
      const mark = markFrom(e.target);
      if (!mark) return;
      e.preventDefault();
      activateWord(mark.dataset.word ?? "", Number(mark.dataset.term));
    };
    body.addEventListener("click", onClick);
    body.addEventListener("keydown", onKey);
    return () => {
      body.removeEventListener("click", onClick);
      body.removeEventListener("keydown", onKey);
    };
  }, [activateWord, annotated.html]);

  // Inline comprehension checks live inside the article HTML on mobile.
  useEffect(() => {
    const body = bodyRef.current;
    setCheckpointHosts(
      body && !isDesktop ? Array.from(body.querySelectorAll<HTMLElement>("[data-checkpoint]")) : [],
    );
  }, [annotated.html, isDesktop]);

  const jumpToWord = useCallback(
    (word: string) => {
      const term = annotated.terms.find((t) => t.word === word);
      const mark =
        term && bodyRef.current?.querySelector<HTMLElement>(`mark[data-term="${term.id}"]`);
      if (!mark) return;
      mark.scrollIntoView({ block: "center", behavior: "smooth" });
      mark.classList.add("mark-flash");
      setTimeout(() => mark.classList.remove("mark-flash"), FLASH_MS);
      setSelectedWord(word);
    },
    [annotated.terms],
  );

  const handleDownload = async () => {
    if (isDownloading) return;
    setIsDownloading(true);
    try {
      // Let the spinner paint before the synchronous build runs.
      await new Promise((r) => requestAnimationFrame(() => r(null)));
      downloadArticlePdf(article);
      toast.success("PDF downloaded");
    } catch {
      toast.error("Could not generate the PDF. Please try again.");
    } finally {
      setIsDownloading(false);
    }
  };

  const handleFinish = () => {
    if (isFinished) return;
    markSlugRead(article.slug);
    setIsFinished(true);
    toast.success("Article marked as finished!");
  };

  const numberOf = (word: string) => {
    const term = annotated.terms.find((t) => t.word === word);
    return term ? term.id + 1 : undefined;
  };

  const shellStyle = { "--reader-size": `${prefs.size}px` } as CSSProperties;
  const isStudy = view === "study";

  return (
    <div className="reader-root bg-background text-foreground" data-reader-theme={prefs.theme}>
      <ArticleHeader
        article={article}
        wordCount={stats.wordCount}
        keyWordCount={article.vocabulary.length}
      />

      <ReaderToolbar
        title={article.title}
        progress={progress}
        minutesLeft={minutesLeft}
        mode={view}
        onModeChange={onModeChange}
        canStudy={isDesktop}
        prefs={prefs}
        onPrefsChange={setPrefs}
        isDownloading={isDownloading}
        onDownload={handleDownload}
      />

      <div
        className={cn(
          "container mx-auto px-4 sm:px-6 lg:grid lg:justify-center",
          isStudy
            ? "max-w-[82rem] lg:grid-cols-[minmax(0,46rem)_minmax(320px,380px)] lg:gap-14"
            : "max-w-[66rem] lg:grid-cols-[minmax(0,43rem)_250px] lg:gap-16",
        )}
      >
        <div
          ref={columnRef}
          className="min-w-0 max-w-[43rem] lg:max-w-none mx-auto w-full py-10 md:py-14"
        >
          {isStudy && (
            <LensBar
              lenses={lenses}
              available={stats.lensCounts}
              onToggle={(key) => setLenses((prev) => ({ ...prev, [key]: !prev[key] }))}
            />
          )}

          <div
            className="reader-shell"
            data-mode={view}
            data-font={prefs.font}
            data-focus={prefs.focus ? "on" : "off"}
            data-lens-vocab={lenses.vocab ? "" : undefined}
            data-lens-col={lenses.col ? "" : undefined}
            data-lens-link={lenses.link ? "" : undefined}
            style={shellStyle}
          >
            <HighlightableContent
              html={annotated.html}
              storageKey="erkinjon_article_highlights"
              itemKey={article.slug}
              bodyRef={bodyRef}
              className="reader-body"
            />
          </div>

          {checkpointHosts.map((host) => {
            const q = questions[Number(host.dataset.checkpoint)];
            return q
              ? createPortal(
                  <QuestionCard question={q} className="my-7" />,
                  host,
                  host.dataset.checkpoint,
                )
              : null;
          })}

          <div className="mt-12 pt-8 border-t border-border flex justify-center">
            <button
              type="button"
              onClick={handleFinish}
              className={cn(
                "inline-flex items-center gap-2 px-6 py-3 rounded-full font-mono text-sm font-semibold transition-all",
                isFinished
                  ? "bg-[var(--olive-wash)] text-[var(--olive-deep)] cursor-default"
                  : "bg-secondary text-white hover:bg-secondary/90 active:scale-95",
              )}
            >
              <CheckCircle2 className="w-4 h-4" />
              {isFinished ? "Finished ✓" : "Mark as finished"}
            </button>
          </div>

          {isDesktop && !isStudy && questions.length > 0 && (
            <section className="mt-16" aria-labelledby="checks-heading">
              <p className="font-mono text-[10px] tracking-[0.16em] uppercase text-[var(--olive)]">
                Comprehension
              </p>
              <h2 id="checks-heading" className="font-serif text-3xl font-bold mt-1 mb-6">
                Check your understanding
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {questions.map((q) => (
                  <QuestionCard key={q.question} question={q} />
                ))}
              </div>
            </section>
          )}

          {!isStudy && (
            <WordBank
              vocabulary={article.vocabulary}
              pronunciation={article.pronunciation}
              numberOf={numberOf}
              onSave={setSaveTarget}
            />
          )}
        </div>

        {isDesktop && !isStudy && (
          <MarginNotes
            bodyRef={bodyRef}
            terms={annotated.terms}
            lookup={lookup}
            tips={tips}
            flashTermId={flashTermId}
            layoutKey={`${prefs.size}-${prefs.font}-${view}`}
            onSave={setSaveTarget}
          />
        )}

        {isDesktop && isStudy && (
          <StudyPanel
            tab={studyTab}
            onTabChange={setStudyTab}
            activePara={activePara}
            terms={annotated.terms}
            lookup={lookup}
            vocabulary={article.vocabulary}
            pronunciation={article.pronunciation}
            questions={questions}
            selectedWord={selectedWord}
            onJumpToWord={jumpToWord}
            onSave={setSaveTarget}
          />
        )}
      </div>

      <WordSheet
        word={sheetWord}
        onOpenChange={(open) => !open && setSheetWord(null)}
        onSave={(vocab) => {
          setSheetWord(null);
          setSaveTarget(vocab);
        }}
      />

      {saveTarget && (
        <SaveVocabModal
          open
          onClose={() => setSaveTarget(null)}
          word={saveTarget.word}
          definition={saveTarget.definition}
          example={saveTarget.example}
        />
      )}
    </div>
  );
}
