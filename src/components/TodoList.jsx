import TodoItem from "./todoItem";

const TodoList = ({ todos, setTodos }) => {
  return (
    <ul>
      {todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} setTodos={setTodos} />;
      })}
    </ul>
  );
};

export default TodoList;
