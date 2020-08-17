import React from 'react';
import { Link } from 'react-router-dom';
export default function Navbar() {
    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-info'>
            <div className='collapse navbar-collapse' id='navbarNav'>
                <ul className='navbar-nav'>
                    <li className='nav-item active'>
                        <Link to='/'>
                            <h3 className='navbar-brand'>Hjem</h3>
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/RegPage'>
                            <h3 className='navbar-brand'>Scoreboard</h3>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
