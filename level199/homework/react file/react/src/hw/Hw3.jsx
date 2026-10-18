import { useState } from "react";

function Hw3() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>{title}</p>
      <p>{title.length}</p>
      <p>{text}</p>
      <p>{text.length}</p>
    </div>
  );
}

export default Hw3;
