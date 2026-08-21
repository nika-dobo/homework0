import React from "react";

function Student(props) {
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <h3>{props.age}</h3>
      <p>{props.course}</p>
    </div>
  );
}

export default Student;
