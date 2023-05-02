import { useState } from "react";
import { ITaskProps } from "./types";

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
      <div className="rounded bg-black/10 p-2">
        <input
          className="outline-0 bg-transparent placeholder:text-white/50 text-xs font-medium"
          placeholder="Write your task..."
          type="text"
          onChange={(event) => setTask(event.target.value)}
          value={task}
          required
        />
      </div>
    </form>
  );
}
