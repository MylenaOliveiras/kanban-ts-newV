import Card from "../Card/Card";
import { IBoard } from "./types";

function Board({
  addTask,
  moveTaskBack,
  removeTask,
  moveTaskForward,
  tasks,
}: IBoard) {
  return (
    <section className="flex gap-2 justify-center h-auto">
      <div>
        <Card
          status={"To Do"}
          tasks={tasks}
          addTask={addTask}
          removeTask={removeTask}
          moveTaskForward={moveTaskForward}
          moveTaskBack={moveTaskBack}
        />
      </div>
      <div>
        <Card
          status={"In Progress"}
          tasks={tasks}
          addTask={addTask}
          removeTask={removeTask}
          moveTaskForward={moveTaskForward}
          moveTaskBack={moveTaskBack}
        />
      </div>
      <div>
        <Card
          status={"Done"}
          tasks={tasks}
          addTask={addTask}
          removeTask={removeTask}
          moveTaskForward={moveTaskForward}
          moveTaskBack={moveTaskBack}
        />
      </div>
    </section>
  );
}
export default Board;
