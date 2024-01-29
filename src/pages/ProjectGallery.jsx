import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import './ProjectGallery.css';
import projectsData from '../assets/projectData.json'
import Project from "../components/project/project";

function ProjectGallery() {
    return (
        <div>
            <Header />
            <div className="projects-container">
                {projectsData.map(project => <Project key={project.id} project={project} />)}
            </div>
            <Footer />
        </div>
    );
}

export default ProjectGallery;