import React from "react";
import AddTodo from "./AddToDo";
import ViewTodo from "./ViewToDo";


const App = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center py-10 px-4">
      <div className="w-full max-w-md bg-white/20 backdrop-blur-lg rounded-xl shadow-2xl overflow-hidden border border-white/30">
        <div className="p-8">
          <h1 className="text-3xl font-extrabold text-white text-center mb-8 drop-shadow-md">
            TaskMaster
          </h1>
          <AddTodo />
          <ViewTodo />
        </div>
      </div>
    </div>
  );
};

export default App;
