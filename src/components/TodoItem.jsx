/* eslint-disable react/prop-types */
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";

const TodoItem = ({
  id,
  name,
  isChecked,
  handleChange,
  deleteTodo,
  editTodo,
}) => {
  return (
    <div className="flex justify-between items-center bg-white border-4 border-slate-700 rounded-md p-2 my-4">
      <div className="flex">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => handleChange(id)}
          className="mx-1"
        />
        <p
          style={{
            textDecoration: isChecked ? "line-through" : "",
          }}
          className="capitalize text-xl font-bold text-red-500"
        >
          {name}
        </p>
      </div>
      <div className="buttons">
        <button
          className="items-center p-2 border-0 rounded-full bg-transparent hover:bg-slate-200"
          onClick={() => editTodo(id)}
        >
          <FaRegEdit className="h-6 w-6" />
        </button>
        <button
          className="items-center p-2 border-0 rounded-full bg-transparent hover:bg-slate-200"
          onClick={() => deleteTodo(id)}
        >
          <RiDeleteBin5Line className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};
export default TodoItem;
