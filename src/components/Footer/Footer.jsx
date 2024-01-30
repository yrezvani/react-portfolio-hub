// Import all the required modules and files.

import React from "react";
import './Footer.css';
import githubIcon from "../../assets/images/github.svg";
import linkedinIcon from "../../assets/images/linkedin.png";
import twitterIcon from "../../assets/images/twitter.svg";
import emailIcon from "../../assets/images/email.png";
import cvIcon from "../../assets/images/cv.png"

// Footer component
function Footer() {
    return (
        // Footer container        
        <footer className="site-footer">
            <p>© 2024 Yasser. All rights reserved.</p>
            <nav className="footer-nav">
                <a href="/about">About Me</a>
                <a href="/projects">Project Gallery</a>
                <a href="/resume">Resume</a>
                <a href="/contact">Contact</a>
            </nav>
            {/* Social media links */}
            <div className="social-links">
                <a href="https://www.linkedin.com/in/yasser-rezvani-773086b3/" aria-label="LinkedIn" target="_blank" rel="noreferrer">
                    <img src={linkedinIcon} alt="Linedin" className="footer-li-icon" /></a>
                <a href="https://github.com/yrezvani?tab=repositories" aria-label="GitHub" target="_blank" rel="noreferrer">
                    <img src={githubIcon} alt="Github" className="footer-icon" /></a>
                <a href="https://twitter.com/yaserrezvany" aria-label="Twitter" target="_blank" rel="noreferrer">
                    <img src={twitterIcon} alt="Twitter" className="footer-icon" /></a>
                <a href="mailto:yaserrezvany@gmail.com" aria-label="Email"><img src={emailIcon} alt="Twitter" className="footer-icon" /></a>
                <a href="https://drive.google.com/file/d/1SpHCDTpLAecW9d9eN8MEk37_-PqreD1O/view?usp=sharing" aria-label="CV" target="_blank" rel="noreferrer">
                    <img src={cvIcon} alt="CV" className="footer-icon" />
                </a>
            </div>
        </footer>
    )
}

export default Footer