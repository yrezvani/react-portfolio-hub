import React from "react";

import Header from "./components/Header/Header";
import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  )
}

export default App
