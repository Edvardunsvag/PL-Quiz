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
    let isSubsribed = true; //due to cleanup
    const response = async () => {
      const response = await fetch(
        "https://premierleaguequiz.azurewebsites.net/api/PremierLeague"
      );
      const data = await response.json();
      return data;
    };

    response().then((data) => (isSubsribed ? setLeaderboard(data) : null));

    return () => {
      isSubsribed = false;
    };
  }, [apiCall, submitName, leaderboard]);

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

      setApiCall(!apiCall);
      setSubmitName(false);
      setRedirect(false);
    }
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
