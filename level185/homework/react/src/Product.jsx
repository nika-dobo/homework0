import React from "react";

function Product(props) {
  return (
    <div>
      <img src={props.img} />
      <div>{props.name}</div>
      <div>{props.price}</div>
    </div>
  );
}

export default Product;
