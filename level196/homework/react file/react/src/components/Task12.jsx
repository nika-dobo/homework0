import React, { useState } from "react";
import Greeting from "./Greeting";

export default function Task12_GreetingApp() {
  const [showMessage, setShowMessage] = useState(false);

  const handleToggleMessage = () => {
    setShowMessage((prev) => !prev);
  };

  return (
    <div className="task-body">
      <Greeting
        name="Goga"
        showMessage={showMessage}
        onToggleMessage={handleToggleMessage}
      />
    </div>
  );
}
