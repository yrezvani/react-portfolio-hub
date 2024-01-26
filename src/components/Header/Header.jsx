import React from "react";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './style.css'

function Header() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/projects">Project Gallery</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Header;