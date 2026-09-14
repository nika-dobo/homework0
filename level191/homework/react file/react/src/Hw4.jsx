import React from "react";

function Hw4() {
  const teams = [
    {
      id: 1,
      name: "Red Team",
      members: ["Giorgi", "Nika", "Saba"],
    },
    {
      id: 2,
      name: "Blue Team",
      members: ["Luka", "Dato", "Ana"],
    },
  ];

  let teamsInfo = teams.map((info) => (
    <div key={info.id} className="m-5">
      {info.name}
      <br />
      {info.members.map((member) => (
        <li key={member}>{member}</li>
      ))}
    </div>
  ));

  return <>{teamsInfo}</>;
}

export default Hw4;
