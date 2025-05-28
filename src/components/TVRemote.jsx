import React, { useState } from "react";

export default function TVRemote({ onChannelChange, onStandby, onInfo }) {
    const [expanded, setExpanded] = useState(true);

    const handleButtonClick = (digit) => {
        onChannelChange(digit);
    };

    // Arrow icons (SVG)
    const ArrowUp = (
        <svg width="20" height="20" fill="currentColor"><path d="M10 6l-6 6h12z"/></svg>
    );
    const ArrowDown = (
        <svg width="20" height="20" fill="currentColor"><path d="M10 14l6-6H4z"/></svg>
    );

    // Height of remote (including padding) is about 340px, so -300px will leave the top bar peeking out
    const mobileBottom = expanded ? "1rem" : "-260px";

    return (
        <div
            className={`
                fixed left-4 bg-gray-800 text-white p-4 rounded shadow-lg transition-all duration-300
                sm:bottom-4
                z-50
            `}
            style={{
                width: 240,
                bottom: mobileBottom,
                overflow: "hidden",
            }}
        >
            <div className="flex justify-between items-center mb-2">
                <button
                    className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-full text-xs font-bold"
                    onClick={onStandby}
                    aria-label="Standby"
                >
                    ⏻
                </button>
                {/* Toggle button only on mobile */}
                <button
                    className="ml-2 flex items-center justify-center w-8 h-8 rounded-full bg-gray-700 hover:bg-gray-600"
                    onClick={() => setExpanded((e) => !e)}
                    aria-label={expanded ? "Collapse remote" : "Expand remote"}
                >
                    {expanded ? ArrowDown : ArrowUp}
                </button>
                {/* Spacer for desktop */}
                <div className="hidden" style={{ width: 32 }} />
            </div>
                <div className="grid grid-cols-3 gap-2">
                    {[1,2,3,4,5,6,7,8,9].map((num) => (
                        <button
                            key={num}
                            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                            onClick={() => handleButtonClick(num)}
                        >
                            {num}
                        </button>
                    ))}
                    <div className="col-span-3 flex justify-center mt-2">
                        <button
                            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-2 rounded"
                            onClick={() => handleButtonClick(0)}
                        >
                            0
                        </button>
                    </div>
                    <div className="col-span-3 flex justify-center mt-2">
                        <button
                            className="bg-green-500 hover:bg-green-600 text-white px-8 py-2 rounded"
                            onClick={onInfo}
                        >
                            Info
                        </button>
                    </div>
                </div>
        </div>
    );
}