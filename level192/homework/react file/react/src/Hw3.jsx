import React from "react";

function Hw3() {
  const destinations = [
    { id: 1, city: "Paris", country: "France", days: 5, price: 1200 },
    { id: 2, city: "Rome", country: "Italy", days: 3, price: 800 },
    { id: 3, city: "Tokyo", country: "Japan", days: 10, price: 2500 },
    { id: 4, city: "Tbilisi", country: "Georgia", days: 4, price: 400 },
  ];

  const destinationInfo = destinations.map((dest) => (
    <div key={dest.id}>
      <h1>{dest.country}</h1>
      <p>{dest.city}</p>
      <p>{dest.days >= 7 ? "ხანგრძლივი მოგზაურობა" : dest.days}</p>
      <p>{dest.price <= 1000 && "ბიუჯეტური მოგზაურობა"}</p>
    </div>
  ));

  return <div>{destinationInfo}</div>;
}

export default Hw3;
