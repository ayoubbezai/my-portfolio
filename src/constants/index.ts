// Import images
import project1 from "../assets/projects/project-1.png";
// import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import project6 from "../assets/projects/project-6.png";
import project7 from "../assets/projects/project-7.png";
import project8 from "../assets/projects/project-8.png";
import project10 from "../assets/projects/project-10.png";
import project11 from "../assets/projects/project-11.png";
import project12 from "../assets/projects/project-12.png";
import project13 from "../assets/projects/project-13.png";
import project14 from "../assets/projects/project-14.png";
import project15 from "../assets/projects/project-15.png";
import project16 from "../assets/projects/project-16.png";
import project17 from "../assets/projects/project-17.jpg";
import project18 from "../assets/projects/project-18.png";
import project19 from "../assets/projects/project-19.png";
import project20 from "../assets/projects/project-20.jpg";
import project21 from "../assets/projects/project-21.png";
import project22 from "../assets/projects/project-22.png";
import project23 from "../assets/projects/project-23.png";
import project24 from "../assets/projects/project-24.png";
import project25 from "../assets/projects/project-25.png";
import project26 from "../assets/projects/project-26.jpg";
import project27 from "../assets/projects/project-27.png";

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
  type: "web" | "mobile" | "cyber security" | "ai" | "desktop";
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
export const EXPERIENCES = [
  {
    year: "Dec 2024 – Present",
    role: "Web Developer",
    company: "Freelance",
    description:
      "Full-stack web development using Laravel, MySQL, and modern frontend tools like React and Tailwind CSS. Built responsive UIs, integrated RESTful APIs, and implemented real-time features with WebSocket and Firebase. Collaborated with designers via Figma and maintained high code quality through Git workflows and code reviews.",
    technologies: [
      "Laravel",
      "MySQL",
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Firebase",
      "WebSocket",
      "REST APIs",
      "Git",
      "Figma",
    ],
    location: "Remote",
  },
  {
    year: "Mar 2025 – Present",
    role: "Mobile Developer",
    company: "Freelance",
    description:
      "Building cross-platform mobile apps with React Native and Expo. Focused on smooth performance, state management, and seamless user experience. Integrated APIs, managed CI/CD pipelines, and optimized apps for both iOS and Android platforms.",
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "Redux",
      "Context API",
      "EAS",
      "GitHub Actions",
    ],
    location: "Remote",
  },
  // ...other experiences...
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
    type: "web",
  },
  {
    title: "My-Blog",
    image: project15,
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
    type: "web",
  },
  {
    title: "Clinic Website",
    image: project1,
    description:
      "A web-based clinic appointment system for scheduling appointments with doctors and managing medical records",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://ayoubbb1235.github.io/clinc/",
    type: "web",
  },
  {
    title: "Abqarino",
    image: project8,
    description:
      "A Saudi  educational platform , aims to link parents and students with private teachers of high efficiency to raise the educational level",
    technologies: ["react", "tailwind", "Html", "Css", "Java Script"],
    link: "https://www.abqarino.online",
    type: "web",
  },
  {
    title: "Course Platform",
    image: project4,
    description:
      "A university course management platform designed to assist students with course materials and organization.",
    technologies: ["HTML", "CSS"],
    link: "https://ayoubbb1235.github.io/univ-course/",
    type: "web",
  },
  {
    title: "Tech-Educa",
    image: project7,
    description:
      "An educational platform for technology courses, designed with a user-friendly interface to access various learning resources.",
    technologies: ["HTML", "CSS"],
    link: "https://ayoubbb1235.github.io/Tech-Educa/",
    type: "web",
  },
  {
    title: "RecyConnect",
    image: project11,
    description:
      "AI-powered platform that connects industrial waste sources with recyclers and upcyclers to enable a circular economy.",
    technologies: ["React", "Laravel", "OpenAI API", "Tailwind CSS"],
    link: "",
    type: "web",
  },
  {
    title: "OppMatch",
    image: project10,
    description:
      "Autonomous AI platform that analyzes CVs and matches users with tailored internships, jobs, and grants.",
    technologies: ["React", "Laravel", "OpenAI API", "LangChain"],
    link: "",
    type: "web",
  },
  {
    title: "Leather Brothers",
    image: project12,
    description:
      "Shop the finest collection of luxury leather bags that combine elegance and quality. Made from premium leather, featuring modern and practical designs suitable for all occasions. Elevate your style with a Leather Brothers bag.",
    technologies: ["React", "Tailwind CSS"],
    link: "",
    type: "web",
  },
  {
    title: "FoodRecipe",
    image: project13,
    description:
      "A versatile recipe app where you can enter ingredients and discover a variety of delicious meals. Features include favorites, random recipes, and detailed cooking instructions for dishes like Chicken Asparagus Roll-Ups and Quinoa Salad with Avocado.",
    technologies: ["React", "Tailwind CSS", "API Integration"],
    link: "",
    type: "web",
  },
  {
    title: "Coffee Shop Landing Page",
    image: project14,
    description:
      "A modern and inviting landing page for a coffee shop, built on WordPress. Designed to showcase menu items, promote special offers, and attract new customers with an easy-to-navigate layout and responsive design.",
    technologies: ["WordPress", "PHP", "CSS", "JavaScript"],
    link: "",
    type: "web",
  },
  {
    title: "Clinic Management System Website",
    image: project16,
    description:
      "A comprehensive clinic management system built with React, Next.js, and Laravel PHP backend, featuring MySQL database integration, real-time updates via WebSocket, and AI agents powered by Python for intelligent automation.",
    technologies: [
      "React",
      "Next.js",
      "Laravel",
      "PHP",
      "MySQL",
      "WebSocket",
      "Python",
      "AI Agents",
    ],
    link: "",
    type: "web",
  },

  {
    title: "Barq Al-Sahab Logistics",
    image: project18,
    description:
      "A responsive logistics and delivery platform built to streamline shipping services across the Gulf region, with features like real-time shipment tracking and service management.",
    technologies: ["React", "Firebase", "Tailwind CSS", "HTML"],
    link: "",
    type: "web",
  },
  {
    title: "Semester Average Calculator",
    image: project25,
    description:
      "A web calculator designed specifically for CS engineering students to calculate their semester averages easily. Enter your grades and credits for each subject, and the tool computes your weighted average, helping you track your academic performance.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Calculator",
      "Education",
    ],
    link: "",
    type: "web",
  },
  {
    title: "Dentist Landing Page",
    image: project19,
    description:
      "A modern and clean landing page for a dental clinic, designed to highlight services, showcase testimonials, and encourage appointment bookings. Built with Next.js for fast performance and SEO optimization.",
    technologies: ["Next.js", "React", "Tailwind CSS", "HTML"],
    link: "https://home.ayoubbezai.site/",
    type: "web",
  },
  {
    title: "Notes",
    image: project21,
    description:
      "A full-stack web application for creating, editing, and organizing notes. Features user authentication, a clean and intuitive interface, and real-time synchronization across devices. Built with the MERN stack (MongoDB, Express, React, Node.js).",
    technologies: ["React", "JavaScript", "MongoDB", "Node js", "express"],
    link: "",
    type: "web",
  },
  {
    title: "Ux Frames",
    image: project24,
    description:
      "A web tool designed to simplify the pre-UI/UX step by allowing users to create detailed wireframes. Users can define all page data—such as titles, types, purposes, actions, inputs, static content, navigations, states, and example data—in a structured format. This streamlines the design process and ensures all requirements are captured before UI/UX work begins.",
    technologies: ["React", "JavaScript", "Tailwind CSS", "Mysql", "Laravel"],
    link: "",
    type: "web",
  },
  {
    title: "Fishta Dashboard",
    image: project27,
    description:
      "A real-time dashboard for monitoring and predicting fish health threats using ML and computer vision. It sends SMS alerts for critical events, tracks water quality (like pH, NH3, NH4), and allows users to manage ponds and connect IoT devices.",
    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Mysql",
      "Laravel",
      "Ai Agents",
      "Infobip",
      "ML",
      "WebSocket",
      "Real-time Updates",
      "python",
      "fastApi",
    ],
    link: "",
    type: "web",
  },
  {
    title: "Dentist AI Assistant",
    image: project23,
    description:
      "An advanced AI assistant for dental clinics, featuring 7 specialized AI agents to answer dentists' questions—whether general health, dental-specific, or related to clinic data. Utilizes LLMs (like Gemini), web scraping from Wikipedia and DuckDuckGo, and integrates with the clinic's database to provide accurate, real-time information and recommendations.",
    technologies: [
      "React",
      "Laravel",
      "Python",
      "fastApi",
      "Gemini LLM",
      "Web Scraping",
      "Wikipedia API",
      "DuckDuckGo API",
      "Database Integration",
      "AI Agents",
    ],
    link: "",
    type: "ai",
  },
  {
    title: "Rate Limiting Educational Project",
    image: project22,
    description:
      "A full-stack educational project demonstrating API rate limiting and security testing. Includes a Java Swing GUI client for automated, multithreaded API requests, and a Python Flask server with rate-limited endpoints. Features request automation, logging, stats, and real-time rate limit detection. Intended for ethical and educational use only.",
    technologies: [
      "Java",
      "GUI",
      "Python",
      "Multithreading",
      "API Security",
      "Desktop",
    ],
    link: "",
    type: "desktop",
  },
  {
    title: "Clinic Management System Mobile App",
    image: project17,
    description:
      "Mobile app companion for the Clinic Management System, built with React Native, featuring seamless integration with the Laravel backend, real-time updates via WebSocket, and AI-powered features to streamline patient care and clinic workflows.",
    technologies: [
      "React Native",
      "Laravel",
      "PHP",
      "WebSocket",
      "Python",
      "AI Agents",
      "mobile",
    ],
    link: "",
    type: "mobile",
  },
  {
    title: "Tabibi Mobile App",
    image: project20,
    description:
      "A comprehensive mobile app for clinics and patients. Supports four roles: admin, super admin, patient, and clinic. Patients can book and join appointments, while clinics can view and manage their daily appointment lists. Designed to streamline healthcare scheduling and improve patient experience.",
    technologies: [
      "React Native",
      "TypeScript",
      "Chargily",
      "REST API",
      "Laravel",
      "MySql",
    ],
    link: "",
    type: "mobile",
  },
  {
    title: "Fishta Mobile App",
    image: project26,
    description:
      "A mobile-friendly version of the Fishta Dashboard that lets users easily monitor fish health, receive alerts, and view key data on the go. Designed for quick access and a smooth user experience.",
    technologies: [
      "React Native",
      "TypeScript",
      "Infobip",
      "REST API",
      "Laravel",
      "MySql",
      "Ai Agents",
    ],
    link: "",
    type: "mobile",
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
    type: "web",
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
    type: "web",
  },
  {
    title: "Calc-Average",
    image: project3,
    description:
      "A simple web application that calculates the average of a set of numbers entered by the user.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://ayoubbezai.github.io/calc-avrage/",
    type: "web",
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
    image: cer1,
    date: "October 2024",
    type: "certification",
    link: "#",
  },
];
