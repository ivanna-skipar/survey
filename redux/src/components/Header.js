import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
    <header>
        <nav>
            <ul className="nav nav-tabs">
                <li className="nav-item active">
                    <Link to="/">Home </Link>
                </li>
                <li className="nav-item">
                    <Link to="/Players">Players</Link>
                </li>
                <li className="nav-item">
                    <Link to="/Schedule">Schedule</Link>
                </li>
            </ul>
        </nav>
    </header>
)

export default Header;