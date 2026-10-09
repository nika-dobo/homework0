import React, { useState } from "react";

export default function Task4_NameChanger() {
  const [isGoga, setIsGoga] = useState(false);

  return (
    <div>
      <p>{isGoga ? "Hello, Goga!" : "Hello, Guest!"}</p>
      <button onClick={() => setIsGoga(!isGoga)}>Change Name</button>
    </div>
  );
}
