import React from "react";
import { Link } from 'react-router-dom';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import './ProjectGallery.css';
import projectsData from '../assets/projectData.json'


function ProjectGallery() {

    const imageImports = import.meta.glob('/src/assets/images/*', { eager: true });

    const loadImage = (filename) => {
        const imagePath = `/src/assets/images/${filename}`;
        return imageImports[imagePath]?.default || '';
    };


    return (
        <div>
            <Header />
            <div className="projects-container">
                {projectsData.map(project => (
                    <Link to={`/project/${project.id}`} key={project.id} className="project-link">
                        <div className="project">
                            <h3 className="project-title">{project.title}</h3>
                            <img src={loadImage(project.image)} alt={project.title} className="screenshot" />
                        </div>
                    </Link>
                ))}
            </div>
            <Footer />
        </div>
    );
}

export default ProjectGallery;