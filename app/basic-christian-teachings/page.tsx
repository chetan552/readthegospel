import type { Metadata } from "next";
import { basicTeachings } from "@/lib/teachings";

export const metadata: Metadata = {
  title: "Basic Christian Teachings",
  description:
    "72 short audio messages by Zac Poonen on foundational Christian truths — repentance, faith, the Word, the Holy Spirit, and a holy life.",
};

export default function Page() {
  return (
    <>
      <section className="page-intro narrow">
        <p className="kicker">Step 05 — Grow</p>
        <h1>Basic Christian Teachings</h1>
        <p>
          72 short messages by Zac Poonen, starting from ground zero: repentance, faith,
          the Word, the Holy Spirit, and a holy life. Each message is about 15 minutes
          long. To listen, click on a title.
        </p>
      </section>

      <section className="section">
        <div className="narrow panel essay">
          <div className="teaching-list">
            {basicTeachings.map((teaching) => (
              <a
                key={teaching.n}
                className="teaching"
                href={teaching.href}
                target="_blank"
                rel="noreferrer"
              >
                <b>{String(teaching.n).padStart(2, "0")}</b>
                <span>{teaching.title}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
