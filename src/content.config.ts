import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    featured: z.boolean().default(false),
    coverImage: z.string(),
    photos: z.array(z.string()).default([]),
    videos: z.array(z.object({ url: z.string(), after: z.number() })).default([]),
    textAfter: z.array(z.number()).default([]),
    order: z.number().default(0),
  }),
});

export const collections = { projects };