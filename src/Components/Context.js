import React, { useState, useRef, useEffect } from "react";

const DataContext = React.createContext();
export default function Context(props) {
  const levenshtein = require("js-levenshtein");
  const [teamsList, setTeamsList] = useState([
    "liverpool",
    "west ham",
    "leeds",
    "manchester city",
    "manchester united",
    "chelsea",
    "leicester",
    "tottenham",
    "wolverhampton",
    "arsenal",
    "sheffield united",
    "burnley",
    "southampton",
    "everton",
    "newcastle",
    "crystal palace",
    "brighton",
    "aston villa",
    "west bromwich",
    "fulham",
  ]);

  const [optionsState, setOptionsState] = useState("allScores");

  const [leaderboardWithOriginalValues, setLeaderboardWithOriginalValues] =
    useState([]);

  const [finished, setFinished] = useState(false);

  const [loggedIn, setLoggedIn] = useState(false);

  const [userScores, setUserScores] = useState([]);

  const [user, setUser] = useState("");

  const [nameChange, setNameChange] = useState("");

  const refContainer = useRef(null);

  const [change, setChange] = useState("");

  const [count, setCount] = useState(0);

  const [answerList, setAnswerList] = useState([]);

  const [timer, setTimer] = useState(30);

  const [start, setStart] = useState(false);

  const [timerState, setTimerState] = useState();

  const [redirect, setRedirect] = useState(false);

  const [levenshteinScore, setLevenshteinScore] = useState(false);

  const [answer, setAnswer] = useState("");

  //Reg Page
  const [submitName, setSubmitName] = useState(false);

  useEffect(() => {
    for (let i = 0; i < teamsList.length; i++) {
      let result = levenshtein(change, teamsList[i]);
      if (result < 2.5 && teamsList[i].length === change.length) {
        setLevenshteinScore(true);
        setAnswer(teamsList[i]);
      }
    }

    if (timer === 0) {
      setFinished(true);
      setSubmitName(true);
    }

    if (levenshteinScore) {
      setCount((prevstate) => {
        return prevstate + 1;
      });
      let newTeams = teamsList.filter((item) => item !== answer);
      setTeamsList(newTeams);
      setAnswerList([...answerList, answer]);
      setChange("");
      setLevenshteinScore(false);
    }
    console.log("start", start);
    if (start) {
      const timerVariable =
        timer > 0 &&
        setTimeout(() => {
          setTimer(timer - 1);
        }, 1000);
      setTimerState(timerVariable);
      return () => clearTimeout(timer);
    }
  }, [
    timer,
    start,
    answerList,
    nameChange,
    change,
    teamsList,
    count,
    levenshteinScore,
    levenshtein,
    answer,
  ]);

  const handleChange = (e) => {
    if (start === true) {
      let value = e.target.value;
      let res = value.toLowerCase();

      setChange(res);
    }
  };

  const startGame = (event) => {
    refContainer.current.focus();
    setStart(true);
  };

  const newGame = (event) => {
    refContainer.current.focus();
    clearTimeout(timerState);
    setFinished(false);
    setCount(0);
    setRedirect(false);
    setSubmitName(false);
    setTeamsList([
      "liverpool",
      "west ham",
      "leeds",
      "manchester city",
      "manchester united",
      "chelsea",
      "leicester",
      "tottenham",
      "wolverhampton",
      "arsenal",
      "sheffield united",
      "burnley",
      "southampton",
      "everton",
      "newcastle",
      "crystal palace",
      "brighton",
      "aston villa",
      "west bromwich",
      "fulham",
    ]);
    setAnswerList([]);
    setTimer(5);
    startGame();
  };

  const newGameWithoutStart = (event) => {
    refContainer.current.focus();
    clearTimeout(timerState);
    setFinished(false);
    setCount(0);
    setRedirect(false);
    setSubmitName(false);
    setTeamsList([
      "liverpool",
      "west ham",
      "leeds",
      "manchester city",
      "manchester united",
      "chelsea",
      "leicester",
      "tottenham",
      "wolverhampton",
      "arsenal",
      "sheffield united",
      "burnley",
      "southampton",
      "everton",
      "newcastle",
      "crystal palace",
      "brighton",
      "aston villa",
      "west bromwich",
      "fulham",
    ]);
    setAnswerList([]);
    setTimer(5);
    setStart(false);
  };

  return (
    <DataContext.Provider
      value={{
        count,
        start,
        nameChange,
        setNameChange,
        setChange,
        refContainer,
        change,
        handleChange: handleChange,
        startGame: startGame,
        newGame: newGame,
        timer,
        redirect,
        setRedirect,
        answerList,
        loggedIn,
        setLoggedIn,
        finished,
        setFinished,
        setLeaderboardWithOriginalValues,
        leaderboardWithOriginalValues,
        user,
        setUser,
        userScores,
        setUserScores,
        setAnswerList,
        newGameWithoutStart,
        timerState,
        optionsState,
        setStart,
        setOptionsState,
        submitName,
        setSubmitName,
      }}>
      {props.children}
    </DataContext.Provider>
  );
}

export { Context, DataContext };
