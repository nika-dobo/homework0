import { useState } from "react";

function Hw1() {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>ჩემი სახელია: {name}</p>
    </div>
  );
}

export default Hw1;
