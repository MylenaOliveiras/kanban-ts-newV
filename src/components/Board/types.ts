import { ITask } from "../Task/types";

export interface IBoard {
  tasks: ITask[];
  addTask: (task: ITask) => void;
  removeTask: (task: ITask) => void;
  moveTaskForward: (task: ITask) => void;
  moveTaskBack: (task: ITask) => void;
}
