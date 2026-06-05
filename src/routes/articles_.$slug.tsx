import { createFileRoute, Link } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState } from "react";

const READ_KEY = "erkinjon_read_articles";
function getReadSlugs(): Set<string> {
  try { return new Set(JSON.parse(localStorage.getItem(READ_KEY) ?? "[]")); } catch { return new Set(); }
}
function markSlugRead(slug: string) {
  const s = getReadSlugs(); s.add(slug);
  localStorage.setItem(READ_KEY, JSON.stringify([...s]));
}
import { SiteLayout } from "@/components/site-layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Clock,
  ArrowLeft,
  BookmarkPlus as BPIcon,
  Highlighter,
  Volume2,
  X as XIcon,
  Eraser,
  CheckCircle2,
} from "lucide-react";
import { findArticle, ARTICLES, DIFFICULTY_STYLES } from "@/lib/articles-data";
import { SaveVocabModal } from "@/components/save-vocab-modal";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/articles_/$slug")({
  head: ({ params }) => {
    const a = findArticle(params.slug);
    return {
      meta: [
        { title: a ? `${a.title} — Abduraimov Erkinjon` : "Article not found" },
        { name: "description", content: a?.description ?? "Article" },
        { property: "og:title", content: a?.title ?? "Article" },
        { property: "og:description", content: a?.description ?? "" },
        ...(a?.coverImage ? [{ property: "og:image", content: a.coverImage }] : []),
      ],
    };
  },
  component: ArticleView,
});

type TabKey = "article" | "vocabulary" | "pronunciation";

interface HighlightPopup {
  x: number;
  y: number;
  text: string;
  onHighlight: boolean; // true = cursor is on an existing highlight
}

function ArticleView() {
  const { slug } = Route.useParams();
  const article = findArticle(slug);
  const [saveOpen, setSaveOpen] = useState<null | {
    word: string;
    definition: string;
    example: string;
  }>(null);
  const [tab, setTab] = useState<TabKey>("article");
  const [popup, setPopup] = useState<HighlightPopup | null>(null);
  const [finished, setFinished] = useState(() => getReadSlugs().has(slug));
  const contentRef = useRef<HTMLDivElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);
  const savedRange = useRef<Range | null>(null);

  // Apply a highlight colour using the saved range
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

  // Remove highlight span that wraps the cursor
  const removeHighlightUnderCursor = useCallback((target: HTMLElement) => {
    const hl = target.closest("[data-highlight]") as HTMLElement | null;
    if (!hl) return;
    const parent = hl.parentNode;
    if (!parent) return;
    while (hl.firstChild) parent.insertBefore(hl.firstChild, hl);
    parent.removeChild(hl);
    setPopup(null);
  }, []);

  // Show popup on mouseup / touchend inside article body
  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    const handleUp = (e: MouseEvent | TouchEvent) => {
      // Small delay so the selection is fully set
      setTimeout(() => {
        const sel = window.getSelection();
        const isOnHighlight =
          (e.target as HTMLElement)?.closest?.("[data-highlight]") !== null;

        if (isOnHighlight && (!sel || sel.isCollapsed)) {
          // Clicked on existing highlight → show remove popup
          const rect = (e.target as HTMLElement).getBoundingClientRect();
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
  }, [tab]);

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

  if (!article) {
    return (
      <SiteLayout>
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-3xl font-bold mb-4">Article not found</h1>
          <Link to="/articles" className="font-mono text-xs tracking-wider text-secondary hover:underline">
            ← Back to articles
          </Link>
        </div>
      </SiteLayout>
    );
  }

  const cover =
    article.coverImage ||
    "https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=1600&q=80";

  return (
    <SiteLayout>
      {/* ─── Hero cover ─────────────────────────────────── */}
      <div className="relative w-full h-[48vh] min-h-[300px] max-h-[520px] overflow-hidden">
        <img
          src={cover}
          alt={article.title}
          className="absolute inset-0 w-full h-full object-cover scale-105"
          style={{ filter: "blur(3px)" }}
        />
        {/* Layered gradient — darker at bottom for text legibility */}
        <div className="absolute inset-0" style={{
          background: "linear-gradient(to top, rgba(27,27,32,0.95) 0%, rgba(27,27,32,0.55) 45%, rgba(27,27,32,0.15) 100%)"
        }} />

        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-10 max-w-4xl">
            <Link
              to="/articles"
              className="font-mono text-[11px] tracking-widest text-white/75 hover:text-white inline-flex items-center gap-1.5 mb-5 uppercase transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> All articles
            </Link>

            <div className="flex items-center gap-2 mb-4 flex-wrap">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/20 backdrop-blur-sm font-mono text-[10px] tracking-wider">
                {article.topic}
              </Badge>
              <Badge variant="outline" className={cn(DIFFICULTY_STYLES[article.difficulty], "backdrop-blur-sm font-mono text-[10px] tracking-wider")}>
                {article.difficulty}
              </Badge>
              <span className="font-mono text-[11px] text-white/70 inline-flex items-center gap-1">
                <Clock className="w-3 h-3" /> {article.readingTime} min
              </span>
              <span className="font-mono text-[11px] text-white/60">
                {new Date(article.date).toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>

            <h1 className="text-3xl md:text-[2.8rem] font-bold leading-[1.12] text-white max-w-3xl drop-shadow-lg">
              {article.title}
            </h1>
          </div>
        </div>
      </div>

      {/* ─── Sticky tab bar ─────────────────────────────── */}
      <div className="sticky top-14 z-30 glass-nav border-b border-border/40">
        <div className="container mx-auto px-4 max-w-4xl flex gap-0 overflow-x-auto">
          {([
            { k: "article", label: "Article" },
            { k: "vocabulary", label: `Vocabulary (${article.vocabulary.length})` },
            { k: "pronunciation", label: "Read Aloud" },
          ] as { k: TabKey; label: string }[]).map(({ k, label }) => (
            <button
              key={k}
              onClick={() => setTab(k)}
              className={cn(
                "px-5 py-3.5 font-mono text-[11px] tracking-widest uppercase border-b-2 transition-colors whitespace-nowrap",
                tab === k
                  ? "border-primary text-primary font-semibold"
                  : "border-transparent text-muted-foreground hover:text-foreground",
              )}
            >
              {label}
            </button>
          ))}
        </div>
        {/* Signature gradient line */}
        <div className="h-[2px] w-full" style={{ background: "linear-gradient(90deg, #F5D5CB 0%, #EAC4D5 45%, #4A9B7A 100%)" }} />
      </div>

      {/* ─── Content ────────────────────────────────────── */}
      <article className="container mx-auto px-4 py-12 max-w-3xl">

        {/* ── Article tab ── */}
        {tab === "article" && (
          <>
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
                <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0"
                  style={{ borderLeft: "6px solid transparent", borderRight: "6px solid transparent", borderTop: "6px solid #1E1E1E" }} />

                {!popup.onHighlight && (
                  <>
                    {/* Yellow highlight */}
                    <button
                      className="flex items-center gap-1 px-2 py-1 rounded-lg text-[11px] font-mono text-yellow-300 hover:bg-yellow-500/20 transition-colors"
                      title="Highlight yellow"
                      onMouseDown={(e) => { e.preventDefault(); applyHighlight("yellow"); }}
                    >
                      <Highlighter className="w-3.5 h-3.5" /> Yellow
                    </button>
                    <div className="w-px h-4 bg-white/15" />
                    {/* Green highlight */}
                    <button
                      className="flex items-center gap-1 px-2 py-1 rounded-lg text-[11px] font-mono text-emerald-300 hover:bg-emerald-500/20 transition-colors"
                      title="Highlight green"
                      onMouseDown={(e) => { e.preventDefault(); applyHighlight("green"); }}
                    >
                      <Highlighter className="w-3.5 h-3.5" /> Green
                    </button>
                    <div className="w-px h-4 bg-white/15" />
                    {/* Save to vocabulary */}
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
                      removeHighlightUnderCursor(e.target as HTMLElement);
                    }}
                  >
                    <XIcon className="w-3.5 h-3.5" /> Remove
                  </button>
                )}
              </div>
            )}

            {/* Hint */}
            <p className="mb-6 font-mono text-[10px] text-muted-foreground/60 tracking-wider inline-flex items-center gap-1.5">
              <Eraser className="w-3 h-3" /> Select text to highlight, save a word, or click a highlight to remove it.
            </p>

            {/* Article body */}
            <div
              ref={contentRef}
              className={cn(
                "prose prose-neutral dark:prose-invert max-w-none",
                "text-[1.0625rem] leading-[1.85]",
                "[&_h2]:font-serif [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:tracking-tight",
                "[&_h3]:font-serif [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:mt-8 [&_h3]:mb-3",
                "[&_p]:my-4 [&_p]:text-foreground/90",
                "[&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-1",
                "[&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1",
                "[&_blockquote]:border-l-[3px] [&_blockquote]:border-accent [&_blockquote]:pl-5 [&_blockquote]:italic [&_blockquote]:text-muted-foreground",
                "[&_strong]:font-semibold [&_strong]:text-foreground",
              )}
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Mark as Finished */}
            <div className="mt-10 pt-8 border-t border-border flex items-center justify-center">
              <button
                onClick={() => {
                  if (!finished) {
                    markSlugRead(slug);
                    setFinished(true);
                    toast.success("Article marked as finished!");
                  }
                }}
                className={cn(
                  "inline-flex items-center gap-2 px-6 py-3 rounded-full font-mono text-sm font-semibold transition-all",
                  finished
                    ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 cursor-default"
                    : "bg-secondary text-white hover:bg-secondary/90 active:scale-95 cursor-pointer"
                )}
              >
                <CheckCircle2 className="w-4 h-4" />
                {finished ? "Finished ✓" : "Mark as Finished"}
              </button>
            </div>
          </>
        )}

        {/* ── Vocabulary tab ── */}
        {tab === "vocabulary" && (
          <section>
            <p className="font-mono text-[11px] text-muted-foreground tracking-wider mb-6 uppercase">
              {article.vocabulary.length} words · click any card to save
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {article.vocabulary.map((v) => (
                <div
                  key={v.word}
                  className="bento-card rounded-2xl p-6 flex flex-col group"
                >
                  {/* Sakura top accent */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ background: "linear-gradient(90deg, #F5D5CB 0%, #4A9B7A 100%)" }} />

                  <div className="flex items-start justify-between mb-3 gap-2">
                    <h3 className="font-serif text-2xl font-semibold leading-tight">{v.word}</h3>
                    {v.wordType && (
                      <Badge variant="outline" className="font-mono text-[9px] tracking-widest uppercase shrink-0 mt-1">
                        {v.wordType}
                      </Badge>
                    )}
                  </div>

                  <p className="text-sm leading-relaxed mb-3">{v.definition}</p>

                  {v.example && (
                    <p className="text-sm italic text-muted-foreground mb-5 border-l-2 pl-3" style={{ borderColor: "#F5D5CB" }}>
                      "{v.example}"
                    </p>
                  )}

                  <Button
                    size="sm"
                    variant="outline"
                    className="mt-auto self-start font-mono text-[10px] tracking-wider h-7 rounded-lg hover:bg-secondary/8 hover:border-secondary hover:text-secondary transition-colors"
                    onClick={() => setSaveOpen(v)}
                  >
                    <BPIcon className="w-3.5 h-3.5 mr-1.5" /> Save to Vocabulary
                  </Button>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── Pronunciation tab ── */}
        {tab === "pronunciation" && (
          <section>
            <h2 className="font-serif text-2xl font-semibold mb-1">Pronunciation Guide</h2>
            <p className="font-mono text-[11px] text-muted-foreground tracking-wider mb-8 uppercase">
              {article.pronunciation.length} difficult words from this article
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {article.pronunciation.map((p) => (
                <div key={p.word} className="bento-card rounded-2xl p-6">
                  <div className="flex items-start justify-between mb-3 gap-2">
                    <h3 className="font-serif text-2xl font-bold">{p.word}</h3>
                    <Button size="sm" variant="ghost" disabled title="Audio coming soon"
                      className="font-mono text-[10px] tracking-wide shrink-0 opacity-50">
                      <Volume2 className="w-3.5 h-3.5 mr-1" /> Audio soon
                    </Button>
                  </div>

                  <p className="font-mono text-base text-secondary mb-2 tracking-wide">{p.ipa}</p>

                  <p className="text-sm text-muted-foreground mb-4">
                    Syllables:{" "}
                    <span className="font-mono font-semibold text-foreground tracking-wider">{p.syllables}</span>
                  </p>

                  <div className="font-mono text-[11px] text-muted-foreground bg-muted/60 rounded-xl p-3 leading-relaxed tracking-wide border border-border/40">
                    💡 {p.tip}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </article>

      {saveOpen && (
        <SaveVocabModal
          open={!!saveOpen}
          onClose={() => setSaveOpen(null)}
          word={saveOpen.word}
          definition={saveOpen.definition}
          example={saveOpen.example}
        />
      )}
    </SiteLayout>
  );
}

export const _allSlugs = ARTICLES.map((a) => a.slug);
