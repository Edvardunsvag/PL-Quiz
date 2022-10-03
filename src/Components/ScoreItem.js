import React from "react";

export default function ScoreItem({
  count,
  name,
  change,
  index,
  id,
  nameChange,
  currentPage,
  deleteItem,
}) {
  return (
    <>
      {index === 0 && (
        <div
          className={`flex p-3 mt-2 md:w-3/5 w-full rounded justify-between items-center bg-Gold ${
            nameChange === name ? "animate-bounce-short" : null
          }`}>
          <div className="flex flex-row space-x-6 items-center">
            <h6 className="flex ml-4 font-medium text-xl">{index + 1}</h6>
            <h6 className="flex ml-4 font-medium text-xl">{name}</h6>
          </div>
          <div className="flex flex-row space-x-6 items-center">
            <h6 className="flex mr-4 font-medium text-xl">{count}</h6>{" "}
            {/* <h6>
              <i
                onClick={() => deleteItem(id)}
                className="fa-solid fa-trash"></i>
            </h6> */}
          </div>
        </div>
      )}{" "}
      {index === 1 && (
        <div
          className={`flex p-3 mt-2 md:w-3/5 w-full rounded justify-between items-center bg-Silver ${
            nameChange === name ? "animate-bounce-short" : null
          }`}>
          <div className="flex flex-row space-x-6 items-center">
            <h6 className="flex ml-4 font-medium text-xl">{index + 1}</h6>
            <h6 className="flex ml-4 font-medium text-xl">{name}</h6>
          </div>
          <div className="flex flex-row space-x-6 items-center">
            <h6 className="flex mr-4 font-medium text-xl">{count}</h6>{" "}
            {/* <h6>
              <i
                onClick={() => deleteItem(id)}
                className="fa-solid fa-trash"></i>
            </h6> */}
          </div>
        </div>
      )}
      {index === 2 && (
        <div
          className={`flex p-3 mt-2 md:w-3/5 w-full rounded justify-between items-center bg-Bronze ${
            nameChange === name ? "animate-bounce-short" : null
          }`}>
          <div className="flex flex-row space-x-6 items-center">
            <h6 className="flex ml-4 font-medium text-xl">{index + 1}</h6>
            <h6 className="flex ml-4 font-medium text-xl">{name}</h6>
          </div>
          <div className="flex flex-row space-x-6 items-center">
            <h6 className="flex mr-4 font-medium text-xl">{count}</h6>{" "}
            {/* <h6>
              <i
                onClick={() => deleteItem(id)}
                className="fa-solid fa-trash"></i>
            </h6> */}
          </div>
        </div>
      )}
      {index > 2 && (
        <div
          className={`flex p-3 mt-2 md:w-3/5 w-full rounded justify-between items-center bg-gray-400 ${
            nameChange === name ? "animate-bounce-short" : null
          }`}>
          <div className="flex flex-row space-x-6 items-center">
            <h6 className="flex ml-4 font-medium text-xl">{index + 1}</h6>
            <h6 className="flex ml-4 font-medium text-xl">{name}</h6>
          </div>
          <div className="flex flex-row space-x-6 items-center">
            <h6 className="flex mr-4 font-medium text-xl">{count}</h6>{" "}
            {/* <h6>
              <i
                onClick={() => deleteItem(id)}
                className="fa-solid fa-trash"></i>
            </h6> */}
          </div>
        </div>
      )}
    </>
  );
}
