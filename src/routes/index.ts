import { Router } from "express";
import { seedsRoutes } from "./seeds.routes";
import { plantsRoutes } from "./plants.routes";

const routes = Router();

routes.use("/seeds", seedsRoutes);
routes.use("/plants", plantsRoutes);

export { routes };
