import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      cover: image(),
      coverAlt: z.string(),
    }),
});

export const collections = {
  projects: projectsCollection,
};
