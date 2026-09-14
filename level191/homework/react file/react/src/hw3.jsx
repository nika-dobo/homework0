import React from "react";

function Hw3() {
  const movies = [
    { id: 1, title: "Inception", year: 2010, rating: 8.8 },
    { id: 2, title: "Interstellar", year: 2014, rating: 8.7 },
    { id: 3, title: "The Dark Knight", year: 2008, rating: 9.0 },
  ];

  let moviews = movies.map((info) => (
    <div key={info.id} className="m-5">
      ----------------------
      <br />
      {info.title} <br /> {info.year} <br /> {info.rating}
      <br />
      ----------------------
    </div>
  ));
  return <>{moviews}</>;
}

export default Hw3;
