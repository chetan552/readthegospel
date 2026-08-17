import type { Metadata } from "next";
import Link from "next/link";
import { readingPath } from "@/lib/articles";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: { absolute: `${site.name} — The True Gospel of Jesus Christ` },
  description: site.seoDescription,
  alternates: { canonical: "/" },
};

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  url: site.url,
  description: site.seoDescription,
  inLanguage: "en",
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
      <section className="hero">
        <p className="kicker">{site.name}</p>
        <h1 className="verse">{site.tagline}</h1>
        <div className="ornament">~</div>
        <p className="cite">{site.citation}</p>
        <div className="hero-actions">
          <Button href="/the-true-gospel-and-the-false" variant="primary">
            Begin reading
          </Button>
          <Button href="/the-gospel-message" variant="ghost">
            What must I do to be saved?
          </Button>
        </div>
      </section>

      <section className="section">
        <div className="narrow panel essay">
          <p className="lede">
            There are many “gospel” messages being circulated today. I want to tell you the
            TRUE gospel message.
          </p>
          <p>
            In some circles one would believe that if we simply say “I accept Jesus into my
            heart,” we are saved. This is “not the gospel.” They do not teach the whole
            gospel. And it is critical to know the difference because many people who believe
            they are saved are not. They have been given a false gospel and are still on
            their way to hell.
          </p>
          <p>
            When presenting the “gospel” message some leave out the cross and resurrection
            completely. They don’t tell us we are sinners and we need a Savior. They don’t
            tell us we will either spend eternity in Heaven or hell and our destiny depends
            on what we believe about Jesus. They don’t tell us that now is the time to make
            that decision and after we die it will be too late.
          </p>
          <p>
            The gospel is sometimes presented as something we do, like going forward in
            church, or having some kind of emotional experience, so we can find peace,
            happiness, wealth, and good health. The emphasis is not on the fact of how we
            are all dreadful sinners and in desperate need of a Savior. There is no talk of
            repentance which is clearly taught in the scripture by Jesus Himself. And they
            hardly ever tell us there is a cost to following Christ.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="kicker">A path through the gospel</p>
              <h2>Read these four pages, in order.</h2>
          
            </div>
          </div>
          <div className="path-grid">
            {readingPath.map((article) => (
              <Link key={article.slug} href={`/${article.slug}`} className="panel path-card">
                <span className="num">{article.kicker}</span>
                <h3>{article.title}</h3>
                <p>{article.summary}</p>
                <span className="meta">{article.minutes} minutes</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap two-up">
          <Link href="/basic-christian-teachings" className="panel path-card">
            <span className="num">Then grow</span>
            <h3>Basic Christian Teachings</h3>
            <p>
              72 short messages by Zac Poonen, starting from ground zero: repentance, faith,
              the Word, the Holy Spirit, and a holy life.
            </p>
            <span className="meta">About 15 minutes each</span>
          </Link>
          <Link href="/through-the-bible" className="panel path-card">
            <span className="num">Then the whole book</span>
            <h3>Through the Bible</h3>
            <p>
              70 one-hour expositions that bring out the distinctive message of each book of
              Scripture.
            </p>
            <span className="meta">Old and New Testament</span>
          </Link>
        </div>
      </section>
    </>
  );
}
