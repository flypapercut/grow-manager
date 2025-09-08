import { Request, Response, NextFunction } from "express";
import { knexConfig as knex } from "../database/knex";
import { v4 as uuidv4 } from "uuid";
import { Plant } from "../models/Plant";
import { plantSchema } from "../validators/plantSchema";

class PlantsController {
	async index(request: Request, response: Response, next: NextFunction) {
		try {
			console.log("indexing all plants");

			const plants = await knex<Plant>("plants").select();

			return response.status(200).json(plants);
		} catch (error) {
			next(error);
		}
	}

	async indexById(request: Request, response: Response, next: NextFunction) {
		try {
			console.log("indexing by id");
			const id = request.params.id;

			const plants = await knex<Plant>("plants").select().where("id", id);

			if (plants == null || undefined || plants.length == 0) {
				return response.status(400).json({ message: "invalid id" });
			} else {
				return response.status(200).json(plants);
			}
		} catch (error) {
			next(error);
		}
	}

	async create(request: Request, response: Response, next: NextFunction) {
		try {
			console.log("creating plant");

			const { name, origin_type, origin_id, start_date, events } =
				plantSchema.parse(request.body);

			const id = uuidv4();

			await knex<Plant>("plants").insert({
				id,
				name,
				origin_type,
				origin_id,
				start_date,
				events: JSON.stringify(events),
			});

			return response.status(200).json();
		} catch (error) {
			next(error);
		}
	}

	async update(request: Request, response: Response, next: NextFunction) {
		try {
			console.log("updating plant");
			const id = request.params.id;
			const { name, origin_type, origin_id, start_date, events } =
				plantSchema.parse(request.body);

			const plant = await knex<Plant>("plants").select().where("id", id);

			if (plant == null || undefined || plant.length == 0) {
				return response.status(400).json({ message: "invalid id" });
			} else {
				await knex<Plant>("plants")
					.update({
						name,
						origin_type,
						origin_id,
						start_date,
						events: JSON.stringify(events),
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
			console.log("deleting plant");
			const id = request.params.id;

			const plant = await knex<Plant>("plants").select().where("id", id);

			if (plant == null || undefined || plant.length == 0) {
				return response.status(400).json({ message: "invalid id" });
			} else {
				await knex<Plant>("plants").delete().where("id", id);
				return response.status(200).json(plant);
			}
		} catch (error) {
			next(error);
		}
	}
}

export { PlantsController };
