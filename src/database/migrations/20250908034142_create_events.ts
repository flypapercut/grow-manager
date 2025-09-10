import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
	await knex.schema.createTable("events", (t) => {
		t.string("id").primary().notNullable();
		t.string("type").notNullable();
		t.string("target").notNullable();
		t.string("date").notNullable();
		t.string("time");
		t.json("data");
		t.timestamp("created_at").defaultTo(knex.fn.now());
		t.timestamp("updated_at").defaultTo(knex.fn.now());
	});
}

export async function down(knex: Knex): Promise<void> {
	await knex.schema.dropTableIfExists("events");
}
