import React from "react";

export default function Start({ timer, startGame, newGame, submitName }) {
  console.log("start: ", submitName);
  return (
    <div className="flex flex-row space-x-12 justify-center mt-6">
      {!submitName ? (
        <button
          type="button"
          onClick={startGame}
          className="px-4 py-2 w-1/3 bg-Green rounded text-xl font-semibold  hover:bg-green-500 break-normal">
          <div className="flex justify-center">Start</div>
        </button>
      ) : (
        <button
          type="button"
          onClick={newGame}
          className="px-4 py-2 w-1/3 bg-Green rounded text-xl font-semibold  hover:bg-green-500">
          <div className="flex justify-center">Restart</div>
        </button>
      )}
    </div>
  );
}
