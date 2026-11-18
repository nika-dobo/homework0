import React from "react";
import FotterTest from "./FotterTest";

function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-slate-950/60 backdrop-blur-xl py-5 mt-auto relative z-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-slate-400">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
          <p className="font-medium text-slate-300">nika dobo</p>
          <span className="text-slate-600">•</span>
          <span>Weather Data Service</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-slate-500 text-xs">Active Location:</span>
          <FotterTest />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
