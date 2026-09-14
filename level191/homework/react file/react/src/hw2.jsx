import React from "react";

function Hw2() {
  const students = [
    { id: 101, name: "Giorgi", score: 95 },
    { id: 102, name: "Nika", score: 78 },
    { id: 103, name: "Saba", score: 88 },
    { id: 104, name: "Luka", score: 67 },
  ];

  let student = students.map((info) => (
    <li key={info.id} className="m-5">
      {info.name} + " score: " + {info.score}
    </li>
  ));
  return <ul>{student}</ul>;
}

export default Hw2;
