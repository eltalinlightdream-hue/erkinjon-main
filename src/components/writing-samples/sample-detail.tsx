import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Download, FileText, PlayCircle } from "lucide-react";
import { SiteLayout } from "@/components/site-layout";
import { HighlightableContent } from "@/components/highlightable-content";
import {
  formatFileSize,
  sampleCode,
  sampleLabel,
  sampleRoute,
  typeSwatch,
  type SampleDetail,
  type SampleDetailResult,
  type SampleNeighbour,
  type SampleTask,
} from "@/lib/writing-samples-library";
import { cn } from "@/lib/utils";

const LIST_TAB = { 1: "t1-samples", 2: "t2-samples" } as const;
const LIST_LABEL = { 1: "Task 1 Samples", 2: "Task 2 Samples" } as const;

/* ── Page ─────────────────────────────────────────────────────────────── */

export function SampleNotFound({ task }: { task: SampleTask }) {
  return (
    <SiteLayout>
      <div className="container mx-auto px-4 py-24 text-center">
        <h1 className="mb-4 font-serif text-3xl">Sample not found</h1>
        <Link
          to="/writing"
          search={{ task: LIST_TAB[task] }}
          className="font-mono text-xs tracking-wider text-[var(--terracotta)] hover:underline"
        >
          ← Back to {LIST_LABEL[task]}
        </Link>
      </div>
    </SiteLayout>
  );
}

export function SampleDetailPage({
  task,
  result,
}: {
  task: SampleTask;
  result: SampleDetailResult;
}) {
  const { sample, prev, next, position, total } = result;
  const label = sampleLabel(task, sample.number);

  return (
    <SiteLayout>
      <article className="container mx-auto max-w-3xl px-4 py-10">
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center justify-between gap-4">
          <Link
            to="/writing"
            search={{ task: LIST_TAB[task] }}
            className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" /> {LIST_LABEL[task]}
          </Link>
          <span className="font-mono text-[11px] text-muted-foreground">
            {position} / {total}
          </span>
        </nav>

        <header className="mb-8">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-border bg-card px-2.5 py-1 font-mono text-[11px] tracking-widest text-muted-foreground">
              {sampleCode(task, sample.number)}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--olive-wash)] px-2.5 py-1 font-mono text-[10.5px] font-semibold uppercase tracking-wider text-[var(--olive-deep)]">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: typeSwatch(sample.type) }}
              />
              {sample.type}
            </span>
            {sample.wordCount > 0 && (
              <span className="font-mono text-[11px] text-muted-foreground">
                {sample.wordCount} words
              </span>
            )}
            {sample.band && (
              <span className="font-mono text-[11px] text-muted-foreground">
                · Band {sample.band}
              </span>
            )}
            {sample.date && (
              <time dateTime={sample.date} className="font-mono text-[11px] text-muted-foreground">
                ·{" "}
                {new Date(`${sample.date}T00:00:00`).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </time>
            )}
          </div>

          <h1 className="ink-bleed mb-5 font-serif text-3xl leading-tight md:text-4xl">
            {label} <span className="text-muted-foreground/70">·</span> {sample.type}
          </h1>

          <QuestionBox sample={sample} />
        </header>

        <SampleMedia sample={sample} label={label} />

        {sample.content && (
          <HighlightableContent
            html={sample.content}
            storageKey="erkinjon_writing_highlights"
            itemKey={`${task === 1 ? "sample" : "essay"}:${sample.id}`}
            className={cn(
              "mb-12",
              "text-[1.0625rem] leading-[1.85]",
              "[&_p]:my-4 [&_p]:text-foreground/90",
            )}
          />
        )}

        {sample.vocabulary.length > 0 && (
          <section className="mb-12 border-t border-border pt-10" aria-labelledby="vocab-heading">
            <h2 id="vocab-heading" className="mb-1 font-serif text-2xl font-semibold">
              Key Vocabulary
            </h2>
            <p className="mb-6 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
              {sample.vocabulary.length} expressions from this {task === 1 ? "report" : "essay"}
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {sample.vocabulary.map((v) => (
                <div key={v.word} className="bento-card rounded-2xl p-5">
                  <p className="mb-1 font-semibold text-foreground">{v.word}</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">{v.definition}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <PrevNext task={task} prev={prev} next={next} />
      </article>
    </SiteLayout>
  );
}

function QuestionBox({ sample }: { sample: SampleDetail }) {
  if (!sample.question) return null;
  const isTitle = sample.questionSource === "file-name" || sample.questionSource === "caption";
  return (
    <div className="bento-card rounded-2xl border-l-4 border-[var(--olive)]/60 p-5">
      <p className="mb-2 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
        {isTitle ? "About this sample" : "Question"}
      </p>
      <p className="text-base leading-relaxed text-foreground/90">{sample.question}</p>
      {sample.questionSource === "reconstructed" && (
        <p className="mt-3 text-[12px] italic text-muted-foreground">
          Task wording reconstructed from the answer — the exam version may be phrased slightly
          differently.
        </p>
      )}
    </div>
  );
}

function SampleMedia({ sample, label }: { sample: SampleDetail; label: string }) {
  const hasMedia = sample.images.length > 0 || sample.file || sample.videoUrl || sample.note;
  if (!hasMedia) return null;
  return (
    <div className="mb-10 space-y-5">
      {sample.note && (
        <p className="rounded-xl bg-[var(--paper-deep)] px-4 py-3 text-sm leading-relaxed text-foreground/80">
          {sample.note}
        </p>
      )}
      {sample.images.map((img, i) => (
        <figure
          key={img.full.src}
          className="overflow-hidden rounded-2xl border border-border bg-white"
        >
          <a
            href={img.full.src}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open image ${i + 1} full size`}
          >
            <img
              src={img.full.src}
              width={img.full.w}
              height={img.full.h}
              alt={`${label} — ${sample.task === 1 ? "chart" : "page"} ${sample.images.length > 1 ? i + 1 : ""}`.trim()}
              loading={i === 0 ? "eager" : "lazy"}
              decoding="async"
              style={{ maxWidth: img.full.w }}
              className="mx-auto h-auto w-full object-contain"
            />
          </a>
        </figure>
      ))}
      {sample.file && (
        <a
          href={sample.file.href}
          download
          className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-card-hover)]"
        >
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--ochre-wash)] text-[var(--ochre-deep)]">
            <FileText className="h-6 w-6" aria-hidden="true" />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block truncate font-medium">{sample.file.name}</span>
            <span className="font-mono text-[11px] uppercase text-muted-foreground">
              {sample.file.ext} · {formatFileSize(sample.file.size)}
            </span>
          </span>
          <Download
            className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-foreground"
            aria-hidden="true"
          />
        </a>
      )}
      {sample.videoUrl && (
        <a
          href={sample.videoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-[var(--terracotta)] px-5 py-2.5 text-sm font-medium text-[var(--primary-foreground)] shadow-[var(--shadow-primary)] transition-transform hover:-translate-y-0.5"
        >
          <PlayCircle className="h-4 w-4" aria-hidden="true" /> Watch the video explanation
        </a>
      )}
    </div>
  );
}

function PrevNext({
  task,
  prev,
  next,
}: {
  task: SampleTask;
  prev: SampleNeighbour | null;
  next: SampleNeighbour | null;
}) {
  if (!prev && !next) return null;
  return (
    <nav
      aria-label="More samples"
      className="grid gap-3 border-t border-border pt-8 sm:grid-cols-2"
    >
      {prev ? <NeighbourLink task={task} n={prev} direction="prev" /> : <span aria-hidden="true" />}
      {next && <NeighbourLink task={task} n={next} direction="next" />}
    </nav>
  );
}

function NeighbourLink({
  task,
  n,
  direction,
}: {
  task: SampleTask;
  n: SampleNeighbour;
  direction: "prev" | "next";
}) {
  const isNext = direction === "next";
  return (
    <Link
      to={sampleRoute(task)}
      params={{ id: n.id }}
      className={cn(
        "group flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-[var(--shadow-card-hover)]",
        isNext && "sm:col-start-2 sm:flex-row-reverse sm:text-right",
      )}
    >
      {isNext ? (
        <ArrowRight
          className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      ) : (
        <ArrowLeft
          className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-x-0.5"
          aria-hidden="true"
        />
      )}
      <span className="min-w-0">
        <span className="block font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          {isNext ? "Next" : "Previous"}
        </span>
        <span className="block truncate font-serif text-base">
          {sampleLabel(task, n.number)} · {n.type}
        </span>
      </span>
    </Link>
  );
}
