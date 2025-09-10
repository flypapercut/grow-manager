import { Router } from "express";
import { EventsController } from "../controllers/events.controller";

const eventsRoutes = Router();

const eventsController = new EventsController();

eventsRoutes.get("/", eventsController.index);
eventsRoutes.get("/:id", eventsController.indexById);
eventsRoutes.post("/", eventsController.create);
// eventsRoutes.put("/:id", eventsController.update);
// eventsRoutes.delete("/:id", eventsController.delete);

export { eventsRoutes };
