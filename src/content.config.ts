import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const deals = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/deals' }),
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    store: z.string(),
    price: z.string().optional(),
    image: z.string().optional(),
  }),
});

const events = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/events' }),
  schema: z.object({
    title: z.string(),
    eventDate: z.string(),
    location: z.string(),
    category: z.string(),
    admission: z.string().optional(),
    link: z.string().optional(),
    image: z.string().optional(),
  }),
});

export const collections = { deals, events };