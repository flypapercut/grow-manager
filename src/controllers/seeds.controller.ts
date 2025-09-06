import { Request, Response, NextFunction } from "express";
import { knexConfig as knex } from "../database/knex";
import { Seed } from "../models/Seed";

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
}

export { SeedsController };
