import {
  goIt,
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  webStudio,
  phoneBook,
  movieSearch,
  mimino,
  imgFinder,
  goose,
  carRent,
  filmoteka,
  spirit,
  technologi,
  userDesign,
  crossPlatform,
} from "../img";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Attention to Detail",
    icon: ux,
  },
  {
    title: "Problem Solver",
    icon: prototyping,
  },
  {
    title: "Collaborative Spirit",
    icon: spirit,
  },
  {
    title: " Cutting-Edge Technologies",
    icon: technologi,
  },
  {
    title: " User-Centered Design",
    icon: userDesign,
  },
  {
    title: " Cross-Platform Compatibility",
    icon: crossPlatform,
  },
];

const technologies = [
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "GoIT",
    icon: goIt,
    iconBg: "#333333",
    date: "Sep 2022 - Dec 2022",
  },
  {
    title: "JavaScript Developer",
    company_name: "GoIT",
    icon: goIt,
    iconBg: "#333333",
    date: "Jan 2023 - Mar 2023",
  },
  {
    title: "ReactJS Developer",
    company_name: "GoIT",
    icon: goIt,
    iconBg: "#333333",
    date: "Apr 2023 - Jun 2023",
  },
  {
    title: "NodeJS Developer",
    company_name: "GoIT",
    icon: goIt,
    iconBg: "#333333",
    date: "Jun 2023 - Jul 2023",
  },
  {
    title: "Team Leader",
    company_name: "GoIT",
    icon: goIt,
    iconBg: "#333333",
    date: "Jul 2023 - Aug 2023",
  },
  {
    title: "Full Stack Developer",
    company_name: "GoIT",
    icon: goIt,
    iconBg: "#333333",
    date: "Aug 2023 - Sep 2023",
  },
];

const projects = [
  {
    id: "project-1",
    name: "Filmoteka",
    description:
      "Discover, explore, and enjoy the world of cinema with Filmoteka!",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: filmoteka,
    repo: "https://github.com/IG00RA/5th-element-filmoteka",
    demo: "https://julieshapo.github.io/5th-element-filmoteka/",
  },
  {
    id: "project-2",
    name: "Goose Task manager",
    description:
      "The GooseTrack application is a powerful tool for task planning and personal productivity tracking.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: goose,
    repo: "https://github.com/IG00RA/project-team_5_frontend",
    demo: "https://ig00ra.github.io/project-team_5_frontend/",
  },
  {
    id: "project-3",
    name: "Mimino",
    description: "Restaurant-hotel complex",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: mimino,
    repo: "https://github.com/IG00RA/mi-6",
    demo: "https://ig00ra.github.io/mi-6/",
  },
  {
    id: "project-4",
    name: "Car rent portal",
    description: `DriveStar Car Rental. your premier destination for luxury car rentals. Explore our wide range of luxury vehicles and book your dream car today!`,
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: carRent,
    repo: "https://github.com/IG00RA/test_car_rent",
    demo: "https://ig00ra.github.io/test_car_rent/",
  },
  {
    id: "project-5",
    name: "Fast image finder site",
    description: "This is a demo website for a image finder portal.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: imgFinder,
    repo: "https://github.com/IG00RA/goit-react-hw-04-images",
    demo: "https://ig00ra.github.io/goit-react-hw-04-images/",
  },
  {
    id: "project-6",
    name: "Web studio",
    description: "Web studio site - effective solutions for your business",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: webStudio,
    repo: "https://github.com/IG00RA/goit-markup-hw-08",
    demo: "https://ig00ra.github.io/goit-markup-hw-08/",
  },
  {
    id: "project-7",
    name: "Movie finder site",
    description: "Demo site - movie search",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: movieSearch,
    repo: "https://ig00ra.github.io/goit-react-hw-05-movies",
    demo: "https://github.com/IG00RA/goit-react-hw-05-movies",
  },
  {
    id: "project-8",
    name: "Phone Book",
    description:
      "A simple phonebook with Swagger API register/log-in, add, remove/filter contacts",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: phoneBook,
    repo: "https://github.com/IG00RA/goit-react-hw-08-phonebook",
    demo: "https://ig00ra.github.io/goit-react-hw-08-phonebook",
  },
];

export { services, technologies, experiences, projects };
