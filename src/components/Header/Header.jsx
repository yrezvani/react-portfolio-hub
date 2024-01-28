import React, { useState } from "react";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import coderIcon from '../../assets/coder.svg';
import hamburgerIcon from '../../assets/hamburger.svg';
import './Header.css'

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };



    return (
        <div className="header-container">
            <img className="navbar-icon" src={coderIcon} />
            <img className="hamburger-icon" src={hamburgerIcon} onClick={toggleMenu} />
            <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
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