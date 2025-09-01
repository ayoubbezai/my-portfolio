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
      y: [0, -12, 0],
      transition: {
        duration: 5,
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

  // Grid animation component - Fixed approach
  const GridBackground = () => {
    const gridRef = useRef<HTMLDivElement>(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
      const updateDimensions = () => {
        if (gridRef.current) {
          setDimensions({
            width: gridRef.current.offsetWidth,
            height: gridRef.current.offsetHeight,
          });
        }
      };

      updateDimensions();
      window.addEventListener("resize", updateDimensions);

      return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    // Calculate grid cell size
    const cellSize = 60;
    const cols = Math.ceil(dimensions.width / cellSize);
    const rows = Math.ceil(dimensions.height / cellSize);

    // Create animated particles
    const particles = Array.from({ length: 25 }, (_, i) => {
      const size = Math.random() * 8 + 2;
      return {
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size,
        duration: Math.random() * 12 + 8,
        delay: Math.random() * 3,
        color: isDarkMode
          ? `rgba(139, 92, 246, ${0.15 + size / 50})`
          : `rgba(79, 70, 229, ${0.2 + size / 40})`,
      };
    });

    // Create random cells for hover effects - fixed positions
    const randomCells = Array.from(
      { length: Math.floor((cols * rows) / 6) },
      (_, i) => {
        const col = Math.floor(Math.random() * cols);
        const row = Math.floor(Math.random() * rows);
        const delay = Math.random() * 10;
        const duration = 3 + Math.random() * 4;

        return {
          id: i,
          col,
          row,
          delay,
          duration,
        };
      }
    );

    return (
      <div
        ref={gridRef}
        className="fixed inset-0 overflow-hidden z-0 pointer-events-none"
      >
        {/* Main grid with better visibility in light mode */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, ${
                isDarkMode
                  ? "rgba(79, 79, 79, 0.15)"
                  : "rgba(156, 163, 175, 0.3)"
              } 1px, transparent 1px),
              linear-gradient(to bottom, ${
                isDarkMode
                  ? "rgba(79, 79, 79, 0.15)"
                  : "rgba(156, 163, 175, 0.3)"
              } 1px, transparent 1px)
            `,
            backgroundSize: `${cellSize}px ${cellSize}px`,
            backgroundPosition: "center center",
          }}
        />

        {/* Animated grid lines - fixed positioning */}
        <div className="absolute inset-0">
          {[...Array(cols + 2)].map((_, i) => (
            <motion.div
              key={`col-${i}`}
              className="absolute top-0 bottom-0 w-px"
              style={{
                left: `${(i - 1) * cellSize}px`,
                background: `linear-gradient(to bottom, transparent 0%, ${
                  isDarkMode
                    ? "rgba(139, 92, 246, 0.25)"
                    : "rgba(79, 70, 229, 0.3)"
                } 50%, transparent 100%)`,
              }}
              animate={{
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut",
              }}
            />
          ))}

          {[...Array(rows + 2)].map((_, i) => (
            <motion.div
              key={`row-${i}`}
              className="absolute left-0 right-0 h-px"
              style={{
                top: `${(i - 1) * cellSize}px`,
                background: `linear-gradient(to right, transparent 0%, ${
                  isDarkMode
                    ? "rgba(139, 92, 246, 0.25)"
                    : "rgba(79, 70, 229, 0.3)"
                } 50%, transparent 100%)`,
              }}
              animate={{
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Random cell hover effects - fixed positioning */}
        <div className="absolute inset-0">
          {randomCells.map((cell) => (
            <motion.div
              key={`cell-${cell.id}`}
              className="absolute rounded-lg"
              style={{
                left: `${cell.col * cellSize + 4}px`,
                top: `${cell.row * cellSize + 4}px`,
                width: `${cellSize - 8}px`,
                height: `${cellSize - 8}px`,
                background: isDarkMode
                  ? "rgba(139, 92, 246, 0.07)"
                  : "rgba(79, 70, 229, 0.1)",
                boxShadow: isDarkMode
                  ? "0 0 0 0px rgba(139, 92, 246, 0)"
                  : "0 0 0 0px rgba(79, 70, 229, 0)",
              }}
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0, 0.4, 0],
                boxShadow: isDarkMode
                  ? [
                      "0 0 0 0px rgba(139, 92, 246, 0)",
                      "0 0 0 4px rgba(139, 92, 246, 0.25)",
                      "0 0 0 0px rgba(139, 92, 246, 0)",
                    ]
                  : [
                      "0 0 0 0px rgba(79, 70, 229, 0)",
                      "0 0 0 4px rgba(79, 70, 229, 0.3)",
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

        {/* Animated particles with more movement */}
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
                filter: "blur(1px)",
              }}
              animate={{
                x: [0, Math.random() * 60 - 30],
                y: [0, Math.random() * 60 - 30],
                scale: [1, 1.3, 1],
                opacity: [0.7, 1, 0.7],
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

        {/* Moving connection lines with more visibility */}
        <svg
          className="absolute inset-0 w-full h-full"
          style={{ pointerEvents: "none" }}
        >
          {[...Array(20)].map((_, i) => {
            const startX = Math.random() * 100;
            const startY = Math.random() * 100;
            const endX = Math.random() * 100;
            const endY = Math.random() * 100;
            const strokeWidth = Math.random() * 1.5 + 0.5;

            return (
              <motion.path
                key={`line-${i}`}
                d={`M ${startX}% ${startY}% L ${endX}% ${endY}%`}
                stroke={
                  isDarkMode
                    ? "rgba(139, 92, 246, 0.15)"
                    : "rgba(79, 70, 229, 0.2)"
                }
                strokeWidth={strokeWidth}
                fill="none"
                strokeDasharray="5,5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: [0, 1, 0],
                  opacity: [0, 0.7, 0],
                }}
                transition={{
                  duration: 15 + Math.random() * 15,
                  repeat: Infinity,
                  delay: Math.random() * 8,
                  ease: "easeInOut",
                }}
              />
            );
          })}
        </svg>

        {/* Enhanced pulse effect */}
        <motion.div
          className="absolute inset-0 opacity-0"
          animate={{
            opacity: [0, 0.05, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            background: `radial-gradient(circle at ${
              30 + Math.random() * 40
            }% ${30 + Math.random() * 40}%, ${
              isDarkMode ? "#8b5cf6" : "#4f46e5"
            }, transparent 70%)`,
          }}
        />

        {/* Additional glow effects */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute rounded-full"
            style={{
              width: "40%",
              height: "40%",
              top: "30%",
              left: "20%",
              background: `radial-gradient(circle, ${
                isDarkMode
                  ? "rgba(139, 92, 246, 0.1)"
                  : "rgba(79, 70, 229, 0.1)"
              }, transparent 70%)`,
              filter: "blur(40px)",
            }}
            animate={{
              x: [0, 50, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute rounded-full"
            style={{
              width: "50%",
              height: "50%",
              top: "60%",
              right: "10%",
              background: `radial-gradient(circle, ${
                isDarkMode
                  ? "rgba(139, 92, 246, 0.08)"
                  : "rgba(79, 70, 229, 0.08)"
              }, transparent 70%)`,
              filter: "blur(40px)",
            }}
            animate={{
              x: [0, -40, 0],
              y: [0, 40, 0],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>
    );
  };

  return (
    <div className="relative overflow-x-hidden h-full w-full bg-white dark:bg-slate-950">
      <GridBackground />

      {/* More floating decorative elements */}
      <motion.div
        variants={floatVariants}
        animate="animate"
        className="absolute top-20 left-10 w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-25 z-10"
      />
      <motion.div
        variants={floatVariants}
        animate="animate"
        transition={{ delay: 0.7 }}
        className="absolute bottom-40 right-12 w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 opacity-25 z-10"
      />
      <motion.div
        variants={floatVariants}
        animate="animate"
        transition={{ delay: 1.2 }}
        className="absolute top-1/3 right-1/4 w-5 h-5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 opacity-20 z-10"
      />
      <motion.div
        variants={floatVariants}
        animate="animate"
        transition={{ delay: 1.8 }}
        className="absolute bottom-1/4 left-1/3 w-7 h-7 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 opacity-20 z-10"
      />

      <section id="alert" className="z-10 relative">
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
