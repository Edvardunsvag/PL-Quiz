import React from "react";
import { Link } from "react-router-dom";

export default function Registration({
  regHandleChange,
  regHandleClick,
  change,
  submitName,
  user,
}) {
  return (
    <>
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
            className={`px-4 py-2  rounded md:text-xl text-black font-semibold hover:text-white w-52 hover:no-underline ${
              change.length >= 1
                ? "bg-Green "
                : "bg-green-200 pointer-events-none"
            }`}>
            Submit
          </Link>
        </div>
      </div>
    </>
  );
}
