import { Request, Response, NextFunction } from "express";
import { knexConfig as knex } from "../database/knex";

class SeedsController {
	async index(request: Request, response: Response, next: NextFunction) {
		try {
			console.log("indexing all seeds");
			return response.status(200).send("seeds:");
		} catch (error) {
			next(error);
		}
	}
}

export { SeedsController };
