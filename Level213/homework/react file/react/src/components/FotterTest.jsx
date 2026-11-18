import React, { useContext } from "react";
import { MainContext } from "../pages/FullPage";

function FotterTest() {
  const [obj, temp, list, setList] = useContext(MainContext);
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-200 font-medium text-xs">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
      </span>
      <span>
        {obj?.location?.name !== undefined ? obj.location.name : "Station Standby"}
      </span>
    </div>
  );
}

export default FotterTest;
