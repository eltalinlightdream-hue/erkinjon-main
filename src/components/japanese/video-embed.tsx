import { cn } from "@/lib/utils";

type VideoEmbedProps = {
  /** The YouTube video id, e.g. "6p9Il_j0zjc". */
  youtubeId: string;
  /** Human-readable title used as the iframe's accessible name. */
  title: string;
  /** Optional extra classes for the outer wrapper (e.g. to widen the cap). */
  className?: string;
};

/**
 * A responsive 16:9 YouTube embed that plays inline on the page.
 *
 * Capped at the site's normal content width, lazy-loaded, and given a real
 * title attribute for accessibility. No autoplay — the viewer presses play.
 */
export function VideoEmbed({ youtubeId, title, className }: VideoEmbedProps) {
  return (
    <div className={cn("mx-auto w-full max-w-3xl", className)}>
      <div className="relative aspect-video overflow-hidden rounded-2xl border border-border bg-black shadow-card">
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube.com/embed/${youtubeId}`}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}
