import React from "react";

export default function Product({ name, price, count, setCount }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>Price: ${price}</p>
      <p>Quantity: {count}</p>
      <button onClick={() => setCount(count + 1)}>Add</button>
    </div>
  );
}
