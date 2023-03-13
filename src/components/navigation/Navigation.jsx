import React from "react";
import { FaLinkedin, FaGithubSquare, FaInstagramSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../navigation/navigation.css";

function Navigation() {
  const aboutLink = {
    hidden: { opacity: 0, scale: 0.5 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        delay: 0.3,
      },
    },
  };
  const skillsLink = {
    hidden: { opacity: 0, scale: 0.5 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        delay: 0.4,
      },
    },
  };
  const educationLink = {
    hidden: { opacity: 0, scale: 0.5 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.5,
      },
    },
  };

  return (
    <div className="navigation">
      <motion.div
        className="buttonLink aboutLink"
        variants={aboutLink}
        initial="hidden"
        animate="show"
      >
        <Link className="link" to={"sobre-mi"}>
          Sobre Mi
        </Link>
      </motion.div>

      <motion.div
        className="buttonLink skillsLink"
        variants={skillsLink}
        initial="hidden"
        animate="show"
      >
        <Link className="link" to={"habilidades"}>
          Habilidades
        </Link>
      </motion.div>

      <motion.div
        className="buttonLink educationLink"
        variants={educationLink}
        initial="hidden"
        animate="show"
      >
        <Link className="link" to={"educacion"}>
          Educación
        </Link>
      </motion.div>

      <motion.div
        className="presentation"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          default: {
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
          },
          scale: {
            type: "spring",
            damping: 5,
            stiffness: 100,
            restDelta: 0.001,
          },
        }}
      >
        <h2 className="pr__tittle">Hola! Yo soy</h2>
        <h1 className="pr__name">
          <span className="yellowLetter">F</span>elipe{" "}
          <span className="yellowLetter">P</span>erez{" "}
          <span className="yellowLetter">F</span>erraro
        </h1>
        <p className="pr__paragraph">Front End Developer</p>

        <div className="social">
          <a
            className="socialLink"
            href="https://www.linkedin.com/in/felipe-perez-ferraro-6b9358218/"
            target="_blank"
          >
            <FaLinkedin />
          </a>
          <a
            className="socialLink"
            href="https://github.com/Feliperto"
            target="_blank"
          >
            <FaGithubSquare />
          </a>
          <a
            className="socialLink"
            href="https://www.instagram.com/fperezferraro/"
            target="_blank"
          >
            <FaInstagramSquare />
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export default Navigation;
