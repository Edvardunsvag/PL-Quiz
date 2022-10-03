import React, { useContext } from "react";
import Input from "../Components/Input";
import AnswerList from "../Components/AnswerList";
import { DataContext } from "../Components/Context";

import "../App.css";
import Registration from "../Components/Registration";

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
    setSubmitName,
    setNameChange,
    nameChange,
    teamsList,
    newGame,
    setRedirect,
    answerList,
    redirect,
  } = context;

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
        body: JSON.stringify({ id: 0, name: nameChange, score: count }),
      })
        .then((data) => data.json())
        .then((data) => setSubmitName(!submitName));
    }
    setRedirect(!redirect);
  };

  return (
    <>
      {/* {redirect === true && <Redirect push to="/RegPage" />} */}
      <div className="relative container mx-auto md:mt-2 text-center bg-Red p-12 md:rounded-lg">
        <div className="flex flex-col">
          {redirect === true ? (
            <Registration
              regHandleChange={regHandleChange}
              regHandleClick={regHandleClick}
              change={nameChange}
              submitName={submitName}></Registration>
          ) : (
            <Input
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

      <div className="relative container mx-auto md:mt-4 bg-gray-300 md:rounded">
        <AnswerList teamsList={teamsList} answerList={answerList}></AnswerList>
      </div>
    </>
  );
}

export default App;
