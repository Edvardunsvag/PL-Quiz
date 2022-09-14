import React, { useEffect, useState } from "react";

import ScoreItem from "./ScoreItem";
export default function Registration({
  regHandleChange,
  regHandleClick,
  change,
  leaderboard,
}) {
  const [sorted, setSorted] = useState([]);

  useEffect(() => {
    let sorted = leaderboard.sort((a, b) => (a.score > b.score ? 1 : -1));

    setSorted(sorted.reverse());
    return () => {};
  }, [leaderboard]);

  return (
    <>
      <div className="jumbotron">
        <div className="column">
          <div className="head name-reg">
            <input
              className="playerInput"
              type="text"
              placeholder="Write your name, E.g Lars"
              value={change}
              onChange={regHandleChange}
            />
            <button
              type="button"
              onClick={regHandleClick}
              className="btn btn-primary Start submit-btn">
              Submit Name
            </button>
          </div>
        </div>
        <div className="column">
          <div className="list-group">
            <div className="head">
              <h1>Leaderboard</h1>
              {sorted.map((item, index) => {
                return (
                  <ScoreItem
                    key={index}
                    count={item.score}
                    name={item.name}></ScoreItem>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
