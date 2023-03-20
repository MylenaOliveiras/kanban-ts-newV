import React, { useState } from "react";
import Task, { ITask } from "../Task.tsx/Task";

interface ICard {
  status: "In Progress" | "Done" | "To Do";
  tasks: ITask[];
  addTask: (task: ITask) => void;
  removeTask: (task: ITask) => void;
  updateTask: (task: ITask) => void;
}

export default function Card({
  status,
  tasks,
  addTask,
  removeTask,
  updateTask,
}: ICard) {
  let background = "bg-blue";
  let icon = "text-blue";

  if (status == "In Progress") {
    background = "bg-orange";
    icon = "text-orange";
  } else if (status == "Done") {
    background = "bg-green";
    icon = "text-green";
  }

  return (
    <section className="flex gap-2 justify-center h-auto">
      <div
        className={`w-72 rounded space-y-2 h-auto min-h-[120px] pb-4   ${background}`}
      >
        <header className="flex gap-1 pt-2.5">
          {status == "To Do" && (
            <>
              <img src="/imagens/todo.svg" className="pl-2" />
              <h1 className="text-white font-bold">To Do</h1>
            </>
          )}
          {status == "In Progress" && (
            <>
              <img src="/imagens/inprogress.svg" className="pl-2" />
              <h1 className="text-white font-bold">In Progress</h1>
            </>
          )}
          {status == "Done" && (
            <>
              <img src="/imagens/done.svg" className="pl-2" />
              <h1 className="text-white font-bold">Done</h1>
            </>
          )}
        </header>

        {tasks
          .filter((task) => task.status === status)
          .map((nota) => (
            <div className="w-[272px] h-[67px] bg-white rounded-lg m-auto">
              <p className="font-medium text-base p-2 bg-white rounded">
                {nota.descricao}
              </p>
              {status != "Done" ? (
                <footer className="flex gap-3 place-content-end">
                  <button onClick={() => removeTask(nota)} className="w-4">
                    <svg className={`w-4 h-5 ${icon}`}>
                      <use href="/imagens/trash.svg#root" />
                    </svg>
                  </button>

                  <button onClick={() => updateTask(nota)}>
                    <svg className={`w-4 h-5 ${icon} pt-1 mr-3`}>
                      <use href="/imagens/arrow.svg#root" />
                    </svg>
                  </button>
                </footer>
              ) : (
                status == "Done" && (
                  <footer className="flex gap-3 place-content-end">
                    <button
                      onClick={() => removeTask(nota)}
                      className="w-4  mr-3"
                    >
                      <svg className={`mr-1 w-4 h-5 ${icon}`}>
                        <use href="/imagens/trash.svg#root" />
                      </svg>
                    </button>
                  </footer>
                )
              )}
            </div>
          ))}

        {status == "To Do" && (
          <div className="pt-2">
            <Task onCreate={addTask} />
          </div>
        )}
      </div>
    </section>
  );
}
