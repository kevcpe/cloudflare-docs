import { reference } from "astro:content";
import { z } from "astro:schema";

export const releaseNotesSchema = z.object({
	title: z.string(),
	description: z.string(),
	date: z.coerce.date(),
	products: z.array(reference("products")),
});