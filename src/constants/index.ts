// Import images

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


import achv1 from "../assets/achivements/el-djazair-ctf.jpg";
import achv2 from "../assets/achivements/dev4devjpg.jpg";
import achv3 from "../assets/achivements/project-0.jpg";
import achv4 from "../assets/achivements/boosthack.jpg";
import achv5 from "../assets/achivements/finovia.jpeg";

// Hero content
export const HERO_CONTENT: string = `I am a web and mobile developer skilled in React, Next.js, TypeScript, Laravel, and React Native. As a third-year Computer Science student specializing in Cybersecurity, I combine technical expertise with a security-first approach. I focus on building scalable, responsive applications with seamless UI/UX, integrating APIs, and enhancing experiences with tools like Framer Motion. With design experience in Figma and Photoshop, I strive to create intuitive, engaging, and secure digital solutions.`;

// About text
export const ABOUT_TEXT: string = `I am a third-year Computer Science student specializing in Cybersecurity with a strong passion for web and mobile development. My skills include working with React, Next.js, TypeScript, Laravel, and React Native to create modern and secure applications. I enjoy exploring how development intersects with cybersecurity to build not only user-friendly but also resilient digital solutions. Eager to keep learning and adapting, I aim to apply my technical expertise to real-world projects and contribute to innovative, secure, and impactful technology.`;

// Type definitions
export interface Experience {
  year: string;
  role: string;
  company: string;
  description: string;
  technologies: string[];
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

// // certifications
// export const CERTIFICATIONS: certifications[] = [
//   {
//     img: cer1,
//     title: "Fundition of cyber security",
//   },
//   {
//     img: cer2,
//     title: "B1 english ",
//   },
// ];

// Contact information
export const CONTACT: Contact = {
  address: "767 Fifth Avenue, Algeria,Batna",
  phoneNo: "+213 07 84 11 06 47",
  email: "bezaiayoub05@gmail.com",
};

export const ACHIEVEMENTS = [
    {
    title: "3rd Place – Finovia Expo 2025 Hackathon",
    description:
    "Achieved 3rd place at Finovia Expo 2025 Hackathon with our project 'Smart Management of Personal Finances'.",
    image: achv5,
    date: "Nov 2025",
    type: "award",
    isSpecial: true,
    link: "https://www.linkedin.com/posts/ayoub-bezai-b55315288_im-excited-to-share-that-our-team-won-activity-7399927016222892034-_IDJ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEXQXTEBFvrX3ZbGjFEXDXA_ngvPAcN75oI",
  },
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

];
