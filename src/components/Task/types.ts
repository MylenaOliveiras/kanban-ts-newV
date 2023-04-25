export interface ITask {
  descricao: string;
  status: "In Progress" | "Done" | "To Do";
}

export interface ITaskProps {
  onCreate: (task: ITask) => void;
}
