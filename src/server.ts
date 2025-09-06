import express from "express";

const app = express();

app.use(express.json());

app.listen(4200, () => {
	console.log("running grow manager on port 4200");
});
