import { fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { ThemeToggle } from "../ThemeToggle";

afterEach(() => {
  document.documentElement.removeAttribute("data-theme");
  localStorage.clear();
});

describe("ThemeToggle", () => {
  it("switches to dark, sets the attribute, and persists the choice", () => {
    render(<ThemeToggle />);
    fireEvent.click(screen.getByRole("button", { name: "Switch to dark reading" }));

    expect(document.documentElement).toHaveAttribute("data-theme", "dark");
    expect(localStorage.getItem("rtg-theme")).toBe("dark");
    expect(
      screen.getByRole("button", { name: "Switch to light reading" })
    ).toBeInTheDocument();
  });

  it("switches back to light when already dark", () => {
    document.documentElement.setAttribute("data-theme", "dark");
    render(<ThemeToggle />);

    fireEvent.click(screen.getByRole("button", { name: "Switch to light reading" }));

    expect(document.documentElement).toHaveAttribute("data-theme", "light");
    expect(localStorage.getItem("rtg-theme")).toBe("light");
  });
});
