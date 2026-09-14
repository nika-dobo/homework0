import React from "react";

function Hw5() {
  const cart = [
    { id: 1, name: "Keyboard", price: 120, quantity: 2 },
    { id: 2, name: "Mouse", price: 60, quantity: 1 },
    { id: 3, name: "Monitor", price: 700, quantity: 2 },
  ];

  let cartItems = cart.map((info) => (
    <div key={info.id} className="m-5">
      {info.name} <br />
      price:{info.price} <br />
      quantity:{info.quantity} <br />
      total: {info.price * info.quantity}
    </div>
  ));

  return <div>{cartItems}</div>;
}

export default Hw5;
