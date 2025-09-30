// projects.ts
import project1 from "../assets/projects/project-1.png";
import project4 from "../assets/projects/project-4.png";
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
import project28 from "../assets/projects/project-28.png";
import project29 from "../assets/projects/project-29.png";
import project31 from "../assets/projects/project-31.png";
import project32 from "../assets/projects/project-32.png";
import project33 from "../assets/projects/project-33.png";
import project34 from "../assets/projects/project-34.png";
import project35 from "../assets/projects/project-35.webp";
import project36 from "../assets/projects/project-36.webp";

export type ProjectType =
  | "web"
  | "mobile"
  | "cyber security"
  | "ai"
  | "desktop";

export interface Project {
  id: string;
  title: string;
  image: string;
  description: string;
  technologies: string[];
  link: string;
  type: ProjectType;
}

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Portfolio",
    image: project33,
    description:
      "My personal portfolio showcasing my projects, skills, and professional details.",
    technologies: ["HTML", "React", "Tailwind", "TypeScript", "Framer Motion"],
    link: "https://ayoubbezai.site/",
    type: "web",
  },
  {
    id: "2",
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
    id: "3",
    title: "Clinic Website",
    image: project1,
    description:
      "A web-based clinic appointment system for scheduling appointments with doctors and managing medical records",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://ayoubbb1235.github.io/clinc/",
    type: "web",
  },
  {
    id: "4",
    title: "Abqarino",
    image: project8,
    description:
      "A Saudi educational platform, aims to link parents and students with private teachers of high efficiency to raise the educational level",
    technologies: ["react", "tailwind", "Html", "Css", "Java Script"],
    link: "https://www.abqarino.online",
    type: "web",
  },
  {
    id: "5",
    title: "Course Platform",
    image: project4,
    description:
      "A university course management platform designed to assist students with course materials and organization.",
    technologies: ["HTML", "CSS"],
    link: "https://ayoubbb1235.github.io/univ-course/",
    type: "web",
  },
  {
    id: "6",
    title: "Tech-Educa",
    image: project7,
    description:
      "An educational platform for technology courses, designed with a user-friendly interface to access various learning resources.",
    technologies: ["HTML", "CSS"],
    link: "https://ayoubbb1235.github.io/Tech-Educa/",
    type: "web",
  },
  {
    id: "7",
    title: "RecyConnect",
    image: project11,
    description:
      "AI-powered platform that connects industrial waste sources with recyclers and upcyclers to enable a circular economy.",
    technologies: ["React", "Laravel", "OpenAI API", "Tailwind CSS"],
    link: "",
    type: "web",
  },
  {
    id: "8",
    title: "OppMatch",
    image: project10,
    description:
      "Autonomous AI platform that analyzes CVs and matches users with tailored internships, jobs, and grants.",
    technologies: ["React", "Laravel", "OpenAI API", "LangChain"],
    link: "",
    type: "web",
  },
  {
    id: "9",
    title: "Leather Brothers",
    image: project12,
    description:
      "Shop the finest collection of luxury leather bags that combine elegance and quality. Made from premium leather, featuring modern and practical designs suitable for all occasions. Elevate your style with a Leather Brothers bag.",
    technologies: ["React", "Tailwind CSS"],
    link: "",
    type: "web",
  },
  {
    id: "10",
    title: "FoodRecipe",
    image: project13,
    description:
      "A versatile recipe app where you can enter ingredients and discover a variety of delicious meals. Features include favorites, random recipes, and detailed cooking instructions for dishes like Chicken Asparagus Roll-Ups and Quinoa Salad with Avocado.",
    technologies: ["React", "Tailwind CSS", "API Integration"],
    link: "",
    type: "web",
  },
  {
    id: "11",
    title: "Coffee Shop Landing Page",
    image: project14,
    description:
      "A modern and inviting landing page for a coffee shop, built on WordPress. Designed to showcase menu items, promote special offers, and attract new customers with an easy-to-navigate layout and responsive design.",
    technologies: ["WordPress", "PHP", "CSS", "JavaScript"],
    link: "",
    type: "web",
  },
  {
    id: "12",
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
    id: "13",
    title: "Barq Al-Sahab Logistics",
    image: project18,
    description:
      "A responsive logistics and delivery platform built to streamline shipping services across the Gulf region, with features like real-time shipment tracking and service management.",
    technologies: ["React", "Firebase", "Tailwind CSS", "HTML"],
    link: "",
    type: "web",
  },
  {
    id: "14",
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
    id: "15",
    title: "Dentist Landing Page",
    image: project19,
    description:
      "A modern and clean landing page for a dental clinic, designed to highlight services, showcase testimonials, and encourage appointment bookings. Built with Next.js for fast performance and SEO optimization.",
    technologies: ["Next.js", "React", "Tailwind CSS", "HTML"],
    link: "https://home.ayoubbezai.site/",
    type: "web",
  },
  {
    id: "16",
    title: "Notes",
    image: project21,
    description:
      "A full-stack web application for creating, editing, and organizing notes. Features user authentication, a clean and intuitive interface, and real-time synchronization across devices. Built with the MERN stack (MongoDB, Express, React, Node.js).",
    technologies: ["React", "JavaScript", "MongoDB", "Node js", "express"],
    link: "",
    type: "web",
  },
  {
    id: "17",
    title: "Ux Frames",
    image: project24,
    description:
      "A web tool designed to simplify the pre-UI/UX step by allowing users to create detailed wireframes. Users can define all page data—such as titles, types, purposes, actions, inputs, static content, navigations, states, and example data—in a structured format. This streamlines the design process and ensures all requirements are captured before UI/UX work begins.",
    technologies: ["React", "JavaScript", "Tailwind CSS", "Mysql", "Laravel"],
    link: "",
    type: "web",
  },
  {
    id: "18",
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
    id: "28",
    title: "Dikat Al Wakt",
    image: project28,
    description:
      "A comprehensive platform for a Saudi Arabian company offering premium car services including rentals, transportation, and vehicle maintenance. Features a customer-facing landing page and an admin dashboard for managing bookings, fleet, and operations across Saudi Arabia.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Laravel",
      "MySQL",
      "REST API",
      "React Query",
      "Chart.js",
      "Formik",
      "Yup Validation",
    ],
    link: "www.taximakkah.online",
    type: "web",
  },
  {
    id: "29",
    title: "GDG Batna Landing Page",
    image: project29,
    description:
      "A modern, animated, and responsive landing page for GDG Batna featuring 3D effects, Web Worker optimizations, and smooth animations. Built with Next.js and Framer Motion, it showcases interactive UI elements, community engagement features, and performance optimizations including dynamic imports and hardware-aware rendering.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Three.js",
      "Framer Motion",
      "Web Workers",
      "GLSL Shaders",
      "Tailwind CSS",
      "Post-processing",
      "React Query",
      "Intersection Observer API",
    ],
    link: "https://gdg-batna.vercel.app/",
    type: "web",
  },
  {
    id: "30",
    title: "Dentdz v2 - Landing Page",
    image: project32,
    description:
      "A sleek, modern, and SEO-optimized landing page for Dentdz v2, designed to highlight the SaaS platform's features, benefits, and pricing. Built for speed and conversion, with animations, testimonials, and call-to-action sections.",
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "TypeScript",
    ],
    link: "https://dentdz.vercel.app/landing",
    type: "web",
  },
  {
    id: "31",
    title: "Dentdz v2 - Dashboard",
    image: project31,
    description:
      "An advanced SaaS dashboard for Dentdz v2 that streamlines dental clinic management. Features AI-powered scheduling, patient records, billing automation, real-time analytics, and role-based access control for admins, dentists, and staff.",
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "TypeScript",
      "laravel",
      "MySQL",
      "AI Agents",
      "Chart.js",
    ],
    link: "https://dentdz.vercel.app/login",
    type: "web",
  },
  {
    id: "34",
    title: "Wexplain E-Learning Platform Dashboard",
    image: project34,
    description:
      "A comprehensive Laravel-based dashboard for Wexplain e-learning platform. Features course management, student progress tracking, analytics, and content management system for online education providers.",
    technologies: [
      "Laravel",
      "PHP",
      "MySQL",
      "TypeScript",
      "Talwind CSS",
      "REST API",
      "Laevel",
    ],
    link: "",
    type: "web",
  },
  {
    id: "35",
    title: "Online Tutoring Mobile App",
    image: project35,
    description:
      "A cross-platform mobile application for online tutoring connecting teachers and students. Features real-time video calls, chat messaging, course materials sharing, scheduling, and payment integration for seamless virtual learning experiences.",
    technologies: ["React Native", "TypeScript", "laravel", "My SQL"],
    link: "",
    type: "mobile",
  },
  {
    id: "36",
    title: "Smart Contact - Accident Response App",
    image: project36,
    description:
      "A Laravel and React Native mobile application for instant accident reporting and emergency contact. Users can quickly report accidents, share location, notify emergency contacts, and access help services within minutes through an intuitive mobile interface.",
    technologies: [
      "Laravel",
      "React Native",
      "PHP",
      "MySQL",
      "Google Maps API",
      "REST API",
    ],
    link: "",
    type: "mobile",
  },
  {
    id: "19",
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
    id: "20",
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
    id: "21",
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
    id: "22",
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
    id: "23",
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
