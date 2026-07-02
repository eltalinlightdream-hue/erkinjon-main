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

const freeSpeakingTopicIds = firstIds(SPEAKING_TOPICS, FREE_LIMITS.speakingTopics);
export const isFreeSpeakingTopic = (id: string): boolean => freeSpeakingTopicIds.has(id);
