import { getCollection, type CollectionEntry } from "astro:content";

export type Article = CollectionEntry<"writing">;

export async function getArticles(): Promise<Article[]> {
  const all = await getCollection("writing");
  return all.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export function readingMinutes(article: Article): number {
  const words = (article.body ?? "").split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 230));
}

export function formatDate(date: Date, style: "long" | "short" = "long"): string {
  return date.toLocaleDateString("en-GB", style === "long" ? { day: "numeric", month: "long", year: "numeric" } : { month: "short", year: "numeric" });
}
