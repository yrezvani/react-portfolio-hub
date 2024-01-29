import React from "react";
import './Footer.css';
import githubIcon from "../../assets/images/github.svg";
import linkedinIcon from "../../assets/images/linkedin.png";
import twitterIcon from "../../assets/images/twitter.svg";
import emailIcon from "../../assets/images/email.png";
import cvIcon from "../../assets/images/cv.png"

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
                <a href="https://drive.google.com/file/d/1SpHCDTpLAecW9d9eN8MEk37_-PqreD1O/view?usp=drive_link" aria-label="CV">
                    <img src={cvIcon} alt="CV" className="icon" />
                </a>
            </div>
        </footer>
    )
}

export default Footer