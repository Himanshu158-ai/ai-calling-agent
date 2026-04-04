import { Todo } from "./types";
import { v4 as uuidv4 } from "uuid";

const todos: Todo[] = [];

export function addTodo(task: string, reminderTime: string): Todo {
  const todo: Todo = {
    id: uuidv4(),
    task,
    reminderTime,
    called: false,
  };
  todos.push(todo);
  console.log(`✅ Todo added: ${task} at ${reminderTime}`);
  return todo;
}

export function getTodos(): Todo[] {
  return todos;
}

export function markCalled(id: string): void {
  const todo = todos.find((t) => t.id === id);
  if (todo) {
    todo.called = true;
  }
}