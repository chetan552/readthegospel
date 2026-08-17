import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { Header } from "../Header";

const pathnameState = vi.hoisted(() => ({ value: "/" }));

vi.mock("next/navigation", () => ({
  usePathname: () => pathnameState.value,
}));

vi.mock("next/link", () => ({
  default: ({ href, className, children, ...props }: any) => (
    <a href={href} className={className} {...props}>
      {children}
    </a>
  ),
}));

describe("Header", () => {
  beforeEach(() => {
    pathnameState.value = "/";
  });

  it("marks the active navigation item with aria-current", () => {
    render(<Header />);
    expect(screen.getByRole("link", { name: "Home" })).toHaveAttribute(
      "aria-current",
      "page"
    );
    expect(screen.getByRole("link", { name: "Teachings" })).not.toHaveAttribute(
      "aria-current"
    );
  });

  it("opens the external contact link in a new tab", () => {
    render(<Header />);
    const contact = screen.getByRole("link", { name: "Contact" });
    expect(contact).toHaveAttribute("href", "https://cfcindia.com/locate-us");
    expect(contact).toHaveAttribute("target", "_blank");
    expect(contact).toHaveAttribute("rel", "noreferrer");
  });

  it("toggles the mobile menu with correct aria state", () => {
    render(<Header />);
    const button = screen.getByRole("button", { name: "Open menu" });
    expect(button).toHaveAttribute("aria-expanded", "false");
    expect(button).toHaveAttribute("aria-controls", "mobile-nav");

    fireEvent.click(button);
    expect(button).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByRole("button", { name: "Close menu" })).toBeInTheDocument();
    expect(screen.getByRole("navigation", { name: "Mobile" })).toBeInTheDocument();
  });

  it("closes the mobile menu when the route changes", () => {
    const { rerender } = render(<Header />);
    fireEvent.click(screen.getByRole("button", { name: "Open menu" }));
    expect(screen.getByRole("navigation", { name: "Mobile" })).toBeInTheDocument();

    pathnameState.value = "/teachings";
    rerender(<Header />);

    expect(screen.queryByRole("navigation", { name: "Mobile" })).not.toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Open menu" })).toHaveAttribute(
      "aria-expanded",
      "false"
    );
  });
});
