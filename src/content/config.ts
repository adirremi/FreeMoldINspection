import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

/**
 * Services collection.
 * Each markdown file describes one mold-related service offered by the company.
 * The Zod schema enforces a consistent, type-safe data shape for every entry.
 */
const services = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/services" }),
  schema: z.object({
    title: z.string(),
    shortTitle: z.string(),
    summary: z.string(),
    description: z.string(),
    icon: z.enum([
      "search",
      "flask",
      "wind",
      "droplet",
      "home",
      "shield",
    ]),
    order: z.number().int().positive(),
    featured: z.boolean().default(false),
    benefits: z.array(z.string()).min(1),
  }),
});

export const collections = { services };
