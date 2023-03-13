import React from "react";
import Comeback from "../../components/comeback/Comeback";
import "./education.css";
import { motion } from "framer-motion";

function Education() {
  return (
    <div className="education">
      <Comeback />
      <div className="gralContainer">
        <motion.div
          className="school"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{
            duration: 0,
            delay: 0,
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          <h1 className="edTitle">Estudios</h1>
          <h2 className="edSubtitle">Escuela Argentina del Oeste</h2>
          <span className="edSpan">(Graduado)</span>
        </motion.div>
        <motion.div
          className="educationContainer"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{
            duration: 0,
            delay: 0,
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          <h1 className="edTitle">Cursos</h1>
          <div>
            <h2 className="edSubtitle">Desarrollo Web, Coderhouse</h2>
            <span className="edSpan">(Marzo 2022 - Abril 2022)</span>
          </div>
          <div>
            <h2 className="edSubtitle">Javascript, Coderhouse</h2>
            <span className="edSpan">(Mayo 2022 - Julio 2022)</span>
          </div>
          <div>
            <h2 className="edSubtitle">React.Js, UTN</h2>
            <span className="edSpan">(Semptiembre 2022 - Noviembre 2022)</span>
          </div>
          <div>
            <h2 className="edSubtitle">Java, Codecademy</h2>
            <span className="edSpan">(Enero 2023 - Marzo 2022)</span>
          </div>
        </motion.div>
      </div>
      <motion.div
        className="curriculumContainer"
        initial={{ scale: 0 }}
        animate={{ scale: 0.9 }}
        transition={{
          duration: 0.4,
          delay: 0.4,
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      ></motion.div>
    </div>
  );
}

export default Education;
