# ravishah.dev

Personal site of Ravi Shah, built with [Astro](https://astro.build) and deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`.

## Local development

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs dist/
```

## Publish a new article

1. Add `src/content/writing/<slug>.md`:

   ```md
   ---
   title: "Article title"
   description: "One or two sentences, under 160 characters — used for search snippets and social cards."
   pubDate: "2026-11-01"
   image: "../../assets/writing/<slug>.jpg"   # optional cover; auto-optimised to AVIF/WebP + social JPG
   tags: ["agentic-engineering"]
   repo: "https://github.com/shahravir/<repo>"   # optional companion code
   alsoOn:                                         # fill in after syndicating
     - name: "Medium"
       url: "https://medium.com/@shah.ravir/..."
   ---
   Article body in Markdown.
   ```

2. Put the cover in `src/assets/writing/<slug>.jpg` and body images in `public/images/writing/<slug>/` (WebP).
3. Push to `main`. The site, sitemap, RSS feed and `llms.txt` rebuild automatically, and IndexNow notifies Bing.
4. Then syndicate: Medium → **Import a story** with the ravishah.dev URL (sets the canonical link); DEV → set `canonical_url`; LinkedIn → post a summary linking back.

## Where things live

| What | File |
| --- | --- |
| Bio, profiles, talks, projects, nav | `src/data/site.ts` |
| Pages | `src/pages/` |
| Shared head, nav, footer, SEO tags | `src/layouts/Base.astro` |
| Styles (light/dark tokens, layout, prose) | `src/styles/global.css` |
| Featured/list article components | `src/components/` |
| AI summary / sitemap / RSS | `src/pages/llms.txt.ts`, `sitemap.xml.ts`, `feed.xml.ts` |
