import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    category: z.string(),
    settlementAmount: z.string(),
    settlementDisplay: z.string(), // e.g., "$4M", "$5M+", "7-Fig"
    gradientFrom: z.string(), // Tailwind color class
    gradientTo: z.string(), // Tailwind color class
  }),
});

export const collections = { blog };
