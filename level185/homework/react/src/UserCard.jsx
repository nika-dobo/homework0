import React from "react";

function UserCard(props) {
  const isOnlie = props.isOnlie ? "Online" : "Offline";

  return (
    <div id="userCard">
      <h1 id="name">{props.name}</h1>
      <p id="age">{props.age}</p>
      <p id="job">{props.job}</p>
      <p id="city">{props.city}</p>
      <p id="online">{isOnlie}</p>
    </div>
  );
}

export default UserCard;
