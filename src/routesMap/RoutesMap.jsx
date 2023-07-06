import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../pages/about/About";
import Education from "../pages/education/Education";
import Home from "../pages/home/Home";
import Skills from "../pages/skills/Skills";
import Projects from "../pages/projects/Projects";

function RoutesMap() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About-Me" element={<About />} />
      <Route path="/Projects" element={<Projects />} />
      <Route path="/My-Skills" element={<Skills />} />
      <Route path="/Education" element={<Education />} />
    </Routes>
  );
}

export default RoutesMap;
