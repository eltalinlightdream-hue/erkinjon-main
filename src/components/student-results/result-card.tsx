import { cn } from "@/lib/utils";
import { examTitle, formatResultMonth, type StudentResult } from "@/lib/student-results";
import { EXAM_ACCENT } from "./exam-accent";
import { ProofDialog } from "./proof-dialog";
import { LevelStamp, ScoreNumeral, SkillStrip } from "./result-parts";

type ResultCardProps = {
  result: StudentResult;
  className?: string;
};

/** Compact result card for the homepage bento grid. */
export function ResultCard({ result, className }: ResultCardProps) {
  return (
    <article
      className={cn("group bento-card h-full flex flex-col p-5", className)}
      aria-label={`${result.name}, ${examTitle(result)}`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className={cn("eyebrow", EXAM_ACCENT[result.exam].text)}>{examTitle(result)}</p>
          {result.month && (
            <p className="mt-1 text-[11px] text-muted-foreground">
              {formatResultMonth(result.month)}
            </p>
          )}
        </div>
        <LevelStamp level={result.level} size="sm" />
      </div>

      <div className="mt-3">
        <ScoreNumeral result={result} className="text-4xl" />
        <h3 className="mt-1.5 font-serif text-base leading-snug text-foreground">{result.name}</h3>
      </div>

      <div className="mt-4 flex-1">
        <SkillStrip result={result} />
      </div>

      {result.proof && (
        <div className="mt-4">
          <ProofDialog result={result} />
        </div>
      )}
    </article>
  );
}
