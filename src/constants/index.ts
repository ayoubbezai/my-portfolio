// Import images
import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";
import project6 from "../assets/projects/project-6.png";
import project7 from "../assets/projects/project-7.png";
import img1 from "../assets/Events/img1.jpg"
import img2 from "../assets/Events/img2.jpg"
import img3 from "../assets/Events/img3.jpg"
import img4 from "../assets/Events/img4.jpg"
import img5 from "../assets/Events/img5.jpg"
import img6 from "../assets/Events/img6.jpg"

// Hero content
export const HERO_CONTENT: string = `I am a passionate front-end developer with a keen eye for design and a strong focus on creating seamless, responsive user interfaces. I specialize in technologies like React, Tailwind CSS, HTML, and CSS to build modern, scalable web applications. My experience extends to integrating APIs and using tools such as Motion Framer to add smooth animations and dynamic user interactions. Additionally, I leverage Figma and Photoshop to design visually engaging interfaces that align with user needs and business goals, ensuring a smooth and intuitive user experience across all devices.`;

// About text
export const ABOUT_TEXT: string = `Currently, I am a second-year Computer Science student with a deep interest in cybersecurity and networking principles. As I continue to grow in my academic journey, I’m eager to explore how front-end development can intersect with security and network systems to create not only beautiful but secure and efficient web applications. I am excited about applying my technical skills to real-world projects, learning more about the latest industry trends, and continuously improving my craft to contribute to innovative and secure solutions in the tech world.`;

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
export interface Events {
  image: string;
  
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
    role: "Frontend Developer",
    company: "My Projects",
    description:  `I am actively learning front-end development, focusing on building user-friendly and responsive web applications. Through hands-on experience with technologies like React, HTML, CSS, and Tailwind CSS, I am honing my skills to create seamless, dynamic user interfaces. My goal is to continue growing as a developer, mastering modern tools and techniques to build visually appealing and functional websites.`,
    technologies: ["Javascript", "React.js", "Typescript", "Tailwind","Html&Css"],
  },
  // {
  //   year: "2022 - 2023",
  //   role: "Frontend Developer",
  //   company: "Adobe",
  //   description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
  //   technologies: ["HTML", "CSS", "Vue.js", "MySQL"],
  // },
  // {
  //   year: "2021 - 2022",
  //   role: "Full Stack Developer",
  //   company: "Facebook",
  //   description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
  //   technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  // },
  // {
  //   year: "2020 - 2021",
  //   role: "Software Engineer",
  //   company: "Paypal",
  //   description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
  //   technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  // },
];

// Projects
export const PROJECTS: Project[] = [
  {
    title: "Portfolio",
    image: project6,
    description:
      "My personal portfolio showcasing my projects, skills, and professional details.",
    technologies: ["HTML", "React", "Tailwind", "TypeScript"," Framer Motion"],
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

// Events
export const EVENTS: Events[] = [
  {image:img1},
  {image:img2},
  {image:img3},
  {image:img4},
  {image:img5},
  {image:img6},
];

// Contact information
export const CONTACT: Contact = {
  address: "767 Fifth Avenue, Algeria,Batna",
  phoneNo: "+213 07 84 11 06 47",
  email: "bezaiayoub05@gmail.com",
};