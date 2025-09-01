import Navbar from "./components/Navbar";
import { useEffect, useState, Suspense, lazy, useRef } from "react";
import { PROJECTS } from "./constants/projects.ts";
import { motion } from "framer-motion";

const Hero = lazy(() => import("./components/Hero.tsx"));
const About = lazy(() => import("./components/About.tsx"));
const Technologies = lazy(() => import("./components/Technologies.tsx"));
const Achivements = lazy(() => import("./components/Achivements.tsx"));
const Experience = lazy(() => import("./components/Experience.tsx"));
const Projects = lazy(() => import("./components/Projects.tsx"));
const Contact = lazy(() => import("./components/Contact.tsx"));
const Stats = lazy(() => import("./components/Stats.tsx"));

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const storedMode = localStorage.getItem("isDarkMode");
    return storedMode === "true" || storedMode === null; // Default to true
  });

  useEffect(() => {
    localStorage.setItem("isDarkMode", isDarkMode.toString());
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  // Floating animation for decorative elements
  const floatVariants = {
    animate: {
      y: [0, -8, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const fallback = (label: string) => (
    <div className="w-full flex justify-center py-20 text-xl text-indigo-500">
      Loading {label}...
    </div>
  );

  // Grid animation component with fixed positioning
  const GridBackground = () => {
    // Calculate grid cell size
    const cellSize = 60;

    // Create animated particles
    const particles = Array.from({ length: 30 }, (_, i) => {
      const size = Math.random() * 8 + 2;
      return {
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size,
        duration: Math.random() * 15 + 10,
        delay: Math.random() * 5,
        color: isDarkMode
          ? `rgba(139, 92, 246, ${0.1 + size / 40})`
          : `rgba(79, 70, 229, ${0.1 + size / 40})`,
      };
    });

    // Create random cells for hover effects - properly aligned to grid
    const randomCells = Array.from({ length: 40 }, (_, i) => {
      const col = Math.floor(Math.random() * 35);
      const row = Math.floor(Math.random() * 25);
      const delay = Math.random() * 20;
      const duration = 3 + Math.random() * 4;

      return {
        id: i,
        col,
        row,
        delay,
        duration,
      };
    });

    // Create floating shapes
    const floatingShapes = Array.from({ length: 12 }, (_, i) => {
      const size = Math.random() * 40 + 20;
      const isCircle = Math.random() > 0.5;
      const rotation = Math.random() * 360;

      return {
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size,
        rotation,
        isCircle,
        duration: Math.random() * 20 + 15,
        delay: Math.random() * 10,
        color: isDarkMode
          ? `rgba(139, 92, 246, ${0.03 + Math.random() * 0.05})`
          : `rgba(79, 70, 229, ${0.03 + Math.random() * 0.05})`,
      };
    });

    return (
      <div className="fixed inset-0 overflow-hidden z-0 pointer-events-none">
        {/* Main grid - darker in light mode */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, ${
                isDarkMode ? "#4f4f4f2e" : "#9ca3af2e"
              } 1px, transparent 1px),
              linear-gradient(to bottom, ${
                isDarkMode ? "#4f4f4f2e" : "#9ca3af2e"
              } 1px, transparent 1px)
            `,
            backgroundSize: `${cellSize}px ${cellSize}px`,
            backgroundPosition: "0px 0px",
          }}
        />

        {/* Animated grid lines - properly aligned */}
        <div className="absolute inset-0">
          {[...Array(40)].map((_, i) => (
            <motion.div
              key={`col-${i}`}
              className="absolute top-0 bottom-0 w-px"
              style={{
                left: `${i * cellSize}px`,
                background: `linear-gradient(to bottom, transparent, ${
                  isDarkMode
                    ? "rgba(139, 92, 246, 0.2)"
                    : "rgba(79, 70, 229, 0.3)"
                }, transparent)`,
              }}
              animate={{
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut",
              }}
            />
          ))}

          {[...Array(30)].map((_, i) => (
            <motion.div
              key={`row-${i}`}
              className="absolute left-0 right-0 h-px"
              style={{
                top: `${i * cellSize}px`,
                background: `linear-gradient(to right, transparent, ${
                  isDarkMode
                    ? "rgba(139, 92, 246, 0.2)"
                    : "rgba(79, 70, 229, 0.3)"
                }, transparent)`,
              }}
              animate={{
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Random cell hover effects - properly aligned */}
        <div className="absolute inset-0">
          {randomCells.map((cell) => (
            <motion.div
              key={`cell-${cell.id}`}
              className="absolute rounded-md"
              style={{
                left: `${cell.col * cellSize + 4}px`,
                top: `${cell.row * cellSize + 4}px`,
                width: `${cellSize - 8}px`,
                height: `${cellSize - 8}px`,
                background: isDarkMode
                  ? "rgba(139, 92, 246, 0.05)"
                  : "rgba(79, 70, 229, 0.08)",
                boxShadow: isDarkMode
                  ? "0 0 0 0px rgba(139, 92, 246, 0)"
                  : "0 0 0 0px rgba(79, 70, 229, 0)",
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0, 0.4, 0],
                boxShadow: isDarkMode
                  ? [
                      "0 0 0 0px rgba(139, 92, 246, 0)",
                      "0 0 0 4px rgba(139, 92, 246, 0.25)",
                      "0 0 0 0px rgba(139, 92, 246, 0)",
                    ]
                  : [
                      "0 0 0 0px rgba(79, 70, 229, 0)",
                      "0 0 0 4px rgba(79, 70, 229, 0.25)",
                      "0 0 0 0px rgba(79, 70, 229, 0)",
                    ],
              }}
              transition={{
                duration: cell.duration,
                repeat: Infinity,
                repeatType: "reverse",
                delay: cell.delay,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Animated particles */}
        <div className="absolute inset-0">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute rounded-full"
              style={{
                width: particle.size,
                height: particle.size,
                background: particle.color,
                left: `${particle.x}%`,
                top: `${particle.y}%`,
              }}
              animate={{
                x: [0, Math.random() * 50 - 25],
                y: [0, Math.random() * 50 - 25],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                repeatType: "reverse",
                delay: particle.delay,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Floating shapes */}
        <div className="absolute inset-0">
          {floatingShapes.map((shape) => (
            <motion.div
              key={`shape-${shape.id}`}
              className="absolute"
              style={{
                width: shape.size,
                height: shape.size,
                borderRadius: shape.isCircle ? "50%" : "6px",
                background: shape.color,
                left: `${shape.x}%`,
                top: `${shape.y}%`,
                rotate: `${shape.rotation}deg`,
              }}
              animate={{
                y: [0, -20, 0],
                x: [0, Math.random() * 30 - 15, 0],
                rotate: [shape.rotation, shape.rotation + 10, shape.rotation],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: shape.duration,
                repeat: Infinity,
                repeatType: "reverse",
                delay: shape.delay,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Moving connection lines */}
        <svg
          className="absolute inset-0 w-full h-full"
          style={{ pointerEvents: "none" }}
        >
          {[...Array(20)].map((_, i) => {
            const startX = Math.random() * 100;
            const startY = Math.random() * 100;
            const endX = Math.random() * 100;
            const endY = Math.random() * 100;

            return (
              <motion.path
                key={`line-${i}`}
                d={`M ${startX}% ${startY}% L ${endX}% ${endY}%`}
                stroke={
                  isDarkMode
                    ? "rgba(139, 92, 246, 0.15)"
                    : "rgba(79, 70, 229, 0.2)"
                }
                strokeWidth="1.5"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 15 + Math.random() * 15,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: Math.random() * 8,
                  ease: "easeInOut",
                }}
              />
            );
          })}
        </svg>

        {/* Pulse effect */}
        <motion.div
          className="absolute inset-0 opacity-0"
          animate={{
            opacity: [0, 0.04, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            background: `radial-gradient(circle at 50% 50%, ${
              isDarkMode ? "#8b5cf6" : "#4f46e5"
            }, transparent)`,
          }}
        />

        {/* Light ray effects */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`ray-${i}`}
              className="absolute top-0 bottom-0 w-40 opacity-0"
              style={{
                left: `${20 + i * 15}%`,
                background: `linear-gradient(90deg, transparent, ${
                  isDarkMode
                    ? "rgba(139, 92, 246, 0.1)"
                    : "rgba(79, 70, 229, 0.1)"
                }, transparent)`,
                transform: `skewX(-20deg)`,
                filter: "blur(8px)",
              }}
              animate={{
                opacity: [0, 0.2, 0],
                x: [-100, 500],
              }}
              transition={{
                duration: 15 + Math.random() * 10,
                repeat: Infinity,
                delay: Math.random() * 12,
                ease: "easeOut",
              }}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="relative overflow-x-hidden h-full w-full bg-white dark:bg-slate-950">
      <GridBackground />

      {/* Floating decorative elements */}
      <motion.div
        variants={floatVariants}
        animate="animate"
        className="absolute top-20 left-10 w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-20 z-10"
      />
      <motion.div
        variants={floatVariants}
        animate="animate"
        transition={{ delay: 0.5 }}
        className="absolute bottom-40 right-12 w-5 h-5 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 opacity-20 z-10"
      />

      <section id="alert" className=" z-10">
        <Navbar setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
        <Suspense fallback={fallback("Hero")}>
          <Hero />
        </Suspense>
        <Suspense fallback={fallback("About")}>
          <About />
        </Suspense>
        <Suspense fallback={fallback("Technologies")}>
          <Technologies />
        </Suspense>
        <Suspense fallback={fallback("Stats")}>
          <Stats />
        </Suspense>
        <Suspense fallback={fallback("Experience")}>
          <Experience />
        </Suspense>
        <Suspense fallback={fallback("Achivements")}>
          <Achivements isDarkMode={isDarkMode} />
        </Suspense>
        <Suspense fallback={fallback("Projects")}>
          <Projects name="Programming Projects" info={PROJECTS} />
        </Suspense>
        <Suspense fallback={fallback("Contact")}>
          <Contact />
        </Suspense>
      </section>
    </div>
  );
};

export default App;
