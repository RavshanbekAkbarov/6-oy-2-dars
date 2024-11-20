import { useState } from "react";

import TodoList from "./components/todoList";
import FormTodo from "./components/FormTodo";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Cleaning room",
      Component: false,
    },
    {
      id: 2,
      title: "Washing dishes",
      Component: true,
    },
    {
      id: 3,
      title: "vazifa bajarish",
      Component: true,
    },
  ]);
  const addTodo = (todo) => {
    setTodos((prev) => {
      return [...prev, todo];
    });
  };

  return (
    <>
      <FormTodo addTodo={addTodo} />
      <TodoList todos={todos} setTodos={setTodos} />
    </>
  );
}

export default App;
