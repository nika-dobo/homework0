import React from "react";

function card(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <button>{props.buttonTxt}</button>
    </div>
  );
}

export default card;