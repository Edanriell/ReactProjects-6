import dotenv from "dotenv";
import globalSetup from "./test/globalSetup.js";
import { app } from "./app.js";
import { initDatabase } from "./db/init.js";

dotenv.config();

async function runTestingServer() {
	await globalSetup();
	await initDatabase();
	const PORT = process.env.PORT;
	app.listen(PORT);
	console.info(`TESTING express server running on http://localhost:${PORT}`);
}

runTestingServer();
