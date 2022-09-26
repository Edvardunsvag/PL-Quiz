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
      <div className="grid md:grid-cols-4 md:gap-4 md:p-4">
        {teams.map((item, index) => {
          return (
            <AnswerItem
              index={index}
              answerList={answerList}
              item={item}></AnswerItem>
          );
        })}
      </div>
    </>
  );
}
