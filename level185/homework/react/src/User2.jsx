import React from "react";

function User2(props) {
  const isOnlie = props.isOnline ? "online" : "offline";

  return (
    <div>
      <h1>{props.name}</h1>
      <p>{isOnlie}</p>
    </div>
  );
}

export default User2;
