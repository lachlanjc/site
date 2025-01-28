import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
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
});

export const collections = {
  projects: projectsCollection,
};
