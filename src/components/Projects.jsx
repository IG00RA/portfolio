import { useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import {
  webStudio,
  phoneBook,
  movieSearch,
  mimino,
  imgFinder,
  goose,
  carRent,
  filmoteka,
} from "../img";
import { fadeIn, textVariant, staggerContainer } from "../utils/motion";
import { ProjectCard } from "./ProjectCard";
import { useTranslation } from "react-i18next";

export const Projects = () => {
  const [active, setActive] = useState("project-2");
  const { t } = useTranslation();

  const projects = [
    {
      id: "project-1",
      name: t("projects.sites.name.filmoteka"),
      description: t("projects.sites.description.filmoteka"),
      image: filmoteka,
      repo: "https://github.com/IG00RA/5th-element-filmoteka",
      demo: "https://julieshapo.github.io/5th-element-filmoteka/",
    },
    {
      id: "project-2",
      name: t("projects.sites.name.carRent"),
      description: t("projects.sites.description.carRent"),
      image: carRent,
      repo: "https://www.horizonlegend.com/",
      demo: "https://horizonlegend.com/",
    },
    {
      id: "project-3",
      name: t("projects.sites.name.mimino"),
      description: t("projects.sites.description.mimino"),
      image: mimino,
      repo: "https://github.com/IG00RA/mi-6",
      demo: "https://ig00ra.github.io/mi-6/",
    },
    {
      id: "project-4",
      name: t("projects.sites.name.taskManager"),
      description: t("projects.sites.description.taskManager"),
      image: goose,
      repo: "https://github.com/IG00RA/project-team_5_frontend",
      demo: "https://ig00ra.github.io/project-team_5_frontend/",
    },
    {
      id: "project-5",
      name: t("projects.sites.name.imageFinder"),
      description: t("projects.sites.description.imageFinder"),
      image: imgFinder,
      repo: "https://github.com/IG00RA/goit-react-hw-04-images",
      demo: "https://ig00ra.github.io/goit-react-hw-04-images/",
    },
    {
      id: "project-6",
      name: t("projects.sites.name.web"),
      description: t("projects.sites.description.web"),
      image: webStudio,
      repo: "https://github.com/IG00RA/goit-markup-hw-08",
      demo: "https://ig00ra.github.io/goit-markup-hw-08/",
    },
    {
      id: "project-7",
      name: t("projects.sites.name.movieFinder"),
      description: t("projects.sites.description.movieFinder"),
      image: movieSearch,
      repo: "https://github.com/IG00RA/goit-react-hw-05-movies",
      demo: "https://ig00ra.github.io/goit-react-hw-05-movies",
    },
    {
      id: "project-8",
      name: t("projects.sites.name.phoneBook"),
      description: t("projects.sites.description.phoneBook"),
      image: phoneBook,
      repo: "https://github.com/IG00RA/goit-react-hw-08-phonebook",
      demo: "https://ig00ra.github.io/goit-react-hw-08-phonebook",
    },
  ];
  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>{t("projects.par")}</p>
        <h2 className={`${styles.sectionHeadTextLight}`}>
          {t("projects.header")}
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]"
        >
          {t("projects.text")}
        </motion.p>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <div className="mt-[50px] flex md:flex-row flex-wrap flex-col min-h-[135vh] md:min-h-[1vh] gap-7">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              {...project}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Projects, "projects");
