import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import githubIcon from "../assets/github.svg";
import linkedinIcon from "../assets/linkedin.png";
import twitterIcon from "../assets/twitter.svg";
import emailIcon from "../assets/email.png";
import './Contact.css'

function Contact() {
    return (
        <div className="contact-container">
            <Header />
            <div className="middle-content-container">
                <div className="sub-container">
                    <h1>Get in touch</h1>
                    <p><a href="mailto:yaserrezvany@gmail.com" aria-label="Email"><img src={emailIcon} alt="Twitter" className="icon" /></a>Email</p>
                    <p><a href="https://www.linkedin.com/in/yasser-rezvani-773086b3/" aria-label="LinkedIn"><img src={linkedinIcon} alt="Linedin" className="li-icon" /></a>LinkedIn</p>
                    <p><a href="https://twitter.com/yaserrezvany" aria-label="Twitter"><img src={twitterIcon} alt="Twitter" className="icon" /></a>Twitter</p>
                    <p><a href="https://github.com/yrezvani?tab=repositories" aria-label="GitHub"><img src={githubIcon} alt="Github" className="icon" /></a>Github</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact;