import React from "react";

export default function User({ name, isOnline, setIsOnline }) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Status: {isOnline ? "Online" : "Offline"}</p>
      <button onClick={() => setIsOnline(!isOnline)}>Go Online</button>
    </div>
  );
}
