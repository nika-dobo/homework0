import React, { useState } from "react";

export default function Task8_AccountStatus() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <p>{isActive ? "Account is active" : "Account is inactive"}</p>
      <button onClick={() => setIsActive(!isActive)}>
        {isActive ? "Deactivate Account" : "Activate Account"}
      </button>
    </div>
  );
}
