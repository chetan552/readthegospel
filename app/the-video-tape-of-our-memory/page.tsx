import type { Metadata } from "next";
import { ArticleLayout } from "@/components/ArticleLayout";
import { getArticle } from "@/lib/articles";

const article = getArticle("the-video-tape-of-our-memory")!;

export const metadata: Metadata = {
  title: article.title,
  description:
    "A coming day of judgment when every life is replayed. What the Bible says about judgment day and the one way your sins can be erased and forgiven.",
  alternates: { canonical: `/${article.slug}` },
};

export default function Page() {
  return (
    <ArticleLayout article={article}>
      <p>
        With a video-camera it is now possible to record exactly the scenes and sounds that
        we see and hear around us. When this video-tape is later replayed on a screen, it
        will portray exactly what took place.
      </p>
      <p>
        The Bible says that a day is coming when we will all have to give an account of
        ourselves to God. When we consider all the billions of people who have lived on
        this earth during the many centuries of man’s history, we may wonder how God could
        possibly keep a record of everything that every man did, said and thought, during
        his lifetime. This record is kept by God in each man’s memory.
      </p>
      <p>
        Memory is like a video-tape that faithfully records everything that we do, say and
        think. It also records our inner attitudes and motives. When a person dies,
        although he leaves his body behind on earth, his memory being a part of his soul,
        goes with his soul to the place of dead spirits. When the day of judgment finally
        comes, his soul will again be united to the dust that was once his body on earth
        and he will be raised up in a physical body to stand before God to give an account
        of his entire life on earth. In that day, when each person’s turn comes for
        judgment, all that God will have to do will be to replay the video-tape of that
        person’s own memory on to a screen for the whole world to see. No-one will be able
        to question the accuracy of that display for it will be his own memory replaying
        the record of his life.
      </p>
      <p>
        The outward veneer of decency and religion that people wear today will be stripped
        off and the true inner person will then be exposed. Religion will not save anyone
        in that day, for it will be clearly seen that all have sinned — whatever religion
        they may have been born into or practiced. Good works done, money given to the poor
        or to religious institutions also will not save anyone — for none of these
        religious activities can blot out the record of our sins.
      </p>
      <p>
        There is ONLY ONE WAY by which the record of the evils that we have done, said and
        thought can be permanently blotted out from God’s sight, so that they will not be
        played back by the video, tape in that day of judgment. Our good works cannot blot
        out our evil works. No. Never.
      </p>
      <p>
        A just and righteous punishment has to be meted out for the sins that we have
        committed. The Bible says that there is only one punishment laid down in the Divine
        law for sin — and that is ETERNAL DEATH. This death is what each of us deserve for
        our sins.
      </p>
      <p>
        It was in order to save us from this punishment of eternal death that Jesus Christ,
        the Son of God, came down from Heaven to earth as a man and died on a cross outside
        Jerusalem, about 2000 years ago. There he took the Divine punishment for the sins
        of humanity — for the sins of ALL people of all religions. Three days after He was
        buried in a grave, He came out alive from the dead, proving that He was indeed God
        manifest in human form, and that He could conquer death — man’s greatest enemy.
        Forty days later, while many were watching Him, He ascended up into Heaven,
        promising to return to earth again at the appointed time to judge all men. Over 19
        centuries have passed by since He gave that promise and now the time of His return
        to earth has drawn near. One of these days we shall see Him return in the skies
        from Heaven.
      </p>
      <p>
        Jesus Christ was the ONLY ONE in history to die for the sins of the human race. He
        was also the ONLY ONE to rise again from the dead. In these two matters He is
        unique.
      </p>
      <p>
        Today, our sins can be forgiven and erased from that video-tape, if we sincerely
        turn from our sins and repent of them, asking God to forgive us for Jesus Christ’s
        sake, believing that He died for our sins and rose again from the dead.
      </p>
      <p>
        You can ask the Lord Jesus Christ now to come into your life and blot out the
        record of your past sinful life — however great and many your sins may have been.
        Then you can start life again with a clean record and be a child of God.
      </p>
      <p>
        This is the ONLY WAY of salvation that God has appointed for the human race. Avail
        of it now. Remember that the only other alternative that you have, is to face the
        record of your sins played back by the video-tape of your memory, in the day of
        judgment. Knowing this truth and realising the seriousness of eternal judgment in a
        lake of fire for all sinners, it is our duty to lovingly warn everyone.
      </p>
      <p>
        May you take that right decision today, without further delay, and may God bless
        you with eternal life thereby.
      </p>
      <p>We offer you this message from God, in sincere love.</p>
    </ArticleLayout>
  );
}
