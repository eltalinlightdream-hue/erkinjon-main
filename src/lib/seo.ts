/** The site's one public address. Every canonical URL and sitemap entry uses it. */
export const SITE_URL = "https://www.abduraimoverkinjon.uz";

/** Absolute canonical URL for a path, without a trailing slash (except the home page). */
export function canonicalUrl(pathname: string): string {
  const path = pathname.replace(/\/+$/, "") || "/";
  return `${SITE_URL}${path}`;
}
