import React from "react";
import Home from './pages/Home';
import Contact from './pages/Contact';
import ProjectGallery from './pages/ProjectGallery';
import Project from './components/Project/Project';

import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import projectsData from './assets/projectData.json';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projectgallery" element={<ProjectGallery />} />
        <Route path="/project/:projectId" element={<Project projects={projectsData} />} />
      </Routes>
    </Router>
  )
}

export default App
