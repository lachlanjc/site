import { defineCollection } from "astro:content"
import { glob } from "astro/loaders"
import { z } from "astro/zod"

const projectsCollection = defineCollection({
	loader: glob({ base: "./src/content/projects", pattern: "**/*.{md,mdx}" }),
	schema: ({ image }) =>
		z.object({
			year: z.number(),
			name: z.string(),
			desc: z.string().optional(),
			cover: image(),
			coverAlt: z.string(),
			feat: z.boolean().optional(),
			urls: z
				.array(z.object({ url: z.string(), label: z.string() }))
				.optional(),
			color: z.string().optional(),
			url: z.string(),
		}),
})

export const collections = {
	projects: projectsCollection,
}
