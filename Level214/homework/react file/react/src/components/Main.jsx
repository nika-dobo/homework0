import React from "react";
import Hero from "./Hero";
import WetherBox from "./WetherBox";

function Main() {
  return (
    <main className="flex-1 flex flex-col justify-center items-center px-4 py-12 sm:py-20 relative z-10 w-full max-w-5xl mx-auto">
      <Hero />
      <WetherBox />
    </main>
  );
}

export default Main;
