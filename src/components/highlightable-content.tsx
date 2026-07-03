import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { BookmarkPlus as BPIcon, Eraser, Highlighter, X as XIcon } from "lucide-react";
import { SaveVocabModal } from "@/components/save-vocab-modal";
import { cn } from "@/lib/utils";

/* ────────────────────────────────────────────────────────────────
   HighlightableContent — renders an HTML body with a selection
   popup that lets students highlight text (yellow / green), save a
   word to vocabulary, or remove an existing highlight. Highlights
   persist to localStorage per item.

   Important: the `dangerouslySetInnerHTML` object is memoized.
   React 19 re-sets innerHTML whenever that prop object changes
   identity, which would rebuild the DOM on every popup state
   change — destroying the saved selection Range and wiping every
   highlight span.
   ──────────────────────────────────────────────────────────────── */

type HighlightColor = "yellow" | "green";

const HL_CLASSES: Record<HighlightColor, string> = {
  yellow: "bg-yellow-200 dark:bg-yellow-500/35 rounded-sm px-0.5 cursor-pointer",
  green: "bg-emerald-200 dark:bg-emerald-500/35 rounded-sm px-0.5 cursor-pointer",
};

function getSavedHtml(storageKey: string, itemKey: string): string | null {
  try {
    const all = JSON.parse(localStorage.getItem(storageKey) ?? "{}");
    return typeof all[itemKey] === "string" ? all[itemKey] : null;
  } catch {
    return null;
  }
}

function saveHtml(storageKey: string, itemKey: string, html: string) {
  try {
    const all = JSON.parse(localStorage.getItem(storageKey) ?? "{}");
    all[itemKey] = html;
    localStorage.setItem(storageKey, JSON.stringify(all));
  } catch {
    /* storage full / unavailable */
  }
}

/** Wrap every text node intersecting the range in a highlight span.
 *  Unlike extractContents(), this never throws on selections that
 *  cross paragraph or element boundaries. */
function highlightRange(root: HTMLElement, range: Range, color: HighlightColor) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const textNodes: Text[] = [];
  while (walker.nextNode()) {
    const node = walker.currentNode as Text;
    if (range.intersectsNode(node) && node.data.trim().length > 0) {
      textNodes.push(node);
    }
  }
  for (const node of textNodes) {
    const start = node === range.startContainer ? range.startOffset : 0;
    const end = node === range.endContainer ? range.endOffset : node.length;
    if (start >= end) continue;
    let target = node;
    if (start > 0) target = target.splitText(start);
    if (end - start < target.length) target.splitText(end - start);
    const span = document.createElement("span");
    span.dataset.highlight = color;
    span.className = HL_CLASSES[color];
    target.parentNode?.replaceChild(span, target);
    span.appendChild(target);
  }
}

interface PopupState {
  x: number;
  y: number;
  text: string;
  onHighlight: boolean; // true = cursor is on an existing highlight
}

interface HighlightableContentProps {
  /** The trusted HTML body (from local content data files). */
  html: string;
  /** localStorage key holding the { [itemKey]: html } map. */
  storageKey: string;
  /** Sub-key for this article / sample inside the storage map. */
  itemKey: string;
  className?: string;
}

export function HighlightableContent({
  html,
  storageKey,
  itemKey,
  className,
}: HighlightableContentProps) {
  const [popup, setPopup] = useState<PopupState | null>(null);
  const [saveOpen, setSaveOpen] = useState<null | {
    word: string;
    definition: string;
    example: string;
  }>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);
  const savedRange = useRef<Range | null>(null);
  const activeHighlight = useRef<HTMLElement | null>(null);

  // Stable identity so React never re-sets innerHTML on re-renders,
  // which would wipe highlight spans and invalidate the saved Range.
  const htmlObject = useMemo(() => ({ __html: html }), [html]);

  const persistHighlights = useCallback(() => {
    if (contentRef.current) saveHtml(storageKey, itemKey, contentRef.current.innerHTML);
  }, [storageKey, itemKey]);

  const applyHighlight = useCallback(
    (color: HighlightColor) => {
      const range = savedRange.current;
      const root = contentRef.current;
      if (!range || range.collapsed || !root) return;
      try {
        highlightRange(root, range, color);
      } catch {
        // silently ignore edge cases
      }
      window.getSelection()?.removeAllRanges();
      savedRange.current = null;
      persistHighlights();
      setPopup(null);
    },
    [persistHighlights],
  );

  const removeActiveHighlight = useCallback(() => {
    const hl = activeHighlight.current;
    activeHighlight.current = null;
    const parent = hl?.parentNode;
    if (!hl || !parent) return;
    while (hl.firstChild) parent.insertBefore(hl.firstChild, hl);
    parent.removeChild(hl);
    (parent as HTMLElement).normalize?.();
    persistHighlights();
    setPopup(null);
  }, [persistHighlights]);

  // Restore saved highlights when the body mounts
  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    const saved = getSavedHtml(storageKey, itemKey);
    if (saved && saved !== el.innerHTML) {
      // Only restore if it's the same text (author may have edited it)
      const tmp = document.createElement("div");
      tmp.innerHTML = saved;
      if (tmp.textContent?.trim() === el.textContent?.trim()) {
        el.innerHTML = saved;
      }
    }
  }, [storageKey, itemKey, html]);

  // Show popup on mouseup / touchend inside the body
  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    const handleUp = (e: MouseEvent | TouchEvent) => {
      // Small delay so the selection is fully set
      setTimeout(() => {
        const sel = window.getSelection();
        const hitHighlight = (e.target as HTMLElement)?.closest?.(
          "[data-highlight]",
        ) as HTMLElement | null;

        if (hitHighlight && (!sel || sel.isCollapsed)) {
          // Clicked on existing highlight → show remove popup
          activeHighlight.current = hitHighlight;
          const rect = hitHighlight.getBoundingClientRect();
          setPopup({
            x: rect.left + rect.width / 2,
            y: rect.top - 8,
            text: "",
            onHighlight: true,
          });
          return;
        }

        if (!sel || sel.isCollapsed || sel.rangeCount === 0) {
          setPopup(null);
          return;
        }

        const range = sel.getRangeAt(0);
        if (!el.contains(range.commonAncestorContainer)) {
          setPopup(null);
          return;
        }

        savedRange.current = range.cloneRange();
        const rect = range.getBoundingClientRect();
        setPopup({
          x: rect.left + rect.width / 2,
          y: rect.top - 8,
          text: sel.toString().trim(),
          onHighlight: false,
        });
      }, 10);
    };

    el.addEventListener("mouseup", handleUp);
    el.addEventListener("touchend", handleUp);
    return () => {
      el.removeEventListener("mouseup", handleUp);
      el.removeEventListener("touchend", handleUp);
    };
  }, []);

  // Hide popup when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
        setPopup(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <>
      {/* Hint */}
      <p className="mb-4 font-mono text-[10px] text-muted-foreground/60 tracking-wider inline-flex items-center gap-1.5">
        <Eraser className="w-3 h-3" /> Select text to highlight or save a word. Click a highlight to
        remove it.
      </p>

      {/* Inline selection popup — appears above selected text */}
      {popup && (
        <div
          ref={popupRef}
          className="fixed z-[9999] flex items-center gap-1 bg-[#1E1E1E] dark:bg-[#2A2A2A] border border-white/10 rounded-xl shadow-2xl px-2 py-1.5"
          style={{
            left: popup.x,
            top: popup.y,
            transform: "translate(-50%, -100%)",
          }}
        >
          {/* Arrow */}
          <div
            className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0"
            style={{
              borderLeft: "6px solid transparent",
              borderRight: "6px solid transparent",
              borderTop: "6px solid #1E1E1E",
            }}
          />

          {!popup.onHighlight && (
            <>
              <button
                className="flex items-center gap-1 px-2 py-1 rounded-lg text-[11px] font-mono text-yellow-300 hover:bg-yellow-500/20 transition-colors"
                title="Highlight yellow"
                onMouseDown={(e) => {
                  e.preventDefault();
                  applyHighlight("yellow");
                }}
              >
                <Highlighter className="w-3.5 h-3.5" /> Yellow
              </button>
              <div className="w-px h-4 bg-white/15" />
              <button
                className="flex items-center gap-1 px-2 py-1 rounded-lg text-[11px] font-mono text-emerald-300 hover:bg-emerald-500/20 transition-colors"
                title="Highlight green"
                onMouseDown={(e) => {
                  e.preventDefault();
                  applyHighlight("green");
                }}
              >
                <Highlighter className="w-3.5 h-3.5" /> Green
              </button>
              <div className="w-px h-4 bg-white/15" />
              <button
                className="flex items-center gap-1 px-2 py-1 rounded-lg text-[11px] font-mono text-sky-300 hover:bg-sky-500/20 transition-colors"
                title="Save to vocabulary"
                onMouseDown={(e) => {
                  e.preventDefault();
                  if (popup.text) {
                    setSaveOpen({ word: popup.text, definition: "", example: "" });
                    setPopup(null);
                    window.getSelection()?.removeAllRanges();
                  }
                }}
              >
                <BPIcon className="w-3.5 h-3.5" /> Save word
              </button>
            </>
          )}

          {popup.onHighlight && (
            <button
              className="flex items-center gap-1 px-2 py-1 rounded-lg text-[11px] font-mono text-red-300 hover:bg-red-500/20 transition-colors"
              title="Remove highlight"
              onMouseDown={(e) => {
                e.preventDefault();
                removeActiveHighlight();
              }}
            >
              <XIcon className="w-3.5 h-3.5" /> Remove
            </button>
          )}
        </div>
      )}

      {/* Body */}
      <div
        ref={contentRef}
        className={cn("prose prose-neutral dark:prose-invert max-w-none", className)}
        dangerouslySetInnerHTML={htmlObject}
      />

      {saveOpen && (
        <SaveVocabModal
          open={!!saveOpen}
          onClose={() => setSaveOpen(null)}
          word={saveOpen.word}
          definition={saveOpen.definition}
          example={saveOpen.example}
        />
      )}
    </>
  );
}
