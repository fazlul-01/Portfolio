import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg";
import project6 from "../assets/projects/project-6.jpg";
import project7 from "../assets/projects/project-7.jpg";
import project8 from "../assets/projects/provision-project.png";

export const HERO_CONTENT = `I am a passionate software developer with a knack for developing efficient and scalable applications. My area of expertise is full-stack programming, where I create dynamic web applications using tools like React and Node.js.  My objective is to use my skills to develop creative solutions that promote business development and provide outstanding user experiences.`;

export const ABOUT_TEXT_P1 = `I am a motivated and versatile full-stack developer with more than two years of working experience. My interest in web development began with a profound curiosity about how things function, and it has grown into a career in which I always seek to learn and adapt to new difficulties.`;
export const ABOUT_TEXT_P2 = `With a solid background in technologies such as React, Node.js, Firebase, PostgreSQL, and MongoDB. I am passionate about developing efficient and user-friendly web applications. I thrive in working environments and enjoy solving challenging problems to produce high-quality results. Outside of coding, I enjoy staying active, learning about new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2024 - 2024",
    role: "Full Stack Developer",
    company: "Bluewave Labs",
    description: `Developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with PostgreSQL database. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Node.js", "PostgreSQL"],
  },
  {
    year: "2023 - 2024",
    role: "IT Support Spealist",
    company: "Avaso Technology Solutions",
    description: `Developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with PostgreSQL database. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Node.js", "PostgreSQL"],
  },
  {
    year: "2022 - 2023",
    role: "Web Developer",
    company: "Freelance",
    description: `Created visually appealing and user-friendly websites for multiple clients using HTML, CSS, JS, and Wordpress`,
    technologies: [
      "Wordpress",
      "Javascript",
      "React.js",
      "Node.js",
      "PostgreSQL",
    ],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Sixth Force Solutions",
    description: `Designed and developed user interfaces for web applications using Node.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "React.js", "mySQL"],
  },
];

export const PROJECTS = [
  {
    title: "HR Management Application",
    image: project1,
    description:
      "Contributor to a fully functional and open-source HR management application with features like team management, employee management, time off & vacation management, onborading and offborading.",
    technologies: [
      "React",
      "Node.js",
      "PostgreSQL",
      "Material UI",
      "Sequelize ORM",
    ],
    link: "https://github.com/fazlul-01/bluewave-hrm",
  },
  {
    title: "Website for Security Service business",
    link: "https://vestsecurityservices.com/",
    image: project2,
    description:
      "A professional website for a security service company, featuring service details, contact information, and client testimonials.",
    technologies: ["HTML", "CSS", "JS", "Bootstrap"],
  },
  {
    title: "Website for Provision Land Consulants",
    link: "https://provisionlc.com/",
    image: project8,
    description:
      "A professional website for a land consultant company, featuring their portfolio, services, contact information, and client testimonials.",
    technologies: ["Wordpress", "HTML", "CSS", "JS", "Bootstrap"],
  },
  {
    title: "Website for MM Land Surveying Company",
    image: project3,
    description:
      "A comprehensive website for a land surveying company, including service descriptions, project portfolios, and an easy-to-use contact form.",
    technologies: ["HTML", "CSS", "Wordpress", "Elementor"],
    link: "https://mmsurvey.ca/",
  },
  {
    title: "Website for YZ Land Surveying Inc.",
    image: project4,
    description:
      "A modern website for a land surveying company, showcasing their services, team, and client testimonials, with integrated Google Maps for location-based services.",
    technologies: ["HTML", "CSS", "Wordpress", "Elementor"],
    link: "https://yzsurveying.com/",
  },
];
export const FUN_PROJECTS = [
  {
    title: "Amazon E-commerce Clone",
    image: project5,
    description:
      "A full-featured clone of Amazon's e-commerce platform, including user authentication, product listings, and a shopping cart.",
    technologies: ["React", "ContextAPI", "Firebase", "FireStore DB"],
    link: "https://clone-cc286.web.app/",
  },
  {
    title: "Netflix Clone",
    link: "https://netflix-clone-e67c1.web.app/",
    image: project6,
    description:
      "A Netflix-inspired application using OMDB API for movie and TV show data, featuring the ability to show recent trending movies in real-time.",
    technologies: ["React", "Firebase", "OMDB API", "Tailwind CSS"],
  },
  {
    title: "HULU Clone",
    image: project7,
    description:
      "A HULU-inspired streaming application using OMDB API, offering a wide selection of movies and TV shows, with real-time data on recent trending content.",
    technologies: ["React", "Firebase", "OMDB API", "Tailwind CSS"],
    link: "https://hulu-clone-d9w6rbl33-fazlul-01.vercel.app/",
  },
];

export const CONTACT = {
  address: "Toronto, Canada ",
  phoneNo: "+1 (905)-601-1186",
  email: "fazlul2k@hotmail.com",
};
