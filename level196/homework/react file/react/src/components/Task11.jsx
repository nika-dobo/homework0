import React, { useState } from "react";
import Counter from "./Counter";

export default function Task11_CounterApp() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <Counter count={count} onIncrement={incrementCount} />
    </div>
  );
}
