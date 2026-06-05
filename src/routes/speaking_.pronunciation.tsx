import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, X, Clock, ChevronDown, ChevronUp } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/speaking_/pronunciation")({
  head: () => ({
    meta: [
      { title: "Pronunciation Lessons — Rachel's English | Abduraimov Erkinjon" },
      { name: "description", content: "Learn American English pronunciation from beginner to advanced with Rachel's English video lessons." },
    ],
  }),
  component: Pronunciation,
});

type Lesson = {
  id: number;
  title: string;
  youtubeId: string;
  topic: string;
  level: "beginner" | "intermediate" | "advanced";
  duration: string;
  description: string;
};

const LESSONS: Lesson[] = [
  { id: 1,  title: "Placement and American English Pronunciation",          youtubeId: "9_XCXqML4zo", topic: "Foundations",               level: "beginner",     duration: "7:45", description: "Understand mouth position and placement for clear pronunciation" },
  { id: 2,  title: "Welcome to Rachel's English - American Pronunciation",  youtubeId: "zash7H0eMQ4", topic: "Foundations",               level: "beginner",     duration: "6:32", description: "Introduction to American English pronunciation basics" },
  { id: 3,  title: "Pronunciation: The Definitive Guide to the Top 100 Words", youtubeId: "aIZdTPwWL5I", topic: "Common Words",            level: "beginner",     duration: "8:20", description: "Learn correct pronunciation of the 100 most common English words" },
  { id: 4,  title: "Detailed Analysis of American Speech",                  youtubeId: "iKv4oc2zbeA", topic: "Common Words",               level: "beginner",     duration: "8:30", description: "In-depth look at how American English really sounds in context" },
  { id: 5,  title: "American English - IH [ɪ] Vowel as in SIT",            youtubeId: "-km81q6DIlM", topic: "Vowels",                     level: "beginner",     duration: "5:20", description: "Master the short 'i' vowel sound with mouth position guide" },
  { id: 6,  title: "American English - EE [i] Vowel as in SHE",            youtubeId: "C5WKc4R7mD4", topic: "Vowels",                     level: "beginner",     duration: "5:15", description: "Learn the long 'ee' vowel sound clearly" },
  { id: 7,  title: "American English - AA [æ] Vowel as in BAT",            youtubeId: "-i7-DDAW-ok", topic: "Vowels",                     level: "beginner",     duration: "5:10", description: "Understand the 'a' sound with clear mouth position demonstration" },
  { id: 8,  title: "American English - UH [ə] Vowel: The Schwa",           youtubeId: "2BmkUa4Mv60", topic: "Vowels",                     level: "beginner",     duration: "5:08", description: "Master the schwa and short 'u' sound distinction" },
  { id: 9,  title: "How to Pronounce the Schwa [ə]: American Accent",      youtubeId: "rM9NxK74JSE", topic: "Vowels",                     level: "beginner",     duration: "6:45", description: "Learn the most common vowel sound in English" },
  { id: 10, title: "American English - AH [ɑ] Vowel as in FATHER",        youtubeId: "DEJGBC4xZzI", topic: "Vowels",                     level: "beginner",     duration: "5:12", description: "Understand the open 'a' vowel sound" },
  { id: 11, title: "American English - AW [ɔ] Vowel as in LAW",           youtubeId: "opMab62SybY", topic: "Vowels",                     level: "beginner",     duration: "5:05", description: "Master the 'aw' sound for clear pronunciation" },
  { id: 12, title: "American English - OO [u] Vowel as in BOO",            youtubeId: "IwahymIkGJ0", topic: "Vowels",                     level: "beginner",     duration: "5:18", description: "Learn the long 'oo' vowel sound" },
  { id: 13, title: "IH [ɪ] vs EE [i]: Vowel Sounds Compared",             youtubeId: "JQ8FaHfLLVc", topic: "Vowels",                     level: "beginner",     duration: "5:10", description: "Distinguish between the short and long vowel sounds clearly" },
  { id: 14, title: "English Vowels: AW vs UR Sounds",                      youtubeId: "G9VakqvjXDs", topic: "Vowels",                     level: "beginner",     duration: "5:22", description: "Master the difference between the 'aw' and 'ur' vowel sounds" },
  { id: 15, title: "Diphthong Sound AI [aɪ] as in BUY",                   youtubeId: "8uD-GuuSgyk", topic: "Diphthongs",                 level: "intermediate", duration: "5:25", description: "Learn the 'eye' diphthong sound" },
  { id: 16, title: "English Sounds - AY [eɪ] Diphthong as in SAY",        youtubeId: "XOuD6mFr6sQ", topic: "Diphthongs",                 level: "intermediate", duration: "5:20", description: "Master the 'ay' diphthong" },
  { id: 17, title: "Diphthong Sound OY [ɔɪ] as in TOY",                   youtubeId: "ZfjPBN22mK8", topic: "Diphthongs",                 level: "intermediate", duration: "5:15", description: "Learn the 'oy' diphthong sound" },
  { id: 18, title: "English Sounds - OW [aʊ] Diphthong as in NOW",        youtubeId: "i8KThVR713Q", topic: "Diphthongs",                 level: "intermediate", duration: "5:18", description: "Master the 'ow' diphthong" },
  { id: 19, title: "English Sounds - OH [oʊ] Diphthong as in NO",         youtubeId: "Civ7UBZP99M", topic: "Diphthongs",                 level: "intermediate", duration: "5:20", description: "Learn the 'oh' diphthong" },
  { id: 20, title: "American Accent Training: R vs L Sounds",              youtubeId: "mO7J-b8vi54", topic: "Consonants",                 level: "beginner",     duration: "6:30", description: "Master the American 'r' sound - critical for pronunciation" },
  { id: 21, title: "How to Pronounce the L, R, and TH Sounds",             youtubeId: "4zSoTGLBo1s", topic: "Consonants",                 level: "beginner",     duration: "5:40", description: "Learn to pronounce the 'l' sound correctly" },
  { id: 22, title: "5 Powerful Tips for the TH Sound [θ] as in THIN",     youtubeId: "1Tor0LDdVKY", topic: "Consonants",                 level: "intermediate", duration: "6:15", description: "Master the voiceless 'th' sound" },
  { id: 23, title: "TH Sound Practice: Voiced and Voiceless [ð] as in THIS", youtubeId: "lFXzo7Kh8gs", topic: "Consonants",              level: "intermediate", duration: "6:20", description: "Learn the voiced 'th' sound" },
  { id: 24, title: "R vs W Sounds: American English Pronunciation",        youtubeId: "bYWlQur5g5s", topic: "Consonants",                 level: "beginner",     duration: "5:25", description: "Understand the 'w' sound and lip rounding" },
  { id: 25, title: "Approximants: L, R, Y, W Sounds Explained",           youtubeId: "hGySeA8IEMk", topic: "Consonants",                 level: "beginner",     duration: "5:18", description: "Master the 'y' consonant sound alongside L, R, W" },
  { id: 26, title: "NG Sound [ŋ] Daily Pronunciation Practice",            youtubeId: "wJHyHxckDno", topic: "Consonants",                 level: "intermediate", duration: "5:35", description: "Learn the 'ng' sound and avoid common mistakes" },
  { id: 27, title: "Word Stress: Content Words in American English",       youtubeId: "QPbNhsCkj7k", topic: "Word Stress",                level: "intermediate", duration: "7:20", description: "Understand where to place stress within words" },
  { id: 28, title: "Function Words: American English Intonation and Stress", youtubeId: "2mS7w_np2Nw", topic: "Sentence Stress",         level: "intermediate", duration: "8:15", description: "Learn how stress changes meaning and clarity in sentences" },
  { id: 29, title: "Intro to Linking: American English Pronunciation",     youtubeId: "EvhZPWJSub4", topic: "Linking & Connected Speech", level: "intermediate", duration: "7:45", description: "Master linked sounds for fluent, natural pronunciation" },
  { id: 30, title: "American English Reductions and Contractions",         youtubeId: "WEG-_Jgaq2M", topic: "Reduction",                  level: "intermediate", duration: "8:10", description: "Learn how common words change in natural speech" },
  { id: 31, title: "American English Pronunciation: Intonation",           youtubeId: "p8DJFNjZiIM", topic: "Intonation",                 level: "intermediate", duration: "7:30", description: "Understand pitch and melody patterns in English speech" },
  { id: 32, title: "Questions and Intonation: Up or Down?",                youtubeId: "Aoj4HZlLQBY", topic: "Intonation",                 level: "intermediate", duration: "6:45", description: "Learn proper intonation for asking questions" },
  { id: 33, title: "Fluent English: The CAN Reduction",                    youtubeId: "qYXw_qvtNQc", topic: "Contractions",               level: "beginner",     duration: "6:20", description: "Master common contractions for natural speech" },
  { id: 34, title: "Word Stress and Verbs: American English Pronunciation", youtubeId: "u_hABxBE4KY", topic: "Grammar & Pronunciation",   level: "intermediate", duration: "7:10", description: "Learn how word endings affect stress and sound" },
  { id: 35, title: "Linking Consonant to Consonant",                       youtubeId: "6ziKkSig0jM", topic: "Fluency",                    level: "advanced",     duration: "8:30", description: "Develop natural, fluent speech patterns" },
  { id: 36, title: "English Pronunciation and Accent Training",            youtubeId: "iKv4oc2zbeA", topic: "Accent Training",            level: "intermediate", duration: "8:45", description: "Practical strategies for reducing your accent" },
  { id: 37, title: "DON'T Fall For These Diphthong and Vowel Mistakes",    youtubeId: "jaRcbpN_KlM", topic: "Confidence & Speaking",      level: "intermediate", duration: "7:55", description: "Build confidence while improving your pronunciation" },
  { id: 38, title: "IELTS Speaking: Pronunciation Tips for the Exam",      youtubeId: "x0gNT4p0PU8", topic: "IELTS Specific",             level: "advanced",     duration: "9:20", description: "Specific pronunciation strategies for IELTS success" },
  { id: 39, title: "Linking: Vowel to Vowel in American English",          youtubeId: "cgbKlupt7l8", topic: "Common Mistakes",            level: "beginner",     duration: "7:10", description: "Fix pronunciation of frequently mispronounced words" },
  { id: 40, title: "Word Stress and Lists: American English Pronunciation", youtubeId: "pw05jLyV9Rc", topic: "Common Mistakes",            level: "beginner",     duration: "7:05", description: "Learn correct pronunciation of tricky English words" },
];

// Primary filters always visible; secondary revealed via "More topics"
const PRIMARY_TOPICS   = ["Vowels", "Consonants", "Diphthongs", "Word Stress", "Intonation", "IELTS Specific"];
const SECONDARY_TOPICS = ["Foundations", "Common Words", "Sentence Stress", "Linking & Connected Speech",
                          "Reduction", "Contractions", "Grammar & Pronunciation", "Fluency",
                          "Accent Training", "Confidence & Speaking", "Common Mistakes"];

const LEVEL_FILTERS = ["beginner", "intermediate", "advanced"] as const;

const LEVEL_META: Record<string, { label: string; className: string }> = {
  beginner:     { label: "Beginner",     className: "bg-emerald-100 text-emerald-800 border-emerald-200" },
  intermediate: { label: "Intermediate", className: "bg-blue-100 text-blue-800 border-blue-200" },
  advanced:     { label: "Advanced",     className: "bg-red-100 text-red-800 border-red-200" },
};

function Pronunciation() {
  const [activeTopics, setActiveTopics] = useState<Set<string>>(new Set());
  const [activeLevels, setActiveLevels] = useState<Set<string>>(new Set());
  const [showMoreTopics, setShowMoreTopics] = useState(false);
  const [playing, setPlaying] = useState<Lesson | null>(null);

  // Close modal on Escape key
  useEffect(() => {
    if (!playing) return;
    const handle = (e: KeyboardEvent) => { if (e.key === "Escape") setPlaying(null); };
    window.addEventListener("keydown", handle);
    return () => window.removeEventListener("keydown", handle);
  }, [playing]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = playing ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [playing]);

  function toggleTopic(t: string) {
    setActiveTopics((prev) => { const n = new Set(prev); n.has(t) ? n.delete(t) : n.add(t); return n; });
  }
  function toggleLevel(l: string) {
    setActiveLevels((prev) => { const n = new Set(prev); n.has(l) ? n.delete(l) : n.add(l); return n; });
  }
  function clearAll() {
    setActiveTopics(new Set());
    setActiveLevels(new Set());
  }

  const hasFilters = activeTopics.size > 0 || activeLevels.size > 0;

  const visible = LESSONS.filter((l) => {
    const topicMatch = activeTopics.size === 0 || activeTopics.has(l.topic);
    const levelMatch = activeLevels.size === 0 || activeLevels.has(l.level);
    return topicMatch && levelMatch;
  });

  const topicPill = (t: string) => (
    <button
      key={t}
      onClick={() => toggleTopic(t)}
      className={cn(
        "px-3 py-1 rounded-full text-xs font-mono tracking-wide border transition-all",
        activeTopics.has(t)
          ? "bg-primary text-primary-foreground border-primary font-semibold"
          : "border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground"
      )}
    >
      {t}
    </button>
  );

  return (
    <SiteLayout>
      <section className="container mx-auto px-4 py-12 max-w-6xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">Pronunciation Lessons</h1>
        <p className="text-muted-foreground mb-8 text-lg">
          Learn American English pronunciation from beginner to advanced — by Rachel's English.
        </p>

        {/* Level filters */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="text-xs font-mono text-muted-foreground tracking-wide mr-1">Level:</span>
          {LEVEL_FILTERS.map((l) => (
            <button
              key={l}
              onClick={() => toggleLevel(l)}
              className={cn(
                "px-4 py-1.5 rounded-full text-xs font-mono tracking-wide border transition-all",
                activeLevels.has(l)
                  ? LEVEL_META[l].className + " font-semibold"
                  : "border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground"
              )}
            >
              {LEVEL_META[l].label}
            </button>
          ))}
        </div>

        {/* Topic filters — primary always visible */}
        <div className="mb-4">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="text-xs font-mono text-muted-foreground tracking-wide mr-1">Topic:</span>
            {PRIMARY_TOPICS.map(topicPill)}
            <button
              onClick={() => setShowMoreTopics((v) => !v)}
              className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-mono tracking-wide border border-dashed border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground transition-all"
            >
              {showMoreTopics ? <><ChevronUp className="w-3 h-3" /> Less</> : <><ChevronDown className="w-3 h-3" /> More topics</>}
            </button>
          </div>

          {/* Secondary topics — collapsible */}
          {showMoreTopics && (
            <div className="flex flex-wrap gap-2 pl-1">
              {SECONDARY_TOPICS.map(topicPill)}
            </div>
          )}
        </div>

        {/* Clear + count row */}
        <div className="flex items-center gap-3 mb-6">
          <p className="text-xs font-mono text-muted-foreground tracking-wide">
            {visible.length} lesson{visible.length !== 1 ? "s" : ""} found
          </p>
          {hasFilters && (
            <button
              onClick={clearAll}
              className="text-xs font-mono text-destructive underline underline-offset-2 hover:no-underline transition-all"
            >
              Clear all filters
            </button>
          )}
        </div>

        {visible.length === 0 ? (
          <div className="text-center py-20 text-muted-foreground">
            <p className="font-mono text-sm tracking-wide">No lessons match your filters.</p>
            <button onClick={clearAll} className="mt-3 text-xs font-mono text-primary underline underline-offset-2">
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {visible.map((lesson) => (
              <div
                key={lesson.id}
                className="rounded-xl border border-border bg-card overflow-hidden hover:shadow-warm hover:-translate-y-0.5 transition-all duration-200 flex flex-col"
              >
                {/* Thumbnail */}
                <div className="relative aspect-video bg-muted">
                  <img
                    src={`https://img.youtube.com/vi/${lesson.youtubeId}/mqdefault.jpg`}
                    alt={lesson.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <button
                    type="button"
                    onClick={() => setPlaying(lesson)}
                    className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 hover:opacity-100 transition-opacity"
                    aria-label={`Watch ${lesson.title}`}
                  >
                    <span className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                      <Play className="w-5 h-5 text-primary fill-primary ml-0.5" />
                    </span>
                  </button>
                  <span className="absolute bottom-1.5 right-1.5 bg-black/70 text-white text-[10px] font-mono px-1.5 py-0.5 rounded flex items-center gap-1 pointer-events-none">
                    <Clock className="w-2.5 h-2.5" /> {lesson.duration}
                  </span>
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <Badge variant="secondary" className="font-mono text-[10px] tracking-wide bg-accent text-foreground">
                      {lesson.topic}
                    </Badge>
                    <span className={cn("text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full border", LEVEL_META[lesson.level].className)}>
                      {LEVEL_META[lesson.level].label}
                    </span>
                  </div>
                  <h3 className="font-serif text-sm font-semibold leading-snug mb-1.5 flex-1">{lesson.title}</h3>
                  <p className="text-xs text-muted-foreground mb-3 leading-relaxed">{lesson.description}</p>
                  <Button
                    type="button"
                    size="sm"
                    variant="outline"
                    className="w-full font-mono text-xs tracking-wide h-8"
                    onClick={() => setPlaying(lesson)}
                  >
                    <Play className="w-3 h-3 mr-1.5" /> Watch
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Simple fixed-overlay modal — no animation library, works for every card */}
      {playing && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setPlaying(null)}
        >
          <div
            className="relative w-full max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setPlaying(null)}
              className="absolute -top-9 right-0 w-8 h-8 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/30 transition-colors"
              aria-label="Close video"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="aspect-video w-full rounded-xl overflow-hidden shadow-2xl bg-black">
              <iframe
                key={playing.youtubeId}
                src={`https://www.youtube-nocookie.com/embed/${playing.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                title={playing.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <div className="mt-3 flex items-center justify-between gap-3">
              <p className="text-white/80 text-sm font-mono truncate flex-1">{playing.title}</p>
              <a
                href={`https://www.youtube.com/watch?v=${playing.youtubeId}`}
                target="_blank"
                rel="noreferrer"
                className="shrink-0 text-xs font-mono text-white/60 hover:text-white underline underline-offset-2 transition-colors"
              >
                Open on YouTube ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </SiteLayout>
  );
}
