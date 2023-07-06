import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FaShareSquare } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Portfolio Project",
    live: "https://feliperto.github.io/PortfolioWebsite-Microverse/",
    code: "https://github.com/Feliperto/PortfolioWebsite-Microverse",
    language1: "HTML",
    language2: "CSS",
    language3: "JavaScript",
    img: "/src/assets/portfolio.png",
  },
  {
    id: 2,
    title: "Capstone Project",
    live: "https://feliperto.github.io/Capstone-Project/",
    code: "https://github.com/Feliperto/Capstone-Project",
    language1: "HTML",
    language2: "CSS",
    language3: "JavaScript",
    img: "/src/assets/capstone.png"
  },
  {
    id: 3,
    title: "Awesome Books",
    live: "https://feliperto.github.io/AwesomeBooks/",
    code: "https://github.com/Feliperto/AwesomeBooks",
    language1: "HTML",
    language2: "CSS",
    language3: "JavaScript",
    img: "/src/assets/awesome.png"
  },
];

export const elements = [];

projects.forEach((el) => {
  elements.push(
    <article key={el.id} className="projects__container">
      <motion.div
        className="projectContainer"
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
        <div className="features__container">
          <h2 className="features__title">{el.title}</h2>
          <img src={el.img} alt="" className="features__img" />
          <ul className="features__list__container">
            <li className="features__list__item">{el.language1}</li>
            <li className="features__list__item">{el.language2}</li>
            <li className="features__list__item">{el.language3}</li>
          </ul>
        </div>

        <div className="linksContainer">
          <a
            href={el.live}
            target="_blank"
            title="See Live"
            className="projectLink"
          >
            <p className="projectLinkDesc">See Live</p>
            <FaShareSquare />
          </a>
          <a
            href={el.code}
            target="_blank"
            title="See Code"
            className="projectLink"
          >
            <p className="projectLinkDesc">See Code</p>
            <FaGithub />
          </a>
        </div>
      </motion.div>
    </article>
  );
});
