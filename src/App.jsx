import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import TodoItem from "./components/TodoItem";

function App() {
  const [name, setName] = useState("");
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: uuidv4(),
      name,
      isChecked: false,
    };

    setTodos([...todos, newTodo]);
    setName("");
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const handleChange = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isChecked: !todo.isChecked } : todo
    );

    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const editTodo = (id) => {
    let todo = todos.filter((item) => item.id === id);
    setName(todo[0].name);
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  return (
    <>
      <div className="align-element my-5 rounded-xl p-5 bg-violet-100 min-h-[80vh]">
        <h1 className="text-center text-4xl font-bold text-blue-600 my-2">
          Todos Application
        </h1>
        <div className="my-6">
          <h2 className="text-2xl text-zinc-800 font-semibold my-3">
            Add a Todo
          </h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={name}
              name="name"
              className="w-[40vw] border-2 rounded-md p-1 px-4"
              onChange={(e) => setName(e.target.value)}
            />
            <button
              type="submit"
              className="bg-violet-800 hover:bg-violet-900 p-3 py-1 text-white font-bold rounded-md mx-6"
            >
              Add
            </button>
          </form>
        </div>
        <h2 className="text-3xl font-bold text-gray-700 my-4 capitalize">
          your <span className="text-3xl font-bold text-blue-500">todos</span>
        </h2>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            {...todo}
            handleChange={handleChange}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        ))}
      </div>
    </>
  );
}

export default App;
