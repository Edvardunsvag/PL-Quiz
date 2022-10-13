import React from "react";
import AnswerItem from "./AnswerItem";

export default function AnswerList({ answerList, teamsList }) {
  var teams = [
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
  ];

  return (
    <>
      <div className="container answerList bg-gray-300 md:rounded">
        {teams.map((item, index) => {
          return (
            <AnswerItem
              key={index}
              index={index}
              answerList={answerList}
              item={item}></AnswerItem>
          );
        })}
      </div>
    </>
  );
}
