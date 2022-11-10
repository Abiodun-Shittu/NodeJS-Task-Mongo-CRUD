import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
	return res.status(200).json({message: "Todo Application is Running"});
});

app.listen(port, () => {
	console.log(`Todo App is listening on http://localhost:${port}`);
})
