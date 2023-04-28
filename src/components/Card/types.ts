import { ITask } from "../Task/types";
export interface ICard {
  status: "In Progress" | "Done" | "To Do";
  tasks: ITask[];
  addTask: (task: ITask) => void;
  removeTask: (task: ITask) => void;
  moveTaskForward: (task: ITask) => void;
  moveTaskBack: (task: ITask) => void;
}
