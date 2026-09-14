import React from "react";

function Hw6() {
  const users = [
    {
      id: 1,
      name: "Giorgi",
      age: 22,
      skills: ["JavaScript", "React", "CSS"],
    },
    {
      id: 2,
      name: "Nika",
      age: 25,
      skills: ["Python", "Django"],
    },
  ];

  let userInfo = users.map((info) => (
    <div key={info.id} className="m-5">
      {info.name} <br />
      age:{info.age} <br />
      skills:<br />
      {info.skills.map((skill) => (
        <li key={skill} className="ml-5">{skill}</li>
      ))}
    </div>
  ));

  return <div>{userInfo}</div>;
}

export default Hw6;
