import React from "react";

function Hw() {
  const games = [
    { id: 1, name: "Minecraft", genre: "Adventure", hours: 120 },
    { id: 2, name: "FIFA", genre: "Sports", hours: 45 },
    { id: 3, name: "GTA V", genre: "Action", hours: 200 },
    { id: 4, name: "The Sims", genre: "Simulation", hours: 30 },
  ];

  const gameInfo = games.map((game) => (
    <div key={game.id}>
      <h1>{game.name}</h1>
      <p>{game.genre === "Action" ? "სათავგადასავლო მოქმედება" : game.genre}</p>
      <p>{game.hours >= 100 ? "ბევრი დროა!" : game.hours}</p>
    </div>
  ));

  return <div>{gameInfo}</div>;
}

export default Hw;
