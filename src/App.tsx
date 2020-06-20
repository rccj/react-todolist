import React from "react";
import TodoList from "./components/todoList";
import "./App.less";

function App() {
  return (
    <>
      <div className="todoList">
        <TodoList />
      </div>
    </>
  );
}

export default App;
