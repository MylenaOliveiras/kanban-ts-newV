import Card from "../Card/Card";
import { IBoard } from "./types";

function Board({ addTask, gobackTask, removeTask, updateTask, tasks }: IBoard) {
  return (
    <section className="flex gap-2 justify-center h-auto">
      <div>
        <Card
          status={"To Do"}
          tasks={tasks}
          addTask={addTask}
          removeTask={removeTask}
          updateTask={updateTask}
          gobackTask={gobackTask}
        />
      </div>
      <div>
        <Card
          status={"In Progress"}
          tasks={tasks}
          addTask={addTask}
          removeTask={removeTask}
          updateTask={updateTask}
          gobackTask={gobackTask}
        />
      </div>
      <div>
        <Card
          status={"Done"}
          tasks={tasks}
          addTask={addTask}
          removeTask={removeTask}
          updateTask={updateTask}
          gobackTask={gobackTask}
        />
      </div>
    </section>
  );
}
export default Board;
