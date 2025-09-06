import { Router } from "express";
import { seedsRoutes } from "./seeds.routes";

const routes = Router();

routes.use("/seeds", seedsRoutes);

export { routes };
