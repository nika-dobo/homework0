import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { MainContext } from "../pages/FullPage";

function Nav() {
  const location = useLocation();
  const context = useContext(MainContext);
  const list = context ? context[2] : [];

  const isHome = location.pathname === "/";
  const isHistory = location.pathname.toLowerCase() === "/hystory";

  return (
    <nav className="inline-flex items-center p-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl shadow-sm">
      <Link
        to="/"
        className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
          isHome
            ? "bg-white/15 text-white shadow-sm border border-white/15 backdrop-blur-md"
            : "text-slate-400 hover:text-slate-200 hover:bg-white/5 border border-transparent"
        }`}
      >
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
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
        <span>Live</span>
      </Link>

      <Link
        to="/Hystory"
        className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
          isHistory
            ? "bg-white/15 text-white shadow-sm border border-white/15 backdrop-blur-md"
            : "text-slate-400 hover:text-slate-200 hover:bg-white/5 border border-transparent"
        }`}
      >
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
        <span>History</span>
        {Array.isArray(list) && list.length > 0 && (
          <span className="ml-0.5 px-1.5 py-0.2 rounded-full text-[10px] font-bold bg-sky-500/20 text-sky-300 border border-sky-400/30">
            {list.length}
          </span>
        )}
      </Link>
    </nav>
  );
}

export default Nav;
