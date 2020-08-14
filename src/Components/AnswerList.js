import React from 'react';

export default function AnswerList({ answerList }) {
    return (
        <>
            <h1 className='teamHeader'>Teams</h1>
            <div className='list-group'>
                {answerList.map((item, index) => {
                    return (
                        <li
                            key={index}
                            className='list-group-item bg-success py-1'>
                            <h6>{item}</h6>
                        </li>
                    );
                })}
            </div>
        </>
    );
}
