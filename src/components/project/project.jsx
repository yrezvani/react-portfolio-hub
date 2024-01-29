import React from "react";
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import './project.css'


function Project({ projects }) {
    const { projectId } = useParams();
    const project = projects.find(p => p.id === parseInt(projectId));



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
            <div className="proj-title-container">
                <h2>{project.title}</h2>
            </div>
            <img src={imageUrl} alt={project.title} className="screenshot" />
        </div>
    )
}

export default Project;