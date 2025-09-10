import { z } from "zod";

export const eventSchema = z.object({
	type: z
		.string({
			error: (issue) =>
				issue.input === undefined ? "type is required" : "not a string",
		})
		.min(3, { message: "type is too short" }),
	target: z.string(),
	date: z.string(),
	time: z.string(),
	data: z.json(),
});
