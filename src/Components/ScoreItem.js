import React from 'react';

export default function ScoreItem({ count, name }) {
    return (
        <li className='list-group-item bg-success py-1'>
            <h6>
                {name} : {count}
            </h6>
        </li>
    );
}
