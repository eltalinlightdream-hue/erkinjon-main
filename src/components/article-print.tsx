import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import type { Article } from "@/lib/articles-data";

/**
 * Hidden, print-only rendering of an article + its vocabulary and pronunciation.
 *
 * On screen this renders nothing visible (`.article-print-root` is `display:none`).
 * When the browser print dialog runs (triggered by the "Download PDF" button ->
 * `window.print()`), the print stylesheet in `styles.css` hides the rest of the
 * app and reveals only this document, so "Save as PDF" produces a clean, single
 * self-contained document containing the article, vocabulary and pronunciation —
 * regardless of which tab is active on screen.
 *
 * It is portalled to `document.body` so the print CSS can isolate it with a
 * simple `body > *:not(.article-print-root)` rule instead of unwinding the app
 * tree. Rendered only after mount to stay SSR-safe.
 */
export function ArticlePrint({ article }: { article: Article }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const dateLabel = new Date(article.date).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return createPortal(
    <div className="article-print-root" aria-hidden="true">
      <header className="ap-header">
        <p className="ap-eyebrow">
          {article.topic} · {article.difficulty} · {article.readingTime} min read
        </p>
        <h1 className="ap-title">{article.title}</h1>
        <p className="ap-desc">{article.description}</p>
        <p className="ap-meta">{dateLabel} · Abduraimov Erkinjon</p>
      </header>

      {/* article.content is trusted, static, first-party HTML from
          src/lib/articles-data.ts — not user input. */}
      <section
        className="ap-body"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />

      {article.vocabulary.length > 0 && (
        <section className="ap-section">
          <h2 className="ap-section-title">Vocabulary ({article.vocabulary.length})</h2>
          <ul className="ap-list">
            {article.vocabulary.map((v) => (
              <li key={v.word} className="ap-vocab-item">
                <p className="ap-vocab-head">
                  <span className="ap-word">{v.word}</span>
                  {v.wordType && <span className="ap-tag">{v.wordType}</span>}
                </p>
                <p className="ap-def">{v.definition}</p>
                {v.example && <p className="ap-example">“{v.example}”</p>}
              </li>
            ))}
          </ul>
        </section>
      )}

      {article.pronunciation.length > 0 && (
        <section className="ap-section">
          <h2 className="ap-section-title">
            Pronunciation ({article.pronunciation.length})
          </h2>
          <ul className="ap-list">
            {article.pronunciation.map((p) => (
              <li key={p.word} className="ap-vocab-item">
                <p className="ap-vocab-head">
                  <span className="ap-word">{p.word}</span>
                  <span className="ap-ipa">{p.ipa}</span>
                </p>
                <p className="ap-def">
                  Syllables: <strong>{p.syllables}</strong>
                </p>
                <p className="ap-example">💡 {p.tip}</p>
              </li>
            ))}
          </ul>
        </section>
      )}

      <footer className="ap-footer">
        Downloaded from Abduraimov Erkinjon · {article.title}
      </footer>
    </div>,
    document.body,
  );
}
