import React from "react";
import './Footer.css';
import githubIcon from "../../assets/github.svg";
import linkedinIcon from "../../assets/linkedin.png";
import twitterIcon from "../../assets/twitter.svg";
import emailIcon from "../../assets/email.png";

function Footer() {
    return (
        <footer className="site-footer">
            <p>© 2024 Yasser. All rights reserved.</p>
            <nav className="footer-nav">
                <a href="/about">About Me</a>
                <a href="/projects">Project Gallery</a>
                <a href="/resume">Resume</a>
                <a href="/contact">Contact</a>
            </nav>
            <div className="social-links">
                <a href="https://www.linkedin.com/in/yasser-rezvani-773086b3/" aria-label="LinkedIn"><img src={linkedinIcon} alt="Linedin" className="li-icon" /></a>
                <a href="https://github.com/yrezvani?tab=repositories" aria-label="GitHub"><img src={githubIcon} alt="Github" className="icon" /></a>
                <a href="https://twitter.com/yaserrezvany" aria-label="Twitter"><img src={twitterIcon} alt="Twitter" className="icon" /></a>
                <a href="mailto:yaserrezvany@gmail.com" aria-label="Email"><img src={emailIcon} alt="Twitter" className="icon" /></a>

            </div>
        </footer>
    )
}

export default Footer