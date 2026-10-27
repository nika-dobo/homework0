import React, { useState } from "react";
import list from "./script";

function Box() {
  let [objlist, setLsit] = useState(list);

  function hendlerActive() {
    setLsit((prev) => list.filter((item) => item.bool === true));
  }

  function hendlerInactive() {
    setLsit((prev) => list.filter((item) => item.bool === false));
  }

  function hendlerAll() {
    setLsit((prev) => list.map((item) => item));
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
          Extensions List
        </h1>
        <div className="flex items-center gap-2 self-start sm:self-auto">
          <button
            onClick={hendlerAll}
            className="bg-[#ea5342] text-white px-4 py-1.5 rounded-full text-sm font-medium"
          >
            All
          </button>
          <button
            onClick={hendlerActive}
            className="bg-[#181d33] text-slate-400 hover:text-slate-200 px-4 py-1.5 rounded-full text-sm font-medium"
          >
            Active
          </button>
          <button
            onClick={hendlerInactive}
            className="bg-[#181d33] text-slate-400 hover:text-slate-200 px-4 py-1.5 rounded-full text-sm font-medium"
          >
            Inactive
          </button>
        </div>
      </div>

      {/* Extensions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {objlist.map((item, i) => {
          return (
            <div
              key={i}
              className="bg-[#15192c] border border-[#212744] rounded-2xl p-5 sm:p-6 flex flex-col justify-between min-h-43.75"
            >
              {/* Card Header (Image + Title + Description) */}
              <div className="flex items-start gap-4">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-12 h-12 rounded-xl object-contain shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h2 className="text-white font-semibold text-base sm:text-lg leading-tight">
                    {item.title}
                  </h2>
                  <p className="text-slate-400 text-xs sm:text-sm mt-1.5 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Card Footer (Remove button + Toggle Switch) */}
              <div className="flex items-center justify-between pt-5 mt-auto">
                <button className="px-3.5 py-1 text-xs text-slate-300 rounded-full border border-slate-700/80 bg-[#1e2338]/40 font-medium">
                  Remove
                </button>

                <label className="toggle-switch">
                  <input
                    type="checkbox"
                    defaultChecked={item.bool}
                    onChange={(e) => console.log(e.target.checked)}
                  />
                  <div className="toggle-switch-background">
                    <div className="toggle-switch-handle" />
                  </div>
                </label>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Box;
