import React from 'react';

export default function Counter({ count }) {
    return (
        <div className='counter'>
            <h1>Score: {count}</h1>
        </div>
    );
}
