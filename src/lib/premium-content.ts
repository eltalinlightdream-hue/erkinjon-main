/* ────────────────────────────────────────────────────────────────
   Premium content policy — single source of truth for which items
   are free and which require Premium membership.

   The free items are always the ones that appear FIRST in each
   content list, so free students see the opening slice of every
   section before hitting the Premium wall.

   Japanese lessons and YouTube video pages stay fully free and are
   intentionally not referenced here.
   ──────────────────────────────────────────────────────────────── */

import { ARTICLES } from "@/lib/articles-data";
import { WRITING_SAMPLES, WRITING_ESSAYS } from "@/lib/writing-samples-data";
import { SPEAKING_TOPICS } from "@/lib/speaking-samples-data";
import { TESTS } from "@/lib/listening-data";
import { PASSAGES } from "@/lib/reading-data";
import { HTML_TASKS } from "@/lib/writing-simulators-data";

/** How many items stay free at the top of each content list. */
export const FREE_LIMITS = {
  listeningTests: 3,
  readingPassages: 5,
  /** Free simulators per Writing task (Task 1 and Task 2 each). */
  writingSimulatorsPerTask: 5,
  /** Free model answers per Writing samples tab (Task 1 & Task 2 each). */
  writingSamplesPerTask: 2,
  speakingTopics: 3,
  articles: 4,
} as const;

function firstIds<T extends { id: string }>(items: readonly T[], count: number): Set<string> {
  return new Set(items.slice(0, count).map((item) => item.id));
}

/* Articles are shown newest-first, so the free set is the newest N. */
const freeArticleIds = firstIds(
  [...ARTICLES].sort((a, b) => b.date.localeCompare(a.date)),
  FREE_LIMITS.articles,
);
export const isFreeArticle = (id: string): boolean => freeArticleIds.has(id);

const freeWritingSampleIds = firstIds(
  WRITING_SAMPLES.filter((s) => s.task === 1),
  FREE_LIMITS.writingSamplesPerTask,
);
export const isFreeWritingSample = (id: string): boolean => freeWritingSampleIds.has(id);

const freeWritingEssayIds = firstIds(WRITING_ESSAYS, FREE_LIMITS.writingSamplesPerTask);
export const isFreeWritingEssay = (id: string): boolean => freeWritingEssayIds.has(id);

/* Writing simulators: the first N in each task (1 and 2) stay free, plus any
   simulator explicitly flagged `isFree` in the data. */
const freeWritingSimulatorIds = new Set([
  ...([1, 2] as const).flatMap((task) =>
    HTML_TASKS.filter((t) => t.task === task)
      .slice(0, FREE_LIMITS.writingSimulatorsPerTask)
      .map((t) => t.id),
  ),
  ...HTML_TASKS.filter((t) => t.isFree).map((t) => t.id),
]);
export const isFreeWritingSimulator = (id: string): boolean => freeWritingSimulatorIds.has(id);

const freeSpeakingTopicIds = firstIds(SPEAKING_TOPICS, FREE_LIMITS.speakingTopics);
export const isFreeSpeakingTopic = (id: string): boolean => freeSpeakingTopicIds.has(id);

/* Listening: the first N tests in list order stay free. */
const freeListeningTestIds = firstIds(TESTS, FREE_LIMITS.listeningTests);
export const isFreeListeningTest = (id: string): boolean => freeListeningTestIds.has(id);

/* Reading: the first N non-premium passages stay free; passages flagged
   `isPremium` in the data are always premium by default. */
const freeReadingPassageIds = new Set(
  PASSAGES.filter((p) => !p.isPremium)
    .slice(0, FREE_LIMITS.readingPassages)
    .map((p) => p.id),
);
export const isDefaultPremiumReading = (passage: { id: string; isPremium: boolean }): boolean =>
  passage.isPremium || !freeReadingPassageIds.has(passage.id);

/* ────────────────────────────────────────────────────────────────
   Admin content overrides — a persisted per-item free/premium choice
   that layers on top of the default rules above. When an admin sets
   an item explicitly, that decision wins; untouched items keep the
   defaults. See `content_premium_overrides` (Supabase) + the admin
   Content panel.
   ──────────────────────────────────────────────────────────────── */

export type ContentSection = "listening" | "reading" | "writing" | "speaking";

/** Overrides keyed by `${section}:${contentId}` → is_premium. */
export type ContentOverrideMap = Record<string, boolean>;

export const overrideKey = (section: ContentSection, contentId: string): string =>
  `${section}:${contentId}`;

/**
 * Effective premium status for one item: the admin override when one
 * exists, otherwise the built-in default. `overrides` may be undefined
 * (e.g. before the map has loaded) — in that case the default is used.
 */
export function effectiveIsPremium(
  section: ContentSection,
  contentId: string,
  defaultIsPremium: boolean,
  overrides: ContentOverrideMap | undefined,
): boolean {
  const value = overrides?.[overrideKey(section, contentId)];
  return value === undefined ? defaultIsPremium : value;
}

/**
 * The three Writing content families share the "writing" section but
 * live in separate lists, so their override ids are namespaced to stay
 * unique. Routes and the admin registry build ids through these.
 */
export const writingContentId = {
  simulator: (id: string): string => `sim:${id}`,
  sample: (id: string): string => `sample:${id}`,
  essay: (id: string): string => `essay:${id}`,
  /** The Task 1 sentence-structures & chunks section (gated as a whole). */
  chunks: "chunks:task1",
} as const;
