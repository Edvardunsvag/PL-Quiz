import React from 'react';
import { Link } from 'react-router-dom';
export default function Navbar() {
    return (
        <nav className='navbar navbar-expand-md navbar-light bg-info'>
            <div className='collapse navbar-collapse' id='navbarNav'>
                <ul className='navbar-nav'>
                    <li className='nav-item active'>
                        <Link to='/'>
                            <h4 className='navbar-brand'>Home</h4>
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/RegPage'>
                            <h4 className='navbar-brand'>Scoreboard</h4>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
