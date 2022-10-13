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
  redirect,
  finished,
  loggedIn,
  user,
}) {
  console.log("start in her: ", start);
  return (
    <>
      <div className={`${!loggedIn ? "pointer-events-none opacity-10" : null}`}>
        <div
          onSubmit={(e) => {
            e.preventDefault();
          }}>
          <div className="mb-6">
            <h2 className="text-white text-2xl">{`Hello, ${
              user.name ? user.name : "Guest!"
            }`}</h2>
          </div>
          <div
            className={`${!start ? "opacity-50 pointer-events-none	" : null}`}>
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
            finished={finished}
            redirect={redirect}
            timer={timer}
            startGame={startGame}
            newGame={newGame}
            submitName={submitName}></Start>
        )}
      </div>
      {!loggedIn && (
        <div id="content">
          <h2>You need to log in to play the game!</h2>
        </div>
      )}
    </>
  );
}
