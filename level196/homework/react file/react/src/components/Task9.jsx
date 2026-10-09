import React, { useState } from "react";
import User from "./User";

export default function Task9_UserStatus() {
  const [isOnline, setIsOnline] = useState(false);

  const handleToggleOnline = () => {
    setIsOnline(!isOnline);
  };

  return (
    <div>
      <User
        name="Goga"
        isOnline={isOnline}
        onToggleOnline={handleToggleOnline}
      />
    </div>
  );
}
