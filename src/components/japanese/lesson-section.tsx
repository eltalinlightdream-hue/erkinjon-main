import { Youtube } from "lucide-react";
import { VideoEmbed } from "@/components/japanese/video-embed";
import type { JapaneseLesson } from "@/lib/japanese-data";

/**
 * One lesson block — a heading, short description, the embedded video and a
 * small credit line under it. Shared by the Alphabet and Topics pages so both
 * keep the same visual rhythm.
 */
export function LessonSection({ lesson }: { lesson: JapaneseLesson }) {
  const { heading, description, youtubeId, videoTitle, channel } = lesson;

  return (
    <article className="mx-auto w-full max-w-3xl">
      <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-3">{heading}</h2>
      <p className="text-sm md:text-[15px] text-muted-foreground leading-relaxed mb-6 max-w-2xl">
        {description}
      </p>

      <VideoEmbed youtubeId={youtubeId} title={videoTitle} />

      <p className="mt-3 text-xs text-muted-foreground">
        Video courtesy of <span className="font-medium text-foreground/75">{channel}</span>.{" "}
        <a
          href={`https://www.youtube.com/watch?v=${youtubeId}`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 font-medium text-primary transition-colors hover:text-[var(--terracotta-deep)]"
        >
          <Youtube className="h-3.5 w-3.5" /> Watch on YouTube
        </a>
      </p>
    </article>
  );
}
