import React, { useState } from "react";
import Todo from "./todo";

function InpunSection() {
  let [tasks, setTasks] = useState([]);

  function submitTask(e) {
    e.preventDefault();
    setTasks((prev) => {
      return [...prev, e.target.task.value];
    });
  }

  return (
    <form onSubmit={submitTask} className="flex gap-10 flex-col justify-center items-center">
      <div className="flex gap-10">
        <input
          type="text"
          name="task"
          placeholder="Enter your name"
          className="w-100 p-2 bg-white"
        />

        <input type="submit" className="bg-emerald-800 p-1.5" />
      </div>

      <Todo task={tasks} />
    </form>
  );
}

export default InpunSection;
