import React, { useState } from "react";
import Todo from "./todo";

function InpunSection({ num = 0 }) {
  let [tasks, setTasks] = useState([]);
  console.log(num);

  function submitTask(e) {
    e.preventDefault();
    setTasks((prev) => {
      return [...prev, e.target.task.value];
    });
  }

  function clear() {
    setTasks([]);
  }

  return (
    <>
      <div>
        <img
          src="../../public/simple-black-white-handdrawn-khinkali-260nw-2656755517-removebg-preview.png"
          alt=""
        />
        <h1>{num}</h1>
      </div>
      <form
        onSubmit={submitTask}
        className="flex gap-10 flex-col justify-center items-center"
      >
        <div className="flex gap-10">
          <input
            type="text"
            name="task"
            placeholder="Enter your name"
            className="w-100 p-2 bg-white"
          />

          <input type="submit" className="bg-emerald-800 p-1.5" />
          <h2 className="bg-emerald-800 p-1.5" onClick={clear}>
            clear
          </h2>
        </div>

        <Todo task={tasks} setTasks={setTasks} />
      </form>
    </>
  );
}

export default InpunSection;
