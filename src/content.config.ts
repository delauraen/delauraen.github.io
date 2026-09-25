import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

export const collections = {
	work: defineCollection({
		// Load Markdown files in the src/content/work directory.
		loader: glob({ base: './src/content/work', pattern: '**/*.md' }),
		schema: ({ image }) =>
			z.object({
				title: z.string(),
				description: z.string(),
				publishDate: z.coerce.date(),
				tags: z.array(z.string()),
				img: image(),
				img_alt: z.string().optional(),
				// Game jam details, shown in the stats panel on each project page.
				jam: z.string(),
				jamUrl: z.string().url().optional(),
				theme: z.string().optional(),
				role: z.string(),
				teamSize: z.number().int().positive(),
				engine: z.string().optional(),
				platforms: z.array(z.string()),
				itchUrl: z.string().url(),
				/** True when the game runs in the browser on itch.io. */
				playInBrowser: z.boolean().default(false),
			}),
	}),
};
