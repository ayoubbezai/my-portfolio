import Navbar from "./components/Navbar";
import { useEffect, useState, Suspense, lazy, useMemo } from "react";
import { PROJECTS } from "./constants/projects.ts";
import { motion, useReducedMotion } from "framer-motion";

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
    return storedMode === "true" || storedMode === null;
  });

  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    localStorage.setItem("isDarkMode", isDarkMode.toString());
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  const floatVariants = {
    animate: {
      y: [0, -10, 0],
      transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
    },
  };

  const fallback = (label: string) => (
    <div className="w-full flex justify-center py-20 text-xl text-indigo-500">
      Loading {label}...
    </div>
  );

  // Grid Background
  const GridBackground = () => {
    const cellSize = 60;
    const isMobile = window.innerWidth < 768;

    const particleCount = isMobile ? 10 : 24;
    const cellCount = isMobile ? 12 : 30;
    const rowCount = isMobile ? 8 : 20;
    const floatingShapeCount = isMobile ? 4 : 10;
    const lineCount = isMobile ? 4 : 14;

    // Particles
    const particles = useMemo(
      () =>
        Array.from({ length: particleCount }, (_, i) => {
          const size = Math.random() * 5 + 2;
          return {
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size,
            duration: Math.random() * 12 + 10,
            delay: Math.random() * 5,
            color: isDarkMode
              ? `rgba(139, 92, 246, ${0.2 + size / 35})`
              : `rgba(79, 70, 229, ${0.2 + size / 35})`,
          };
        }),
      [isDarkMode, particleCount]
    );

    // Hovered cells
    const randomCells = useMemo(
      () =>
        Array.from({ length: isMobile ? 10 : 25 }, (_, i) => {
          const col = Math.floor(Math.random() * cellCount);
          const row = Math.floor(Math.random() * rowCount);
          return {
            id: i,
            col,
            row,
            delay: Math.random() * 10,
            duration: 2.5 + Math.random() * 3.5,
          };
        }),
      [cellCount, rowCount, isMobile]
    );

    // Floating shapes
    const floatingShapes = useMemo(
      () =>
        Array.from({ length: floatingShapeCount }, (_, i) => {
          const size = Math.random() * 40 + 25;
          const isCircle = Math.random() > 0.5;
          return {
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size,
            isCircle,
            rotation: Math.random() * 360,
            duration: Math.random() * 18 + 12,
            delay: Math.random() * 6,
            color: isDarkMode
              ? `rgba(139, 92, 246, 0.06)`
              : `rgba(79, 70, 229, 0.08)`,
          };
        }),
      [isDarkMode, floatingShapeCount]
    );

    // Connection lines
    const connectionLines = useMemo(
      () =>
        Array.from({ length: lineCount }, (_, i) => {
          return {
            id: i,
            startX: Math.random() * 100,
            startY: Math.random() * 100,
            endX: Math.random() * 100,
            endY: Math.random() * 100,
            delay: Math.random() * 5,
          };
        }),
      [lineCount]
    );

    if (prefersReducedMotion) return null;

    return (
      <div className="fixed inset-0 overflow-hidden z-0 pointer-events-none">
        {/* Static grid */}
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
          }}
        />

        {/* Hovered cells */}
        <div className="absolute inset-0">
          {randomCells.map((cell) => (
            <motion.div
              key={cell.id}
              className="absolute rounded-md"
              style={{
                left: `${cell.col * cellSize + 4}px`,
                top: `${cell.row * cellSize + 4}px`,
                width: `${cellSize - 8}px`,
                height: `${cellSize - 8}px`,
                background: `radial-gradient(circle, ${
                  isDarkMode
                    ? "rgba(139, 92, 246, 0.3)"
                    : "rgba(79, 70, 229, 0.35)"
                } 0%, transparent 80%)`,
              }}
              animate={{
                scale: [1, 1.35, 1],
                opacity: [0, 0.8, 0],
                filter: ["blur(0px)", "blur(3px)", "blur(0px)"],
              }}
              transition={{
                duration: cell.duration,
                repeat: Infinity,
                delay: cell.delay,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Particles */}
        <div className="absolute inset-0">
          {particles.map((p) => (
            <motion.div
              key={p.id}
              className="absolute rounded-full"
              style={{
                width: p.size,
                height: p.size,
                background: p.color,
                left: `${p.x}%`,
                top: `${p.y}%`,
              }}
              animate={{
                x: [0, Math.random() * 20 - 10, 0],
                y: [0, Math.random() * 15 - 7, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                delay: p.delay,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Floating shapes */}
        <div className="absolute inset-0">
          {floatingShapes.map((s) => (
            <motion.div
              key={s.id}
              className="absolute"
              style={{
                width: s.size,
                height: s.size,
                borderRadius: s.isCircle ? "50%" : "6px",
                background: s.color,
                left: `${s.x}%`,
                top: `${s.y}%`,
              }}
              animate={{
                y: [0, -20, 0],
                x: [0, Math.random() * 20 - 10, 0],
                rotate: [s.rotation, s.rotation + 12, s.rotation],
              }}
              transition={{
                duration: s.duration,
                repeat: Infinity,
                delay: s.delay,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Connection lines */}
        <svg className="absolute inset-0 w-full h-full">
          {connectionLines.map((l) => (
            <motion.path
              key={l.id}
              d={`M ${l.startX}% ${l.startY}% L ${l.endX}% ${l.endY}%`}
              stroke={
                isDarkMode
                  ? "rgba(139, 92, 246, 0.2)"
                  : "rgba(79, 70, 229, 0.25)"
              }
              strokeWidth="1"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: [0, 1, 0] }}
              transition={{
                duration: 10 + Math.random() * 8,
                repeat: Infinity,
                delay: l.delay,
                ease: "easeInOut",
              }}
            />
          ))}
        </svg>
      </div>
    );
  };

  return (
    <div className="relative overflow-x-hidden h-full w-full bg-white dark:bg-slate-950">
      <GridBackground />

      {/* Floating decorations */}
      <motion.div
        variants={floatVariants}
        animate="animate"
        className="absolute top-20 left-10 w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-25 z-10"
      />
      <motion.div
        variants={floatVariants}
        animate="animate"
        transition={{ delay: 0.5 }}
        className="absolute bottom-40 right-12 w-5 h-5 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 opacity-25 z-10"
      />

      <section id="alert" className="z-10">
        <Navbar setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />

        {/* Sections animate on scroll */}
        <Suspense fallback={fallback("Hero")}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Hero />
          </motion.div>
        </Suspense>

        <Suspense fallback={fallback("About")}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <About />
          </motion.div>
        </Suspense>

        <Suspense fallback={fallback("Technologies")}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Technologies />
          </motion.div>
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
