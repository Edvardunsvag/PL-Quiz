import React from "react";
import ScoreItem from "./ScoreItem";

export default function Leaderboard({
  change,
  totalPosts,
  postsPerPage,
  pageinate,
  currentPage,
  currentPosts,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <div className="relative container mx-auto mt-12 text-center bg-gray-200 p-12 rounded-lg">
        <div className="flex flex-col items-center">
          <div className="flex justify-center p-2 w-2/4 font-bold text-4xl mb-2 bg-gray-100 rounded-md">
            Leaderboard
          </div>
          <div className="flex p-3 mt-2 w-2/4 rounded justify-between items-center">
            <h3 className="font-bold ml-4 text-2xl">Name</h3>
            <h3 className="font-bold mr-4 text-2xl">Score</h3>
          </div>

          {currentPosts.map((item, index) => {
            if (currentPage > 1) {
              return (
                <ScoreItem
                  currentPage={currentPage}
                  index={index + (currentPage - 1) * 10}
                  change={change}
                  key={index}
                  count={item.score}
                  name={item.name}></ScoreItem>
              );
            } else if (currentPage === 1) {
              return (
                <ScoreItem
                  currentPage={currentPage}
                  index={index}
                  change={change}
                  key={index}
                  count={item.score}
                  name={item.name}></ScoreItem>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>

      <div className="relative container  mx-auto mt-2  text-center bg-gray-200 p-2 rounded-lg">
        <div className="flex flex-row p-2 justify-center space-x-28">
          <button
            disabled={currentPage * 10 < totalPosts ? true : false}
            onClick={() => pageinate(currentPage + -1)}
            className={`flex p-3 rounded-md bg-sky-200 hover:bg-gray-100 ${
              currentPage === 1 ? "bg-gray-100 opacity-50" : "bg-sky-400"
            }`}>
            Prev
          </button>
          {pageNumbers.map((index) => {
            return (
              <button
                key={index}
                onClick={() => pageinate(index)}
                className="flex px-4 rounded-md bg-sky-300 items-center ">
                {index}
              </button>
            );
          })}
          <button
            disabled={currentPage * 10 < totalPosts ? false : true}
            onClick={() => pageinate(currentPage + 1)}
            className={`flex p-3 rounded-md hover:bg-gray-100 ${
              currentPage * 10 > totalPosts
                ? "bg-gray-100 opacity-50"
                : "bg-sky-400"
            }
            `}>
            Next
          </button>
        </div>
      </div>
    </>
  );
}
