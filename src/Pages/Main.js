import React, { useContext } from "react";
import Input from "../Components/Input";
import AnswerList from "../Components/AnswerList";
import { DataContext } from "../Components/Context";
import Start from "../Components/Start";
import { Redirect } from "react-router";

import "../App.css";

function App() {
  const context = useContext(DataContext);

  const {
    start,
    refContainer,
    change,
    handleChange,
    timer,
    startGame,
    teamsList,
    newGame,
    answerList,
    redirect,
  } = context;

  return (
    <>
      {redirect === true && <Redirect push to="/RegPage" />}
      <div className="relative container mx-auto mt-2 text-center bg-red-200 p-12 rounded-lg">
        <div className="flex flex-col">
          <Input
            focusing={refContainer}
            change={change}
            handleChange={handleChange}></Input>
          {!start && (
            <Start
              timer={timer}
              startGame={startGame}
              newGame={newGame}></Start>
          )}
        </div>
      </div>

      <div className="relative container mx-auto mt-4 bg-gray-300 rounded">
        <AnswerList teamsList={teamsList} answerList={answerList}></AnswerList>
      </div>
    </>
  );
}

export default App;
