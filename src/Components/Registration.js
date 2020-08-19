import React, { useEffect, useState } from 'react';

import ScoreItem from './ScoreItem';
export default function Registration({
    regHandleChange,
    regHandleClick,
    change,
    leaderboard,
}) {
    const [sorted, setSorted] = useState([]);

    useEffect(() => {
        let sorted = leaderboard.sort((a, b) => (a.count > b.count ? 1 : -1));

        setSorted(sorted.reverse());
        return () => {};
    }, [leaderboard]);

    return (
        <>
            <div className='jumbotron'>
                <div className='column'>
                    <div className='head'>
                        <input
                            type='text'
                            placeholder='E.g Lars'
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
                            <h3>Leaderboard</h3>
                            {sorted.map((item, index) => {
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
