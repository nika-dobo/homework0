import React from "react";

function Hw() {
  const products = [
    { id: 1, name: "Laptop", price: 2500, category: "Electronics" },
    { id: 2, name: "Phone", price: 1800, category: "Electronics" },
    { id: 3, name: "Shoes", price: 300, category: "Fashion" },
    { id: 4, name: "Watch", price: 500, category: "Accessories" },
  ];

  let newProducts = products.map((product) => (
    <div key={product.id} className="m-5">
      {product.name +
        " " +
        product.price +
        " " +
        product.category +
        "" +
        product.id}
    </div>
  ));

  return (
    <>
    {newProducts}
    </>
  )
}

export default Hw;

