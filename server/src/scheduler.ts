import cron from "node-cron";
import { getTodos, markCalled } from "./todos";
import { callUser } from "./caller";

export function startScheduler(): void {
  console.log("⏰ Scheduler started...");

  // Har minute check karega
  cron.schedule("* * * * *", async () => {
    const now = new Date();
    const currentTime = `${String(now.getHours()).padStart(2, "0")}:${String(
      now.getMinutes()
    ).padStart(2, "0")}`;

    const todos = getTodos();

    for (const todo of todos) {
      if (todo.reminderTime === currentTime && !todo.called) {
        console.log(`🔔 Time matched: ${todo.task}`);
        await callUser(todo.task);
        markCalled(todo.id);
      }
    }
  });
}