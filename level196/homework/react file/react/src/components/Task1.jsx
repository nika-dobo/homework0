import React, { useState } from "react";

export default function Task1_GuestCounter() {
  const [guests, setGuests] = useState(0);

  return (
    <div>
      <p>Guests: {guests}</p>
      <button onClick={() => setGuests(guests + 1)}>Add Guest</button>
      <button onClick={() => setGuests(guests > 0 ? guests - 1 : 0)}>
        Remove Guest
      </button>
    </div>
  );
}
