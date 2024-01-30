// Import all required modules and files.
import React, { useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import githubIcon from "../assets/images/github.svg";
import linkedinIcon from "../assets/images/linkedin.png";
import twitterIcon from "../assets/images/twitter.svg";
import emailIcon from "../assets/images/email.png";
import cvIcon from "../assets/images/cv.png"
import './Contact.css'

// Contact page for handling user inquiries
function Contact() {

    // State for managing form data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    // Updates form data on user input
    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    // Handles form submission    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData); // logging to console as there is no form submission logic.
    };

    // Render contact form with header and footer    
    return (
        <div className="contact-container">
            <Header />
            <div className="middle-content-container">
                <div className="sub-container">
                    <h1>Get in touch</h1>
                    <form onSubmit={handleSubmit} className="contact-form">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            value={formData.subject}
                            onChange={handleChange}
                        />
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                        />
                        <button type="submit">Send Message</button>
                    </form>
                    {/* Social links for contact */}
                    <div className="social-links-container">
                        <a href="mailto:yaserrezvany@gmail.com" aria-label="Email" className="social-link" target="_blank" rel="noreferrer"><img src={emailIcon} alt="Email" className="icon" /></a>
                        <a href="https://www.linkedin.com/in/yasser-rezvani-773086b3/" aria-label="LinkedIn" className="social-link" target="_blank" rel="noreferrer"><img src={linkedinIcon} alt="LinkedIn" className="li-icon" /></a>
                        <a href="https://twitter.com/yaserrezvany" aria-label="Twitter" className="social-link" target="_blank" rel="noreferrer"><img src={twitterIcon} alt="Twitter" className="icon" /></a>
                        <a href="https://github.com/yrezvani?tab=repositories" aria-label="GitHub" className="social-link" target="_blank" rel="noreferrer"><img src={githubIcon} alt="Github" className="icon" /></a>
                        <a href="https://drive.google.com/file/d/1SpHCDTpLAecW9d9eN8MEk37_-PqreD1O/view?usp=sharing" aria-label="CV" target="_blank" rel="noreferrer">
                            <img src={cvIcon} alt="CV" className="footer-icon" />
                        </a>

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact;