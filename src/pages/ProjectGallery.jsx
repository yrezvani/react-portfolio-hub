// Import all the required modules and files.
import React from "react";
import { Link } from 'react-router-dom';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import './ProjectGallery.css';
import projectsData from '../assets/projectData.json'

function ProjectGallery() {
    // Dynamically load images from the assets folder
    const imageImports = import.meta.glob('/src/assets/images/*', { eager: true });

    // Function to load an image by filename
    const loadImage = (filename) => {
        const imagePath = `/src/assets/images/${filename}`;
        // Use dynamic imports to load the image or provide an empty string if not found
        return imageImports[imagePath]?.default || '';
    };

    return (
        <div>
            <Header />
            <div className="projects-container">
                {/* Map through project data and create project links */}
                {projectsData.map(project => (
                    <Link to={`/project/${project.id}`} key={project.id} className="project-link">
                        <div className="project">
                            <h3 className="project-title">{project.title}</h3>
                            {/* Display project screenshot using the loadImage function */}
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
