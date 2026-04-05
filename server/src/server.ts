import express, { Request, Response } from "express";
import cors from "cors";
import { config } from "./config/config";
import connectDB from "./config/database";
import { Task } from "./models/task.model";
import { startScheduler } from "./services/scheduler";

connectDB();

const app = express();
const PORT = config.port;

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));
app.use(express.json());

startScheduler();

app.post("/create-task", async (req: Request, res: Response) => {
    const { task, scheduledTime } = req.body;
    if (!task || !scheduledTime) {
        return res.status(400).json({ message: "Task and scheduled time are required" });
    }
    try {
        const newTask = new Task({ task, scheduledTime });
        await newTask.save();
        res.json({ message: "Task added successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
});

app.get("/get-tasks", async (req: Request, res: Response) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
});

app.delete("/delete-task/:id", async (req: Request, res: Response) => {
    const { id } = req.params;
    // console.log(id);
    try {
        const task = await Task.findByIdAndDelete(id);
        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }
        res.json({ message: "Task deleted successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});