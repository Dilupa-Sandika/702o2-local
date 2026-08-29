import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const events = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/events' }),
  schema: z.object({
    title: z.string(),
    schedules: z.array(z.record(z.any())).optional(),
    eventDate: z.string().optional(),
    location: z.string().default('Las Vegas, NV'),
    mapLink: z.string().optional(),
    category: z.string().default('Community Festivals'),
    admission: z.string().optional().default('Free Entry'),
    link: z.string().optional(),
    image: z.string().optional(),
  }),
});

const galleries = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/galleries' }),
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date().optional(),
    category: z.string().default('Vegas Sights & Landscapes'),
    coverImage: z.string(),
    photos: z.array(z.record(z.any())).optional(),
  }),
});

const mediaPackages = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/media-packages' }),
  schema: z.object({
    title: z.string(),
    price: z.string(),
    description: z.string(),
    features: z.array(z.string()).default([]),
    buttonText: z.string().default('Book Package →'),
    isFeatured: z.boolean().default(false),
    order: z.number().default(1),
  }),
});

const deals = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/deals' }),
  schema: z.object({
    title: z.string(),
    store: z.string().default('Local Retail / Other'),
    pubDate: z.coerce.date().optional(),
    validUntil: z.coerce.date().optional(),
    price: z.string().optional(),
    image: z.string().optional(),
    circularPdf: z.string().optional(),
    circularPages: z.array(z.record(z.any())).optional(),
    link: z.string().optional(),
  }),
});

const guides = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(),
    category: z.string().default('Best of Vegas'),
    pubDate: z.coerce.date().optional(),
    image: z.string().optional(),
    excerpt: z.string().default(''),
    seoKeywords: z.string().optional(),
  }),
});

const recipes = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/recipes' }),
  schema: z.object({
    title: z.string(),
    time: z.string().default('20 Mins'),
    cost: z.string().optional(),
    pubDate: z.coerce.date().optional(),
    image: z.string().optional(),
    seoKeywords: z.string().optional(),
  }),
});

export const collections = {
  events,
  galleries,
  mediaPackages,
  deals,
  guides,
  recipes,
};