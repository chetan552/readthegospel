import type { Metadata } from "next";
import Link from "next/link";
import { readingPath } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Teachings",
  description:
    "The gospel in four steps, 72 basic Christian teachings, and 70 expositions through the whole Bible — all by Zac Poonen.",
};

export default function Page() {
  return (
    <>
      <section className="page-intro narrow">
        <p className="kicker">Teachings</p>
        <h1>A path from the gospel to the whole Bible</h1>
        <p>
          Everything on this site is arranged as a path: first the gospel itself, then the
          foundations of the Christian life, then the distinctive message of every book of
          Scripture.
        </p>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="path-grid">
            {readingPath.map((article) => (
              <Link key={article.slug} href={`/${article.slug}`} className="panel path-card">
                <span className="num">{article.kicker}</span>
                <h3>{article.title}</h3>
                <p>{article.summary}</p>
                <span className="meta">{article.minutes} minutes</span>
              </Link>
            ))}
            <Link href="/basic-christian-teachings" className="panel path-card">
              <span className="num">Then grow</span>
              <h3>Basic Christian Teachings</h3>
              <p>
                72 short messages starting from ground zero: repentance, faith, the Word,
                the Holy Spirit, and a holy life.
              </p>
              <span className="meta">About 15 minutes each</span>
            </Link>
            <Link href="/through-the-bible" className="panel path-card">
              <span className="num">Then the whole book</span>
              <h3>Through the Bible</h3>
              <p>
                70 one-hour expositions that bring out the distinctive message of each book
                of Scripture.
              </p>
              <span className="meta">Old and New Testament</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
