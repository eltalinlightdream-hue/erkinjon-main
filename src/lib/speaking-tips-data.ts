/* ────────────────────────────────────────────────────────────────
   IELTS Speaking — Tips & Chunks
   Short, practical "posts": discourse markers, vocabulary patterns
   and go-to language chunks for speaking (and writing).

   Each post is a list of blocks so it can mix prose, term/gloss lists,
   callout notes and example sentences. Prose, notes and examples support
   the same [[phrase|short definition]] markup as the Written Samples
   answers — the page renders those as tappable highlights that pop up
   the definition.

   To add a post: append a new SpeakingTip to SPEAKING_TIPS below.
   ──────────────────────────────────────────────────────────────── */

/** One term + its short gloss, shown as a row in a `list` block. */
export interface TipTerm {
  term: string;
  gloss?: string;
}

/** The building blocks a post is made of. */
export type TipBlock =
  | { kind: "prose"; text: string }
  | { kind: "list"; items: TipTerm[] }
  | { kind: "note"; text: string }
  | { kind: "example"; text: string };

export interface SpeakingTip {
  id: string;
  title: string;
  emoji?: string;
  blocks: TipBlock[];
}

export const SPEAKING_TIPS: SpeakingTip[] = [
  {
    id: "discourse-markers",
    title: "High-level discourse markers",
    emoji: "🗣️",
    blocks: [
      {
        kind: "prose",
        text: "Softeners that let you flag a word choice as loose, figurative, or not-quite-literal — very natural at Band 8+.",
      },
      {
        kind: "list",
        items: [
          { term: "if you will" },
          { term: "so to speak" },
          { term: "as it were" },
        ],
      },
      { kind: "example", text: "“It’s a kind of digital detox, if you will.”" },
      {
        kind: "example",
        text: "“He’s the [[backbone|the most important part that supports everything else]] of the team, so to speak.”",
      },
      { kind: "example", text: "“She became the family’s historian, as it were.”" },
    ],
  },
  {
    id: "conscious-word-family",
    title: "The “…conscious” word family",
    emoji: "📝",
    blocks: [
      {
        kind: "prose",
        text: "[noun] + conscious = careful about / paying attention to something.",
      },
      {
        kind: "list",
        items: [
          { term: "price-conscious", gloss: "careful about prices" },
          { term: "health-conscious", gloss: "caring about health" },
          { term: "safety-conscious", gloss: "careful about safety" },
          { term: "eco-conscious", gloss: "caring about the environment" },
          { term: "hygiene-conscious", gloss: "attentive to cleanliness" },
        ],
      },
      {
        kind: "example",
        text: "“Younger shoppers are far more price-conscious these days.”",
      },
      {
        kind: "note",
        text: "Slightly different: self-conscious = worried about how others see you (close to [[insecure|not confident; anxious about yourself]]).",
      },
      { kind: "prose", text: "Works in both speaking and writing." },
    ],
  },
  {
    id: "tickles-your-fancy",
    title: "whatever tickles your fancy",
    emoji: "✨",
    blocks: [
      {
        kind: "prose",
        text: "A relaxed, friendly way to say whatever you like / whatever appeals to you.",
      },
      {
        kind: "example",
        text: "“There are museums, cafés, hiking trails — whatever tickles your fancy, really.”",
      },
    ],
  },
];
