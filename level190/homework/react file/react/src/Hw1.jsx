import React from "react";

function Hw1() {
  const username = "Goga";
  const age = 17;
  const isPremium = true;
  const movieName = "Inception";
  const imageUrl =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsgXAndLrxHe5wGOIBGs961Km6D9ckI8LJ8lWGlh75pg&s=10";
  const likes = 125;

  let accessMessage = "You are too young to watch this movie.";
  if (age >= 18) {
    accessMessage = "You can watch this movie.";
  }

  return (
    <>
      <h1>wellcome {username}</h1>
      <p>Movie:{movieName}</p>
      <p>Age: {age}</p>
      <p>Likes doubled: {likes * 2}</p>
      <img src={imageUrl} alt="" />
      <p>Age:{accessMessage}</p>

      <p>{isPremium === true ? "Premium User ⭐" : "Free User"}</p>

      <p>{isPremium && "You have access to exclusive movies! 🎥"}</p>
    </>
  );
}

export default Hw1;
