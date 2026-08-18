import Image from "next/image";

// The hero artwork: a full-bleed illustration of a man's journey to truth and
// salvation, in the manner of Pilgrim's Progress. Decorative — the heading
// carries the meaning, so it is hidden from assistive tech.
export function HomeArtwork() {
  return (
    <div className="hero-art" aria-hidden="true">
      <Image
        src="/pilgrims-journey.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="hero-art-img"
      />
      <div className="hero-art-fade" />
    </div>
  );
}
