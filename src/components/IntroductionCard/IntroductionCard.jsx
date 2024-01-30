// Import all the required modules and files.
import React from "react";
import myPhoto from '../../assets/images/myphoto.jpg';
import htmlIcon from '../../assets/images/html5.png';
import cssIcon from '../../assets/images/css3.png';
import javascriptIcon from '../../assets/images/javascript.png';
import reactIcon from '../../assets/images/react.png';
import jqueryIcon from '../../assets/images/jquery.png';
import './IntroductionCard.css'

// Introduction card displayed on the home page
function IntroductionCard() {
    return (
        <div className="intro-card">
            <div className="content-container">
                {/* Container for introductory text */}
                <div className="text-container">
                    <h1>Hello I'm Yasser</h1>
                    <p>I'm a passionate developer specializing in Web Development. Excited about creating elegant solutions to complex problems. Welcome to my portfolio, where I showcase my skills and projects.</p>
                    <a href="https://drive.google.com/file/d/1SpHCDTpLAecW9d9eN8MEk37_-PqreD1O/view?usp=drive_link" className="cv-button" target="_blank" rel="noreferrer">View My CV</a>
                </div>
                {/* Container for displaying skills icons */}
                <div className="skills-container">
                    <img src={htmlIcon} alt="HTML5" className="skill-icon" />
                    <img src={cssIcon} alt="CSS3" className="skill-icon" />
                    <img src={javascriptIcon} alt="JavaScript" className="skill-icon" />
                    <img src={reactIcon} alt="React" className="skill-icon" />
                    <img src={jqueryIcon} alt="jQuery" className="skill-icon" />
                </div>
            </div>
            {/* Displaying the profile image */}
            <img src={myPhoto} className="profile-image" />
        </div>
    )
}

export default IntroductionCard