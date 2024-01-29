import React from "react";
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import './Project.css'
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Project({ projects }) {
    const { projectId } = useParams();
    const project = projects.find(p => p.id === parseInt(projectId));

    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        const imageImports = import.meta.glob('/src/assets/images/*');

        const loadImage = async (filename) => {
            if (filename) {
                const module = await imageImports[`/src/assets/images/${filename}`]();
                setImageUrl(module.default);
            }
        };

        loadImage(project?.image);
    }, [project?.image]);

    if (!project) {
        return <div>Project not found.</div>;
    }

    return (
        <div className="project-container">
            <Header />
            <div className="project-details">
                <div className="proj-title-container">
                    <h2>{project.title}</h2>
                </div>
                <div className="image-container">
                    <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">
                        <img src={imageUrl} alt={project.title} className="screenshot" />
                    </a>
                </div>
                <div className="project-details">
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