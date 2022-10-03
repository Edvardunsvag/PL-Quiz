import React from "react";
import Start from "./Start";

export default function Input({
  handleChange,
  change,
  focusing,
  start,
  timer,
  startGame,
  newGame,
  submitName,
}) {
  return (
    <>
      <div
        onSubmit={(e) => {
          e.preventDefault();
        }}>
        <div className="">
          <input
            className="p-2 rounded w-3/4 text-2xl"
            ref={focusing}
            placeholder="Ex. Arsenal"
            onChange={handleChange}
            value={change}
            type="text"
          />
        </div>
      </div>
      {!start && (
        <Start
          timer={timer}
          startGame={startGame}
          newGame={newGame}
          submitName={submitName}></Start>
      )}
    </>
  );
}
