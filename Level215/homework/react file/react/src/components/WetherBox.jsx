import React, { useContext } from "react";
import { MainContext } from "../pages/FullPage";

function WetherBox() {
  const [obj, temp, list, setList] = useContext(MainContext);

  if (!obj) {
    return (
      <div className="w-full max-w-2xl mx-auto rounded-3xl bg-slate-900/50 backdrop-blur-2xl border border-white/10 p-8 sm:p-12 shadow-2xl text-center">
        <div className="w-12 h-12 mx-auto rounded-full bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 mb-4 animate-pulse">
          <svg className="w-6 h-6 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="3"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            />
          </svg>
        </div>
        <h2 className="text-xl font-medium text-white mb-1">
          Detecting Atmosphere
        </h2>
        <p className="text-sm text-slate-400">
          Gathering live meteorological readings...
        </p>
      </div>
    );
  }

  const feelsLike = obj?.current?.feelslike_c;
  const humidity = obj?.current?.humidity;
  const windKph = obj?.current?.wind_kph;
  const windDir = obj?.current?.wind_dir;
  const conditionText = obj?.current?.condition?.text;
  const conditionIcon = obj?.current?.condition?.icon;
  const locationName = obj?.location?.name;
  const locationCountry = obj?.location?.country;
  const locationRegion = obj?.location?.region;
  const localTime = obj?.location?.localtime;

  return (
    <article className="w-full max-w-2xl mx-auto rounded-3xl bg-slate-900/55 backdrop-blur-2xl border border-white/15 p-7 sm:p-10 shadow-2xl shadow-sky-950/40 text-white relative overflow-hidden transition-all duration-300 hover:border-white/25">
      {/* Precision ambient rim accent */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-sky-400/70 to-transparent" />
      <div className="absolute -right-20 -top-20 w-60 h-60 bg-sky-500/10 rounded-full blur-2xl pointer-events-none" />

      {/* Top Header: Geolocation & Condition Capsule */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <div className="inline-flex items-center gap-1.5 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-1">
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span>Atmospheric Station</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            {locationName}
          </h1>
          <p className="text-sm text-slate-400 mt-0.5">
            {locationRegion ? `${locationRegion}, ` : ""}
            {locationCountry}
            {localTime && (
              <span className="text-slate-500 text-xs ml-2 font-mono">
                • {localTime.split(" ")[1] || localTime}
              </span>
            )}
          </p>
        </div>

        {/* Condition badge */}
        <div className="inline-flex items-center gap-3 self-start sm:self-center px-4 py-2 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
          {conditionIcon && (
            <img
              src={conditionIcon}
              alt={conditionText || "Condition"}
              className="w-10 h-10 object-contain drop-shadow"
            />
          )}
          <div className="text-left">
            <p className="text-xs uppercase font-medium tracking-wider text-slate-400">
              Sky
            </p>
            <p className="text-sm font-semibold text-slate-100">
              {conditionText || "Clear"}
            </p>
          </div>
        </div>
      </div>

      {/* Hero Temperature Centerpiece */}
      <div className="py-8 flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
        <div className="flex items-baseline gap-1">
          <span className="text-7xl sm:text-8xl md:text-9xl font-extralight tracking-tighter tabular-nums text-white">
            {temp !== undefined ? temp : "--"}
          </span>
          <span className="text-4xl sm:text-5xl font-thin text-sky-400 select-none">
            °C
          </span>
        </div>

        <div className="space-y-1 text-sm text-slate-300">
          {feelsLike !== undefined && (
            <p className="flex items-center gap-2">
              <span className="text-slate-400">Feels like:</span>
              <span className="font-semibold text-white">{feelsLike}°C</span>
            </p>
          )}
          <p className="text-xs text-slate-400">
            Current observation across local radar
          </p>
        </div>
      </div>

      {/* Meteorological Instrument Bar (Hairline divider layout) */}
      <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
        {/* Metric 1: Temperature */}
        <div className="py-3 sm:py-0 sm:px-4 first:pl-0">
          <span className="text-[11px] font-semibold tracking-wider uppercase text-slate-400 block mb-1">
            Temperature
          </span>
          <div className="text-xl font-bold text-white tracking-tight">
            {temp !== undefined ? `${temp} °C` : "--"}
          </div>
          <span className="text-xs text-slate-400 mt-0.5 block">
            {feelsLike !== undefined ? `Apparent ${feelsLike}°C` : "Stable"}
          </span>
        </div>

        {/* Metric 2: Humidity */}
        <div className="py-3 sm:py-0 sm:px-4">
          <span className="text-[11px] font-semibold tracking-wider uppercase text-slate-400 block mb-1">
            Humidity
          </span>
          <div className="text-xl font-bold text-white tracking-tight">
            {humidity !== undefined ? `${humidity}%` : "--"}
          </div>
          {/* Subtle micro humidity bar */}
          <div className="w-full bg-white/10 h-1.5 rounded-full mt-2 overflow-hidden">
            <div
              className="bg-sky-400 h-full rounded-full transition-all duration-500"
              style={{ width: `${Math.min(100, Math.max(0, humidity || 0))}%` }}
            />
          </div>
        </div>

        {/* Metric 3: Weather & Wind */}
        <div className="py-3 sm:py-0 sm:px-4 last:pr-0">
          <span className="text-[11px] font-semibold tracking-wider uppercase text-slate-400 block mb-1">
            Weather Condition
          </span>
          <div className="text-xl font-bold text-white tracking-tight truncate">
            {conditionText || "--"}
          </div>
          <span className="text-xs text-slate-400 mt-0.5 block truncate">
            {windKph ? `Wind ${windKph} km/h ${windDir || ""}` : "Calm"}
          </span>
        </div>
      </div>
    </article>
  );
}

export default WetherBox;
