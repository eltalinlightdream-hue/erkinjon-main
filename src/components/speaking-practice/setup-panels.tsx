import { Clock, Mic, MessagesSquare, ScrollText } from "lucide-react";
import {
  GENERAL_OPTIONS,
  QUESTION_COUNTS,
  type GeneralOptionId,
} from "@/lib/speaking-practice/config";
import { MOCK_SETS } from "@/lib/speaking-practice/plan";
import { cn } from "@/lib/utils";

const choiceClass = (isSelected: boolean) =>
  cn(
    "rounded-xl border-2 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
    isSelected
      ? "border-primary bg-[var(--terracotta-wash)]"
      : "border-border bg-card hover:border-primary/40",
  );

type GeneralOptionsProps = {
  optionId: GeneralOptionId;
  onOptionChange: (id: GeneralOptionId) => void;
  count: number;
  onCountChange: (count: number) => void;
};

export function GeneralOptions({
  optionId,
  onOptionChange,
  count,
  onCountChange,
}: GeneralOptionsProps) {
  const isCueCardOnly = optionId === "p2";
  return (
    <>
      <section className="flex flex-col gap-3">
        <h2 className="font-serif text-xl">What do you want to practise?</h2>
        <div
          role="radiogroup"
          aria-label="What do you want to practise?"
          className="grid gap-3 sm:grid-cols-2"
        >
          {GENERAL_OPTIONS.map((o) => (
            <button
              key={o.id}
              type="button"
              role="radio"
              aria-checked={o.id === optionId}
              onClick={() => onOptionChange(o.id)}
              className={cn(
                "flex min-h-20 flex-col items-start gap-1 p-4",
                choiceClass(o.id === optionId),
              )}
            >
              <span className="font-medium">{o.label}</span>
              <span className="text-sm text-muted-foreground">{o.help}</span>
            </button>
          ))}
        </div>
      </section>

      {!isCueCardOnly && (
        <section className="flex flex-col gap-3">
          <h2 className="font-serif text-xl">Questions per part</h2>
          <div role="radiogroup" aria-label="Questions per part" className="flex flex-wrap gap-2">
            {QUESTION_COUNTS.map((n) => (
              <button
                key={n}
                type="button"
                role="radio"
                aria-checked={n === count}
                onClick={() => onCountChange(n)}
                className={cn(
                  "min-h-11 min-w-14 px-4 font-medium tabular-nums",
                  choiceClass(n === count),
                )}
              >
                {n}
              </button>
            ))}
          </div>
        </section>
      )}
    </>
  );
}

const MOCK_PARTS = [
  {
    Icon: MessagesSquare,
    part: "Part 1",
    title: "Introduction & interview",
    detail: "Questions on one familiar topic · about 45 s each",
  },
  {
    Icon: ScrollText,
    part: "Part 2",
    title: "Long turn",
    detail: "One cue card · 1 min to prepare, up to 2 min to speak",
  },
  {
    Icon: Mic,
    part: "Part 3",
    title: "Discussion",
    detail: "Deeper questions linked to the cue card · about 60 s each",
  },
] as const;

export function MockIntro() {
  return (
    <section className="flex flex-col gap-5">
      <ol className="relative flex flex-col gap-3 border-l-2 border-dashed border-border pl-6">
        {MOCK_PARTS.map(({ Icon, part, title, detail }) => (
          <li key={part} className="relative">
            <span
              className="absolute -left-[2.15rem] top-3 flex size-6 items-center justify-center rounded-full border border-border bg-card text-primary"
              aria-hidden
            >
              <Icon className="size-3.5" />
            </span>
            <div className="bento-card p-4">
              <p className="eyebrow text-primary">{part}</p>
              <p className="font-serif text-lg">{title}</p>
              <p className="text-sm text-muted-foreground">{detail}</p>
            </div>
          </li>
        ))}
      </ol>
      <p className="flex items-start gap-2 text-sm text-muted-foreground">
        <Clock className="mt-0.5 size-4 shrink-0" aria-hidden />
        Like the real exam: no replay, and each question moves on when its time is up (or when you
        tap “I&apos;m done”). {MOCK_SETS.length} different tests — a test is not repeated until you
        have finished them all.
      </p>
    </section>
  );
}
