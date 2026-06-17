import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { SiteLayout } from "@/components/site-layout";
import { LessonSection } from "@/components/japanese/lesson-section";
import { alphabetLessons } from "@/lib/japanese-data";

export const Route = createFileRoute("/japanese_/alphabet")({
  head: () => ({
    meta: [
      { title: "Japanese Alphabet — Hiragana & Katakana | Abduraimov Erkinjon" },
      {
        name: "description",
        content:
          "Learn to read and write the two Japanese syllabaries, hiragana and katakana, with full video walkthroughs you can watch right on the page.",
      },
    ],
  }),
  component: JapaneseAlphabet,
});

function JapaneseAlphabet() {
  return (
    <SiteLayout>
      {/* ─── HEADER ───────────────────────────────────────────────── */}
      <section className="container mx-auto px-4 pt-12 md:pt-16 pb-8 max-w-5xl">
        <Link
          to="/japanese"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Japanese
        </Link>
        <p className="eyebrow text-primary mb-5">日本語 · The alphabet</p>
        <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-5">
          Hiragana &amp; Katakana
        </h1>
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
          Japanese uses two syllabaries long before you reach kanji. Learn to read and write both
          here — begin with hiragana, then move on to katakana.
        </p>
      </section>

      {/* ─── LESSONS ──────────────────────────────────────────────── */}
      <section className="container mx-auto px-4 pb-24 max-w-5xl">
        <div className="flex flex-col gap-16 md:gap-20">
          {alphabetLessons.map((lesson) => (
            <LessonSection key={lesson.key} lesson={lesson} />
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
