import { useState } from "react";

import TodoList from "./components/todoList";

function App() {

  const [todos, setTodos] = useState([
    {
      id:1,
      title: "Cleaning room",
      Component:false,
    },
    {
      id: 2,
      title: "Washing dishes",
      Component:true,
    },
    {
      id: 3,
      title: "vazifa bajarish",
      Component:true,
    }
  ])

  return (<>
    <TodoList todos={todos} setTodos={setTodos}/>
  </>
  )
}

export default App;