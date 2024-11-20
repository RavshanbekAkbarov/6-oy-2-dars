import { useState } from "react";
import { toast } from "sonner";

const FormTodo = ({ addTodo }) => {
  const [title, setTitile] = useState(" ");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      toast("Oops !", {
        description: "Please enter smth",
        duration: 3000,
        icon: <a />,
      });
      return;
    }
    addTodo({
      id: Math.random(),
      title: title,
      completed: false,
    });
    setTitile("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>Title:</span>
        <input
          type="text"
          onChange={(e) => setTitile(e.target.value)}
          value={title}
        />
        <button>Qo'shish</button>
      </label>
    </form>
  );
};
export default FormTodo;
