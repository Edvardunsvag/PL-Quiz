import React, { useState, useContext, useEffect } from "react";
import Registration from "../Components/Registration";
import { DataContext } from "../Components/Context";

export default function RegPage() {
  const [change, setChange] = useState("");

  const [leaderboard, setLeaderboard] = useState([]);
  const [apiCall, setApiCall] = useState(false);

  const context = useContext(DataContext);

  const { count, setRedirect, setSubmitName, submitName } = context;

  useEffect(() => {
    fetch("https://premierleaguequiz.azurewebsites.net/api/PremierLeague")
      .then((data) => data.json())
      .then((data) => setLeaderboard(data));

    return () => {};
  }, [apiCall, submitName]);

  const regHandleChange = (e) => {
    let value = e.target.value;
    setChange(value);
  };

  const regHandleClick = () => {
    console.log("Handle Click utee");
    if (submitName) {
      console.log("Handle Click Inne");

      fetch("https://premierleaguequiz.azurewebsites.net/api/PremierLeague", {
        // Enter your IP address here
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify({ id: 0, name: change, score: count }),
      });

      setApiCall(!apiCall);

      setRedirect(false);
    }
    fetch("https://premierleaguequiz.azurewebsites.net/api/PremierLeague")
      .then((data) => data.json())
      .then((data) => setLeaderboard(data));

    setSubmitName(false);
  };

  return (
    <>
      <div>
        {setApiCall && (
          <Registration
            leaderboard={leaderboard}
            change={change}
            regHandleChange={regHandleChange}
            regHandleClick={regHandleClick}></Registration>
        )}
      </div>
    </>
  );
}
