import React from "react";

function hw3() {
  const festivalName = "Tbilisi Music Fest";
  const city = "Tbilisi";
  const month = "September";
  const day = 18;

  const visitors = 8500;
  const capacity = 10000;

  const weather = "sunny";
  const temperature = 27;

  const isWeekend = true;
  const hasVipZone = true;
  const ageLimit = 16;

  const userAge = 18;

  const mainArtist = "Imagine Dragons";
  const startHour = 19;

  let festivalStatus = "🙂 Plenty of Space";
  if (visitors >= 9000) {
    festivalStatus = "🔥 Almost Full";
  } else if (visitors >= 7000) {
    festivalStatus = "⚡ Getting Busy";
  }

  let weatherMessage = "🌤️ Check the weather before leaving.";
  if (weather === "sunny") {
    weatherMessage = "☀️ Perfect weather for the festival!";
  } else if (weather === "rainy") {
    weatherMessage = "🌧️ Don't forget your umbrella!";
  }

  let ageMessage = "❌ You cannot enter the festival.";
  if (userAge >= ageLimit) {
    ageMessage = "✅ You can enter the festival.";
  }

  let finalMessage = "ℹ️ Check all festival information before entering.";
  if (userAge < ageLimit) {
    finalMessage = "🚫 You cannot attend this festival.";
  } else if (userAge >= ageLimit && capacity - visitors !== 0) {
    finalMessage = "✅ You can enter the festival.";
  } else if (
    userAge >= ageLimit &&
    capacity - visitors !== 0 &&
    weather === "sunny"
  ) {
    finalMessage = "🎉 Everything is ready! Have fun!";
  }

  return (
    <>
      <h1>{festivalName}</h1>
      <p>City: {city} </p>
      <p>
        Month: {month} {day}
      </p>
      <p>Main Artist: {mainArtist}</p>
      <p>Festival starts at {startHour}</p>
      <p>Available places: {capacity - visitors}</p>
      <p>{festivalStatus}</p>
      <p>{weatherMessage}</p>
      <p>
        {(temperature) =>
          30
            ? "🔥 Very Hot"
            : (temperature) =>
                20
                  ? "😎 Comfortable Weather"
                  : (temperature) => (10 ? "🧥 A Little Cold" : "🥶 Very Cold")
        }
      </p>
      <p>{isWeekend === true && "🎉 Weekend Festival!"}</p>
      <p>{hasVipZone === true && "⭐ VIP Zone is available"}</p>
      <p>{ageMessage}</p>
      <p>
        {userAge < ageLimit
          ? "🚫 Entry Denied"
          : hasVipZone === true
            ? "⭐ VIP Entry Available"
            : "🎫 Regular Entry"}
      </p>
    </>
  );
}

export default hw3;
