export interface Todo {
  id: string;
  task: string;
  reminderTime: string; // "HH:MM" format
  called: boolean;
}