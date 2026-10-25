import type { APIRoute } from "astro";
import { BIO, PERSON, SITE_URL } from "../data/site";
import { getArticles } from "../data/writing";

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export const GET: APIRoute = async () => {
  const articles = await getArticles();
  const items = articles
    .map((a) => {
      const url = `${SITE_URL}/writing/${a.id}/`;
      return `    <item>
      <title>${esc(a.data.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${a.data.pubDate.toUTCString()}</pubDate>
      <description>${esc(a.data.description)}</description>
      <dc:creator>${PERSON.name}</dc:creator>
${a.data.tags.map((t) => `      <category>${esc(t)}</category>`).join("\n")}
    </item>`;
    })
    .join("\n");

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>${PERSON.name} — Writing</title>
    <link>${SITE_URL}/writing/</link>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />
    <description>${esc(BIO.short)}</description>
    <language>en-gb</language>
    <lastBuildDate>${(articles[0]?.data.pubDate ?? new Date()).toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>
`;
  return new Response(body, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
};
