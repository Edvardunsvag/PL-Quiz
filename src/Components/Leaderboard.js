import React from "react";
import ScoreItem from "./ScoreItem";

export default function Leaderboard({
  change,
  totalPosts,
  postsPerPage,
  pageinate,
  currentPage,
  currentPosts,
  loggedIn,
  optionsState,
  setOptionsState,

  user,
  deleteItem,
  nameChange,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  console.log(currentPosts.length);
  return (
    <>
      <div className="container mx-auto md:mt-3 text-center bg-gray-200 p-6 md:rounded-lg">
        <div className="flex flex-col items-center">
          <div className="flex justify-center font-medium p-2 w-3/5 text-2xl md:text-4xl mb-1 bg-Red opacity-90 text-white rounded-md">
            Leaderboard
          </div>
          <div className="flex p-3 mt-2 md:w-3/5 w-full rounded justify-between items-center ">
            <h3 className="font-bold ml-4 md:text-2xl">Name</h3>
            <div className="">
              <select
                value={optionsState}
                onChange={(e) => setOptionsState(e.target.value)}
                className="px-2 py-1 rounded-md">
                <option value="allScores">All scores</option>
                <option value="myScores" disabled={!loggedIn}>
                  Your scores
                </option>
              </select>
              <span className="custom-arrow"></span>
            </div>
            <h3 className="font-bold mr-4 md:text-2xl">Score</h3>
          </div>

          {currentPosts.map((item, index) => {
            if (currentPage > 1) {
              return (
                <ScoreItem
                  email={item.email}
                  nameChange={nameChange}
                  deleteItem={deleteItem}
                  currentPage={currentPage}
                  id={item.id}
                  index={index + (currentPage - 1) * 10}
                  change={change}
                  key={index}
                  count={item.score}
                  name={item.name}></ScoreItem>
              );
            } else if (currentPage === 1) {
              return (
                <ScoreItem
                  email={item.email}
                  nameChange={nameChange}
                  deleteItem={deleteItem}
                  currentPage={currentPage}
                  index={index}
                  id={item.id}
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

      <div className="container mx-auto mt-2  text-center bg-gray-200 p-2 rounded-lg">
        <div className="flex flex-row p-2 justify-center md:space-x-28 space-x-5">
          <button
            disabled={currentPage <= 1}
            onClick={() => pageinate(currentPage - 1)}
            className={`flex p-3 rounded-md  hover:bg-gray-100 ${
              currentPage === 1 ? "bg-gray-100 opacity-50" : "bg-Cyan"
            }`}>
            Prev
          </button>
          {pageNumbers.map((index) => {
            return (
              <button
                key={index}
                onClick={() => pageinate(index)}
                className="flex px-4 rounded-md bg-Cyan items-center ">
                {index}
              </button>
            );
          })}
          <button
            disabled={currentPage * 10 < totalPosts ? false : true}
            onClick={() => pageinate(currentPage + 1)}
            className={`flex p-3 rounded-md hover:bg-gray-100 ${
              currentPage * 10 >= totalPosts
                ? "bg-gray-100 opacity-50"
                : "bg-Cyan"
            }
            `}>
            Next
          </button>
        </div>
      </div>
    </>
  );
}
