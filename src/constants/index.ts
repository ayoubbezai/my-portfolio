// Import images
import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";
import project6 from "../assets/projects/project-6.png";
import project7 from "../assets/projects/project-7.png";

// Hero content
export const HERO_CONTENT: string = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

// About text
export const ABOUT_TEXT: string = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

// Type definitions
export interface Experience {
  year: string;
  role: string;
  company: string;
  description: string;
  technologies: string[];
}

export interface Project {
  title: string;
  image: string;
  description: string;
  technologies: string[];
  link: string; // Added link field
}

export interface Contact {
  address: string;
  phoneNo: string;
  email: string;
}

// Experiences
export const EXPERIENCES: Experience[] = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "MongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "MySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

// Projects
export const PROJECTS: Project[] = [
  {
    title: "Portfolio",
    image: project6,
    description:
      "My personal portfolio showcasing my projects, skills, and professional details.",
    technologies: ["HTML", "React", "Tailwind", "TypeScript"],
    link: "http://ayoubbezai.site/",
  },
  {
    title: "Clinic Website",
    image: project1,
    description:
      "A web-based clinic appointment system for scheduling appointments with doctors and managing medical records",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://ayoub-bezai.github.io/clinc/",
  },
  {
    title: "GDGC",
    image: project2,
    description:
      "A simple website for the Google Developer Group Community (GDGC) workshop.",
    technologies: ["HTML", "Tailwind", "React"],
    link: "https://ayoubbezai.github.io/gdgc/",
  },
  {
    title: "Calc-Average",
    image: project3,
    description:
      "A simple web application that calculates the average of a set of numbers entered by the user.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://ayoubbezai.github.io/calc-avrage/",
  },
  {
    title: "Course Platform",
    image: project4,
    description:
      "A university course management platform designed to assist students with course materials and organization.",
    technologies: ["HTML", "CSS"],
    link: "https://ayoubbb1235.github.io/univ-course/",
  },
  {
    title: "Food Recipes",
    image: project5,
    description:
      "A recipe app built with HTML, CSS, and JavaScript using the Forkify API to display various recipes and cooking instructions.",
    technologies: ["HTML", "React", "Tailwind", "API"],
    link: "https://ayoubbezai.github.io/food-recipes/",
  },
  {
    title: "Tech-Educa",
    image: project7,
    description:
      "An educational platform for technology courses, designed with a user-friendly interface to access various learning resources.",
    technologies: ["HTML", "CSS"],
    link: "https://ayoubbb1235.github.io/Tech-Educa/",
  },
];

// Contact information
export const CONTACT: Contact = {
  address: "767 Fifth Avenue, New York, NY 10153",
  phoneNo: "+12 4555 666 00",
  email: "me@example.com",
};
