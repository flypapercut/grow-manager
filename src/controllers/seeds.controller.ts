import { Request, Response, NextFunction } from "express";
import { knexConfig as knex } from "../database/knex";
import { Seed } from "../models/Seed";
import { v4 as uuidv4 } from "uuid";
import { seedSchema } from "../validators/seedSchema";

class SeedsController {
	async index(request: Request, response: Response, next: NextFunction) {
		try {
			console.log("indexing all seeds");
			const seeds = await knex<Seed>("seeds").select();
			return response.status(200).json(seeds);
		} catch (error) {
			next(error);
		}
	}

	async indexById(request: Request, response: Response, next: NextFunction) {
		try {
			const id = request.params.id;
			console.log("indexing seed by id");
			const seed = await knex<Seed>("seeds").select().where("id", id);
			if (seed == null || undefined || seed.length == 0) {
				return response.status(400).json({
					message: "seed does not exist",
				});
			} else {
				return response.status(200).json(seed);
			}
		} catch (error) {
			next(error);
		}
	}

	async create(request: Request, response: Response, next: NextFunction) {
		try {
			console.log("creating seed");
			// const { events } = request.body;
			const { name, mother_id, father_id, collected_date, events } =
				seedSchema.parse(request.body);

			const id = uuidv4();

			await knex<Seed>("seeds").insert({
				id,
				mother_id,
				father_id,
				collected_date,
				name,
				events: JSON.stringify(events),
			});

			return response.status(201).json("");
		} catch (error) {
			next(error);
		}
	}

	async update(request: Request, response: Response, next: NextFunction) {
		try {
			console.log("updating seed");
			const id = request.params.id;
			const { name, mother_id, father_id, collected_date, events } =
				seedSchema.parse(request.body);

			const seed = await knex<Seed>("seeds").select().where("id", id);

			if (seed == null || undefined || seed.length == 0) {
				return response.status(400).json({
					message: "seed does not exist",
				});
			} else {
				await knex<Seed>("seeds")
					.update({
						mother_id,
						father_id,
						collected_date,
						name,
						events: JSON.stringify(events),
						updated_at: knex.fn.now(),
					})
					.where("id", id);

				return response.status(200).json();
			}
		} catch (error) {
			next(error);
		}
	}

	async delete(request: Request, response: Response, next: NextFunction) {
		try {
			console.log("deleting seed");
			const id = request.params.id;
			const seed = await knex<Seed>("seeds").select().where("id", id);
			if (seed == null || undefined || seed.length == 0) {
				return response.status(400).json({
					message: "seed does not exist",
				});
			} else {
				await knex<Seed>("seeds").delete().where("id", id);
			}
			return response.status(200).json();
		} catch (error) {
			next(error);
		}
	}
}

export { SeedsController };
