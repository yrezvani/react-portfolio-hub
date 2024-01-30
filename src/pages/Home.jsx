// Import all the required modules and files.
import React from "react";
import Header from "../components/Header/Header";
import IntroductionCard from "../components/IntroductionCard/IntroductionCard";
import './Home.css'
import Footer from "../components/Footer/Footer";

// Render the Header, Introduction, and the Footer on the home page.
function Home() {

    return (

        <div className="home-container">
            <Header />
            <IntroductionCard />
            <Footer />
        </div>
    )
}

export default Home;