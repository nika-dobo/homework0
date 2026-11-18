import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MainContext } from "./FullPage";
import Hero from "../components/Hero";

function Hystory() {
  const [obj, temp, list, setList] = useContext(MainContext);
  const historyItems = Array.isArray(list) ? list.filter(Boolean) : [];

  return (
    <main className="flex-1 flex flex-col relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-8 py-8 sm:py-12">
      <Hero />

      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-6 border-b border-white/10">
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
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Timeline</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Search History
          </h1>
          <p className="text-sm text-slate-400 mt-1">
            Atmospheric readings cached from your recent queries
          </p>
        </div>

        {historyItems.length > 0 && (
          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-400 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
              {historyItems.length}{" "}
              {historyItems.length === 1 ? "entry" : "entries"} recorded
            </span>
            <button
              onClick={() => setList([])}
              className="text-xs text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 px-3 py-1.5 rounded-full border border-white/10 transition-colors"
            >
              Clear all
            </button>
          </div>
        )}
      </div>

      {/* Empty State */}
      {historyItems.length === 0 ? (
        <div className="w-full max-w-md mx-auto my-auto text-center py-16 px-6 rounded-3xl bg-slate-900/40 backdrop-blur-xl border border-white/10 shadow-2xl">
          <div className="w-14 h-14 mx-auto rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 mb-4">
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-white mb-1.5">
            No Search History
          </h2>
          <p className="text-sm text-slate-400 mb-6">
            Search for a city or country in the bar above to track and preserve
            snapshots.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-sky-500/20 hover:bg-sky-500/30 text-sky-300 border border-sky-500/30 text-sm font-medium transition-all shadow-sm"
          >
            Go to Live Station
          </Link>
        </div>
      ) : (
        /* History Grid */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {historyItems.map((country, idx) => {
            const locName = country?.location?.name || "Unknown Station";
            const locCountry = country?.location?.country;
            const locRegion = country?.location?.region;
            const tempVal = country?.current?.temp_c;
            const condText = country?.current?.condition?.text || "Clear";
            const condIcon = country?.current?.condition?.icon;
            const humVal = country?.current?.humidity;
            const windVal = country?.current?.wind_kph;
            const recordedAt =
              country?.location?.localtime || country?.current?.last_updated;

            return (
              <article
                key={`${locName}-${idx}`}
                className="rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-white/10 p-5 hover:border-white/20 transition-all duration-300 shadow-xl flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-sky-300 transition-colors">
                        {locName}
                      </h3>
                      {locCountry && (
                        <p className="text-xs text-slate-400 mt-0.5">
                          {locRegion ? `${locRegion}, ` : ""}
                          {locCountry}
                        </p>
                      )}
                    </div>
                    {condIcon && (
                      <img
                        src={condIcon}
                        alt={condText}
                        className="w-10 h-10 object-contain drop-shadow"
                      />
                    )}
                  </div>

                  <div className="flex items-baseline justify-between my-2">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-extralight tracking-tight text-white tabular-nums">
                        {tempVal !== undefined ? tempVal : "--"}
                      </span>
                      <span className="text-xl font-light text-sky-400">
                        °C
                      </span>
                    </div>
                    <span className="text-xs font-medium text-slate-300 px-2 py-1 rounded-full bg-white/5 border border-white/10">
                      {condText}
                    </span>
                  </div>
                </div>

                <div className="pt-4 mt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-3">
                    <span>
                      Humidity:{" "}
                      <strong className="text-slate-200">
                        {humVal !== undefined ? `${humVal}%` : "--"}
                      </strong>
                    </span>
                    {windVal && (
                      <span>
                        Wind:{" "}
                        <strong className="text-slate-200">
                          {windVal} km/h
                        </strong>
                      </span>
                    )}
                  </div>
                  {recordedAt && (
                    <span className="text-[11px] font-mono text-slate-500">
                      {recordedAt.split(" ")[1] || recordedAt}
                    </span>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      )}
    </main>
  );
}

export default Hystory;
