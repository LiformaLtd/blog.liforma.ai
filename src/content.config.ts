import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const common = {
  title: z.string(),
  description: z.string(),
  datePublished: z.coerce.date(),
  dateModified: z.coerce.date().optional(),
  authorId: z.string().default('liforma-team'),
  imageKey: z.string(),
  imageAlt: z.string(),
  draft: z.boolean().optional().default(false)
};

const blog = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/blog' }),
  schema: z.object({
    ...common,
    tags: z.array(z.string()).default([])
  })
});

const resources = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/resources' }),
  schema: z.object({
    ...common,
    purpose: z.enum(['review', 'alternatives', 'comparison', 'category', 'integration'])
  })
});

export const collections = { blog, resources };
