import React, { useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import githubIcon from "../assets/images/github.svg";
import linkedinIcon from "../assets/images/linkedin.png";
import twitterIcon from "../assets/images/twitter.svg";
import emailIcon from "../assets/images/email.png";
import './Contact.css'

function Contact() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
    };

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