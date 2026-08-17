import Link from "next/link";
import { readingPath } from "@/lib/articles";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <img
            className="logo-img footer-logo"
            src="/readthegospel-logo.gif"
            alt={site.name}
            width={138}
            height={46}
          />
          <p>
            {site.tagline} <em>{site.citation}</em>
          </p>
        </div>
        <div>
          <h3>Read</h3>
          <ul>
            {readingPath.map((article) => (
              <li key={article.slug}>
                <Link href={`/${article.slug}`}>{article.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>More</h3>
          <ul>
            <li>
              <Link href="/basic-christian-teachings">Basic Christian Teachings</Link>
            </li>
            <li>
              <Link href="/through-the-bible">Through the Bible</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <a href="https://cfcindia.com/locate-us" target="_blank" rel="noreferrer">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="wrap copyright">
        Teachings by Zac Poonen, shared so that people may read the true gospel of Jesus
        Christ.
      </div>
    </footer>
  );
}
