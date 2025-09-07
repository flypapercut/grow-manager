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
			return response.status(200).json(seed);
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
				events,
			});

			return response.status(201).json("");
		} catch (error) {
			next(error);
		}
	}
}

export { SeedsController };
