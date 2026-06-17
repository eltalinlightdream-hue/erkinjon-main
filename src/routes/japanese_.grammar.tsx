import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { SiteLayout } from "@/components/site-layout";
import { LessonSection } from "@/components/japanese/lesson-section";
import { grammarLessons } from "@/lib/japanese-data";

export const Route = createFileRoute("/japanese_/grammar")({
  head: () => ({
    meta: [
      { title: "Japanese Grammar for Beginners — Step by Step | Abduraimov Erkinjon" },
      {
        name: "description",
        content:
          "A beginner Japanese grammar course in order — sentence structure, particles, verb conjugation, tenses and adjectives — taught through embedded video lessons you can watch on the page.",
      },
    ],
  }),
  component: JapaneseGrammar,
});

function JapaneseGrammar() {
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
        <p className="eyebrow text-primary mb-5">日本語 · Grammar</p>
        <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-5">
          Grammar, Step by Step
        </h1>
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
          Beginner grammar is easiest when you take it in order. These lessons follow the Genki 1
          syllabus from start to finish — work through them top to bottom and each one builds on the
          one before it.
        </p>
      </section>

      {/* ─── LESSONS (numbered, in order) ─────────────────────────── */}
      <section className="container mx-auto px-4 pb-24 max-w-5xl">
        <div className="flex flex-col gap-16 md:gap-20">
          {grammarLessons.map((lesson, i) => (
            <LessonSection key={lesson.key} lesson={lesson} eyebrow={`Lesson ${i + 1}`} />
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
