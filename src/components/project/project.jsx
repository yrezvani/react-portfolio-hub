import React from "react";
import { useState, useEffect } from 'react';
import './project.css'


function Project({ project }) {
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        const imageImports = import.meta.glob('/src/assets/images/*');

        const loadImage = async (filename) => {
            const module = await imageImports[`/src/assets/images/${filename}`]();
            setImageUrl(module.default);
        };

        loadImage(project.image);
    }, [project.image]);


    return (
        <div className="project">
            <div className="proj-text-container">
                <h2>{project.title}</h2>
                <a href={project.deployedLink}>Deployed Version </a>
                <a href={project.githubLink}>Github Repository</a>
            </div>
            <img src={imageUrl} alt={project.title} className="screenshot" />
        </div>
    )
}

export default Project;