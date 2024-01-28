import React from "react";
import myPhoto from '../../assets/myphoto.jpg';
import htmlIcon from '../../assets/html5.png';
import cssIcon from '../../assets/css3.png';
import javascriptIcon from '../../assets/javascript.png';
import reactIcon from '../../assets/react.png';
import jqueryIcon from '../../assets/jquery.png';

import './IntroductionCard.css'

function IntroductionCard() {
    return (
        <div className="intro-card">
            <div className="content-container">
                <div className="text-container">
                    <h1>Hello I'm Yasser</h1>
                    <p>I'm a passionate developer specializing in Web Development. Excited about creating elegant solutions to complex problems. Welcome to my portfolio, where I showcase my skills and projects.</p>
                </div>
                <div className="skills-container">
                    <img src={htmlIcon} alt="HTML5" className="skill-icon" />
                    <img src={cssIcon} alt="CSS3" className="skill-icon" />
                    <img src={javascriptIcon} alt="JavaScript" className="skill-icon" />
                    <img src={reactIcon} alt="React" className="skill-icon" />
                    <img src={jqueryIcon} alt="jQuery" className="skill-icon" />
                </div>
            </div>
            <img src={myPhoto} className="profile-image" />
        </div>
    )
}

export default IntroductionCard