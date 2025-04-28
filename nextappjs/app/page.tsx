"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="p-6 w-64 text-center color-black bg-black border rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">Counter</h2>
        <p className="text-xl mb-4">{count}</p>
        <div className="space-x-2">
          <button
            onClick={increment}
            className="px-3 py-1 rounded bg-blue-500 text-white hover:bg-blue-600"
          >
            +1
          </button>
          <button
            onClick={decrement}
            className="px-3 py-1 rounded bg-red-500 text-white hover:bg-red-600"
          >
            -1
          </button>
          <button
            onClick={reset}
            className="px-3 py-1 rounded bg-gray-500 text-white hover:bg-gray-600"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
