import { z } from "zod";

export const plantSchema = z.object({
	name: z
		.string({
			error: (issue) =>
				issue.input === undefined ? "name is required" : "not a string",
		})
		.min(3, { message: "name is too short" }),
	origin_type: z.string(),
	origin_id: z.string(),
	start_date: z.string(),
	events: z.array(z.string()).optional(),
});
