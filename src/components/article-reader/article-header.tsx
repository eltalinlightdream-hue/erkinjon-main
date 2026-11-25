import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import type { Article } from "@/lib/articles-data";
import { DIFFICULTY_STYLES } from "@/lib/articles-data";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const FALLBACK_COVER =
  "https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=1600&q=80";

type Props = {
  article: Article;
  wordCount: number;
  keyWordCount: number;
};

/** Magazine-style title block: kicker, display headline, dek, byline. */
export function ArticleHeader({ article, wordCount, keyWordCount }: Props) {
  const date = new Date(article.date).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const kicker = [article.topic, article.source].filter(Boolean).join(" — ");
  const byline = [
    article.author ? `By ${article.author}` : null,
    date,
    `${article.readingTime} min read`,
    `${wordCount.toLocaleString()} words`,
    keyWordCount > 0 ? `${keyWordCount} key words` : null,
  ].filter(Boolean);

  return (
    <header className="relative">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl pt-8 md:pt-14">
        <Link
          to="/articles"
          className="font-mono text-[11px] tracking-[0.16em] uppercase text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> All articles
        </Link>

        <div className="mt-8 md:mt-10 max-w-4xl">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="font-mono text-[11px] tracking-[0.16em] uppercase text-[var(--olive)]">
              {kicker}
            </span>
            <Badge
              variant="outline"
              className={cn(DIFFICULTY_STYLES[article.difficulty], "font-mono")}
            >
              {article.difficulty}
            </Badge>
          </div>

          <h1 className="font-serif font-extrabold tracking-[-0.02em] leading-[1.02] text-[2.4rem] sm:text-5xl md:text-[4.25rem] mt-4 text-balance">
            {article.title}
          </h1>

          <p className="font-serif italic text-xl md:text-2xl leading-snug text-muted-foreground mt-5 max-w-3xl text-pretty">
            {article.description}
          </p>

          <p className="font-mono text-[10.5px] tracking-[0.12em] uppercase text-muted-foreground mt-7 pb-6 border-b border-border flex flex-wrap gap-x-3 gap-y-1">
            {byline.map((item, i) => (
              <span key={item} className="inline-flex items-center gap-3">
                {i > 0 && <span aria-hidden>·</span>}
                {item}
              </span>
            ))}
          </p>
        </div>
      </div>

      <figure className="container mx-auto px-4 sm:px-6 max-w-5xl mt-8">
        <img
          src={article.coverImage || FALLBACK_COVER}
          alt=""
          width={1600}
          height={686}
          fetchPriority="high"
          className="w-full aspect-[16/9] md:aspect-[21/9] object-cover rounded-2xl md:rounded-3xl shadow-[0_24px_60px_-28px_rgba(40,30,20,0.45)]"
        />
      </figure>
    </header>
  );
}
