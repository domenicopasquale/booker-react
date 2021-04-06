import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark mb-4">
                <div className="container">
                    <Link className="navbar-brand text-light" id="booker-logo" to="/">Booker<br /><p id="booker-logo2">The union between Book and Seeker</p></Link>
                <ul className="navbar-nav ml-auto text-light d-inline-block">
                    <li className="nav-item  d-inline-block mr-4">
                    <a className="text-light" href="https://books.google.it/">
                        <i className="fab fa-google fa-3x" id="google-logo" />
                    </a>
                    </li>
                </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
