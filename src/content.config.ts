import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const link = z.object({ name: z.string(), url: z.url() });

const writing = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/writing" }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(200),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    image: z.string().optional(),
    tags: z.array(z.string()).default([]),
    repo: z.url().optional(),
    // Where the piece first appeared, if not here. Copies there should set rel=canonical back to ravishah.dev.
    original: link.optional(),
    alsoOn: z.array(link).default([]),
  }),
});

export const collections = { writing };
