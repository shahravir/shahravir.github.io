import type { APIRoute } from "astro";
import { NOW_UPDATED, SITE_URL } from "../data/site";
import { getArticles } from "../data/writing";

export const GET: APIRoute = async () => {
  const articles = await getArticles();
  const latest = articles[0]?.data.pubDate ?? new Date();
  const day = (d: Date) => d.toISOString().slice(0, 10);

  const urls = [
    { loc: "/", lastmod: day(latest) },
    { loc: "/about/", lastmod: day(latest) },
    { loc: "/writing/", lastmod: day(latest) },
    { loc: "/projects/", lastmod: day(latest) },
    { loc: "/speaking/", lastmod: day(latest) },
    { loc: "/now/", lastmod: NOW_UPDATED },
    ...articles.map((a) => ({ loc: `/writing/${a.id}/`, lastmod: day(a.data.updatedDate ?? a.data.pubDate) })),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${SITE_URL}${u.loc}</loc><lastmod>${u.lastmod}</lastmod></url>`).join("\n")}
</urlset>
`;
  return new Response(body, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
