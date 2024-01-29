import React from "react";
import Home from './pages/Home';
import Contact from './pages/Contact';
import ProjectGallery from './pages/ProjectGallery';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projectgallery" element={<ProjectGallery />} />
      </Routes>
    </Router>
  )
}

export default App
