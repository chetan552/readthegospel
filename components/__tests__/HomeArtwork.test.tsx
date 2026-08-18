import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { HomeArtwork } from "../HomeArtwork";

describe("HomeArtwork", () => {
  it("renders the full-bleed artwork image hidden from assistive tech", () => {
    const { container } = render(<HomeArtwork />);
    const art = container.querySelector(".hero-art");
    expect(art).toHaveAttribute("aria-hidden", "true");
    expect(art?.querySelector("img")).toBeInTheDocument();
  });
});
