import { Fragment, useEffect, useRef, useState } from "react";
import { X as XIcon } from "lucide-react";

/* ── Tap-a-word definition popup ─────────────────────────────────
   Renders `[[phrase|definition]]` markup as tappable highlights that
   pop up a small definition card. Shared across the Speaking pages
   (Written Samples + Tips & Chunks). */

interface DefPopup {
  x: number;
  y: number;
  phrase: string;
  definition: string;
}

export function useDefinitionPopup() {
  const [popup, setPopup] = useState<DefPopup | null>(null);
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!popup) return;
    const close = (e: MouseEvent | TouchEvent) => {
      if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
        setPopup(null);
      }
    };
    const closeOnScroll = () => setPopup(null);
    document.addEventListener("mousedown", close);
    document.addEventListener("touchstart", close);
    window.addEventListener("scroll", closeOnScroll, true);
    return () => {
      document.removeEventListener("mousedown", close);
      document.removeEventListener("touchstart", close);
      window.removeEventListener("scroll", closeOnScroll, true);
    };
  }, [popup]);

  const open = (e: React.MouseEvent, phrase: string, definition: string) => {
    e.stopPropagation();
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    // Clamp horizontally so the card never leaves the viewport
    const cardW = Math.min(300, window.innerWidth - 24);
    const x = Math.min(
      Math.max(rect.left + rect.width / 2, cardW / 2 + 12),
      window.innerWidth - cardW / 2 - 12,
    );
    setPopup({ x, y: rect.top - 10, phrase, definition });
  };

  const node = popup ? (
    <div
      ref={popupRef}
      className="fixed z-[9999] w-[min(300px,calc(100vw-24px))] bg-popover border border-primary/40 rounded-xl shadow-warm p-3.5"
      style={{ left: popup.x, top: popup.y, transform: "translate(-50%, -100%)" }}
    >
      <div
        className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0"
        style={{
          borderLeft: "7px solid transparent",
          borderRight: "7px solid transparent",
          borderTop: "7px solid var(--terracotta)",
        }}
      />
      <div className="flex items-start justify-between gap-2 mb-1.5">
        <span className="font-serif text-sm italic text-primary leading-snug">
          “{popup.phrase}”
        </span>
        <button
          onClick={() => setPopup(null)}
          className="shrink-0 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Close definition"
        >
          <XIcon className="w-3.5 h-3.5" />
        </button>
      </div>
      <p className="text-[13px] leading-relaxed text-foreground/90">{popup.definition}</p>
    </div>
  ) : null;

  return { open, node };
}

/* ── Renders [[phrase|definition]] markup as tappable highlights ── */

export function HighlightedText({
  text,
  onWordClick,
}: {
  text: string;
  onWordClick: (e: React.MouseEvent, phrase: string, definition: string) => void;
}) {
  const paragraphs = text.split("\n\n");
  return (
    <>
      {paragraphs.map((para, pi) => {
        const parts = para.split(/(\[\[.+?\]\])/g);
        return (
          <p
            key={pi}
            className="my-3 leading-[1.9] text-[15px] text-foreground/90 first:mt-0 last:mb-0"
          >
            {parts.map((part, i) => {
              const m = part.match(/^\[\[(.+?)\|(.+?)\]\]$/);
              if (!m) return <Fragment key={i}>{part}</Fragment>;
              const [, phrase, definition] = m;
              return (
                <button
                  key={i}
                  type="button"
                  onClick={(e) => onWordClick(e, phrase, definition)}
                  className="inline bg-primary/10 text-primary border-b border-dotted border-primary px-0.5 rounded-sm cursor-pointer hover:bg-primary/20 transition-colors font-medium text-left"
                  title="Tap for definition"
                >
                  {phrase}
                </button>
              );
            })}
          </p>
        );
      })}
    </>
  );
}
