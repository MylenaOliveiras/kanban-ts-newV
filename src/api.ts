import { Task, taskSchema } from "./components/Task/types";

export async function getTask() {
  const response = await fetch("/task");
  const data = await response.json();
  const parsedData = taskSchema.array().parse(data);
  return parsedData;
}
export async function postTask(values: Task) {
  const response = await fetch("/task", {
    method: "POST",
    body: JSON.stringify(values),
  });
  const data = await response.json();
  return data;
}
export function deleteTask(values: Task) {
  return fetch(`/task/${values.id}`, {
    method: "DELETE",
  });
}
export async function putTask(values: Task) {
  const response = await fetch(`/task/${values.id}`, {
    method: "PUT",
    body: JSON.stringify(values),
  });
  const data = await response.json();
  return data;
}
