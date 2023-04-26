import Board from "./components/Board/Board";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ITask } from "./components/Task/types";

async function getTask() {
  const response = await fetch("/task");
  const data = await response.json();
  return data;
}
async function postTask(values: ITask) {
  const response = await fetch("/task", {
    method: "POST",
    body: JSON.stringify(values),
  });
  const data = await response.json();
  return data;
}
function deleteTask(values: ITask) {
  return fetch(`/task/${values.id}`, {
    method: "DELETE",
  });
}
async function putTask(values: ITask) {
  const response = await fetch(`/task/${values.id}`, {
    method: "PUT",
  });
}
function App() {
  const { data, isLoading, isError } = useQuery<ITask[]>({
    queryKey: ["task"],
    queryFn: getTask,
  });

  const queryClient = useQueryClient();

  const { mutate: addTask } = useMutation(postTask);
  const { mutate: removeTask } = useMutation(deleteTask);

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
          gobackTask={(data) => gobackTask(data)}
          removeTask={(data) => excludeTask(data)}
          updateTask={(data) => updateTask(data)}
          tasks={data || []}
        />
      </div>
    </main>
  );
}

export default App;
