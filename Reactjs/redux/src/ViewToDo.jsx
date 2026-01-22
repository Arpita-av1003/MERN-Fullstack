import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "./reducer/TodoSlice";

const ViewTodo = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div className="space-y-3">
      {todos.length === 0 ? (
        <p className="text-white/70 text-center italic">No tasks yet. Add one above!</p>
      ) : (
        todos.map((todo) => (
          <div
            key={todo.id}
            className={`flex items-center justify-between p-4 rounded-lg shadow-sm backdrop-blur-sm transition-all duration-300 ${
              todo.completed ? "bg-green-100/30" : "bg-white/40"
            }`}
          >
            <div className="flex items-center gap-3 overflow-hidden">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => dispatch(toggleTodo(todo.id))}
                className="w-5 h-5 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500 cursor-pointer accent-indigo-600"
              />
              <span
                className={`text-gray-800 font-medium truncate select-none transition-all duration-300 ${
                  todo.completed ? "line-through text-gray-500 decoration-gray-500" : ""
                }`}
              >
                {todo.text}
              </span>
            </div>
            <button
              onClick={() => dispatch(deleteTodo(todo.id))}
              className="text-red-500 hover:text-red-700 hover:bg-red-100/50 p-2 rounded-full transition-colors duration-200 cursor-pointer"
              title="Delete Task"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default ViewTodo;
