import React from 'react';

function MovieStatus({ isAvailable }) {
  return (
    <div className="text-sm font-semibold">
      <p className={isAvailable ? "text-emerald-600" : "text-rose-600"}>
        {isAvailable ? "🟢 Available" : "🔴 Not Available"}
      </p>
    </div>
  );
}

export default MovieStatus;
