import React from "react";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import coderIcon from '../../assets/coder.svg';
import './style.css'

function Header() {
    return (
        <div className="header-container">
            <img className="navbar-icon" src={coderIcon} />
            <nav>
                <ul>
                    <li><Link to="/" className="navbar-link">Home</Link></li>
                    <li><Link to="/projects" className="navbar-link">Project Gallery</Link></li>
                    <li><Link to="/contact" className="navbar-link">Contact</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;