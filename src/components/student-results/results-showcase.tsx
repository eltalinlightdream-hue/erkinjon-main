import { useState } from "react";
import { ChevronDown, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { STUDENT_RESULTS } from "@/data/student-results";
import { pickShowcase, RESULTS_SECTION_ID } from "@/lib/student-results";
import { cn } from "@/lib/utils";
import { FeaturedResult } from "./featured-result";
import { ResultCard } from "./result-card";

const SHOWCASE = pickShowcase(STUDENT_RESULTS);

export function ResultsShowcase() {
  const [isExpanded, setIsExpanded] = useState(false);
  const { featured, others, rest } = SHOWCASE;
  if (!featured) return null;

  const visible = isExpanded ? [...others, ...rest] : others;

  return (
    <section
      id={RESULTS_SECTION_ID}
      className="container mx-auto px-4 pb-20 max-w-5xl scroll-mt-24"
      aria-labelledby="results-heading"
    >
      <Reveal className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl">
          <p className="eyebrow text-secondary mb-4">Student results</p>
          <h2 id="results-heading" className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            Real scores, <em className="text-primary">real certificates</em>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Every score below comes straight from an official IELTS or CEFR certificate earned by
            one of our students.
          </p>
        </div>
        <p className="flex max-w-[20rem] items-start gap-2 text-[12px] leading-snug text-muted-foreground">
          <ShieldCheck className="mt-px w-4 h-4 shrink-0 text-[var(--olive)]" strokeWidth={1.7} />
          Faces, ID numbers, certificate numbers and QR codes are hidden to protect our students.
        </p>
      </Reveal>

      {/* grid-cols-1 = minmax(0,1fr): stops an implicit `auto` column from
          growing past the container on phones. */}
      <div
        id={`${RESULTS_SECTION_ID}-grid`}
        className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4"
      >
        <Reveal className="md:col-span-2 lg:row-span-2">
          <FeaturedResult result={featured} />
        </Reveal>
        {visible.map((result, i) => (
          <Reveal key={result.id} delay={80 + (i % 4) * 70}>
            <ResultCard result={result} />
          </Reveal>
        ))}
      </div>

      {rest.length > 0 && (
        <div className="mt-10 flex justify-center">
          <Button
            type="button"
            variant="outline"
            onClick={() => setIsExpanded((open) => !open)}
            aria-expanded={isExpanded}
            aria-controls={`${RESULTS_SECTION_ID}-grid`}
            className="px-6 text-sm"
          >
            {isExpanded ? "Show fewer results" : `Show all ${STUDENT_RESULTS.length} results`}
            <ChevronDown
              className={cn("ml-1 w-4 h-4 transition-transform", isExpanded && "rotate-180")}
            />
          </Button>
        </div>
      )}
    </section>
  );
}
