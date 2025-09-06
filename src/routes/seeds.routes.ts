import { Router } from "express";
import { SeedsController } from "../controllers/seeds.controller";

const seedsRoutes = Router();

const seedsController = new SeedsController();

seedsRoutes.get("/", seedsController.index);
seedsRoutes.get("/:id", (req, res) => console.log("seed"));
seedsRoutes.post("/", seedsController.create);
seedsRoutes.put("/:id", () => console.log("updating seed: "));
seedsRoutes.delete("/:id", () => console.log("deleting seed: "));

export { seedsRoutes };
