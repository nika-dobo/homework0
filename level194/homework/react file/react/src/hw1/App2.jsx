import React from "react";
import UserCard from "./UserCard";

function App() {
  const user = {
    name: "nika",
    age: 18,
    city: "Tbilisi",
  };

  return (
    <>
      <UserCard name={user.name} age={user.age} city={user.city} />
    </>
  );
}

export default App;
