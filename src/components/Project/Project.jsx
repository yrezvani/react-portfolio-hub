// Import all the required modules and files.
import React from "react";
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import './Project.css'
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Project({ projects }) {
    // Get the project ID from the URL parameters
    const { projectId } = useParams();

    // Find the project with the matching ID from the projects array
    const project = projects.find(p => p.id === parseInt(projectId));

    // State to store the image URL
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        // Create a dynamic import for all image files in the assets folder
        const imageImports = import.meta.glob('/src/assets/images/*');

        // Function to load an image by its filename
        const loadImage = async (filename) => {
            if (filename) {
                const module = await imageImports[`/src/assets/images/${filename}`]();
                setImageUrl(module.default);
            }
        };

        // Load the image associated with the project when the component mounts or when the project image changes
        loadImage(project?.image);
    }, [project?.image]);

    // If the project is not found, display a message
    if (!project) {
        return <div>Project not found.</div>;
    }

    return (
        <div className="project-container">
            <Header />
            <div className="project-details">
                <div className="proj-title-container">
                    {/* Display the project title */}
                    <h2>{project.title}</h2>
                </div>
                <div className="image-container">
                    {/* Display the project screenshot with a link to the deployed version */}
                    <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">
                        <img src={imageUrl} alt={project.title} className="full-screensht" />
                    </a>
                </div>
                <div className="project-details">
                    {/* Display links to the deployed version, GitHub repository, and project description */}
                    {project.deployedLink && <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">Deployed Version</a>}
                    {project.githubLink && <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub Repository</a>}
                    {project.description && <p className="project-description" >{project.description}</p>}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Project;
