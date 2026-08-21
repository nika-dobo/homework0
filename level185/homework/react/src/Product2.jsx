import React from "react";

function Product2(props) {
  return (
    <div id="card1">
      <h1>{props.name}</h1>
      <h1>{props.price}</h1>
      <h1>{props.category}</h1>
    </div>
  );
}

export default Product2;
