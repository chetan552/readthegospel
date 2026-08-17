import Link from "next/link";
import type { ReactNode } from "react";
import type { Article } from "@/lib/articles";
import { author } from "@/lib/site";
import { ReadingProgress } from "./ReadingProgress";

export function ArticleLayout({
  article,
  children,
}: {
  article: Article;
  children: ReactNode;
}) {
  return (
    <>
      <ReadingProgress />
      <article data-article>
        <header className="article-hero narrow">
          <p className="kicker">{article.kicker}</p>
          <h1>{article.title}</h1>
          <div className="article-meta">
            <span>By Zac Poonen</span>
            <span>{article.minutes} min read</span>
          </div>
          {article.video || article.audio ? (
            <div className="media-row">
              {article.video ? (
                <a className="btn btn-primary" href={article.video.href} target="_blank" rel="noreferrer">
                  {article.video.label}
                </a>
              ) : null}
              {article.audio ? (
                <a className="btn btn-ghost" href={article.audio.href} target="_blank" rel="noreferrer">
                  {article.audio.label}
                </a>
              ) : null}
            </div>
          ) : null}
          {article.languages?.length ? (
            <details className="languages">
              <summary>Read this in {article.languages.length} other languages</summary>
              <div className="lang-list">
                {article.languages.map((language) => (
                  <a key={language.href} href={language.href} target="_blank" rel="noreferrer">
                    {language.label}
                  </a>
                ))}
              </div>
            </details>
          ) : null}
        </header>
        <div className="section">
          <div className="narrow panel essay">
            <div className="prose dropcap">{children}</div>
            <aside className="author">
              <div className="author-mark" aria-hidden="true">
                ZP
              </div>
              <div>
                <strong>{author.name}</strong>
                <p>{author.blurb}</p>
                <p>
                  More information:{" "}
                  <a href={author.more.href} target="_blank" rel="noreferrer">
                    {author.more.label}
                  </a>
                  .
                </p>
              </div>
            </aside>
          </div>
          {article.next ? (
            <div className="narrow">
              <Link className="panel next-step" href={article.next.href}>
                <div>
                  <span>Next step</span>
                  <strong>{article.next.label}</strong>
                </div>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          ) : null}
        </div>
      </article>
    </>
  );
}
