import { Button } from "./Button";

/**
 * Persistent mobile action bar for the reading flow.
 * Rendered server-side; visible only under 860px, so there is
 * no layout shift at runtime.
 */
export function BottomActionBar({ next }: { next: { href: string; label: string } }) {
  return (
    <div className="bottom-bar" role="region" aria-label="Continue reading">
      <div className="bottom-bar-inner">
        <span className="bottom-bar-eyebrow">Next step</span>
        <Button href={next.href} variant="primary">
          {next.label}
        </Button>
      </div>
    </div>
  );
}
