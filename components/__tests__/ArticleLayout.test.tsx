import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { ArticleLayout } from "../ArticleLayout";
import { getArticle } from "@/lib/articles";

vi.mock("next/link", () => ({
  default: ({ href, className, children }: any) => (
    <a href={href} className={className}>
      {children}
    </a>
  ),
}));

describe("ArticleLayout", () => {
  it("renders the first article with its breadcrumb, title, content, and next step", () => {
    const article = getArticle("the-true-gospel-and-the-false")!;
    render(
      <ArticleLayout article={article}>
        <p>Article body paragraph.</p>
      </ArticleLayout>
    );

    expect(screen.getByRole("navigation", { name: "Breadcrumb" })).toBeInTheDocument();
    expect(screen.getByText("Step 1 of 4")).toBeInTheDocument();
    expect(screen.getByText("The gospel path")).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { level: 1, name: "The True Gospel and the False" })
    ).toBeInTheDocument();
    expect(screen.getByText("By Zac Poonen")).toBeInTheDocument();
    expect(screen.getByText("Article body paragraph.")).toBeInTheDocument();

    // Desktop next-step card + mobile bottom action bar, both driven by article.next
    const nextLinks = screen.getAllByRole("link", { name: /The Gospel Message/ });
    expect(nextLinks.length).toBeGreaterThanOrEqual(2);
    expect(
      screen.getByRole("region", { name: "Continue reading" })
    ).toBeInTheDocument();
  });

  it("shows the last step number for the final article", () => {
    const article = getArticle("the-video-tape-of-our-memory")!;
    render(
      <ArticleLayout article={article}>
        <p>Body.</p>
      </ArticleLayout>
    );
    expect(screen.getByText("Step 4 of 4")).toBeInTheDocument();
  });

  it("renders no next step or bottom bar when the article has none", () => {
    const article = { ...getArticle("the-true-gospel-and-the-false")!, next: undefined };
    render(
      <ArticleLayout article={article}>
        <p>Body.</p>
      </ArticleLayout>
    );

    expect(screen.queryByRole("link", { name: /The Gospel Message/ })).not.toBeInTheDocument();
    expect(screen.queryByRole("region", { name: "Continue reading" })).not.toBeInTheDocument();
  });
});
