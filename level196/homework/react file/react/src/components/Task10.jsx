import React, { useState } from "react";
import Product from "./Product";

export default function Task10_ProductApp() {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <Product name="Laptop" price={1200} quantity={count} onAdd={handleAdd} />
    </div>
  );
}
