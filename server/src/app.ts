import dotenv from "dotenv";
dotenv.config();

import { addTodo } from "./todos";
import { startScheduler } from "./scheduler";

// Todos
addTodo("coding practice", "23:00");

// Scheduler
startScheduler();

console.log("🚀 Todo AI Caller Started!");
console.log("⏰ Waiting for reminder time...");
