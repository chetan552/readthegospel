import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  variant?: "primary" | "ghost";
  href?: string;
  className?: string;
  children: ReactNode;
};

/**
 * One call-to-action control for the whole site.
 * Internal href → <Link>, external href → <a target="_blank" rel="noreferrer">,
 * no href → plain <button type="button">.
 */
export function Button({ variant = "primary", href, className = "", children }: ButtonProps) {
  const classes = ["btn", variant === "primary" ? "btn-primary" : "btn-ghost", className]
    .filter(Boolean)
    .join(" ");

  if (href) {
    if (href.startsWith("http")) {
      return (
        <a className={classes} href={href} target="_blank" rel="noreferrer">
          {children}
        </a>
      );
    }
    return (
      <Link className={classes} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} type="button">
      {children}
    </button>
  );
}
