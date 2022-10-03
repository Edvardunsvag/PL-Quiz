import React from "react";
import { Link } from "react-router-dom";

export default function Registration({
  regHandleChange,
  regHandleClick,
  change,
  submitName,
}) {
  return (
    <>
      {!submitName && (
        <div className="relative container mx-auto text-center rounded-lg">
          <div className="flex flex-row p-2 my-4 justify-evenly space-x-2">
            <input
              className="p-2 rounded w-3/4 md:text-2xl"
              type="text"
              placeholder="name"
              value={change}
              onChange={regHandleChange}
            />
            <Link
              to="/regPage"
              onClick={regHandleClick}
              className="px-4 py-2 bg-green-400 rounded md:text-xl font-semibold w-52 hover:bg-green-500">
              Submit
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
