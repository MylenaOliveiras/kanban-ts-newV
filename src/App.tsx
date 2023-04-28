import Board from "./components/Board/Board";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ITask } from "./components/Task/types";
import { getTask, postTask, deleteTask, putTask } from "./api";

function App() {
  const { data, isLoading, isError } = useQuery<ITask[]>({
    queryKey: ["task"],
    queryFn: getTask,
  });

  const queryClient = useQueryClient();

  const { mutate: addTask } = useMutation(postTask);
  const { mutate: removeTask } = useMutation(deleteTask);
  const { mutate: updateStatusTask } = useMutation(putTask);

  function createTask(task: ITask) {
    addTask(task, {
      onSuccess() {
        queryClient.invalidateQueries(["task"]);
      },
    });
  }

  function excludeTask(task: ITask) {
    removeTask(task, {
      onSuccess() {
        console.log("sucesso");
        queryClient.invalidateQueries(["task"]);
      },
    });
  }
  function moveTaskForward(task: ITask) {
    const updatedTask = { ...task };
    if (task.status === "To Do") {
      updatedTask.status = "In Progress";
    } else if (task.status === "In Progress") {
      updatedTask.status = "Done";
    }

    updateLocalTask(updatedTask);
    updateStatusTask(updatedTask);
  }

  function moveTaskBack(task: ITask) {
    const updatedTask = { ...task };
    if (task.status === "In Progress") {
      updatedTask.status = "To Do";
    } else if (task.status === "Done") {
      updatedTask.status = "In Progress";
    }

    updateLocalTask(updatedTask);
    updateStatusTask(updatedTask);
  }

  function updateLocalTask(updatedTask: ITask) {
    const updatedTasks = data?.map((task) => {
      if (task.id === updatedTask.id) {
        return updatedTask;
      }
      return task;
    });
    queryClient.setQueryData<ITask[]>(["task"], updatedTasks || []);
  }

  if (isLoading) {
    <h1>Carregando!</h1>;
  }
  if (isError) {
    <h1>Error!</h1>;
  }
  return (
    <main className="App py-16">
      <div className="bg-[url('/imagens/background.svg')] mt-8 w-[926px] h-[581px] bg-cover m-auto ">
        <h1 className="text-black font-bold	text-4xl text-center p-16 pt-1">
          Kanban
        </h1>
        <Board
          addTask={(data) => createTask(data)}
          moveTaskBack={(data) => moveTaskBack(data)}
          removeTask={(data) => excludeTask(data)}
          moveTaskForward={(data) => moveTaskForward(data)}
          tasks={data || []}
        />
      </div>
    </main>
  );
}

export default App;
