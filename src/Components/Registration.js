import React from 'react';

import ScoreItem from './ScoreItem';
export default function Registration({
    regHandleChange,
    regHandleClick,
    change,
    leaderboard,
}) {
    return (
        <>
            <div className='jumbotron'>
                <div className='column'>
                    <div className='head'>
                        <input
                            type='text'
                            value={change}
                            onChange={regHandleChange}
                        />
                        <button
                            type='button'
                            onClick={regHandleClick}
                            className='btn btn-primary Start'>
                            Submit Name
                        </button>
                    </div>
                </div>
                <div className='column'>
                    <div className='list-group'>
                        <div className='head'>
                            {leaderboard.map((item, index) => {
                                return (
                                    <ScoreItem
                                        key={index}
                                        count={item.count}
                                        name={item.name}></ScoreItem>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
