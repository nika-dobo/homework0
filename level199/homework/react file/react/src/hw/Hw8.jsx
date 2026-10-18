import { useState } from "react";

function Hw8() {
  const [names, setNames] = useState([]);
  const [name, setName] = useState("");

  const handleAddName = () => {
    setNames([...names, name]);
    setName("");
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleAddName}>Add Name</button>

      <p>Names:</p>
      <ul>
        {names.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Hw8;
