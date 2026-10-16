import React, { useState } from "react";

function TodoItem({ itme, index }) {
  let [status, setStatus] = useState("Pending");

  function Done() {
    setStatus("Done");
  }

  function Delete() {
    setStatus("Not Done");
  }

  return (
    <div className="flex gap-10 justify-between p-2">
      <p>{index + 1}</p>
      <p>{itme}</p>
      <p>{status}</p>
      <div className="flex gap-10">
        <button type="button" onClick={Done}>
          ✅
        </button>
        <button type="button" onClick={Delete}>
          ❌
        </button>
      </div>
    </div>
  );
}

function Todo({ task }) {
  return (
    <div className="w-200 p-2 bg-white rounded-xl">
      <div className="flex gap-10 justify-between p-2">
        <h1>#</h1>
        <h1>Tasks</h1>
        <h1>Status</h1>
        <h1>Action</h1>
      </div>
      {task &&
        task.map((itme, index) => {
          return <TodoItem key={index} itme={itme} index={index} />;
        })}
    </div>
  );
}

export default Todo;
