import { useState } from "react";
import { Check, X } from "lucide-react";
import type { ComprehensionQuestion } from "@/lib/articles-data";
import { paragraphLetter } from "@/lib/article-annotate";
import { cn } from "@/lib/utils";

type Props = {
  question: ComprehensionQuestion;
  /** Highlight as the question for the paragraph being read. */
  isCurrent?: boolean;
  className?: string;
};

/** Multiple-choice comprehension check. Reveals the answer and the
 *  model paraphrase once the reader picks an option. */
export function QuestionCard({ question, isCurrent = false, className }: Props) {
  const [picked, setPicked] = useState<number | null>(null);
  const answered = picked !== null;
  const isRight = picked === question.answer;
  const letter = paragraphLetter(question.paragraph - 1);

  return (
    <section
      className={cn(
        "reader-check rounded-2xl p-4 sm:p-5 select-none transition-shadow",
        isCurrent && "ring-2 ring-[var(--olive)]/50",
        className,
      )}
      aria-label={`Quick check for paragraph ${letter}`}
    >
      <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-[var(--olive)]">
        Quick check · paragraph {letter}
      </p>
      <p className="mt-2 mb-3 font-semibold leading-snug text-[15px]">{question.question}</p>

      <div className="flex flex-col gap-2" role="radiogroup">
        {question.options.map((option, i) => {
          const isAnswer = i === question.answer;
          const isPicked = i === picked;
          return (
            <button
              key={option}
              type="button"
              role="radio"
              aria-checked={isPicked}
              disabled={answered}
              onClick={() => setPicked(i)}
              className={cn(
                "reader-check-option flex items-start gap-2 text-left rounded-xl px-3.5 py-2.5 text-sm border transition-colors",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--olive)]",
                !answered && "hover:border-[var(--olive)] active:scale-[0.99]",
                answered && isAnswer && "is-right",
                answered && isPicked && !isAnswer && "is-wrong",
                answered && !isAnswer && !isPicked && "opacity-55",
              )}
            >
              <span className="flex-1">{option}</span>
              {answered && isAnswer && <Check className="w-4 h-4 shrink-0 mt-0.5" />}
              {answered && isPicked && !isAnswer && <X className="w-4 h-4 shrink-0 mt-0.5" />}
            </button>
          );
        })}
      </div>

      {answered && (
        <div className="mt-3 text-[13px] leading-relaxed" aria-live="polite">
          <p className="font-semibold">{isRight ? "Correct!" : "Not quite."}</p>
          {question.paraphrase && (
            <p className="mt-1 text-muted-foreground">
              <span className="italic">“{question.paraphrase.question}”</span>
              <span className="mx-1.5 text-[var(--olive)]">↔</span>
              <span className="italic">“{question.paraphrase.passage}”</span>
            </p>
          )}
        </div>
      )}
    </section>
  );
}
