import React, { useState, useContext, useEffect } from "react";
import { DataContext } from "../../Components/Context";
import Leaderboard from "../../Components/Leaderboard";

export default function RegPage() {
  const [leaderboard, setLeaderboard] = useState([]);
  const context = useContext(DataContext);
  const {
    submitName,
    nameChange,
    setAnswerList,
    user,
    loggedIn,
    setOptionsState,
    optionsState,
  } = context;

  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(10);

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
    setAnswerList([]);

    return () => {
      isSubsribed = false;
    };
  }, [submitName, currentPage, optionsState, setAnswerList]);

  const deleteItem = (id) => {
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
  let currentPosts =
    optionsState === "myScores"
      ? leaderboard
          .filter((item) => item.email === user.email)
          .slice(indexOfFirstPost, indexOfLastPost)
      : leaderboard.slice(indexOfFirstPost, indexOfLastPost);

  const pageinate = (number) => setCurrentPage(number);

  return (
    <>
      {leaderboard.length === 0 ? (
        <div className="text-center animate-spin text-3xl mt-8">Loading...</div>
      ) : (
        <Leaderboard
          setOptionsState={setOptionsState}
          optionsState={optionsState}
          loggedIn={loggedIn}
          user={user}
          setLeaderboard={setLeaderboard}
          nameChange={nameChange}
          deleteItem={deleteItem}
          currentPage={currentPage}
          pageinate={pageinate}
          leaderboard={leaderboard}
          currentPosts={currentPosts}
          // change={change}
          postsPerPage={postPerPage}
          totalPosts={
            optionsState === "myScores"
              ? leaderboard.filter((item) => item.email === user.email).length
              : leaderboard.length
          }></Leaderboard>
      )}
    </>
  );
}
