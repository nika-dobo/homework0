import React, { useState } from "react";

export default function Task6_Favorites() {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div>
      <p>{isFavorite ? "Favorite ⭐" : "Not Favorite"}</p>
      <button onClick={() => setIsFavorite(!isFavorite)}>
        Add to Favorites
      </button>
    </div>
  );
}
