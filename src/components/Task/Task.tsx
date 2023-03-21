import React, { useState } from "react";

export interface ITask {
  descricao: string;
  status: "In Progress" | "Done" | "To Do";
}

interface ITaskProps {
  onCreate: (task: ITask) => void;
}

export default function Task({ onCreate }: ITaskProps) {
  const [task, setTask] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onCreate({ descricao: task, status: "To Do" });
        setTask("");
      }}
    >
      <div className="rounded mx-1 p-2 bg-black/10 flex gap-14">
        <input
          className="outline-0 placeholder:text-white/50 bg-transparent"
          placeholder="Write your task..."
          type="text"
          onChange={(event) => setTask(event.target.value)}
          value={task}
          maxLength={30}
          required
        />
      </div>
    </form>
  );
}
