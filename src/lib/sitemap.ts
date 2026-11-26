// Build-time only: imported by vite.config.ts to write public/sitemap.xml.
// Keep it out of app code so the article data is not bundled for every page.
import { ARTICLES } from "./articles-data";
import { canonicalUrl } from "./seo";

/**
 * Public pages that search engines should index. Private pages (account,
 * admin, auth, reset-password) are left out on purpose and blocked in
 * public/robots.txt. Writing samples carry their own noindex tag.
 */
const PUBLIC_PATHS = [
  "/",
  "/reading",
  "/writing",
  "/listening",
  "/speaking",
  "/speaking/practice",
  "/speaking/practice/general",
  "/speaking/practice/mock",
  "/speaking/pronunciation",
  "/speaking/tips-chunks",
  "/speaking/topics-explained",
  "/speaking/written-samples",
  "/vocabulary",
  "/articles",
  "/books",
  "/videos",
  "/practice",
  "/contact-about",
  "/japanese",
  "/japanese/alphabet",
  "/japanese/grammar",
  "/japanese/topics",
] as const;

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

/** Builds sitemap.xml from the public pages plus every article. */
export function buildSitemapXml(): string {
  const paths = [
    ...PUBLIC_PATHS,
    ...ARTICLES.map((article) => `/articles/${encodeURIComponent(article.slug)}`),
  ];
  const urls = paths
    .map((path) => `  <url><loc>${escapeXml(canonicalUrl(path))}</loc></url>`)
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}
