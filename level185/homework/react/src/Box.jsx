import React from "react";

function Box(props) {
  return (
    <div
      style={{
        width: "100px",
        height: "100px",
        backgroundColor: props.color,
      }}
    ></div>
  );
}

export default Box;
