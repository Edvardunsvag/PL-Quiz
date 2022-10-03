import React, { useContext } from "react";
import { DataContext } from "./Context";

export default function AnswerItem({ index, answerList, item }) {
  const context = useContext(DataContext);

  const redirect = context.redirect;

  if (answerList.includes(item)) {
    return (
      <div
        key={index}
        className="grid mx-3 my-3 p-3 rounded bg-Green justify-center items-center font-medium text-xl">
        <h3 className="grid  capitalize text-xl font-medium">{item}</h3>
      </div>
    );
  }
  if (!answerList.includes(item)) {
    return (
      <>
        {redirect ? (
          <div
            key={index}
            className="grid mx-3 my-3 p-3 rounded bg-red-600 justify-center items-center font-medium text-xl">
            <h3 className="grid font-medium capitalize text-xl">{item}</h3>
          </div>
        ) : (
          <div
            key={index}
            className="grid mx-3 my-3 p-3 rounded bg-gray-400 justify-center items-center font-medium text-xl">
            <h3 className="grid font-medium text-transparent capitalize  text-xl">
              {item}
            </h3>
          </div>
        )}
      </>
    );
  }
}
