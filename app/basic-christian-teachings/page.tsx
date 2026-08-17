import type { Metadata } from "next";
import { basicTeachings } from "@/lib/teachings";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Basic Christian Teachings",
  description:
    "72 short audio messages by Zac Poonen on the foundations of the Christian life: repentance, faith, God’s Word, the Holy Spirit, and a holy life.",
  alternates: { canonical: "/basic-christian-teachings" },
};

export default function Page() {
  return (
    <>
      <PageHeader
        kicker="Step 05 — Grow"
        title="Basic Christian Teachings"
        lede="72 short messages by Zac Poonen, starting from ground zero: repentance, faith, the Word, the Holy Spirit, and a holy life. Each message is about 15 minutes long. To listen, click on a title."
      />

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
