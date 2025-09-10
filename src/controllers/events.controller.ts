import { Request, Response, NextFunction } from "express";
import { knexConfig as knex } from "../database/knex";
import { v4 as uuidv4 } from "uuid";
import { Event } from "../models/Event";
import { eventSchema } from "../validators/eventSchema";

class EventsController {
	async index(request: Request, response: Response, next: NextFunction) {
		try {
			console.log("indexing all events");

			const events = await knex<Event>("events").select();

			return response.status(200).json(events);
		} catch (error) {
			next(error);
		}
	}

	async indexById(request: Request, response: Response, next: NextFunction) {
		try {
			console.log("indexing by id");

			const id = request.params.id;

			const [event] = await knex<Event>("events").select().where("id", id);

			return response.status(200).json(event);
		} catch (error) {
			next(error);
		}
	}

	async create(request: Request, response: Response, next: NextFunction) {
		try {
			console.log("creating event");

			const { type, target, date, time, data } = eventSchema.parse(
				request.body
			);

			const id = uuidv4();

			await knex<Event>("events").insert({
				id,
				type,
				target,
				date,
				time,
				data: JSON.stringify(data),
			});

			return response.status(201).json({});
		} catch (error) {
			next(error);
		}
	}

	async update(request: Request, response: Response, next: NextFunction) {}

	async delete(request: Request, response: Response, next: NextFunction) {}
}

export { EventsController };
