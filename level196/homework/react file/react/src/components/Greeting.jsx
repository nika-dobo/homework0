import React from "react";

export default function Greeting({ name, showMessage, setShowMessage }) {
  return (
    <div>
      <p>Hello, {name}!</p>
      <button onClick={() => setShowMessage(!showMessage)}>Show Message</button>
      {showMessage && <p>Welcome to React!</p>}
    </div>
  );
}
