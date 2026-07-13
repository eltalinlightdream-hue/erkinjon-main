import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { findWritingEssay } from "@/lib/writing-samples-data";
import { HighlightableContent } from "@/components/highlightable-content";
import { cn } from "@/lib/utils";
import { useIsPremium, PremiumRequired } from "@/components/premium-lock";
import { isFreeWritingEssay, effectiveIsPremium, writingContentId } from "@/lib/premium-content";
import { useContentOverrides } from "@/hooks/use-content-overrides";

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

function WritingEssayView() {
  const { id } = Route.useParams();
  const essay = findWritingEssay(id);
  const isPremium = useIsPremium();
  const { overrides } = useContentOverrides();

  if (!essay) {
    return (
      <SiteLayout>
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-3xl font-bold mb-4">Essay not found</h1>
          <Link
            to="/writing"
            search={{ task: "t2-samples" } as any}
            className="font-mono text-xs tracking-wider text-secondary hover:underline"
          >
            ← Back to Task 2 Samples
          </Link>
        </div>
      </SiteLayout>
    );
  }

  const essayIsPremium = effectiveIsPremium(
    "writing",
    writingContentId.essay(essay.id),
    !isFreeWritingEssay(essay.id),
    overrides,
  );
  if (essayIsPremium && !isPremium) {
    return (
      <SiteLayout>
        <PremiumRequired title="This Task 2 sample is Premium" />
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
            <Badge
              variant="secondary"
              className="font-mono text-[10px] tracking-wider bg-accent text-foreground"
            >
              Task 2 Essay
            </Badge>
            <span className="font-mono text-[11px] text-muted-foreground">
              {essay.wordCount} words
            </span>
          </div>

          <div className="bento-card rounded-2xl p-5 border-l-4 border-secondary/60">
            <p className="font-mono text-[11px] tracking-widest text-muted-foreground uppercase mb-2">
              Question
            </p>
            <p className="text-base leading-relaxed text-foreground/90">{essay.question}</p>
          </div>
        </div>

        {/* Essay content with highlight & save-word popup */}
        <HighlightableContent
          html={essay.content}
          storageKey="erkinjon_writing_highlights"
          itemKey={`essay:${essay.id}`}
          className={cn(
            "mb-12",
            "text-[1.0625rem] leading-[1.85]",
            "[&_p]:my-4 [&_p]:text-foreground/90",
          )}
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
    </SiteLayout>
  );
}
