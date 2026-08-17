import type { Metadata } from "next";
import Link from "next/link";
import { author, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: site.description,
};

export default function Page() {
  return (
    <>
      <section className="page-intro narrow">
        <p className="kicker">About</p>
        <h1>A quiet place to read the true gospel</h1>
        <p>{site.description}</p>
      </section>

      <section className="section">
        <div className="narrow panel essay">
          <h2>Why this site exists</h2>
          <p>
            Many “gospel” messages circulate today. Some leave out the cross and the
            resurrection. Some never mention sin, repentance, or judgment. Some promise
            peace, wealth, and health to anyone who will say the right words — and leave
            people convinced they are saved when they are not.
          </p>
          <p>
            This site gathers the true gospel in one quiet place: four articles that lay
            the foundation, then two series of teachings for those who want to go on —
            first the basics of the Christian life, and then the distinctive message of
            every book of the Bible.
          </p>
          <p>
            Start with{" "}
            <Link href="/the-true-gospel-and-the-false">The True Gospel and the False</Link>,
            and read the four articles in order.
          </p>

          <h2>The author</h2>
          <p>{author.blurb}</p>
          <p>
            All articles and teachings on this site are by Zac Poonen and are shared so
            that people may read the true gospel of Jesus Christ. More information:{" "}
            <a href={author.more.href} target="_blank" rel="noreferrer">
              {author.more.label}
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
