import React from "react";
import myPhoto from '../../assets/myphoto.jpg';
import './style.css'

function IntroductionCard() {
    return (
        <div className="intro-card">
            <div className="text-container">
                <h1>Hello I'm Yasser</h1>
                <p>I'm a passionate developer specializing in Web Dewelopment. Excited about creating elegant solutions to complex problems. </p>
            </div>

            <img src={myPhoto} className="profile-image" />
        </div>
    )
}

export default IntroductionCard