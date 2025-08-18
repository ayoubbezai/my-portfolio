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

import cer1 from "../assets/certifications/cert1.png";
import cer2 from "../assets/certifications/cert2.jpg";



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
  {
    title: "B1 Level In English",
    description:
      "Completed the Foundations of Cybersecurity course by Google on Coursera. Covered security principles, threat models, ethics, and tools.",
    image: cer2,
    date: "Jun 2024",
    type: "certification",
    link: "#",
  },
];
