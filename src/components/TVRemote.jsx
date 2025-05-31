import React, { useState } from "react";

export default function TVRemote({ onPageChange, onStandby, onInfo, currentView }) {
  const [expanded, setExpanded] = useState(true);
  const infoPages = [210, 220, 230, 300, 400];
  const isInfoPage = infoPages.includes(currentView);

  const handleButtonClick = (digit) => {
    onPageChange(digit);
  };

  const ArrowUp = (
    <svg width="20" height="20" fill="currentColor"><path d="M10 6l-6 6h12z"/></svg>
  );
  const ArrowDown = (
    <svg width="20" height="20" fill="currentColor"><path d="M10 14l6-6H4z"/></svg>
  );

  const mobileBottom = expanded ? "1rem" : "-260px";

  return (
    <div
      className="fixed left-4 backdrop-blur-md bg-black/60 border-2 border-cyan-400 text-white p-4 rounded-xl shadow-[0_0_20px_5px_rgba(0,255,255,0.4)] transition-all duration-300 sm:bottom-4 z-50"
      style={{
        width: 240,
        bottom: mobileBottom,
        overflow: "hidden",
      }}
    >
      <div className="flex justify-between items-center mb-4">
        <button
          className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-full text-xs font-bold cursor-pointer shadow-[0_0_10px_rgba(255,0,0,0.6)]"
          onClick={onStandby}
          aria-label="Standby"
        >
          ⏻
        </button>
        <button
          className="ml-2 flex items-center justify-center w-8 h-8 rounded-full bg-gray-700 hover:bg-gray-600 cursor-pointer shadow-[0_0_6px_rgba(255,255,255,0.3)]"
          onClick={() => setExpanded((e) => !e)}
          aria-label={expanded ? "Collapse remote" : "Expand remote"}
        >
          {expanded ? ArrowDown : ArrowUp}
        </button>
        <div className="hidden" style={{ width: 32 }} />
      </div>

      <div className="grid grid-cols-3 gap-2">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
          <button
            key={num}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded cursor-pointer transition duration-200 shadow-[0_0_8px_rgba(0,191,255,0.6)]"
            onClick={() => handleButtonClick(num)}
          >
            {num}
          </button>
        ))}

        <div className="col-span-3 flex justify-center mt-2">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-2 rounded cursor-pointer transition duration-200 shadow-[0_0_8px_rgba(0,191,255,0.6)]"
            onClick={() => handleButtonClick(0)}
          >
            0
          </button>
        </div>

        <div className="col-span-3 flex justify-center mt-2">
          <button
            className={`
              px-8 py-2 rounded font-bold transition-all
              ${isInfoPage
                ? "bg-green-500 hover:bg-green-600 animate-pulse cursor-pointer shadow-[0_0_10px_rgba(0,255,100,0.6)]"
                : "bg-gray-500 cursor-not-allowed opacity-50"
              }
            `}
            onClick={isInfoPage ? onInfo : undefined}
            disabled={!isInfoPage}
          >
            Info
          </button>
        </div>
      </div>
    </div>
  );
}
