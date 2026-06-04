import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Play, X, Clock } from "lucide-react";
import { useState } from "react";
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
  { id: 1, title: "Placement and American English Pronunciation", youtubeId: "9_XCXqML4zo", topic: "Foundations", level: "beginner", duration: "7:45", description: "Understand mouth position and placement for clear pronunciation" },
  { id: 2, title: "Welcome to Rachel's English - American Pronunciation", youtubeId: "zash7H0eMQ4", topic: "Foundations", level: "beginner", duration: "6:32", description: "Introduction to American English pronunciation basics" },
  { id: 3, title: "The 100 Most Common Words in English - Part 1", youtubeId: "E88CqMx5Sc4", topic: "Common Words", level: "beginner", duration: "8:20", description: "Learn correct pronunciation of the 100 most common English words" },
  { id: 4, title: "The 100 Most Common Words in English - Part 2", youtubeId: "h8EzUZgfXA8", topic: "Common Words", level: "beginner", duration: "8:30", description: "Continue learning pronunciation of essential vocabulary" },
  { id: 5, title: "Vowel Sound [ɪ] as in SIT", youtubeId: "zyJgLiUhJAc", topic: "Vowels", level: "beginner", duration: "5:20", description: "Master the short 'i' vowel sound with mouth position guide" },
  { id: 6, title: "Vowel Sound [i:] as in SHE", youtubeId: "YlFYJ_BXPdc", topic: "Vowels", level: "beginner", duration: "5:15", description: "Learn the long 'ee' vowel sound clearly" },
  { id: 7, title: "Vowel Sound [æ] as in BAT", youtubeId: "GAnfz0k3t18", topic: "Vowels", level: "beginner", duration: "5:10", description: "Understand the 'a' sound with clear mouth position demonstration" },
  { id: 8, title: "Vowel Sound [ʌ] as in BUTTER", youtubeId: "MXQzDx03chc", topic: "Vowels", level: "beginner", duration: "5:08", description: "Master the schwa and short 'u' sound distinction" },
  { id: 9, title: "The Schwa: Vowel Sound [ə] as in SUPPLY", youtubeId: "LKELWlqKAzE", topic: "Vowels", level: "beginner", duration: "6:45", description: "Learn the most common vowel sound in English" },
  { id: 10, title: "Vowel Sound [ɑ:] as in FATHER", youtubeId: "CIhZKJEOvqw", topic: "Vowels", level: "beginner", duration: "5:12", description: "Understand the open 'a' vowel sound" },
  { id: 11, title: "Vowel Sound [ɔ:] as in LAW", youtubeId: "_8_4_p0nfS0", topic: "Vowels", level: "beginner", duration: "5:05", description: "Master the 'aw' sound for clear pronunciation" },
  { id: 12, title: "Vowel Sound [u:] as in BOO", youtubeId: "7VDzZaGLMws", topic: "Vowels", level: "beginner", duration: "5:18", description: "Learn the long 'oo' vowel sound" },
  { id: 13, title: "Vowel Sound [ʊ] as in BOOK", youtubeId: "e8WNQnHZBQo", topic: "Vowels", level: "beginner", duration: "5:10", description: "Distinguish between short and long 'oo' sounds" },
  { id: 14, title: "Vowel Sound [ɜ:] as in BIRD", youtubeId: "v8SbWHFKG9E", topic: "Vowels", level: "beginner", duration: "5:22", description: "Master the 'ur' vowel sound" },
  { id: 15, title: "Diphthong [aɪ] as in BUY", youtubeId: "GWYWqJVhjvg", topic: "Diphthongs", level: "intermediate", duration: "5:25", description: "Learn the 'eye' diphthong sound" },
  { id: 16, title: "Diphthong [eɪ] as in SAY", youtubeId: "8bKi4zXWK7I", topic: "Diphthongs", level: "intermediate", duration: "5:20", description: "Master the 'ay' diphthong" },
  { id: 17, title: "Diphthong [ɔɪ] as in TOY", youtubeId: "rFkDf4M4tFI", topic: "Diphthongs", level: "intermediate", duration: "5:15", description: "Learn the 'oy' diphthong sound" },
  { id: 18, title: "Diphthong [aʊ] as in NOW", youtubeId: "a3ygvHh6Ztk", topic: "Diphthongs", level: "intermediate", duration: "5:18", description: "Master the 'ow' diphthong" },
  { id: 19, title: "Diphthong [oʊ] as in NO", youtubeId: "mxL5M7LJ1_o", topic: "Diphthongs", level: "intermediate", duration: "5:20", description: "Learn the 'oh' diphthong" },
  { id: 20, title: "Consonant Sound [r] as in RUN", youtubeId: "qwBKhz8zxrA", topic: "Consonants", level: "beginner", duration: "6:30", description: "Master the American 'r' sound - critical for pronunciation" },
  { id: 21, title: "Consonant Sound [l] as in LAP", youtubeId: "0-bq8fAzXcQ", topic: "Consonants", level: "beginner", duration: "5:40", description: "Learn to pronounce the 'l' sound correctly" },
  { id: 22, title: "Consonant Sound [θ] as in THIN", youtubeId: "GNKVzqUXH0A", topic: "Consonants", level: "intermediate", duration: "6:15", description: "Master the voiceless 'th' sound" },
  { id: 23, title: "Consonant Sound [ð] as in THIS", youtubeId: "Z6xmBi6jy2w", topic: "Consonants", level: "intermediate", duration: "6:20", description: "Learn the voiced 'th' sound" },
  { id: 24, title: "Consonant Sound [w] as in WILL", youtubeId: "Qcda1s0nIJM", topic: "Consonants", level: "beginner", duration: "5:25", description: "Understand the 'w' sound and lip rounding" },
  { id: 25, title: "Consonant Sound [j] as in YES", youtubeId: "cJFHhKG2S1M", topic: "Consonants", level: "beginner", duration: "5:18", description: "Master the 'y' consonant sound" },
  { id: 26, title: "Consonant Sound [ŋ] as in SING", youtubeId: "7x9cLZ3DQWM", topic: "Consonants", level: "intermediate", duration: "5:35", description: "Learn the 'ng' sound and avoid common mistakes" },
  { id: 27, title: "Stress in a Word: Where to Emphasize", youtubeId: "HrACSKp7bC0", topic: "Word Stress", level: "intermediate", duration: "7:20", description: "Understand where to place stress within words" },
  { id: 28, title: "Stress in a Sentence: Emphasis and Meaning", youtubeId: "lVlPMQQnXPQ", topic: "Sentence Stress", level: "intermediate", duration: "8:15", description: "Learn how stress changes meaning and clarity in sentences" },
  { id: 29, title: "Linking: Connect Your Words for Natural Speech", youtubeId: "qJL3Z15VxeU", topic: "Linking & Connected Speech", level: "intermediate", duration: "7:45", description: "Master linked sounds for fluent, natural pronunciation" },
  { id: 30, title: "Words That Reduce: How Native Speakers Really Talk", youtubeId: "0d9VbRHm4kI", topic: "Reduction", level: "intermediate", duration: "8:10", description: "Learn how common words change in natural speech" },
  { id: 31, title: "Intonation: The Melody of English", youtubeId: "0XvL5s2eXk4", topic: "Intonation", level: "intermediate", duration: "7:30", description: "Understand pitch and melody patterns in English speech" },
  { id: 32, title: "Questions: Intonation and Word Order", youtubeId: "K4WxPqSZGSI", topic: "Intonation", level: "intermediate", duration: "6:45", description: "Learn proper intonation for asking questions" },
  { id: 33, title: "Contractions: Speaking Like a Native", youtubeId: "o6kp9LcvVqw", topic: "Contractions", level: "beginner", duration: "6:20", description: "Master common contractions for natural speech" },
  { id: 34, title: "Suffixes: How They Change Pronunciation", youtubeId: "FJlT9j5RkQg", topic: "Grammar & Pronunciation", level: "intermediate", duration: "7:10", description: "Learn how word endings affect stress and sound" },
  { id: 35, title: "Fluent Speech: Speaking Fast and Natural", youtubeId: "2L5nJDUJg1M", topic: "Fluency", level: "advanced", duration: "8:30", description: "Develop natural, fluent speech patterns" },
  { id: 36, title: "Accent Reduction: Practical Steps to Clearer Speech", youtubeId: "m9O6YZ_e9jM", topic: "Accent Training", level: "intermediate", duration: "8:45", description: "Practical strategies for reducing your accent" },
  { id: 37, title: "Speaking English Confidently: Building Your Accent", youtubeId: "CW4lkXl0nPM", topic: "Confidence & Speaking", level: "intermediate", duration: "7:55", description: "Build confidence while improving your pronunciation" },
  { id: 38, title: "IELTS Speaking: Pronunciation Tips for the Exam", youtubeId: "x0gNT4p0PU8", topic: "IELTS Specific", level: "advanced", duration: "9:20", description: "Specific pronunciation strategies for IELTS success" },
  { id: 39, title: "Common Mispronounced Words: Set 1", youtubeId: "dQfKXCEsNPE", topic: "Common Mistakes", level: "beginner", duration: "7:10", description: "Fix pronunciation of frequently mispronounced words" },
  { id: 40, title: "Common Mispronounced Words: Set 2", youtubeId: "c_bXuHm0Dn0", topic: "Common Mistakes", level: "beginner", duration: "7:05", description: "Learn correct pronunciation of tricky English words" },
];

const TOPIC_FILTERS = [
  "Foundations", "Common Words", "Vowels", "Diphthongs", "Consonants",
  "Word Stress", "Sentence Stress", "Linking & Connected Speech", "Reduction",
  "Intonation", "Contractions", "Grammar & Pronunciation", "Fluency",
  "Accent Training", "Confidence & Speaking", "IELTS Specific", "Common Mistakes",
];

const LEVEL_FILTERS = ["beginner", "intermediate", "advanced"] as const;

const LEVEL_META: Record<string, { label: string; className: string }> = {
  beginner:     { label: "Beginner",     className: "bg-emerald-100 text-emerald-800 border-emerald-200" },
  intermediate: { label: "Intermediate", className: "bg-blue-100 text-blue-800 border-blue-200" },
  advanced:     { label: "Advanced",     className: "bg-red-100 text-red-800 border-red-200" },
};

function Pronunciation() {
  const [activeTopics, setActiveTopics] = useState<Set<string>>(new Set());
  const [activeLevels, setActiveLevels] = useState<Set<string>>(new Set());
  const [playing, setPlaying] = useState<Lesson | null>(null);

  function toggleTopic(t: string) {
    setActiveTopics((prev) => {
      const next = new Set(prev);
      next.has(t) ? next.delete(t) : next.add(t);
      return next;
    });
  }

  function toggleLevel(l: string) {
    setActiveLevels((prev) => {
      const next = new Set(prev);
      next.has(l) ? next.delete(l) : next.add(l);
      return next;
    });
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

  return (
    <SiteLayout>
      <section className="container mx-auto px-4 py-12 max-w-6xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">Pronunciation Lessons</h1>
        <p className="text-muted-foreground mb-8 text-lg">
          Learn American English pronunciation from beginner to advanced — by Rachel's English.
        </p>

        {/* Level filters */}
        <div className="flex flex-wrap gap-2 mb-3">
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

        {/* Topic filters */}
        <div className="flex flex-wrap gap-2 mb-4">
          {TOPIC_FILTERS.map((t) => (
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
          ))}
          {hasFilters && (
            <button
              onClick={clearAll}
              className="px-3 py-1 rounded-full text-xs font-mono tracking-wide border border-destructive/40 text-destructive hover:bg-destructive/10 transition-all"
            >
              Clear all
            </button>
          )}
        </div>

        <p className="text-xs font-mono text-muted-foreground mb-6 tracking-wide">
          {visible.length} lesson{visible.length !== 1 ? "s" : ""} found
        </p>

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
                <div className="relative aspect-video bg-muted overflow-hidden">
                  <img
                    src={`https://img.youtube.com/vi/${lesson.youtubeId}/mqdefault.jpg`}
                    alt={lesson.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <button
                    onClick={() => setPlaying(lesson)}
                    className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 hover:opacity-100 transition-opacity"
                    aria-label={`Watch ${lesson.title}`}
                  >
                    <span className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                      <Play className="w-5 h-5 text-primary fill-primary ml-0.5" />
                    </span>
                  </button>
                  <span className="absolute bottom-1.5 right-1.5 bg-black/70 text-white text-[10px] font-mono px-1.5 py-0.5 rounded flex items-center gap-1">
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

      {/* Video modal */}
      <Dialog open={!!playing} onOpenChange={(open) => { if (!open) setPlaying(null); }}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden bg-black border-none">
          <button
            onClick={() => setPlaying(null)}
            className="absolute top-2 right-2 z-10 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition-colors"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
          {playing && (
            <div className="aspect-video w-full">
              <iframe
                src={`https://www.youtube.com/embed/${playing.youtubeId}?autoplay=1`}
                title={playing.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </SiteLayout>
  );
}
