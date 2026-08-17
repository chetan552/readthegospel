import type { Metadata } from "next";
import { newTestament, oldTestament } from "@/lib/teachings";

export const metadata: Metadata = {
  title: "Through the Bible",
  description:
    "70 one-hour audio expositions by Zac Poonen that bring out the distinctive message of each book of Scripture, from Genesis to Revelation.",
};

export default function Page() {
  return (
    <>
      <section className="page-intro narrow">
        <p className="kicker">Step 06 — The whole book</p>
        <h1>Through the Bible</h1>
        <p>
          70 one-hour expositions that bring out the distinctive message of each book of
          the Bible, by Zac Poonen. To listen to a message, click on the Bible book.
        </p>
      </section>

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
