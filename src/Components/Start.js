import React from 'react';

export default function Start({ timer, startGame, newGame }) {
    return (
        <div className='Start'>
            <h1>{timer}</h1>
            <button
                type='button'
                onClick={startGame}
                className='btn btn-primary Start'>
                Start
            </button>
            <button
                type='button'
                onClick={newGame}
                className='btn btn-secondary Start'>
                Restart
            </button>
        </div>
    );
}
