import React, { useState } from "react";
import InpunSection from "./InpunSection";

function TodoItem({ itme, index, setTasks, arr }) {
  let [status, setStatus] = useState("Pending");
  let [count, setcount] = useState(0);
  function Done() {
    setStatus("Done");
    setcount((count += 1));
    console.log(count);
  }

  function Delete(e) {
    let newArr = arr.filter((id, ind) => ind !== index);
    setTasks(newArr);
  }

  return (
    <>
      <div className="flex gap-10 justify-between p-2">
        <p>{index + 1}</p>
        <p>{itme}</p>
        <p>{status}</p>
        <div className="flex gap-10">
          <button type="button" onClick={Done}>
            ✅
          </button>
          <button type="button" onClick={Delete} id={index}>
            ❌
          </button>
        </div>
      </div>
      <InpunSection num={count} />;
    </>
  );
}

function Todo({ task, setTasks }) {
  return (
    <div className="w-200 p-2 bg-white rounded-xl">
      <div className="flex gap-10 justify-between p-2">
        <h1>#</h1>
        <h1>Tasks</h1>
        <h1>Status</h1>
        <h1>Action</h1>
      </div>
      {task.map((itme, index) => {
        return (
          <TodoItem
            key={index}
            itme={itme}
            index={index}
            setTasks={setTasks}
            arr={task}
          />
        );
      })}
    </div>
  );
}

export default Todo;
