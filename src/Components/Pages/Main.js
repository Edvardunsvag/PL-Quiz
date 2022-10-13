import React, { useContext, useEffect } from "react";

import AnswerList from "../../Components/AnswerList";
import { DataContext } from "../../Components/Context";

import Input from "../../Components/Input";

import "../../App.css";
import Registration from "../../Components/Registration";

function App() {
  const context = useContext(DataContext);

  const {
    start,
    refContainer,
    count,
    change,
    handleChange,
    submitName,
    timer,
    startGame,
    finished,
    setSubmitName,
    setNameChange,
    nameChange,
    teamsList,
    newGame,
    setRedirect,
    loggedIn,
    answerList,
    redirect,
    setStart,
    user,
  } = context;

  useEffect(() => {
    setNameChange("");

    return () => {};
  }, [change, answerList, setNameChange]);

  const regHandleChange = (e) => {
    let value = e.target.value;
    setNameChange(value);
  };

  const regHandleClick = () => {
    if (nameChange !== "") {
      fetch("https://premierleaguequiz.azurewebsites.net/api/PremierLeague", {
        // Enter your IP address here
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify({
          id: 0,
          name: nameChange,
          score: count,
          email: user.email,
        }),
      })
        .then((data) => data.json())
        .then(() => setSubmitName(!submitName));
      setRedirect(!redirect);
      setStart(false);
    }
  };

  return (
    <>
      <>
        <div className="container regAndInput mx-auto md:mt-2 text-center bg-Red p-12 md:rounded-lg">
          <div className="flex flex-col">
            {finished === true && redirect === false ? (
              <Registration
                user={user}
                regHandleChange={regHandleChange}
                regHandleClick={regHandleClick}
                change={nameChange}
                submitName={submitName}></Registration>
            ) : (
              <Input
                loggedIn={loggedIn}
                finished={finished}
                redirect={redirect}
                user={user}
                count={count}
                submitName={submitName}
                timer={timer}
                startGame={startGame}
                newGame={newGame}
                start={start}
                focusing={refContainer}
                change={change}
                handleChange={handleChange}></Input>
            )}
          </div>
        </div>
        <AnswerList teamsList={teamsList} answerList={answerList}></AnswerList>
      </>
    </>
  );
}

export default App;
