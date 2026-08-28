import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const events = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/events' }),
  schema: z.object({
    title: z.string(),
    schedules: z.array(z.object({ day: z.string(), time: z.string() })).optional(),
    eventDate: z.string().optional(),
    location: z.string(),
    mapLink: z.string().optional(),
    category: z.string(),
    admission: z.string().optional(),
    link: z.string().optional(),
    image: z.string().optional(),
  }),
});

const galleries = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/galleries' }),
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    category: z.string(),
    coverImage: z.string(),
    photos: z.array(z.object({ image: z.string() })).optional(),
  }),
});

const mediaPackages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/media-packages' }),
  schema: z.object({
    title: z.string(),
    price: z.string(),
    description: z.string(),
    features: z.array(z.string()),
    buttonText: z.string().default('Book Package →'),
    isFeatured: z.boolean().default(false),
    order: z.number().default(1),
  }),
});

const deals = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/deals' }),
  schema: z.object({
    title: z.string(),
    store: z.string(),
    pubDate: z.coerce.date(),
    validUntil: z.coerce.date().optional(),
    price: z.string().optional(),
    image: z.string().optional(),
    link: z.string().optional(),
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

export const collections = { events, galleries, mediaPackages, deals, guides, recipes };