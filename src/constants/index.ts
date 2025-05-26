// Import images
import project1 from "../assets/projects/project-1.png";
// import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";
import project6 from "../assets/projects/project-6.png";
import project7 from "../assets/projects/project-7.png";
import project8 from "../assets/projects/project-8.png";
import project9 from "../assets/projects/project-9.png";
import project10 from "../assets/projects/project-10.png";
import project11 from "../assets/projects/project-11.png";

import img1 from "../assets/Events/img1.jpg";
import img2 from "../assets/Events/img2.jpg";
import img3 from "../assets/Events/img3.jpg";
import img4 from "../assets/Events/img4.jpg";
// import img6 from "../assets/Events/img6.jpg";
import img5 from "../assets/Events/img5.jpg";
import img7 from "../assets/Events/img7.jpg";
import img8 from "../assets/Events/img8.jpg";
import img9 from "../assets/Events/img9.jpg";
import img10 from "../assets/Events/img10.jpg";

import cer1 from "../assets/certifications/cert1.png";
import cer2 from "../assets/certifications/cert2.jpg";

import design1 from "../assets/Design/design1.jpg";
import design2 from "../assets/Design/design2.png";

import achv1 from "../assets/achivements/el-djazair-ctf.jpg";
import achv2 from "../assets/achivements/dev4devjpg.jpg";
import achv3 from "../assets/achivements/project-0.jpg";
import achv4 from "../assets/achivements/boosthack.jpg";

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
  link: string;
}

export interface Events {
  image: string;
}

export interface Contact {
  address: string;
  phoneNo: string;
  email: string;
}
export interface certifications {
  img: string;
  title: string;
}

// Experiences
export const EXPERIENCES: Experience[] = [
  {
    year: "Dec 2024 - Present",
    role: "Freelance Full-Stack & Mobile Developer",
    company: "Mostaqil (Self-Employed)",
    description: `Delivering complete web and mobile solutions for clients worldwide. Specializing in building responsive, high-performance applications using modern technologies. My work includes designing architectures, developing features, and deploying scalable solutions that meet client requirements while maintaining clean code standards and best practices.`,
    technologies: [
      "React",
      "TypeScript",
      "Laravel",
      "MySQL",
      "React Native",
      "Firebase",
      "Tailwind CSS",
      "Node.js",
      "REST APIs",
      "Git",
    ],
  },
];

// Projects
export const PROJECTS: Project[] = [
  {
    title: "Portfolio",
    image: project6,
    description:
      "My personal portfolio showcasing my projects, skills, and professional details.",
    technologies: ["HTML", "React", "Tailwind", "TypeScript", " Framer Motion"],
    link: "https://ayoubbezai.site/",
  },
  {
    title: "My-Blog",
    image: project9,
    description:
      "This full-stack blog allows users to like and comment on posts, creating an interactive experience. Built with Firebase, it handles real-time updates for likes and comments, fostering engagement and discussion around the content.",
    technologies: [
      "HTML",
      "CSS",
      "Tailwind",
      "React",
      "Fire-Base",
      "Sahdcn",
      "JavaScript",
    ],
    link: "https://my-blog-livid-gamma.vercel.app/",
  },
  {
    title: "Clinic Website",
    image: project1,
    description:
      "A web-based clinic appointment system for scheduling appointments with doctors and managing medical records",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://ayoubbb1235.github.io/clinc/",
  },
  {
    title: "Abqarino",
    image: project8,
    description:
      "A Saudi  educational platform , aims to link parents and students with private teachers of high efficiency to raise the educational level",
    technologies: ["react", "tailwind", "Html", "Css", "Java Script"],
    link: "https://www.abqarino.online",
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
  {
    title: "RecyConnect",
    image: project11,
    description:
      "AI-powered platform that connects industrial waste sources with recyclers and upcyclers to enable a circular economy.",
    technologies: ["React", "Laravel", "OpenAI API", "Tailwind CSS"],
    link: "", // Add your link here
  },
  {
    title: "OppMatch",
    image: project10,
    description:
      "Autonomous AI platform that analyzes CVs and matches users with tailored internships, jobs, and grants.",
    technologies: ["React", "Laravel", "OpenAI API", "LangChain"],
    link: "", // Add your link here
  },
];

export const DESIGN: Project[] = [
  {
    title: "Building Arts",
    image: design1,
    description:
      "This is a logo for an architecture company that uses minimalist geometric shapes and neutral colors, reflecting precision, creativity, and professionalism.",
    technologies: [
      "logo",
      "brand identity",
      "Adobe Photoshop",
      "graphic designer",
    ],
    link: "https://www.behance.net/gallery/215646803/Building-Arts",
  },
  {
    title: "E-library",
    image: design2,
    description:
      "An E-library UI/UX design includes a simple layout with a search bar, categorized sections, and book details. It provides easy navigation, personalized recommendations, and is responsive across devices.",
    technologies: [
      "education",
      "ui design",
      "Adobe Photoshop",
      "figma",
      "web design",
    ],
    link: "https://www.behance.net/gallery/215647809/E-library",
  },
  {
    title: "Calc-Average",
    image: project3,
    description:
      "A simple web application that calculates the average of a set of numbers entered by the user.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://ayoubbezai.github.io/calc-avrage/",
  },
];

// Events
export const EVENTS: Events[] = [
  { image: img7 },
  { image: img8 },
  { image: img9 },
  { image: img10 },
  { image: img1 },
  { image: img2 },
  { image: img3 },
  { image: img4 },
  { image: img5 },
];

// certifications
export const CERTIFICATIONS: certifications[] = [
  {
    img: cer1,
    title: "Fundition of cyber security",
  },
  {
    img: cer2,
    title: "B1 english ",
  },
];

// Contact information
export const CONTACT: Contact = {
  address: "767 Fifth Avenue, Algeria,Batna",
  phoneNo: "+213 07 84 11 06 47",
  email: "bezaiayoub05@gmail.com",
};

export const ACHIEVEMENTS = [
  {
    title: "Top 10 – CTF EL-Djazair 2025",
    description:
      "Ranked among the top 10 teams nationwide in the CTF EL-Djazair cybersecurity competition, representing GDG Batna 01 out of 42 elite teams.",
    image: achv1,
    date: "May 2025", // Adjust if needed
    type: "achievement",
    isSpecial: false,
    link: "#", // Optional: add post or certificate link
  },
  {
    title: "1st Place – Devs For Devs Hackathon",
    description:
      "Won 1st place at GDG Campus Batna's AI hackathon with OppMatch – an autonomous career-matching platform powered by AI agents. It analyzes user profiles and delivers real-time, personalized internships and job opportunities.",
    image: achv2,
    date: "April 2025",
    type: "award",
    isSpecial: true,
    link: "https://lnkd.in/ecdAxr-A",
  },
  {
    title: "2nd Place – Cyber Security @ Project-0",
    description:
      "Secured 2nd place in Cyber Security and contributed to GDG Batna’s 4th overall finish at Project-0, a multidisciplinary competition organized by ELEC CLUB.",
    image: achv3,
    date: "April 2025",
    type: "achievement",
    isSpecial: false,
    link: "#", // Optional: link to post or certificate
  },
  {
    title: "1st Place – BoostHack by GDG Batna",
    description:
      "Won 1st place with RecyConnect, an AI-powered platform that connects businesses with surplus materials to recyclers and creators, promoting sustainability through circular economy solutions.",
    image: achv4, // Replace with actual image variable
    date: "April 2025",
    type: "award",
    isSpecial: true,
    link: "#", // Optional: link to post or project repo
  },
  {
    title: "Foundations of Cybersecurity",
    description:
      "Completed the Foundations of Cybersecurity course by Google on Coursera. Covered security principles, threat models, ethics, and tools.",
    image: cer1 ,
    date: "October 2024",
    type: "certification",
    link: "#",
  },
];
