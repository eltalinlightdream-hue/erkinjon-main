/**
 * Content for the Japanese learning section.
 *
 * Lessons are grouped by page: alphabet (/japanese/alphabet), speaking topics
 * (/japanese/topics) and grammar (/japanese/grammar). To publish another
 * lesson, just add an entry to the relevant array below — the pages render
 * whatever is here, so no layout or component changes are required. Grammar
 * lessons are shown in array order, numbered "Lesson 1, 2, 3…".
 */

export type JapaneseLesson = {
  /** Stable key, used for React list keys. */
  key: string;
  /** Section heading shown on the page (e.g. "Hiragana", "Greetings"). */
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

/**
 * Speaking topics & phrases — rendered on /japanese/topics.
 * Add more topics (e.g. Weather, Colours, Time & Dates) by appending entries.
 */
export const topicLessons: JapaneseLesson[] = [
  {
    key: "self-introduction",
    heading: "Introducing Yourself",
    description:
      "How to say your name, where you're from and a few words about yourself — the very first thing you'll do in Japanese.",
    youtubeId: "NwZzGbzi_jY",
    videoTitle: "Learn How to Introduce Yourself in Japanese | Can Do #1",
    channel: "JapanesePod101.com",
  },
  {
    key: "greetings",
    heading: "Greetings",
    description:
      "Good morning, hello and good night — the everyday greetings that carry you through a whole day in Japan.",
    youtubeId: "qtJea9Bnc4g",
    videoTitle: "Learn Basic Japanese Greetings | Can Do #7",
    channel: "JapanesePod101.com",
  },
  {
    key: "daily-phrases",
    heading: "Everyday Phrases",
    description:
      "25 everyday expressions — greetings, thanks, apologies, and phrases you'll actually use in real conversation.",
    youtubeId: "n6ciMT6KhVo",
    videoTitle: "Learn the Top 25 Must-Know Japanese Phrases!",
    channel: "JapanesePod101.com",
  },
  {
    key: "numbers",
    heading: "Numbers & Counting",
    description:
      "Count from one to ten and hear how Japanese numbers are read aloud — the building block for prices, dates and time.",
    youtubeId: "yHcaEuti1iU",
    videoTitle: "Learn Japanese: The Numbers in Japanese 1-10",
    channel: "JapanesePod101.com",
  },
  {
    key: "family",
    heading: "Family",
    description:
      "The words for parents, siblings and relatives — and how to talk about your own family versus someone else's.",
    youtubeId: "4IORgVTMHGo",
    videoTitle: "Learn & Practice Japanese - Talking About Your Family | Can Do #5",
    channel: "JapanesePod101.com",
  },
  {
    key: "restaurant",
    heading: "Ordering at a Restaurant",
    description:
      "Order food and drinks, call the waiter and pay the bill — the phrases you need to eat out comfortably in Japan.",
    youtubeId: "z9o9bjNir2Y",
    videoTitle: "Learn How to Order at a Restaurant in Japanese | Can Do #18",
    channel: "JapanesePod101.com",
  },
  {
    key: "shopping",
    heading: "Shopping",
    description:
      "Ask the price, say what you're looking for and handle the checkout — must-know phrases for shops and convenience stores.",
    youtubeId: "b16FU6wIvTk",
    videoTitle: "Top 15 Must-Know Japanese Phrases to Go Shopping in Japan",
    channel: "JapanesePod101.com",
  },
  {
    key: "travel",
    heading: "Travel & Getting Around",
    description:
      "Twenty essential travel phrases — getting around, asking for help and staying polite while you explore Japan.",
    youtubeId: "nuDZN8Ftxps",
    videoTitle: "Top 20 Travel Phrases You Should Know in Japanese - Vocabulary with Risa",
    channel: "JapanesePod101.com",
  },
];

/**
 * Beginner grammar, in learning order — rendered on /japanese/grammar.
 * These follow the Genki 1 syllabus from ToKini Andy's "Grammar Made Clear"
 * series. They are shown in this exact order and numbered "Lesson 1, 2, 3…",
 * so keep the array ordered from first to last. Append later lessons to extend.
 */
export const grammarLessons: JapaneseLesson[] = [
  {
    key: "grammar-1-sentences",
    heading: "Sentence Structure & Particles",
    description:
      "Start here: the X は Y です sentence pattern, the topic particle は, and the question particle か and possessive の.",
    youtubeId: "GaQBL4XHuSo",
    videoTitle: "【N5】Genki 1 Lesson 1 Grammar Made Clear | XはYです・Question か・の Particle",
    channel: "ToKini Andy",
  },
  {
    key: "grammar-2-demonstratives",
    heading: "This & That (Demonstratives)",
    description:
      "Point things out with これ・それ・あれ (this, that, that over there) and build on the sentence patterns from lesson 1.",
    youtubeId: "ftXNzFRpDbk",
    videoTitle: "【N5】Genki 1 Lesson 2 Grammar Made Clear | This and That in Japanese",
    channel: "ToKini Andy",
  },
  {
    key: "grammar-3-verbs-masu",
    heading: "Verbs & the ます-form",
    description:
      "Meet Japanese verbs and the polite ます-form — the backbone of natural, everyday spoken Japanese.",
    youtubeId: "ed4rmIY4mL0",
    videoTitle: "【N5】Genki 1 Lesson 3 Japanese Grammar Made Clear | ます CONJUGATION SIMPLIFIED",
    channel: "ToKini Andy",
  },
  {
    key: "grammar-4-past-tense",
    heading: "The Past Tense",
    description:
      "Put it in the past: the polite past tense of verbs and nouns, plus how to say 'there is' and 'there are'.",
    youtubeId: "knbAUQqFR68",
    videoTitle: "【N5】Genki 1 Lesson 4 Grammar Made Clear - The Japanese Past Tense and more",
    channel: "ToKini Andy",
  },
  {
    key: "grammar-5-adjectives",
    heading: "Adjectives",
    description:
      "Describe things with い-adjectives and な-adjectives, in both the present and the past, positive and negative.",
    youtubeId: "zCzxXKFTYps",
    videoTitle: "【N5】Genki 1 Lesson 5 Japanese Grammar Made Clear | Japanese Adjectives",
    channel: "ToKini Andy",
  },
  {
    key: "grammar-6-te-form",
    heading: "The て-form",
    description:
      "The all-important て-form — used for requests, linking actions, and a huge amount of the grammar that comes later.",
    youtubeId: "whHaSkKf-jU",
    videoTitle: "【N5】Genki 1 Lesson 6 Japanese Grammar Made Clear | The て Form and more",
    channel: "ToKini Andy",
  },
];
