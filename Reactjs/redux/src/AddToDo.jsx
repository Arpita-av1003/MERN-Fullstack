import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./reducer/TodoSlice.js";

const AddTodo = () => {
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    if (inputText == "") return;

    dispatch(addTodo({ text: inputText }));
  };
  return (
    <form onSubmit={handleClick} className="mb-6">
      <div className="flex shadow-lg rounded-lg overflow-hidden transition-all duration-300 focus-within:ring-2 focus-within:ring-white/50">
        <input
          type="text"
          value={inputText}
          placeholder="What needs to be done?"
          className="w-full px-4 py-3 text-gray-700 bg-white/90 focus:outline-none placeholder-gray-500"
          onChange={(e) => setInputText(e.target.value)}
        />
        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-6 py-3 transition duration-300 ease-in-out cursor-pointer flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        </button>
      </div>
    </form>
  );
};

export default AddTodo;