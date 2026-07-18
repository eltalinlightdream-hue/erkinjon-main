import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site-layout";
import { Reveal } from "@/components/reveal";
import { ArrowLeft, ArrowRight, BookOpen } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { HighlightedText, useDefinitionPopup } from "@/components/highlighted-text";
import { SPEAKING_TIPS, type SpeakingTip, type TipBlock } from "@/lib/speaking-tips-data";

export const Route = createFileRoute("/speaking_/tips-chunks")({
  head: () => ({
    meta: [
      { title: "Speaking Tips & Chunks | Abduraimov Erkinjon" },
      {
        name: "description",
        content:
          "Discourse markers, vocabulary patterns and go-to language chunks for IELTS Speaking — short, practical notes with tappable definitions.",
      },
    ],
  }),
  component: TipsChunks,
});

type WordClick = (e: React.MouseEvent, phrase: string, definition: string) => void;

/* ── Blocks: prose · term/gloss list · note · example ───────────── */

function TipBlocks({ blocks, onWordClick }: { blocks: TipBlock[]; onWordClick: WordClick }) {
  return (
    <>
      {blocks.map((block, i) => {
        switch (block.kind) {
          case "prose":
            return <HighlightedText key={i} text={block.text} onWordClick={onWordClick} />;

          case "list": {
            const hasGloss = block.items.some((it) => it.gloss);
            return (
              <ul key={i} className="space-y-2 my-3">
                {block.items.map((it) =>
                  hasGloss ? (
                    <li key={it.term} className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
                      <span className="font-mono text-[0.8rem] font-semibold text-[var(--terracotta-deep)] bg-primary/10 px-1.5 py-0.5 rounded-md whitespace-nowrap">
                        {it.term}
                      </span>
                      {it.gloss && (
                        <span className="text-sm text-muted-foreground">{it.gloss}</span>
                      )}
                    </li>
                  ) : (
                    <li key={it.term} className="flex items-baseline gap-2.5">
                      <span className="text-primary text-xs">‣</span>
                      <span className="font-serif italic text-[1.05rem] text-foreground">
                        {it.term}
                      </span>
                    </li>
                  ),
                )}
              </ul>
            );
          }

          case "note":
            return (
              <div
                key={i}
                className="my-3 bg-secondary/[0.08] border border-secondary/25 rounded-xl px-3.5 py-2.5 [&_p]:my-0 [&_p]:text-[13.5px] [&_p]:leading-relaxed"
              >
                <HighlightedText text={block.text} onWordClick={onWordClick} />
              </div>
            );

          case "example":
            return (
              <div
                key={i}
                className="my-2 flex gap-2 items-baseline [&_p]:my-0 [&_p]:text-[13.5px] [&_p]:italic [&_p]:text-muted-foreground [&_p]:leading-relaxed"
              >
                <span className="shrink-0 text-[0.62rem] font-semibold tracking-wider uppercase text-secondary">
                  e.g.
                </span>
                <HighlightedText text={block.text} onWordClick={onWordClick} />
              </div>
            );

          default:
            return null;
        }
      })}
    </>
  );
}

/* ── One post = one box in the grid ─────────────────────────────── */

function TipCard({ tip, onOpen }: { tip: SpeakingTip; onOpen: (tip: SpeakingTip) => void }) {
  return (
    <button
      type="button"
      onClick={() => onOpen(tip)}
      className="bento-card tap-press group flex flex-col items-start gap-3 p-5 text-left min-h-[136px] cursor-pointer"
    >
      {tip.emoji && <span className="text-3xl leading-none">{tip.emoji}</span>}
      <span className="font-serif text-base font-semibold leading-snug text-foreground group-hover:text-primary group-active:text-primary transition-colors">
        {tip.title}
      </span>
      <span className="mt-auto text-[11px] font-semibold uppercase tracking-wider text-primary inline-flex items-center gap-1">
        Open
        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-active:translate-x-0.5 transition-transform" />
      </span>
    </button>
  );
}

function TipsChunks() {
  const { open, node } = useDefinitionPopup();
  const [active, setActive] = useState<SpeakingTip | null>(null);

  return (
    <SiteLayout>
      <section className="container mx-auto px-4 py-12 max-w-5xl">
        <Link
          to="/speaking"
          className="text-[11px] font-semibold tracking-[0.16em] text-muted-foreground hover:text-primary inline-flex items-center gap-1.5 mb-8 uppercase transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Speaking
        </Link>

        <div className="ink-bleed text-center mb-10">
          <p className="eyebrow text-primary mb-4">🎤 IELTS Speaking</p>
          <h1 className="font-serif text-2xl md:text-3xl leading-relaxed mb-4 text-foreground">
            Tips &amp; Chunks
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discourse markers, vocabulary patterns and go-to language chunks — short, practical
            notes you can drop straight into speaking and writing.
          </p>

          <p className="mt-6 text-xs text-primary inline-flex items-center gap-1.5 bg-primary/5 border border-primary/20 rounded-full px-4 py-2">
            💡 Tap a card to open it, then tap any{" "}
            <span className="bg-primary/15 border-b border-dotted border-primary px-1 rounded-sm">
              highlighted phrase
            </span>{" "}
            for its meaning.
          </p>
        </div>

        <Reveal className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {SPEAKING_TIPS.map((tip) => (
            <TipCard key={tip.id} tip={tip} onOpen={setActive} />
          ))}
        </Reveal>

        <div className="mt-14 pt-8 border-t-2 border-border flex justify-end">
          <Link
            to="/speaking"
            className="text-sm font-medium text-primary hover:text-[var(--terracotta-deep)] inline-flex items-center gap-1.5 transition-colors"
          >
            <BookOpen className="w-3.5 h-3.5" /> Speaking home
          </Link>
        </div>
      </section>

      {/* Post modal */}
      <Dialog open={!!active} onOpenChange={(o) => { if (!o) setActive(null); }}>
        <DialogContent className="max-w-lg max-h-[85vh] overflow-y-auto text-left">
          {node}
          {active && (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2.5 font-serif text-lg md:text-xl">
                  {active.emoji && <span className="text-2xl leading-none">{active.emoji}</span>}
                  {active.title}
                </DialogTitle>
              </DialogHeader>
              <div className="mt-1">
                <TipBlocks blocks={active.blocks} onWordClick={open} />
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </SiteLayout>
  );
}
