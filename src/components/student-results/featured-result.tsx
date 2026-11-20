import { cn } from "@/lib/utils";
import { examTitle, formatResultMonth, type StudentResult } from "@/lib/student-results";
import { EXAM_ACCENT } from "./exam-accent";
import { ProofDialog } from "./proof-dialog";
import { LevelStamp, ScoreNumeral, SkillBars } from "./result-parts";

type FeaturedResultProps = {
  result: StudentResult;
  className?: string;
};

/**
 * The headline result. The redacted certificate is tucked into the top-right
 * corner (bleeding off the card edge) with the CEFR level stamped onto it, so
 * the proof sits right next to the oversized score.
 */
export function FeaturedResult({ result, className }: FeaturedResultProps) {
  const { proof } = result;

  return (
    <article
      className={cn(
        "group bento-card relative h-full overflow-hidden p-7 md:p-9 flex flex-col",
        className,
      )}
      aria-label={`Top result: ${result.name}, ${examTitle(result)}`}
    >
      {/* Warm wash behind the numeral */}
      <div
        className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[var(--terracotta)]/[0.08] blur-3xl"
        aria-hidden="true"
      />

      {proof && (
        <div
          className="pointer-events-none absolute -right-5 top-7 w-28 sm:w-40 lg:w-44"
          aria-hidden="true"
        >
          <div className="absolute inset-0 translate-x-2 translate-y-3 rotate-[10deg] rounded-md border border-border bg-[var(--paper-deep)]" />
          <img
            src={proof.thumb}
            width={480}
            height={Math.round((480 * proof.height) / proof.width)}
            alt=""
            loading="lazy"
            decoding="async"
            className="relative h-auto w-full rotate-[5deg] rounded-md border border-border shadow-warm transition-transform duration-500 ease-out group-hover:rotate-[2deg] group-hover:-translate-y-1"
          />
          <LevelStamp
            level={result.level}
            className="absolute -left-6 bottom-4 shadow-warm sm:-left-7 sm:bottom-6"
          />
        </div>
      )}

      <div className="relative flex flex-1 flex-col">
        <div className={cn(proof && "pr-16 sm:pr-40 lg:pr-44")}>
          <p className="eyebrow text-muted-foreground">Top score</p>
          <p className={cn("eyebrow mt-1.5", EXAM_ACCENT[result.exam].text)}>{examTitle(result)}</p>

          <div className="mt-6 flex items-end gap-4">
            <ScoreNumeral result={result} className="text-7xl md:text-8xl" />
            {!proof && <LevelStamp level={result.level} className="mb-2" />}
          </div>

          <h3 className="mt-4 font-serif text-2xl leading-snug text-foreground">{result.name}</h3>
          {result.month && (
            <p className="mt-1 text-[12px] text-muted-foreground">
              Tested {formatResultMonth(result.month)}
            </p>
          )}
        </div>

        <SkillBars result={result} className="mt-8 max-w-sm" />

        {proof && (
          <div className="mt-auto pt-8">
            <ProofDialog result={result} />
          </div>
        )}
      </div>
    </article>
  );
}
