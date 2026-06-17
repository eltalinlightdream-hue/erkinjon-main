/**
 * Content for the Japanese learning section.
 *
 * This file holds the lessons rendered on /japanese/alphabet and
 * /japanese/topics. To publish another section later (Numbers, Family, Food,
 * Travel, …) just add an entry to the relevant array below — no layout or
 * component changes are required.
 */

export type JapaneseLesson = {
  /** Stable key, used for React list keys. */
  key: string;
  /** Section heading shown on the page (e.g. "Hiragana", "Daily Phrases"). */
  heading: string;
  /** A short 1–3 sentence intro to the section. */
  description: string;
  /** The YouTube video id used for the embedded player. */
  youtubeId: string;
  /** The video's official title — used for the iframe's accessible name. */
  videoTitle: string;
  /** The channel that produced the video — credited under the player. */
  channel: string;
};

/** Hiragana + Katakana — rendered on /japanese/alphabet. */
export const alphabetLessons: JapaneseLesson[] = [
  {
    key: "hiragana",
    heading: "Hiragana",
    description:
      "A full walkthrough of every hiragana character, stroke order, and how they're used in real words — start here.",
    youtubeId: "6p9Il_j0zjc",
    videoTitle: "Learn ALL Hiragana in 1 Hour – How to Write and Read Japanese",
    channel: "JapanesePod101.com",
  },
  {
    key: "katakana",
    heading: "Katakana",
    description:
      "The katakana companion to the hiragana lesson — covers the characters mainly used for foreign loanwords.",
    youtubeId: "s6DKRgtVLGA",
    videoTitle: "Learn ALL Katakana in 1 Hour – How to Write and Read Japanese",
    channel: "JapanesePod101.com",
  },
];

/** Daily Phrases, Grammar Basics, … — rendered on /japanese/topics. */
export const topicLessons: JapaneseLesson[] = [
  {
    key: "daily-phrases",
    heading: "Daily Phrases",
    description:
      "25 everyday expressions — greetings, thanks, apologies, and phrases you'll actually use in real conversation.",
    youtubeId: "n6ciMT6KhVo",
    videoTitle: "Learn the Top 25 Must-Know Japanese Phrases!",
    channel: "JapanesePod101.com",
  },
  {
    key: "grammar-basics",
    heading: "Grammar Basics for Absolute Beginners",
    description:
      "The first lesson in a full beginner series — how Japanese sentences are built, explained clearly from zero.",
    youtubeId: "GUymRdqBglo",
    videoTitle: "Japanese Lesson 1: Basic Sentence Structure & Particles – Absolute Beginner",
    channel: "Japanese Ammo with Misa",
  },
];
