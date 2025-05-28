import { useState } from "react";

export default function TVRemote({ onChannelChange }) {
    const [input, setInput] = useState("");

    const handleChannelChange = (digit) => {
        const newInput = (input + digit).slice(-3); // keep max 3 digits
        setInput(newInput);

        if (newInput.length === 3) {
            onChannelChange(Number(newInput));
            setInput(""); // reset after 3 digits
        }
    };

    return (
        <div className="fixed bottom-4 right-4 bg-gray-800 text-white p-4 rounded shadow-lg">
            <h2 className="text-lg font-bold mb-2">Remotely useful</h2>
            <div className="mb-2 text-center text-xl tracking-widest">
                {input.padStart(3, "–")}
            </div>
            <div className="grid grid-cols-3 gap-2">
                {[1,2,3,4,5,6,7,8,9].map((num) => (
                    <button
                        key={num}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                        onClick={() => handleChannelChange(num)}
                    >
                        {num}
                    </button>
                ))}
                <div className="col-span-3 flex justify-center mt-2">
                    <button
                        className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-2 rounded"
                        onClick={() => handleChannelChange(0)}
                    >
                        0
                    </button>
                </div>
            </div>
        </div>
    );
}