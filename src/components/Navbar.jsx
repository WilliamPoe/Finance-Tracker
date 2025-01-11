import React from 'react';
import "../styles/Navbar.css";

const Navbar = () => {
    return (
        <nav classname="nav">
            <a href="/" classname="site-title"> Finance Tracker</a>
            <ul>
                <li>
                    <a href="/expenses">Expenses</a>
                </li>
                <li>
                    <a href="/stock">Stocks</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar