import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { ArticleReader } from "@/components/article-reader/article-reader";
import type { ReaderMode } from "@/components/article-reader/reader-toolbar";
import { findArticle, ARTICLES } from "@/lib/articles-data";

type ArticleSearch = { mode?: "study" };

export const Route = createFileRoute("/articles_/$slug")({
  validateSearch: (search: Record<string, unknown>): ArticleSearch =>
    search.mode === "study" ? { mode: "study" } : {},
  head: ({ params }) => {
    const a = findArticle(params.slug);
    return {
      meta: [
        { title: a ? `${a.title} — Abduraimov Erkinjon` : "Article not found" },
        { name: "description", content: a?.description ?? "Article" },
        { property: "og:title", content: a?.title ?? "Article" },
        { property: "og:description", content: a?.description ?? "" },
        ...(a?.coverImage ? [{ property: "og:image", content: a.coverImage }] : []),
      ],
    };
  },
  component: ArticleView,
});

function ArticleView() {
  const { slug } = Route.useParams();
  const { mode } = Route.useSearch();
  const navigate = Route.useNavigate();
  const article = findArticle(slug);

  if (!article) {
    return (
      <SiteLayout>
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-3xl font-bold mb-4">Article not found</h1>
          <Link
            to="/articles"
            className="font-mono text-xs tracking-wider text-secondary hover:underline"
          >
            ← Back to articles
          </Link>
        </div>
      </SiteLayout>
    );
  }

  const handleModeChange = (next: ReaderMode) => {
    void navigate({
      search: next === "study" ? { mode: "study" } : {},
      replace: true,
      resetScroll: false,
    });
  };

  return (
    <SiteLayout>
      <ArticleReader
        key={slug}
        article={article}
        mode={mode ?? "read"}
        onModeChange={handleModeChange}
      />
    </SiteLayout>
  );
}

export const _allSlugs = ARTICLES.map((a) => a.slug);
