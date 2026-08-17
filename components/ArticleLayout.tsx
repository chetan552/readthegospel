import Link from "next/link";
import type { ReactNode } from "react";
import { readingPath, type Article } from "@/lib/articles";
import { author, site } from "@/lib/site";
import { ReadingProgress } from "./ReadingProgress";
import { BottomActionBar } from "./ui/BottomActionBar";
import { Button } from "./ui/Button";

export function ArticleLayout({
  article,
  children,
}: {
  article: Article;
  children: ReactNode;
}) {
  const stepIndex = readingPath.findIndex((item) => item.slug === article.slug);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
      {
        "@type": "ListItem",
        position: 2,
        name: "The gospel path",
        item: `${site.url}/teachings`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: `${site.url}/${article.slug}`,
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.summary,
    author: { "@type": "Person", name: author.name },
    inLanguage: "en",
    url: `${site.url}/${article.slug}`,
    mainEntityOfPage: `${site.url}/${article.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ReadingProgress />
      <article data-article>
        <header className="article-hero narrow">
          {stepIndex >= 0 ? (
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <ol>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li aria-hidden="true">›</li>
                <li>
                  <Link href="/teachings">The gospel path</Link>
                </li>
                <li aria-hidden="true">›</li>
                <li aria-current="page">
                  Step {stepIndex + 1} of {readingPath.length}
                </li>
              </ol>
            </nav>
          ) : null}
          <p className="kicker">{article.kicker}</p>
          <h1>{article.title}</h1>
          <div className="article-meta">
            <span>By Zac Poonen</span>
            <span>{article.minutes} min read</span>
          </div>
          {article.video || article.audio ? (
            <div className="media-row">
              {article.video ? (
                <Button href={article.video.href} variant="primary">
                  {article.video.label}
                </Button>
              ) : null}
              {article.audio ? (
                <Button href={article.audio.href} variant="ghost">
                  {article.audio.label}
                </Button>
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
      {article.next ? (
        <>
          <div className="bar-spacer" aria-hidden="true" />
          <BottomActionBar next={article.next} />
        </>
      ) : null}
    </>
  );
}
