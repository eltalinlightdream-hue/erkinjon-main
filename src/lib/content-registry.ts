/* ────────────────────────────────────────────────────────────────
   Content registry — a normalized, section-grouped list of every
   gate-able practice item, built from the same hardcoded data the
   pages render. The admin Content panel uses this to show what can be
   toggled free/premium; each item carries its DB `contentId` and the
   built-in `defaultIsPremium` so the panel can display "Default" and
   compute the effective status against the saved overrides.
   ──────────────────────────────────────────────────────────────── */

import { TESTS } from "@/lib/listening-data";
import { PASSAGES } from "@/lib/reading-data";
import { HTML_TASKS } from "@/lib/writing-simulators-data";
import { WRITING_SAMPLES, WRITING_ESSAYS } from "@/lib/writing-samples-data";
import { SPEAKING_TOPICS } from "@/lib/speaking-samples-data";
import {
  isFreeListeningTest,
  isDefaultPremiumReading,
  isFreeWritingSimulator,
  isFreeWritingSample,
  isFreeWritingEssay,
  isFreeSpeakingTopic,
  writingContentId,
  type ContentSection,
} from "@/lib/premium-content";

export interface ContentRegistryItem {
  /** Stable DB `content_id` — unique within its section. */
  contentId: string;
  section: ContentSection;
  /** Human title shown in the admin table. */
  label: string;
  /** Short grouping tag, e.g. "Section 2", "Passage 1", "Task 1 · Simulator". */
  group: string;
  /** What the built-in rule says when there is no admin override. */
  defaultIsPremium: boolean;
}

export interface ContentRegistrySection {
  section: ContentSection;
  label: string;
  items: ContentRegistryItem[];
}

const listeningGroup = (section: 0 | 1 | 2 | 3 | 4): string =>
  section === 0 ? "Full test" : `Section ${section}`;

const listeningItems: ContentRegistryItem[] = TESTS.map((t) => ({
  contentId: t.id,
  section: "listening",
  label: t.title,
  group: listeningGroup(t.section),
  defaultIsPremium: !isFreeListeningTest(t.id),
}));

const readingItems: ContentRegistryItem[] = PASSAGES.map((p) => ({
  contentId: p.id,
  section: "reading",
  label: p.title,
  group: `Passage ${p.passageNumber}`,
  defaultIsPremium: isDefaultPremiumReading(p),
}));

const writingSimulatorItems: ContentRegistryItem[] = HTML_TASKS.map((t) => ({
  contentId: writingContentId.simulator(t.id),
  section: "writing",
  label: t.title,
  group: `Task ${t.task} · Simulator`,
  defaultIsPremium: !isFreeWritingSimulator(t.id),
}));

const writingSampleItems: ContentRegistryItem[] = WRITING_SAMPLES.filter((s) => s.task === 1).map(
  (s) => ({
    contentId: writingContentId.sample(s.id),
    section: "writing",
    label: `Report ${s.reportNumber} — ${s.chartType}`,
    group: "Task 1 · Sample",
    defaultIsPremium: !isFreeWritingSample(s.id),
  }),
);

const writingEssayItems: ContentRegistryItem[] = WRITING_ESSAYS.map((e) => ({
  contentId: writingContentId.essay(e.id),
  section: "writing",
  label: `Test ${e.testNumber} — Task 2 essay`,
  group: "Task 2 · Essay",
  defaultIsPremium: !isFreeWritingEssay(e.id),
}));

const speakingItems: ContentRegistryItem[] = SPEAKING_TOPICS.map((t) => ({
  contentId: t.id,
  section: "speaking",
  label: t.title,
  group: `Part ${t.part}`,
  defaultIsPremium: !isFreeSpeakingTopic(t.id),
}));

export const CONTENT_REGISTRY: ContentRegistrySection[] = [
  { section: "listening", label: "Listening", items: listeningItems },
  { section: "reading", label: "Reading", items: readingItems },
  {
    section: "writing",
    label: "Writing",
    items: [...writingSimulatorItems, ...writingSampleItems, ...writingEssayItems],
  },
  { section: "speaking", label: "Speaking", items: speakingItems },
];

/** Total count of gate-able items across all sections. */
export const CONTENT_REGISTRY_TOTAL = CONTENT_REGISTRY.reduce((n, s) => n + s.items.length, 0);
