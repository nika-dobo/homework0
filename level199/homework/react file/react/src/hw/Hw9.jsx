import { useState } from "react";

function Hw9() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const handleAddTask = () => {
    setTasks([...tasks, task]);
    setTask("");
  };

  return (
    <div>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>

      <ul>
        {tasks.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Hw9;
