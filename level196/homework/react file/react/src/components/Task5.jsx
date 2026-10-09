import React, { useState } from "react";

export default function Task5_SecretMessage() {
  const [show, setShow] = useState(true);

  return (
    <div>
      {show && <p>This is a secret message!</p>}
      <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
    </div>
  );
}
