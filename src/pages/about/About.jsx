import React from "react";
import { motion } from "framer-motion";
import "../about/about.css";
import Comeback from "../../components/comeback/Comeback";

function About() {
  return (
    <div className="about">
      <Comeback />
      <motion.div
        className="infoContainer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          delay: 0.4,
          duration: 0.4,
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        <div className="info">
          <h3 className="quien">Quien Soy?</h3>
          <p className="description">
            Soy un joven de 19 años nacido en Argentina. Empecé a estudiar
            programación en el 2022 luego de no saber que estudiar a futuro, hoy
            en día ya finalicé varios cursos: Desarrollo Web, Programacion con
            Js y ReactJS. Mis metas para los años siguientes es seguir
            estudiando y perfeccionándome, junto a conseguir un trabajo como
            programador para adquirir experiencia. Mi objetivo como programador
            es profundizar mis conocimientos y poder trabajar en un buen lugar o
            emprender por mi cuenta.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default About;
