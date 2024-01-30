import React, { useState } from "react";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import coderIcon from '../../assets/images/coder.svg';
import hamburgerIcon from '../../assets/images/hamburger.svg';
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
                    <li><Link to="/projectgallery" className="navbar-link">Project Gallery</Link></li>
                    <li><Link to="/contact" className="navbar-link">Contact</Link></li>
                    <li>
                        <a href="https://drive.google.com/file/d/1SpHCDTpLAecW9d9eN8MEk37_-PqreD1O/view?usp=sharing" className="navbar-link">CV</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;