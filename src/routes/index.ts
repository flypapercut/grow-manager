import { Router } from "express";
import { seedsRoutes } from "./seeds.routes";
import { plantsRoutes } from "./plants.routes";
import { eventsRoutes } from "./events.routes";

const routes = Router();

routes.use("/seeds", seedsRoutes);
routes.use("/plants", plantsRoutes);
routes.use("/events", eventsRoutes);

export { routes };
