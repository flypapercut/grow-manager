import Knex from "knex";

export async function seed(knex): Promise<void> {
	// Deletes ALL existing entries
	await knex("seeds").del();

	// Inserts seed entries
	await knex("seeds").insert([
		{
			id: 1,
			name: "WhiteWidow",
			mother_id: "",
			father_id: "",
			collected_date: "2025-09-01",
			events: { germination_date: "2025-09-02" },
		},
		{
			id: 2,
			name: "SourWidow",
			mother_id: "9929",
			father_id: "9933",
			collected_date: "2025-09-01",
			events: { germination_date: "2025-09-04" },
		},
		{
			id: 3,
			name: "WhiteSnake",
			mother_id: "9929",
			father_id: "9992",
			collected_date: "2025-09-01",
			events: {},
		},
	]);
}
