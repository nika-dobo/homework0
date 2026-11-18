import React, { useContext } from "react";
import { MainContext } from "../pages/FullPage";

function Hero() {
  const context = useContext(MainContext);
  const obj = context ? context[0] : null;
  const isNight = obj?.current?.is_day === 0;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none select-none">
      <img
        className="w-full h-full object-cover object-center scale-105 filter brightness-[0.42] contrast-[1.15] transition-all duration-1000"
        src="https://www.pixelstalk.net/wp-content/uploads/images5/Winter-Aesthetic-Wallpaper-Computer.jpg"
        alt="Weather background"
      />

      {/* Atmospheric depth gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/40 to-slate-950/95" />

      {/* Dynamic ambient celestial lights */}
      <div
        className={`absolute -top-40 -left-40 w-[32rem] h-[32rem] rounded-full blur-[100px] transition-colors duration-1000 ${
          isNight ? "bg-indigo-600/20" : "bg-sky-400/20"
        }`}
      />
      <div
        className={`absolute top-1/3 -right-40 w-[28rem] h-[28rem] rounded-full blur-[120px] transition-colors duration-1000 ${
          isNight ? "bg-purple-600/15" : "bg-teal-400/15"
        }`}
      />
      <div className="absolute -bottom-40 left-1/4 w-[36rem] h-[36rem] rounded-full blur-[120px] bg-blue-600/10" />
    </div>
  );
}

export default Hero;
