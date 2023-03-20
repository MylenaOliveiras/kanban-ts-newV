import React, { useState } from "react";
import { ITask } from "../Task.tsx/Task";
import Card from "../Card.tsx/Card";

export interface IBoard {
  addTask: (task: ITask) => void;
  removeTask: (task: ITask) => void;
  updateTask: (task: ITask) => void;
}

function Board() {
  const [notas, setNotas] = useState<ITask[]>([]);

  function addTask(task: ITask) {
    setNotas([...notas, task]);
  }

  function removeTask(task: ITask) {
    setNotas(notas.filter((tarefa) => task.descricao !== tarefa.descricao));
  }

  function updateTask(task: ITask) {
    const novaTask = { ...task };
    if (task.status === "To Do") {
      novaTask.status = "In Progress";
    } else if (task.status === "In Progress") {
      novaTask.status = "Done";
    }

    setNotas([
      ...notas.filter((tarefa) => task.descricao != tarefa.descricao),
      novaTask,
    ]);
  }

  return (
    <section className="flex gap-2 justify-center h-auto">
      <div>
        <Card
          status={"To Do"}
          tasks={notas}
          addTask={addTask}
          removeTask={removeTask}
          updateTask={updateTask}
        />
      </div>
      <div>
        <Card
          status={"In Progress"}
          tasks={notas}
          addTask={addTask}
          removeTask={removeTask}
          updateTask={updateTask}
        />
      </div>
      <div>
        <Card
          status={"Done"}
          tasks={notas}
          addTask={addTask}
          removeTask={removeTask}
          updateTask={updateTask}
        />
      </div>
    </section>
  );
}
export default Board;
