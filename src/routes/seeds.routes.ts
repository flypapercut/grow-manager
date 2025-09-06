import { Router } from "express";
import { SeedsController } from "../controllers/seeds.controller";

const seedsRoutes = Router();

const seedsController = new SeedsController();

seedsRoutes.get("/", seedsController.index);
seedsRoutes.get("/:id", (req, res) => console.log("seed"));
seedsRoutes.post("/", (req, res) => {
	console.log("creating seed");
	return res.status(201).send("ok");
});
seedsRoutes.put("/:id", () => console.log("updating seed: "));
seedsRoutes.delete("/:id", () => console.log("deleting seed: "));

export { seedsRoutes };
