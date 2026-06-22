import { createFileRoute, Link } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState } from "react";
import { SiteLayout } from "@/components/site-layout";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, BookmarkPlus as BPIcon, Highlighter, X as XIcon, Eraser } from "lucide-react";
import { findWritingEssay } from "@/lib/writing-samples-data";
import { SaveVocabModal } from "@/components/save-vocab-modal";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/writing_/essay/$id")({
  head: ({ params }) => {
    const e = findWritingEssay(params.id);
    return {
      meta: [
        { title: e ? `Test ${e.testNumber} — Essay | Abduraimov Erkinjon` : "Essay not found" },
        { name: "description", content: e ? e.question : "Writing essay" },
      ],
    };
  },
  component: WritingEssayView,
});

interface HighlightPopup {
  x: number;
  y: number;
  text: string;
  onHighlight: boolean;
}

function WritingEssayView() {
  const { id } = Route.useParams();
  const essay = findWritingEssay(id);
  const [popup, setPopup] = useState<HighlightPopup | null>(null);
  const [saveOpen, setSaveOpen] = useState<null | { word: string; definition: string; example: string }>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);
  const savedRange = useRef<Range | null>(null);

  const applyHighlight = useCallback((color: "yellow" | "green") => {
    const range = savedRange.current;
    if (!range || range.collapsed) return;
    try {
      const span = document.createElement("span");
      span.dataset.highlight = color;
      span.className =
        color === "yellow"
          ? "bg-yellow-200 dark:bg-yellow-500/35 rounded-sm px-0.5 cursor-pointer"
          : "bg-emerald-200 dark:bg-emerald-500/35 rounded-sm px-0.5 cursor-pointer";
      span.appendChild(range.extractContents());
      range.insertNode(span);
      window.getSelection()?.removeAllRanges();
      savedRange.current = null;
    } catch {
      // silently ignore edge cases
    }
    setPopup(null);
  }, []);

  const removeHighlightUnderCursor = useCallback((target: HTMLElement) => {
    const hl = target.closest("[data-highlight]") as HTMLElement | null;
    if (!hl) return;
    const parent = hl.parentNode;
    if (!parent) return;
    while (hl.firstChild) parent.insertBefore(hl.firstChild, hl);
    parent.removeChild(hl);
    setPopup(null);
  }, []);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    const handleUp = (e: MouseEvent | TouchEvent) => {
      setTimeout(() => {
        const sel = window.getSelection();
        const isOnHighlight = (e.target as HTMLElement)?.closest?.("[data-highlight]") !== null;

        if (isOnHighlight && (!sel || sel.isCollapsed)) {
          const rect = (e.target as HTMLElement).getBoundingClientRect();
          savedRange.current = null;
          setPopup({ x: rect.left + rect.width / 2, y: rect.top - 8, text: "", onHighlight: true });
          return;
        }

        if (!sel || sel.isCollapsed || sel.rangeCount === 0) { setPopup(null); return; }
        const range = sel.getRangeAt(0);
        if (!el.contains(range.commonAncestorContainer)) { setPopup(null); return; }

        savedRange.current = range.cloneRange();
        const rect = range.getBoundingClientRect();
        setPopup({ x: rect.left + rect.width / 2, y: rect.top - 8, text: sel.toString().trim(), onHighlight: false });
      }, 10);
    };

    el.addEventListener("mouseup", handleUp);
    el.addEventListener("touchend", handleUp);
    return () => { el.removeEventListener("mouseup", handleUp); el.removeEventListener("touchend", handleUp); };
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(e.target as Node)) setPopup(null);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  if (!essay) {
    return (
      <SiteLayout>
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-3xl font-bold mb-4">Essay not found</h1>
          <Link to="/writing" search={{ task: "t2-samples" } as any} className="font-mono text-xs tracking-wider text-secondary hover:underline">
            ← Back to Task 2 Samples
          </Link>
        </div>
      </SiteLayout>
    );
  }

  return (
    <SiteLayout>
      <div className="container mx-auto px-4 py-10 max-w-3xl">
        <Link
          to="/writing"
          search={{ task: "t2-samples" } as any}
          className="font-mono text-[11px] tracking-widest text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 mb-8 uppercase transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Task 2 Samples
        </Link>

        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4 flex-wrap">
            <span className="font-mono text-[11px] tracking-widest bg-secondary/20 text-secondary border border-secondary/30 px-2.5 py-1 rounded-full">
              Test {essay.testNumber}
            </span>
            <Badge variant="secondary" className="font-mono text-[10px] tracking-wider bg-accent text-foreground">
              Task 2 Essay
            </Badge>
            <span className="font-mono text-[11px] text-muted-foreground">{essay.wordCount} words</span>
          </div>

          <div className="bento-card rounded-2xl p-5 border-l-4 border-secondary/60">
            <p className="font-mono text-[11px] tracking-widest text-muted-foreground uppercase mb-2">Question</p>
            <p className="text-base leading-relaxed text-foreground/90">{essay.question}</p>
          </div>
        </div>

        <p className="mb-4 font-mono text-[10px] text-muted-foreground/60 tracking-wider inline-flex items-center gap-1.5">
          <Eraser className="w-3 h-3" /> Select text to highlight or save a word. Click a highlight to remove it.
        </p>

        {popup && (
          <div
            ref={popupRef}
            className="fixed z-[9999] flex items-center gap-1 bg-[#1E1E1E] dark:bg-[#2A2A2A] border border-white/10 rounded-xl shadow-2xl px-2 py-1.5"
            style={{ left: popup.x, top: popup.y, transform: "translate(-50%, -100%)" }}
          >
            <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0"
              style={{ borderLeft: "6px solid transparent", borderRight: "6px solid transparent", borderTop: "6px solid #1E1E1E" }} />

            {!popup.onHighlight && (
              <>
                <button className="flex items-center gap-1 px-2 py-1 rounded-lg text-[11px] font-mono text-yellow-300 hover:bg-yellow-500/20 transition-colors"
                  onMouseDown={(e) => { e.preventDefault(); applyHighlight("yellow"); }}>
                  <Highlighter className="w-3.5 h-3.5" /> Yellow
                </button>
                <div className="w-px h-4 bg-white/15" />
                <button className="flex items-center gap-1 px-2 py-1 rounded-lg text-[11px] font-mono text-emerald-300 hover:bg-emerald-500/20 transition-colors"
                  onMouseDown={(e) => { e.preventDefault(); applyHighlight("green"); }}>
                  <Highlighter className="w-3.5 h-3.5" /> Green
                </button>
                <div className="w-px h-4 bg-white/15" />
                <button className="flex items-center gap-1 px-2 py-1 rounded-lg text-[11px] font-mono text-sky-300 hover:bg-sky-500/20 transition-colors"
                  onMouseDown={(e) => {
                    e.preventDefault();
                    if (popup.text) { setSaveOpen({ word: popup.text, definition: "", example: "" }); setPopup(null); window.getSelection()?.removeAllRanges(); }
                  }}>
                  <BPIcon className="w-3.5 h-3.5" /> Save word
                </button>
              </>
            )}

            {popup.onHighlight && (
              <button className="flex items-center gap-1 px-2 py-1 rounded-lg text-[11px] font-mono text-red-300 hover:bg-red-500/20 transition-colors"
                onMouseDown={(e) => { e.preventDefault(); removeHighlightUnderCursor(e.target as HTMLElement); }}>
                <XIcon className="w-3.5 h-3.5" /> Remove
              </button>
            )}
          </div>
        )}

        <div
          id="essay-content"
          ref={contentRef}
          className={cn("prose prose-neutral dark:prose-invert max-w-none mb-12", "text-[1.0625rem] leading-[1.85]", "[&_p]:my-4 [&_p]:text-foreground/90")}
          dangerouslySetInnerHTML={{ __html: essay.content }}
        />

        {essay.vocabulary.length > 0 && (
          <section className="border-t border-border pt-10">
            <h2 className="font-serif text-2xl font-semibold mb-1">Key Vocabulary</h2>
            <p className="font-mono text-[11px] text-muted-foreground tracking-wider mb-6 uppercase">
              {essay.vocabulary.length} expressions from this essay
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {essay.vocabulary.map((v) => (
                <div key={v.word} className="bento-card rounded-2xl p-5">
                  <p className="font-semibold text-foreground mb-1">{v.word}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.definition}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      {saveOpen && (
        <SaveVocabModal open={!!saveOpen} onClose={() => setSaveOpen(null)}
          word={saveOpen.word} definition={saveOpen.definition} example={saveOpen.example} />
      )}
    </SiteLayout>
  );
}
