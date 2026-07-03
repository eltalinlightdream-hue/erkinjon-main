import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { findWritingSample } from "@/lib/writing-samples-data";
import { HighlightableContent } from "@/components/highlightable-content";
import { cn } from "@/lib/utils";
import { useIsPremium, PremiumRequired } from "@/components/premium-lock";
import { isFreeWritingSample } from "@/lib/premium-content";

export const Route = createFileRoute("/writing_/sample/$id")({
  head: ({ params }) => {
    const s = findWritingSample(params.id);
    return {
      meta: [
        {
          title: s
            ? `Report ${s.reportNumber} — ${s.chartType} | Abduraimov Erkinjon`
            : "Sample not found",
        },
        { name: "description", content: s ? s.question : "Writing sample" },
      ],
    };
  },
  component: WritingSampleView,
});

function WritingSampleView() {
  const { id } = Route.useParams();
  const sample = findWritingSample(id);
  const isPremium = useIsPremium();

  if (!sample) {
    return (
      <SiteLayout>
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-3xl font-bold mb-4">Sample not found</h1>
          <Link
            to="/writing"
            search={{ task: "t1-samples" } as any}
            className="font-mono text-xs tracking-wider text-secondary hover:underline"
          >
            ← Back to writing
          </Link>
        </div>
      </SiteLayout>
    );
  }

  if (!isFreeWritingSample(sample.id) && !isPremium) {
    return (
      <SiteLayout>
        <PremiumRequired title="This Task 1 sample is Premium" />
      </SiteLayout>
    );
  }

  return (
    <SiteLayout>
      <div className="container mx-auto px-4 py-10 max-w-3xl">
        {/* Back link */}
        <Link
          to="/writing"
          search={{ task: "t1-samples" } as any}
          className="font-mono text-[11px] tracking-widest text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 mb-8 uppercase transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Task 1 Samples
        </Link>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4 flex-wrap">
            <span className="font-mono text-[11px] tracking-widest bg-secondary/20 text-secondary border border-secondary/30 px-2.5 py-1 rounded-full">
              Report {sample.reportNumber}
            </span>
            <Badge
              variant="secondary"
              className="font-mono text-[10px] tracking-wider bg-accent text-foreground"
            >
              {sample.chartType}
            </Badge>
            <span className="font-mono text-[11px] text-muted-foreground">
              {sample.wordCount} words
            </span>
          </div>

          {/* Question box */}
          <div className="bento-card rounded-2xl p-5 border-l-4 border-secondary/60">
            <p className="font-mono text-[11px] tracking-widest text-muted-foreground uppercase mb-2">
              Question
            </p>
            <p className="text-base leading-relaxed text-foreground/90">{sample.question}</p>
          </div>

          {/* Chart image */}
          {sample.coverImage && (
            <div className="mt-5 rounded-2xl overflow-hidden border border-border">
              <img
                src={sample.coverImage}
                alt={`Chart for Report ${sample.reportNumber}`}
                className="w-full object-contain bg-white"
              />
            </div>
          )}
        </div>

        {/* Essay content with highlight & save-word popup */}
        <HighlightableContent
          html={sample.content}
          storageKey="erkinjon_writing_highlights"
          itemKey={`sample:${sample.id}`}
          className={cn(
            "mb-12",
            "text-[1.0625rem] leading-[1.85]",
            "[&_p]:my-4 [&_p]:text-foreground/90",
          )}
        />

        {/* Key Vocabulary */}
        <section className="border-t border-border pt-10">
          <h2 className="font-serif text-2xl font-semibold mb-1">Key Vocabulary</h2>
          <p className="font-mono text-[11px] text-muted-foreground tracking-wider mb-6 uppercase">
            {sample.vocabulary.length} collocations from this report
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {sample.vocabulary.map((v) => (
              <div key={v.word} className="bento-card rounded-2xl p-5">
                <p className="font-semibold text-foreground mb-1">{v.word}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.definition}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}
