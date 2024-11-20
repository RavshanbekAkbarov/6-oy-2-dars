const TodoItem = ({ todo, setTodos }) => {
  const changeStatus = (id) => {
    setTodos((prev) => {
      return prev.map((todo) => {
        if (id == todo.id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
    });
  };

  const deleteTodo = (id) => {
    setTodos((prev) => {
      return prev.filter((todo) => todo.id != id);
    });
  };

  return (
    <li className={`${todo.completed ? "completed" : ""}`}>
      <h4>{todo.title}</h4>
      {!todo.completed && (
        <button onClick={() => changeStatus(todo.id)}>Bajarish</button>
      )}
      {todo.completed && (
        <button onClick={() => changeStatus(todo.id)}>Qaytarish</button>
      )}
      {todo.completed && (
        <button className="deleteBtn" onClick={() => deleteTodo(todo.id)}>O'chirish</button>
      )}
    </li>
  );
};
export default TodoItem;
