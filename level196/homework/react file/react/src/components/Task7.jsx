import React, { useState } from "react";

export default function Task7_AgeCounter() {
  const [age, setAge] = useState(18);

  return (
    <div>
      <p>Age: {age}</p>
      <button onClick={() => setAge(age + 1)}>Older</button>
      <button onClick={() => setAge(age > 1 ? age - 1 : 1)}>Younger</button>
    </div>
  );
}
