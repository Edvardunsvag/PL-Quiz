import React from "react";

export default function Start({ timer, startGame, newGame }) {
  return (
    <div className="flex flex-row space-x-12 justify-center mt-6">
      <button
        type="button"
        onClick={startGame}
        className="px-4 py-2 w-1/3 bg-green-400 rounded text-xl font-semibold  hover:bg-green-500">
        Start
      </button>
      {/* <button
        type="button"
        onClick={newGame}
        className="px-4 py-2 bg-red-400 rounded text-xl font-semibold w-52 hover:bg-red-500">
        Restart
      </button> */}
    </div>
  );
}
