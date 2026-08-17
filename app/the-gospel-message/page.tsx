import type { Metadata } from "next";
import { ArticleLayout } from "@/components/ArticleLayout";
import { getArticle } from "@/lib/articles";

const article = getArticle("the-gospel-message")!;

export const metadata: Metadata = {
  title: article.title,
  description: article.summary,
};

export default function Page() {
  return (
    <ArticleLayout article={article}>
      <p>
        Repentance is the first step to the new birth. But to repent, we must first know
        what sin is — and sin is the very thing that much of today’s preaching never
        mentions. God has joined repentance and faith together, but most Christian
        preachers have separated them. Believing in Jesus alone will not save anyone who
        does not repent.
      </p>

      <h2>The foundation comes first</h2>
      <p>
        Living a good life is the superstructure of Christianity. The new birth is the
        foundation. Jesus told Nicodemus — a religious, upright, respected man — “Unless
        one is born again he cannot see the kingdom of God” (John 3:3). Being born again is
        not optional, even for the best of men.
      </p>

      <h2>Repentance and faith together</h2>
      <p>
        Paul preached “repentance toward God and faith in the Lord Jesus Christ” (Acts
        20:21). A child is born only when a mother and a father come together; in the same
        way, a spiritual child is born when repentance and faith come together. And like a
        physical birth, the new birth happens in a moment — it is not a gradual process.
      </p>

      <h2>What is sin?</h2>
      <p>
        Sin is like a vast country: when we first set foot in it, we see only a little of
        it. The conscience is a voice that God has placed within us. If we ignore it, it
        hardens — like the soles of an adult’s feet — and a hardened conscience leads to
        spiritual blindness. More than ninety percent of people follow the religion their
        parents chose for them. But God does not look at us as members of a religion. He
        sees every one of us simply as a sinner. Jesus came to save sinners — not to bless
        the members of any religion.
      </p>

      <h2>Jesus — the only way</h2>
      <p>
        All truth is narrow-minded. Two plus two is four. H₂O is water. There is no other
        answer. In the same way, Jesus said, “I am the way, and the truth, and the life; no
        one comes to the Father but through Me” (John 14:6). Either He is the only way to
        God, or He is a deceiver. He could not have been merely a good man. He is God in
        human form.
      </p>

      <h2>The Judge stepped down</h2>
      <p>
        A good father can overlook a broken cup. But a judge must punish a crime. God is a
        righteous Judge, and He cannot simply overlook our sins. As a Judge He declared
        that we must all die for our sins. Then He came down as a Man and took that
        punishment Himself — on the cross.
      </p>
      <p>
        God exists as Three Persons — the Father, the Son and the Holy Spirit — and this is
        why the Son could take our punishment while the Father remained the Judge. If Jesus
        were merely a created being, He could not possibly have taken the punishment for
        the billions of human beings who have sinned. An eternal punishment was borne
        within three hours. Hell is the only God-forsaken place in the universe, and on the
        cross Jesus experienced that forsakenness — separated from His Father — so that we
        might never have to.
      </p>

      <h2>He rose from the dead</h2>
      <p>
        The foundation of Christianity is this: Christ died for our sins and rose again
        from the dead. No religious leader in history has ever risen from the dead. Jesus
        is unique. After His ascension, He sent the Holy Spirit — the third Person of the
        Godhead — to live within every believer, making the believer’s body the house of
        God and giving us power to live in victory over sin.
      </p>

      <h2>How to be born again</h2>
      <ol>
        <li>
          <strong>Acknowledge that you are a sinner.</strong> Do not compare yourself with
          anyone else — in God’s sight you are no better than the worst sinner in the
          world.
        </li>
        <li>
          <strong>Decide to turn from all known sin.</strong> This is repentance.
        </li>
        <li>
          <strong>Commit yourself to Christ</strong> — not merely believe facts about Him.
          The word “Christian” is like the title “Mrs. Christ”: it is a marriage-like
          commitment, made once, for life.
        </li>
        <li>
          <strong>Be baptized in water.</strong> Baptism is like a marriage certificate —
          it comes after the commitment and it confirms it; it is not a substitute for it.
        </li>
      </ol>
      <p>
        And after the new birth: read the Bible daily, be filled with the Holy Spirit, and
        meet with other born-again believers. The Christian life is a marathon, not a
        sprint — it is a lifelong commitment to Christ.
      </p>

      <h2>A prayer you can pray</h2>
      <blockquote className="prompt-panel">
        Lord Jesus, I believe that You are the Son of God. I confess that I am a sinner. I
        turn from my sins and I ask You to forgive me, for Your sake. Come into my life
        now, blot out the record of my past, and make me a child of God.
      </blockquote>
      <p>
        If you prayed that sincerely, God has heard you. “As many as received Him, to them
        He gave the right to become children of God” (John 1:12). And Jesus said, “I will
        never reject anyone who comes to Me” (John 6:37).
      </p>
      <p>
        Start today. Read His Word daily, ask Him to fill you with His Holy Spirit, and
        find a church that teaches His Word.
      </p>
    </ArticleLayout>
  );
}
