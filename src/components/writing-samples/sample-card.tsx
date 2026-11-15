import { Link } from "@tanstack/react-router";
import { FileText, Images, PlayCircle } from "lucide-react";
import {
  sampleCode,
  sampleLabel,
  sampleRoute,
  typeSwatch,
  type SampleCard as SampleCardData,
} from "@/lib/writing-samples-library";
import { cn } from "@/lib/utils";

interface SampleCardProps {
  sample: SampleCardData;
  /** First row of cards is above the fold — load those thumbnails eagerly. */
  isPriority?: boolean;
}

function KindBadge({ sample }: { sample: SampleCardData }) {
  if (sample.kind === "file") {
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-[var(--ochre-wash)] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[var(--ochre-deep)]">
        <FileText className="h-3 w-3" aria-hidden="true" />
        {sample.fileExt ?? "File"}
      </span>
    );
  }
  if (sample.kind === "video") {
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-[var(--terracotta-wash)] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[var(--terracotta-deep)]">
        <PlayCircle className="h-3 w-3" aria-hidden="true" />
        Video
      </span>
    );
  }
  if (sample.kind === "image") {
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-[var(--olive-wash)] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[var(--olive-deep)]">
        <Images className="h-3 w-3" aria-hidden="true" />
        {sample.imageCount > 1 ? `${sample.imageCount} pages` : "Image"}
      </span>
    );
  }
  return null;
}

/* Ruled-paper tile for samples without a chart image (most Task 2 essays). */
function PaperTile({ sample }: { sample: SampleCardData }) {
  return (
    <div
      className="relative flex h-full w-full items-end justify-between overflow-hidden px-4 pb-3"
      style={{
        backgroundImage:
          "repeating-linear-gradient(to bottom, transparent 0, transparent 15px, color-mix(in oklab, var(--border) 85%, transparent) 15px, color-mix(in oklab, var(--border) 85%, transparent) 16px)",
      }}
    >
      <span
        aria-hidden="true"
        className="absolute left-6 top-0 h-full w-px bg-[var(--terracotta-soft)]"
      />
      <span
        aria-hidden="true"
        className="font-serif text-5xl leading-none text-foreground/10 transition-colors duration-300 group-hover:text-[var(--terracotta)]/25"
      >
        {sample.task === 2 ? "“" : "≡"}
      </span>
      <span className="font-serif text-sm italic text-muted-foreground">
        {sample.task === 2 ? "Test" : "Report"} {sample.number}
      </span>
    </div>
  );
}

export function SampleCard({ sample, isPriority = false }: SampleCardProps) {
  const label = sampleLabel(sample.task, sample.number);
  return (
    <Link
      to={sampleRoute(sample.task)}
      params={{ id: sample.id }}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card",
        "shadow-[var(--shadow-card)] transition-[transform,box-shadow,border-color] duration-200 ease-out",
        "hover:-translate-y-0.5 hover:border-[var(--terracotta-soft)] hover:shadow-[var(--shadow-card-hover)]",
        "active:translate-y-0 active:shadow-[var(--shadow-card)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
      )}
      aria-label={`${label}, ${sample.type}: ${sample.question}`}
    >
      <div className="relative h-28 shrink-0 overflow-hidden border-b border-border bg-[var(--paper-deep)]">
        {sample.thumb ? (
          <img
            src={sample.thumb.src}
            width={sample.thumb.w}
            height={sample.thumb.h}
            alt=""
            loading={isPriority ? "eager" : "lazy"}
            decoding="async"
            className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          />
        ) : (
          <PaperTile sample={sample} />
        )}
        <span className="absolute right-2 top-2 rounded-md bg-card/90 px-1.5 py-0.5 font-mono text-[10px] tracking-wider text-muted-foreground shadow-sm backdrop-blur-sm">
          {sampleCode(sample.task, sample.number)}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-3.5">
        <p className="flex items-center gap-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--olive-deep)]">
          <span
            aria-hidden="true"
            className="h-1.5 w-1.5 shrink-0 rounded-full"
            style={{ backgroundColor: typeSwatch(sample.type) }}
          />
          <span className="truncate">{sample.type}</span>
        </p>
        <p className="line-clamp-2 flex-1 text-[13.5px] font-medium leading-snug text-foreground/90">
          {sample.question || label}
        </p>
        <div className="flex items-center gap-2 pt-1 font-mono text-[10.5px] text-muted-foreground">
          {sample.wordCount > 0 && <span>{sample.wordCount} words</span>}
          {sample.band && (
            <span className="rounded bg-[var(--olive-wash)] px-1.5 py-px text-[var(--olive-deep)]">
              Band {sample.band}
            </span>
          )}
          <span className="ml-auto">
            <KindBadge sample={sample} />
          </span>
        </div>
      </div>
    </Link>
  );
}
