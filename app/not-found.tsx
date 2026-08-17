import Link from "next/link";

export default function NotFound() {
  return (
    <section className="hero">
      <p className="kicker">404</p>
      <h1 className="verse">This page does not exist.</h1>
      <div className="ornament">†</div>
      <p className="quiet">
        But the gospel does — and it is right here.
      </p>
      <div className="hero-actions">
        <Link className="btn btn-primary" href="/">
          Return home
        </Link>
        <Link className="btn btn-ghost" href="/the-true-gospel-and-the-false">
          Read the gospel
        </Link>
      </div>
    </section>
  );
}
