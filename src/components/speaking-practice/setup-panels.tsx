import {
  Check,
  Infinity as InfinityIcon,
  Layers,
  MessagesSquare,
  Mic,
  ScrollText,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  CUE_CARD_COUNTS,
  GENERAL_OPTIONS,
  QUESTION_COUNTS,
  allowsUnlimited,
  type GeneralOptionId,
  type QuestionCount,
} from "@/lib/speaking-practice/config";
import { MOCK_SETS } from "@/lib/speaking-practice/plan";
import { cn } from "@/lib/utils";

type Look = { icon: LucideIcon; tile: string; badge: string; tag: string };

const OPTION_LOOK: Record<GeneralOptionId, Look> = {
  p1: { icon: MessagesSquare, tile: "icon-tile-green", badge: "badge-tint-done", tag: "45 s each" },
  p2: { icon: ScrollText, tile: "icon-tile-ochre", badge: "badge-tint-progress", tag: "1 + 2 min" },
  p3: { icon: Mic, tile: "icon-tile-blue", badge: "badge-tint-info", tag: "60 s each" },
  p1p3: { icon: Layers, tile: "icon-tile-coral", badge: "badge-tint-new", tag: "Like the exam" },
};

/** Selectable paper card in the same style as the site's practice cards. */
function choiceCard(isSelected: boolean): string {
  return cn(
    "bento-card relative flex h-full flex-col items-start p-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    isSelected && "border-primary bg-[var(--terracotta-wash)] hover:border-primary",
  );
}

function SelectedMark({ isSelected }: { isSelected: boolean }) {
  if (!isSelected) return null;
  return (
    <span className="absolute right-4 top-4 flex size-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
      <Check className="size-3.5" aria-hidden />
    </span>
  );
}

type CountPickerProps = {
  label: string;
  counts: readonly QuestionCount[];
  value: QuestionCount;
  onChange: (count: QuestionCount) => void;
  unit: string;
};

function CountPicker({ label, counts, value, onChange, unit }: CountPickerProps) {
  return (
    <section className="flex flex-col items-center gap-4">
      <h2 className="font-serif text-xl">{label}</h2>
      <div role="radiogroup" aria-label={label} className="flex flex-wrap justify-center gap-2">
        {counts.map((n) => {
          const isSelected = n === value;
          const isUnlimited = n === "unlimited";
          return (
            <button
              key={String(n)}
              type="button"
              role="radio"
              aria-checked={isSelected}
              onClick={() => onChange(n)}
              className={cn(
                "inline-flex min-h-11 min-w-14 items-center justify-center gap-1.5 rounded-full border px-5 text-sm font-semibold tabular-nums transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                isSelected
                  ? "border-primary bg-primary text-primary-foreground shadow-primary"
                  : "border-border bg-card text-foreground hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary",
              )}
            >
              {isUnlimited ? (
                <>
                  <InfinityIcon className="size-4" aria-hidden />
                  Unlimited
                </>
              ) : (
                n
              )}
            </button>
          );
        })}
      </div>
      <p className="text-center text-sm text-muted-foreground">
        {value === "unlimited"
          ? `New ${unit} keep coming until you tap “Finish”.`
          : `${value} ${value === 1 ? unit.replace(/s$/, "") : unit}${unit === "questions" ? " per part" : ""}.`}
      </p>
    </section>
  );
}

type GeneralOptionsProps = {
  optionId: GeneralOptionId;
  onOptionChange: (id: GeneralOptionId) => void;
  count: QuestionCount;
  onCountChange: (count: QuestionCount) => void;
  cueCount: QuestionCount;
  onCueCountChange: (count: QuestionCount) => void;
};

export function GeneralOptions({
  optionId,
  onOptionChange,
  count,
  onCountChange,
  cueCount,
  onCueCountChange,
}: GeneralOptionsProps) {
  const counts = allowsUnlimited(optionId)
    ? QUESTION_COUNTS
    : QUESTION_COUNTS.filter((n) => n !== "unlimited");

  return (
    <>
      <section className="flex flex-col gap-4">
        <h2 className="text-center font-serif text-xl">What do you want to practise?</h2>
        <div
          role="radiogroup"
          aria-label="What do you want to practise?"
          className="grid gap-4 sm:grid-cols-2"
        >
          {GENERAL_OPTIONS.map((o) => {
            const look = OPTION_LOOK[o.id];
            const isSelected = o.id === optionId;
            return (
              <button
                key={o.id}
                type="button"
                role="radio"
                aria-checked={isSelected}
                onClick={() => onOptionChange(o.id)}
                className={choiceCard(isSelected)}
              >
                <SelectedMark isSelected={isSelected} />
                <span className={`icon-tile ${look.tile} mb-5 h-12 w-12`}>
                  <look.icon className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <span className="mb-1 font-serif text-lg text-foreground">{o.label}</span>
                <span className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {o.help}
                </span>
                <span className={`badge-tint ${look.badge}`}>{look.tag}</span>
              </button>
            );
          })}
        </div>
      </section>

      {optionId === "p2" ? (
        <CountPicker
          label="How many cue cards?"
          counts={CUE_CARD_COUNTS}
          value={cueCount}
          onChange={onCueCountChange}
          unit="cue cards"
        />
      ) : (
        <CountPicker
          label="How many questions?"
          counts={counts}
          value={count}
          onChange={onCountChange}
          unit="questions"
        />
      )}
    </>
  );
}

const MOCK_PARTS = [
  {
    icon: MessagesSquare,
    tile: "icon-tile-green",
    badge: "badge-tint-done",
    part: "Part 1",
    title: "Interview",
    detail: "Questions on one familiar topic.",
    tag: "45 s each",
  },
  {
    icon: ScrollText,
    tile: "icon-tile-ochre",
    badge: "badge-tint-progress",
    part: "Part 2",
    title: "Cue card",
    detail: "Prepare, then talk about one card.",
    tag: "1 min + 2 min",
  },
  {
    icon: Mic,
    tile: "icon-tile-blue",
    badge: "badge-tint-info",
    part: "Part 3",
    title: "Discussion",
    detail: "Deeper questions linked to the card.",
    tag: "60 s each",
  },
] as const;

export function MockIntro() {
  return (
    <section className="flex flex-col gap-6">
      <ol className="grid gap-4 sm:grid-cols-3">
        {MOCK_PARTS.map((p) => (
          <li key={p.part} className="bento-card flex flex-col p-6">
            <span className={`icon-tile ${p.tile} mb-5 h-12 w-12`}>
              <p.icon className="h-5 w-5" strokeWidth={1.5} />
            </span>
            <p className="eyebrow mb-1 text-muted-foreground">{p.part}</p>
            <h2 className="mb-1 font-serif text-lg">{p.title}</h2>
            <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">{p.detail}</p>
            <span className={`badge-tint ${p.badge} self-start`}>{p.tag}</span>
          </li>
        ))}
      </ol>
      <p className="mx-auto max-w-xl text-center text-sm text-muted-foreground">
        No replay. Each question moves on when its time is up, or when you tap “I&apos;m done”.{" "}
        {MOCK_SETS.length} different tests — you won&apos;t get the same one twice until you have
        finished them all.
      </p>
    </section>
  );
}
