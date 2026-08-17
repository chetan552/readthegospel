import type { MetadataRoute } from "next";
import { readingPath } from "@/lib/articles";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/",
    "/teachings",
    "/about",
    "/basic-christian-teachings",
    "/through-the-bible",
    ...readingPath.map((article) => `/${article.slug}`),
  ];

  return routes.map((route) => ({
    url: `${site.url}${route}`,
  }));
}
