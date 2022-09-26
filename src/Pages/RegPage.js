import React, { useState, useContext, useEffect } from "react";
import Registration from "../Components/Registration";
import { DataContext } from "../Components/Context";
import Leaderboard from "../Components/Leaderboard";

export default function RegPage() {
  const [change, setChange] = useState("");

  const [leaderboard, setLeaderboard] = useState([]);
  const [apiCall, setApiCall] = useState(false);

  const context = useContext(DataContext);

  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(10);

  const { count, setRedirect, setSubmitName, submitName } = context;

  useEffect(() => {
    console.log("hw");
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
  }, [apiCall, submitName, currentPage]);

  const regHandleChange = (e) => {
    let value = e.target.value;
    setChange(value);
  };

  const regHandleClick = () => {
    if (submitName) {
      fetch("https://premierleaguequiz.azurewebsites.net/api/PremierLeague", {
        // Enter your IP address here
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify({ id: 0, name: change, score: count }),
      })
        .then((data) => data.json())
        .then((data) => setLeaderboard(data));

      setApiCall(true);
      setSubmitName(false);
      setRedirect(false);
    }
  };

  //Get current posts
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = leaderboard.slice(indexOfFirstPost, indexOfLastPost);

  const pageinate = (number) => setCurrentPage(number);

  return (
    <>
      <div>
        {setApiCall && (
          <Registration
            submitName={submitName}
            leaderboard={leaderboard}
            change={change}
            regHandleChange={regHandleChange}
            regHandleClick={regHandleClick}></Registration>
        )}
        {leaderboard.length === 0 ? (
          <div className="">Loading</div>
        ) : (
          <Leaderboard
            currentPage={currentPage}
            pageinate={pageinate}
            leaderboard={leaderboard}
            currentPosts={currentPosts}
            change={change}
            postsPerPage={postPerPage}
            totalPosts={leaderboard.length}></Leaderboard>
        )}
      </div>
    </>
  );
}
