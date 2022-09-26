import React from "react";

export default function ScoreItem({ count, name, change, index, currentPage }) {
  // if (change == name) {
  //   return (
  //     <div className="flex p-3 mt-2 w-1/3 rounded justify-center items-center bg-yellow-500 animate-bounce">
  //       <div className="mt-2"></div>
  //       <h6 className="font-medium text-xl">
  //         {name} : {count}
  //       </h6>
  //     </div>
  //   );
  // } else {

  return (
    <>
      {index === 0 && (
        <div className="flex p-3 mt-2 w-2/4 rounded justify-between items-center bg-Gold">
          <div className="flex flex-row space-x-6 items-center">
            <h6 className="flex ml-4 font-medium text-xl">{index + 1}</h6>
            <h6 className="flex ml-4 font-medium text-xl">{name}</h6>
          </div>
          <h6 className="flex mr-4 font-medium text-xl">{count}</h6>
        </div>
      )}{" "}
      {index === 1 && (
        <div className="flex p-3 mt-2 w-2/4 rounded justify-between items-center bg-Silver">
          <div className="flex flex-row space-x-6 items-center">
            <h6 className="flex ml-4 font-medium text-xl">{index + 1}</h6>
            <h6 className="flex ml-4 font-medium text-xl">{name}</h6>
          </div>
          <h6 className="flex mr-4 font-medium text-xl">{count}</h6>
        </div>
      )}
      {index === 2 && (
        <div className="flex p-3 mt-2 w-2/4 rounded justify-between items-center bg-Bronze">
          <div className="flex flex-row space-x-6 items-center">
            <h6 className="flex ml-4 font-medium text-xl">{index + 1}</h6>
            <h6 className="flex ml-4 font-medium text-xl">{name}</h6>
          </div>
          <h6 className="flex mr-4 font-medium text-xl">{count}</h6>
        </div>
      )}
      {index > 2 && (
        <div className="flex p-3 mt-2 w-2/4 rounded justify-between items-center bg-gray-400">
          <div className="flex flex-row space-x-6 items-center">
            <h6 className="flex ml-4 font-medium text-xl">{index + 1}</h6>
            <h6 className="flex ml-4 font-medium text-xl">{name}</h6>
          </div>
          <h6 className="flex mr-4 font-medium text-xl">{count}</h6>
        </div>
      )}
    </>
  );
}
