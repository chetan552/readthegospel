import type { Metadata } from "next";
import { newTestament, oldTestament } from "@/lib/teachings";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Through the Bible",
  description:
    "70 one-hour audio expositions by Zac Poonen on the distinctive message of each book of the Bible, from Genesis to Revelation.",
  alternates: { canonical: "/through-the-bible" },
};

export default function Page() {
  return (
    <>
      <PageHeader
        kicker="Step 06 — The whole book"
        title="Through the Bible"
        lede="70 one-hour expositions that bring out the distinctive message of each book of the Bible, by Zac Poonen. To listen to a message, click on the Bible book."
      />

      <section className="section">
        <div className="wrap split">
          <div className="panel essay">
            <h2>Old Testament</h2>
            <div className="teaching-list">
              {oldTestament.map((teaching) => (
                <a
                  key={teaching.n}
                  className="teaching"
                  href={teaching.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <b>{String(teaching.n).padStart(2, "0")}</b>
                  <span>{teaching.title}</span>
                  {teaching.duration ? <em>{teaching.duration}</em> : null}
                </a>
              ))}
            </div>
          </div>
          <div className="panel essay">
            <h2>New Testament</h2>
            <div className="teaching-list">
              {newTestament.map((teaching) => (
                <a
                  key={teaching.n}
                  className="teaching"
                  href={teaching.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <b>{String(teaching.n).padStart(2, "0")}</b>
                  <span>{teaching.title}</span>
                  {teaching.duration ? <em>{teaching.duration}</em> : null}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
