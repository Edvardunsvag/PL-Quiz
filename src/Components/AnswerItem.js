import React, { useContext } from "react";
import { DataContext } from "./Context";

export default function AnswerItem({ index, answerList, item }) {
  const context = useContext(DataContext);

  const { finished, redirect } = context;

  if (answerList.includes(item)) {
    return (
      <div
        key={index}
        className="flex text-center justify-center mx-3 my-3 p-3 rounded bg-Green items-center font-medium text-xl">
        <h3 className="capitalize text-xl font-medium">{item}</h3>
      </div>
    );
  }
  if (!answerList.includes(item)) {
    return (
      <>
        {finished === true && redirect === false ? (
          <div
            key={index}
            className="flex justify-center text-center mx-3 my-3 p-3 rounded bg-red-600 items-center font-medium text-xl">
            <h3 className="font-medium capitalize text-xl">{item}</h3>
          </div>
        ) : (
          <div
            key={index}
            className="flex justify-center  text-center mx-3 my-3 p-3 rounded bg-gray-400 font-medium text-xl">
            <h3 className="font-medium text-transparent capitalize  text-xl">
              {item}
            </h3>
          </div>
        )}
      </>
    );
  }
}
