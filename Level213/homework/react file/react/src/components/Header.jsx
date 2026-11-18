import React from "react";
import Nav from "./Nav";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { MainContext } from "../pages/FullPage";

function Header({ setCountry }) {
  const [obj, temp, list, setList] = useContext(MainContext);

  function search(e) {
    e.preventDefault();
    setCountry("tbilisi");
    if (e.target.value !== "") {
      setCountry(e.target.value);
      setList((prev) => [...prev, obj]);
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-2xl bg-slate-950/60 border-b border-white/10 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-3.5 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
        {/* Brand identity */}
        <Link
          to="/"
          className="flex items-center gap-3 group transition-transform duration-200 active:scale-95"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-500 via-sky-400 to-indigo-500 flex items-center justify-center shadow-lg shadow-sky-500/25 text-white transition-all duration-300 group-hover:shadow-sky-400/40">
            <svg
              className="w-5 h-5 transition-transform duration-300 group-hover:rotate-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z"
              />
            </svg>
          </div>
          <div>
            <h1 className="text-base sm:text-lg font-bold tracking-tight text-white flex items-center gap-2">
              Atmosphere
              {obj?.location?.name && (
                <span className="hidden md:inline-flex items-center text-[11px] font-semibold px-2 py-0.5 rounded-full bg-sky-500/10 text-sky-300 border border-sky-500/20 tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mr-1.5 animate-pulse" />
                  {obj.location.name}
                </span>
              )}
            </h1>
          </div>
        </Link>

        {/* Search input with sleek command-bar aesthetics */}
        <div className="relative flex items-center w-full sm:max-w-xs md:max-w-sm">
          <div className="absolute left-3.5 pointer-events-none text-slate-400">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            type="text"
            className="w-full bg-white/5 hover:bg-white/[0.08] focus:bg-slate-900/90 border border-white/10 focus:border-sky-400/50 rounded-full py-2 pl-10 pr-14 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400/20 transition-all duration-200 shadow-inner"
            placeholder="Search city or country..."
            onBlur={search}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                search(e);
              }
            }}
          />
          <kbd className="absolute right-3 hidden sm:inline-flex items-center px-1.5 py-0.5 text-[10px] font-medium text-slate-400 bg-white/5 border border-white/10 rounded pointer-events-none">
            ↵
          </kbd>
        </div>

        {/* Navigation pill switcher */}
        <Nav />
      </div>
    </header>
  );
}

export default Header;
