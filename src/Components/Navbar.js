import React from "react";

import { Link } from "react-router-dom";
export default function Navbar({ start, timer }) {
  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex justify-evenly space-x-6">
        <Link
          to="/"
          className={`font-bold flex p-4 text-white rounded bg-red-300 hover:bg-red-400 hover:no-underline items-center focus:bg-red-400`}>
          <h4 className="">Home</h4>
        </Link>

        {start ? (
          <h2 className="flex p-4 font-bold text-5xl items-center">{timer}</h2>
        ) : (
          <h2 className="flex p-4 font-bold text-2xl items-center">
            Premierleague Quiz
          </h2>
        )}

        <Link
          to="/RegPage"
          className="flex p-6 text-white rounded-2xl bg-red-300 hover:bg-red-400 hover:no-underline items-center focus:bg-red-400">
          <h4 className="font-bold">Scoreboard</h4>
        </Link>
      </div>
    </nav>
  );
}
