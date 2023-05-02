import { Task } from "../Task/types";

export interface IBoard {
  tasks: Task[];
  addTask: (task: Task) => void;
  removeTask: (task: Task) => void;
  moveTaskForward: (task: Task) => void;
  moveTaskBack: (task: Task) => void;
}
