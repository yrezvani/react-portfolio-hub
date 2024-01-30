// Import all the required moduels and files.

import React, { useState } from "react";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import coderIcon from '../../assets/images/coder.svg';
import hamburgerIcon from '../../assets/images/hamburger.svg';
import './Header.css'

// header component
function Header() {

    // State to manage the visibility of the mobile menu    
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to toggle the mobile menu visibility    
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };



    return (
        <div className="header-container">
            {/* Logo */}
            <img className="navbar-icon" src={coderIcon} />
            {/* Hamburger Menu Icon with onClick event to toggle menu */}
            <img className="hamburger-icon" src={hamburgerIcon} onClick={toggleMenu} />
            {/* Navigation Menu */}
            <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
                <ul>
                    {/* Navigation Links */}
                    <li><Link to="/" className="navbar-link">Home</Link></li>
                    <li><Link to="/projectgallery" className="navbar-link">Project Gallery</Link></li>
                    <li><Link to="/contact" className="navbar-link">Contact</Link></li>
                    {/* link to CV */}
                    <li>
                        <a href="https://drive.google.com/file/d/1SpHCDTpLAecW9d9eN8MEk37_-PqreD1O/view?usp=sharing" className="navbar-link" target="_blank" rel="noreferrer">CV</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;