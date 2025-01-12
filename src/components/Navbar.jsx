import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Navbar.css";

const Navbar = () => {
    return (
        <nav className="nav">
            <Link to="/" className="site-title"> Finance Tracker</Link>
            <ul>
                <li>
                    <Link to="/expenses">Expenses</Link>
                </li>
                <li>
                    <Link to="/stock">Stock</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar