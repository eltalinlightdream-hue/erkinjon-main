import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";
import {
  EXAM_META,
  SKILL_LABELS,
  SKILL_ORDER,
  formatScore,
  type CefrLevel,
  type StudentResult,
} from "@/lib/student-results";
import { EXAM_ACCENT } from "./exam-accent";

const isTopLevel = (level: CefrLevel) => level === "C1" || level === "C2";

type LevelStampProps = {
  level: CefrLevel;
  size?: "sm" | "md";
  className?: string;
};

/** Round, slightly askew CEFR stamp; C1+ is inked in ochre. */
export function LevelStamp({ level, size = "md", className }: LevelStampProps) {
  return (
    <span
      className={cn(
        "level-stamp shrink-0 inline-flex flex-col items-center justify-center rounded-full border-[1.5px] border-dashed leading-none select-none",
        size === "md" ? "w-[3.6rem] h-[3.6rem]" : "w-12 h-12",
        isTopLevel(level)
          ? "border-[var(--ochre)] text-[var(--ochre-deep)] bg-[var(--ochre-wash)]"
          : "border-[var(--olive)]/60 text-[var(--olive-deep)] bg-[var(--olive-wash)]",
        className,
      )}
      aria-label={`CEFR level ${level}`}
      role="img"
    >
      <span className="text-[8px] font-semibold tracking-[0.18em] opacity-75" aria-hidden="true">
        CEFR
      </span>
      <span
        className={cn("font-serif font-semibold", size === "md" ? "text-xl" : "text-lg")}
        aria-hidden="true"
      >
        {level}
      </span>
    </span>
  );
}

type ScoreNumeralProps = {
  result: StudentResult;
  className?: string;
};

/** The headline score in Fraunces with its scale ("/ 9", "/ 75") beside it. */
export function ScoreNumeral({ result, className }: ScoreNumeralProps) {
  const meta = EXAM_META[result.exam];
  return (
    <p className="flex items-baseline gap-1.5">
      <span className={cn("font-serif leading-none tabular-nums text-foreground", className)}>
        {formatScore(result.exam, result.overall)}
      </span>
      <span className="whitespace-nowrap text-xs text-muted-foreground tabular-nums">
        / {meta.max}
      </span>
      <span className="sr-only">overall</span>
    </p>
  );
}

type SkillBarsProps = {
  result: StudentResult;
  className?: string;
};

/** Four labelled bars, filled in proportion to each skill's maximum score. */
export function SkillBars({ result, className }: SkillBarsProps) {
  const { max } = EXAM_META[result.exam];
  const accent = EXAM_ACCENT[result.exam];
  return (
    <dl className={cn("space-y-2", className)}>
      {SKILL_ORDER.map((key, i) => {
        const value = result.skills[key];
        const style = {
          "--fill": String(value / max),
          "--bar-delay": `${150 + i * 90}ms`,
        } as CSSProperties;
        return (
          <div key={key} className="grid grid-cols-[4.75rem_1fr] items-center gap-3">
            <dt className="text-[12px] text-muted-foreground">{SKILL_LABELS[key]}</dt>
            <dd className="flex items-center gap-3">
              <span
                className={cn("relative h-1.5 flex-1 rounded-full overflow-hidden", accent.track)}
                aria-hidden="true"
              >
                <span
                  className={cn("score-bar-fill absolute inset-0 rounded-full", accent.bar)}
                  style={style}
                />
              </span>
              <span className="w-7 text-right text-[13px] font-medium tabular-nums text-foreground">
                {formatScore(result.exam, value)}
              </span>
            </dd>
          </div>
        );
      })}
    </dl>
  );
}

type SkillStripProps = {
  result: StudentResult;
};

/** Compact four-up skill row for small cards: L · R · W · S. */
export function SkillStrip({ result }: SkillStripProps) {
  return (
    <dl className="grid grid-cols-4 gap-1 rounded-lg bg-muted px-2 py-2 text-center">
      {SKILL_ORDER.map((key) => (
        <div key={key}>
          <dt className="text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
            <abbr title={SKILL_LABELS[key]} className="no-underline">
              {SKILL_LABELS[key][0]}
            </abbr>
          </dt>
          <dd className="text-[13px] font-medium tabular-nums text-foreground">
            {formatScore(result.exam, result.skills[key])}
          </dd>
        </div>
      ))}
    </dl>
  );
}
