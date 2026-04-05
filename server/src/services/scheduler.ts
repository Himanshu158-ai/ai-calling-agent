import cron from "node-cron";
import { callUser } from "./caller";
import { Task } from "../models/task.model";

export function startScheduler(): void {
  console.log("Scheduler started...");

  cron.schedule("* * * * *", async () => {
    const now = new Date();
    const currentTime = `${String(now.getHours()).padStart(2, "0")}:${String(
      now.getMinutes()
    ).padStart(2, "0")}`;

    //
    console.log(`Cron checking tasks for time: ${currentTime}`);

    try {
      const tasks = await Task.find({
        scheduledTime: currentTime,
        completed: false
      });

      for (const task of tasks) {
        console.log(`🔔 Time matched, calling user: ${task.task}`);
        try {
          await callUser(task.task);
          task.completed = true;
          await task.save();
        } catch (callError) {
          console.error(`Failed to call user for task: ${task.task}`, callError);
        }
      }
    } catch (error) {
      console.error("Schedule check error:", error);
    }
  });
}
