import Task from "../Task/Task";
import { ICard } from "./types";

export default function Card({
  status,
  tasks,
  addTask,
  removeTask,
  moveTaskForward,
  moveTaskBack,
}: ICard) {
  let background = "bg-blue";
  let colorIcon = "text-blue";
  let colorTitle = "text-white";

  if (status == "In Progress") {
    background = "bg-orange";
    colorIcon = "text-orange";
  } else if (status == "Done") {
    background = "bg-green";
    colorIcon = "text-green";
    colorTitle = "text-black";
  }

  return (
    <section className="pb-10">
      <div className={`w-72 rounded space-y-2 p-2 ${background}`}>
        <header className="flex gap-1 ">
          {status == "To Do" && (
            <img src="/imagens/todo.svg" className="pl-2" />
          )}
          {status == "In Progress" && (
            <img src="/imagens/inprogress.svg" className="pl-2" />
          )}
          {status == "Done" && <img src="/imagens/done.svg" className="pl-2" />}
          <h1 className={`font-bold text-base ${colorTitle}`}>{status}</h1>
        </header>

        {tasks
          .filter((task) => task.status === status)
          .map((nota, index) => (
            <div key={index} className="bg-white rounded-lg m-auto">
              <p className="font-medium text-sm p-3 bg-white break-words rounded">
                {nota.descricao}
              </p>
              <footer className="flex gap-3 place-content-end mr-3 p-1 rounded">
                <button onClick={() => removeTask(nota)} className="w-4">
                  <svg className={`mr-1 w-4 h-5 ${colorIcon}`}>
                    <use href="/imagens/trash.svg#root" />
                  </svg>
                </button>
                {status !== "To Do" && (
                  <button onClick={() => moveTaskBack(nota)}>
                    <svg className={`w-4 h-5 ${colorIcon} rotate-180 py-1`}>
                      <use href="/imagens/arrow.svg#root"></use>
                    </svg>
                  </button>
                )}

                {status !== "Done" && (
                  <button onClick={() => moveTaskForward(nota)}>
                    <svg className={`w-4 h-5 ${colorIcon} pt-1`}>
                      <use href="/imagens/arrow.svg#root" />
                    </svg>
                  </button>
                )}
              </footer>
            </div>
          ))}

        {status == "To Do" && <Task onCreate={addTask} />}
      </div>
    </section>
  );
}
