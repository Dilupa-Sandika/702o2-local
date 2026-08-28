import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

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

const deals = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/deals' }),
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    store: z.string(),
    price: z.string().optional(),
    link: z.string().optional(),
    image: z.string().optional(),
  }),
});

const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    pubDate: z.coerce.date(),
    image: z.string().optional(),
    excerpt: z.string(),
  }),
});

const recipes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/recipes' }),
  schema: z.object({
    title: z.string(),
    time: z.string(),
    cost: z.string().optional(),
    pubDate: z.coerce.date(),
    image: z.string().optional(),
  }),
});

export const collections = { events, deals, guides, recipes };