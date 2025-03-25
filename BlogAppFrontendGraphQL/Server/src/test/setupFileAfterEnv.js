import mongoose from "mongoose";
import { afterAll, beforeAll } from "@jest/globals";

import { initDatabase } from "../db/init.js";

beforeAll(async () => {
	await initDatabase();
});

afterAll(async () => {
	await mongoose.disconnect();
});
