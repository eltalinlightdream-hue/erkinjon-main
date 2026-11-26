// Builds the list of steps for a practice session from the static question bank.
// Pure functions (randomness is injectable), so they work on the server and in tests.

import { IELTS_SETS } from "./ielts-content";
import {
  GENERAL_OPTIONS,
  MOCK_MAX_PART1_QUESTIONS,
  MOCK_MAX_PART3_QUESTIONS,
  PART1_PER_TOPIC,
  allowsUnlimited,
  partConfig,
  type GeneralOptionId,
  type QuestionCount,
} from "./config";
import { pickAcrossTopics, pickAllInRounds, shuffle } from "./random";
import type { CueCardStep, QuestionStep, SpeakingSet, Step } from "./types";

type Rand = () => number;

/** Sets with a Part 2 cue card: these are the full mock tests. */
export const MOCK_SETS: readonly SpeakingSet[] = IELTS_SETS.filter((s) => s.part2 !== null);

export function mockSetByNumber(n: number): SpeakingSet | undefined {
  return MOCK_SETS.find((s) => s.number === n);
}

type TopicPool = { topic: string; items: string[]; cueSet: number | null };

/**
 * Merge topics with the same title (Part 1 topics repeat across sets) and keep each
 * question once, even when the same wording appears under two topics.
 */
function buildPool(part: 1 | 3): TopicPool[] {
  const byTitle = new Map<string, TopicPool>();
  const seen = new Set<string>();
  for (const set of IELTS_SETS) {
    const src = part === 1 ? set.part1 : set.part3;
    const key = src.title.trim().toLowerCase();
    const cueSet = part === 3 && set.part2 ? set.number : null;
    const fresh = src.questions.filter((q) => {
      const k = q.trim().toLowerCase();
      if (seen.has(k)) return false;
      seen.add(k);
      return true;
    });
    const existing = byTitle.get(key);
    byTitle.set(
      key,
      existing
        ? { ...existing, items: [...existing.items, ...fresh], cueSet: existing.cueSet ?? cueSet }
        : { topic: src.title, items: fresh, cueSet },
    );
  }
  return [...byTitle.values()];
}

const PART1_POOL = buildPool(1);
const PART3_POOL = buildPool(3);

function questionStep(part: number, topic: string, text: string): QuestionStep {
  return {
    kind: "question",
    part,
    topic,
    text,
    seconds: partConfig(part)?.secondsPerQuestion ?? 45,
  };
}

function cueCardStep(set: SpeakingSet): CueCardStep | null {
  if (!set.part2) return null;
  const cfg = partConfig(2);
  return {
    kind: "cue-card",
    part: 2,
    title: set.part2.title,
    bullets: set.part2.bullets,
    explain: set.part2.explain,
    prepSeconds: cfg?.prepSeconds ?? 60,
    speakSeconds: cfg?.speakSeconds ?? 120,
  };
}

/** Part 3: questions from one topic (linked to the cue card when there is one), topped up from others. */
function part3Steps(count: number, linkedSet: number | null, rand: Rand): Step[] {
  const linked = linkedSet === null ? [] : PART3_POOL.filter((t) => t.cueSet === linkedSet);
  const main = shuffle(linked.length ? linked : PART3_POOL, rand)[0];
  if (!main) return [];
  const ordered = [
    main,
    ...shuffle(
      PART3_POOL.filter((t) => t !== main),
      rand,
    ),
  ];
  const steps: Step[] = [];
  for (const t of ordered) {
    for (const q of shuffle(t.items, rand)) {
      if (steps.length >= count) return steps;
      steps.push(questionStep(3, t.topic, q));
    }
  }
  return steps;
}

export function buildGeneralSteps(
  optionId: GeneralOptionId,
  count: QuestionCount,
  rand: Rand = Math.random,
): { steps: Step[]; label: string; parts: number[]; isOpenEnded: boolean } {
  const option = GENERAL_OPTIONS.find((o) => o.id === optionId) ?? GENERAL_OPTIONS[0];
  const isOpenEnded = count === "unlimited" && allowsUnlimited(option.id);
  const n = isOpenEnded ? Number.POSITIVE_INFINITY : typeof count === "number" ? count : 5;
  const steps: Step[] = [];
  let linkedSet: number | null = null;

  for (const part of option.parts) {
    if (part === 1) {
      const picked = isOpenEnded
        ? pickAllInRounds(PART1_POOL, PART1_PER_TOPIC, rand)
        : pickAcrossTopics(PART1_POOL, n, PART1_PER_TOPIC, rand);
      steps.push(...picked.map(({ topic, item }) => questionStep(1, topic, item)));
    } else if (part === 2) {
      // Part 2 only: `count` is the number of cue cards in a row.
      const sets = shuffle(MOCK_SETS, rand).slice(0, n);
      linkedSet = sets[0]?.number ?? null;
      for (const set of sets) {
        const step = cueCardStep(set);
        if (step) steps.push(step);
      }
    } else {
      steps.push(...part3Steps(n, linkedSet, rand));
    }
  }

  const label = isOpenEnded ? `${option.label} · Unlimited` : option.label;
  return { steps, label, parts: [...option.parts], isOpenEnded };
}

/** A mock test runs exactly one set: its Part 1 topic, its cue card, then its Part 3 topic. */
export function buildMockSteps(set: SpeakingSet): Step[] {
  const cue = cueCardStep(set);
  return [
    ...set.part1.questions
      .slice(0, MOCK_MAX_PART1_QUESTIONS)
      .map((q) => questionStep(1, set.part1.title, q)),
    ...(cue ? [cue] : []),
    ...set.part3.questions
      .slice(0, MOCK_MAX_PART3_QUESTIONS)
      .map((q) => questionStep(3, set.part3.title, q)),
  ];
}

/**
 * Pick the next mock set: never repeat a set until every set has been completed,
 * then a new cycle starts. `completedCounts` maps set number → times completed.
 */
export function pickNextMockSet(
  completedCounts: ReadonlyMap<number, number>,
  rand: Rand = Math.random,
): SpeakingSet {
  const fewest = Math.min(...MOCK_SETS.map((s) => completedCounts.get(s.number) ?? 0));
  const candidates = MOCK_SETS.filter((s) => (completedCounts.get(s.number) ?? 0) === fewest);
  return shuffle(candidates, rand)[0] ?? MOCK_SETS[0];
}
