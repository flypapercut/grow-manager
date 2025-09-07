import { z } from "zod";

export const seedSchema = z.object({
	name: z
		.string({
			error: (issue) =>
				issue.input === undefined ? "name is required" : "not a string",
		})
		.min(3, { message: "name is too short" }),
	mother_id: z.string().optional(),
	father_id: z.string().optional(),
	collected_date: z.string().optional(),
	events: z.json().optional(),
});
