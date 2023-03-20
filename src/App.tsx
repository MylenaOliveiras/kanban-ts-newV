import React, { useState } from "react";
import Board from "./components/Board/Board";
import Card from "./components/Card.tsx/Card";
import Task, { ITask } from "./components/Task.tsx/Task";
function App() {
  return (
    <main className="App">
      <div className="bg-[url('/imagens/background.svg')] mt-8 w-[926px] h-[581px] bg-cover m-auto">
        <h1 className="text-black font-bold	text-4xl text-center p-16 pt-1">
          Kanban
        </h1>
        <Board />
      </div>
    </main>
  );
}

export default App;