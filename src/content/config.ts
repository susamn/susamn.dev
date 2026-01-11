import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		tags: z.array(z.string()).default([]),
	}),
});

const projects = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		link: z.string().url().optional(),
		github: z.string().url().optional(),
		productHunt: z.string().url().optional(),
		featured: z.boolean().default(false),
		tags: z.array(z.string()).default([]),
	}),
});

export const collections = { blog, projects };
