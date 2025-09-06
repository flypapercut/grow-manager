import { Router } from "express";

const seedsRoutes = Router();

seedsRoutes.get("/", (req, res) => {
	console.log("listing all seeds");
	return res.send("ok");
});
seedsRoutes.get("/:id", (req, res) => console.log("seed"));
seedsRoutes.post("/", (req, res) => {
	console.log("creating seed");
	return res.status(201).send("ok");
});
seedsRoutes.put("/:id", () => console.log("updating seed: "));
seedsRoutes.delete("/:id", () => console.log("deleting seed: "));

export { seedsRoutes };
