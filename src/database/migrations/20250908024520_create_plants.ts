import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
	await knex.schema.createTable("plants", (t) => {
		t.string("id").primary();
		t.string("name").notNullable();
		t.string("origin_type");
		t.string("origin_id");
		t.string("start_date");
		t.json("events");
		t.timestamp("created_at").defaultTo(knex.fn.now());
		t.timestamp("updated_at").defaultTo(knex.fn.now());
	});
}

export async function down(knex: Knex): Promise<void> {
	await knex.schema.dropTableIfExists("plants");
}
