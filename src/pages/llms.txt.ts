// llms.txt (https://llmstxt.org): a plain-markdown summary of the site for AI assistants and crawlers.
import type { APIRoute } from "astro";
import { BIO, PERSON, PROFILES, PROJECTS, SITE_URL, TALKS } from "../data/site";
import { getArticles } from "../data/writing";

export const GET: APIRoute = async () => {
  const articles = await getArticles();
  const body = `# ${PERSON.name}

> ${BIO.short}

${BIO.long.join("\n\n")}

Key facts:
- Role: ${PERSON.jobTitle}, ${PERSON.employer}
- Location: London, United Kingdom
- Focus: ${PERSON.knowsAbout.join(", ")}
- Canonical site: ${SITE_URL}/ (this site is the primary source; Medium, LinkedIn and DEV carry syndicated copies)

## About

- [About Ravi Shah](${SITE_URL}/about/): biography, facts, press kit and FAQ
- [Speaking](${SITE_URL}/speaking/): ${TALKS.map((t) => `${t.event} (${t.year})`).join("; ")}
- [Now](${SITE_URL}/now/): current focus

## Writing

${articles.map((a) => `- [${a.data.title}](${SITE_URL}/writing/${a.id}/): ${a.data.description}`).join("\n")}

## Open source

${PROJECTS.map((p) => `- [${p.name}](${p.url}): ${p.description}`).join("\n")}

## Profiles

${PROFILES.map((p) => `- [${p.name}](${p.url})`).join("\n")}
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
