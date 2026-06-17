import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { SiteLayout } from "@/components/site-layout";
import { LessonSection } from "@/components/japanese/lesson-section";
import { topicLessons } from "@/lib/japanese-data";

export const Route = createFileRoute("/japanese_/topics")({
  head: () => ({
    meta: [
      { title: "Japanese Topics & Phrases — Daily Phrases & Grammar | Abduraimov Erkinjon" },
      {
        name: "description",
        content:
          "Everyday Japanese phrases and beginner grammar, taught through embedded video lessons. More topics — Numbers, Family, Food, Travel — added over time.",
      },
    ],
  }),
  component: JapaneseTopics,
});

function JapaneseTopics() {
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
        <p className="eyebrow text-primary mb-5">日本語 · Topics & phrases</p>
        <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-5">
          Topics &amp; Phrases
        </h1>
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
          Once you can read kana, start using the language. These short lessons cover everyday
          phrases and the grammar that holds Japanese sentences together — with more topics on the
          way.
        </p>
      </section>

      {/* ─── LESSONS ──────────────────────────────────────────────── */}
      <section className="container mx-auto px-4 pb-24 max-w-5xl">
        <div className="flex flex-col gap-16 md:gap-20">
          {topicLessons.map((lesson) => (
            <LessonSection key={lesson.key} lesson={lesson} />
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
