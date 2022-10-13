import React from "react";
import { useContext } from "react";
import { DataContext } from "./Context";

export default function ScoreItem({
  count,
  name,
  change,
  index,
  id,
  allScores,
  nameChange,
  deleteItem,
  email,
}) {
  const context = useContext(DataContext);

  const { user } = context;

  return (
    <>
      <div
        className={`flex p-2.5 mt-1 md:w-3/5 w-full rounded justify-between items-center ${
          index === 0
            ? "bg-Gold"
            : index === 1
            ? "bg-Silver"
            : index === 2
            ? "bg-Bronze"
            : "bg-gray-400"
        } ${nameChange === name ? "animate-bounce-short" : null}`}>
        <div className="flex flex-row space-x-6 items-center">
          <h6 className="flex ml-4 font-medium text-xl">{index + 1}</h6>
          <h6 className="flex ml-4 font-medium text-xl">{name}</h6>
        </div>
        <div className="flex flex-row space-x-6 items-center">
          <h6 className="flex mr-4 font-medium text-xl">{count}</h6>{" "}
          {email === user.email ? (
            <h6>
              <i
                onClick={() => deleteItem(id)}
                className="fa-solid fa-trash"></i>
            </h6>
          ) : (
            <h6>
              <i
                onClick={() => deleteItem(id)}
                className="fa-solid fa-trash invisible"></i>
            </h6>
          )}
        </div>
      </div>
    </>
  );
}
