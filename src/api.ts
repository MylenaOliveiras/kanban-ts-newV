import { ITask } from "./components/Task/types";

export async function getTask() {
  const response = await fetch("/task");
  const data = await response.json();
  return data;
}
export async function postTask(values: ITask) {
  const response = await fetch("/task", {
    method: "POST",
    body: JSON.stringify(values),
  });
  const data = await response.json();
  return data;
}
export function deleteTask(values: ITask) {
  return fetch(`/task/${values.id}`, {
    method: "DELETE",
  });
}
export async function putTask(values: ITask) {
  const response = await fetch(`/task/${values.id}`, {
    method: "PUT",
    body: JSON.stringify(values),
  });
  const data = await response.json();
  return data;
}
