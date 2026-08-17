import { Button } from "@/components/ui/Button";

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
        <Button href="/" variant="primary">
          Return home
        </Button>
        <Button href="/the-true-gospel-and-the-false" variant="ghost">
          Read the gospel
        </Button>
      </div>
    </section>
  );
}
