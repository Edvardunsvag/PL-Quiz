import React, { useState, useContext, useEffect } from "react";
import { DataContext } from "../Components/Context";
import Leaderboard from "../Components/Leaderboard";

export default function RegPage() {
  const [leaderboard, setLeaderboard] = useState([]);
  // const [apiCall, setApiCall] = useState(false);

  const context = useContext(DataContext);

  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(10);

  const { submitName, nameChange } = context;

  useEffect(() => {
    let isSubsribed = true; //due to cleanup

    const response = async () => {
      const response = await fetch(
        "https://premierleaguequiz.azurewebsites.net/api/PremierLeague"
      );
      const data = await response.json();
      return data;
    };

    response().then((data) =>
      isSubsribed
        ? setLeaderboard(
            data.sort((a, b) => (a.score > b.score ? 1 : -1)).reverse()
          )
        : null
    );

    return () => {
      isSubsribed = false;
    };
  }, [submitName, currentPage]);

  const deleteItem = (id) => {
    console.log(id);
    fetch(
      `https://premierleaguequiz.azurewebsites.net/api/PremierLeague/${id}`,
      {
        // Enter your IP address here
        method: "DELETE",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      }
    )
      .then((data) => data.json())
      .then((data) =>
        setLeaderboard(
          data.sort((a, b) => (a.score > b.score ? 1 : -1)).reverse()
        )
      );
  };

  //Get current posts
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = leaderboard.slice(indexOfFirstPost, indexOfLastPost);

  const pageinate = (number) => setCurrentPage(number);

  return (
    <>
      <div>
        {/* {setApiCall && (
          <Registration
            submitName={submitName}
            leaderboard={leaderboard}
            change={change}
            regHandleChange={regHandleChange}
            regHandleClick={regHandleClick}></Registration>
        )} */}
        {leaderboard.length === 0 ? (
          <div className="text-center animate-spin text-3xl mt-8">
            Loading...
          </div>
        ) : (
          <Leaderboard
            nameChange={nameChange}
            deleteItem={deleteItem}
            currentPage={currentPage}
            pageinate={pageinate}
            leaderboard={leaderboard}
            currentPosts={currentPosts}
            // change={change}
            postsPerPage={postPerPage}
            totalPosts={leaderboard.length}></Leaderboard>
        )}
      </div>
    </>
  );
}
