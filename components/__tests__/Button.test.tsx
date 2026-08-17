import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Button } from "../ui/Button";

vi.mock("next/link", () => ({
  default: ({ href, className, children }: any) => (
    <a href={href} className={className}>
      {children}
    </a>
  ),
}));

describe("Button", () => {
  it("renders an internal href as a plain link", () => {
    render(<Button href="/about">About</Button>);
    const link = screen.getByRole("link", { name: "About" });
    expect(link).toHaveAttribute("href", "/about");
    expect(link).not.toHaveAttribute("target");
    expect(link).toHaveClass("btn", "btn-primary");
  });

  it("renders an external href as an anchor opening in a new tab", () => {
    render(<Button href="https://cfcindia.com/locate-us">Contact</Button>);
    const link = screen.getByRole("link", { name: "Contact" });
    expect(link).toHaveAttribute("href", "https://cfcindia.com/locate-us");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noreferrer");
  });

  it("applies the ghost variant class", () => {
    render(
      <Button href="/the-gospel-message" variant="ghost">
        What must I do to be saved?
      </Button>
    );
    expect(screen.getByRole("link", { name: "What must I do to be saved?" })).toHaveClass(
      "btn-ghost"
    );
  });

  it("renders a button element when no href is given", () => {
    render(<Button>Click</Button>);
    const button = screen.getByRole("button", { name: "Click" });
    expect(button).toHaveAttribute("type", "button");
  });
});
