import React from 'react';

function MovieRating({ rating }) {
  return (
    <div className="bg-amber-50 border border-amber-200/60 rounded-xl p-3 space-y-1">
      <p className="text-sm font-semibold text-amber-800">⭐ Rating: {rating}</p>
      <p className="text-xs font-bold text-amber-900">
        {rating >= 4.8 ? "🔥 Top Rated" : "👍 Good Rating"}
      </p>
    </div>
  );
}

export default MovieRating;
