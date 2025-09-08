import { Router } from "express";
import { PlantsController } from "../controllers/plants.controller";

const plantsRoutes = Router();

const plantsController = new PlantsController();

plantsRoutes.get("/", plantsController.index);
plantsRoutes.get("/:id", plantsController.indexById);
plantsRoutes.post("/", plantsController.create);
plantsRoutes.put("/:id", plantsController.update);
plantsRoutes.delete("/:id", plantsController.delete);

export { plantsRoutes };
