import React from "react";

export default function Registration({
  regHandleChange,
  regHandleClick,
  change,
  submitName,
}) {
  return (
    <>
      {submitName && (
        <div className="relative container mx-auto mt-4 text-center bg-gray-200 p-2 rounded-lg">
          <div className="flex flex-row p-4 my-4 justify-evenly">
            <input
              className="p-2 rounded w-3/4 text-2xl"
              type="text"
              placeholder="Write your name, E.g Lars"
              value={change}
              onChange={regHandleChange}
            />
            <button
              type="button"
              onClick={regHandleClick}
              className="px-4 py-2 bg-green-400 rounded text-xl font-semibold w-52 hover:bg-green-500">
              Submit Name
            </button>
          </div>
        </div>
      )}
    </>
  );
}
