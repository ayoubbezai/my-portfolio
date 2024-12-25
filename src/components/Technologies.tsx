import { RiReactjsLine } from "react-icons/ri";
import { SiTailwindcss, SiTypescript, SiJavascript, SiHtml5, SiCss3 } from "react-icons/si";
import { motion, Variants } from "framer-motion";
import { useRef } from "react";
import React, { useState, useEffect } from "react";

const icon = (duration: number): Variants => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10], // Keyframes for y-axis
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies: React.FC = () => {
  const constraintsRef = useRef<HTMLDivElement>(null);
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRefreshKey((prevKey) => prevKey + 1); // Increment refresh key every 10 seconds
    }, 10000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <motion.div
    whileInView={{ x: 0, opacity: 1 }}
    initial={{ x: -200, opacity: 0 }}
    transition={{ duration: 1 }}
    className="mt-24 mb-16 pb-12 z-50">
       
      <motion.h1
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.5 }}
        className="text-gray-300 text-center text-3xl capitalize font-normal my-12 xl:text-4xl 2xl:text-6xl xl:my-14 2xl:my-18"
      >
        Technologies
      </motion.h1>

      <motion.div key={refreshKey}
        ref={constraintsRef}
  
        className="flex flex-row justify-center flex-wrap gap-6 mx-8 2xl:mt-8"
      >
        {/* React */}
        <motion.div
          variants={icon(2.8)}
          initial="initial"
          animate="animate"
          className="xl:mx-4 2xl:mx-6"
          drag
          dragConstraints={constraintsRef}
          dragElastic={0.2}
        >
          <RiReactjsLine className="backdrop-blur text-7xl text-cyan-400 border border-gray-600 p-4 rounded-xl xl:text-8xl 2xl:text-9xl" />
        </motion.div>

        {/* Tailwind CSS */}
        <motion.div
          drag
          dragConstraints={constraintsRef}
          dragElastic={0.2}
          variants={icon(1.8)}
          initial="initial"
          animate="animate"
          className="xl:mx-4 2xl:mx-6"
        >
          <SiTailwindcss className="backdrop-blur text-7xl text-blue-500 border border-gray-600 p-4 rounded-xl xl:text-8xl 2xl:text-9xl" />
        </motion.div>

        {/* TypeScript */}
        <motion.div
          drag
          dragConstraints={constraintsRef}
          dragElastic={0.2}
          variants={icon(3.4)}
          initial="initial"
          animate="animate"
          className="xl:mx-4 2xl:mx-6"
        >
          <SiTypescript className="backdrop-blur text-7xl text-blue-600 border border-gray-600 p-4 rounded-xl xl:text-8xl 2xl:text-9xl" />
        </motion.div>

        {/* JavaScript */}
        <motion.div
          drag
          dragConstraints={constraintsRef}
          dragElastic={0.2}
          variants={icon(4)}
          initial="initial"
          animate="animate"
          className="xl:mx-4 2xl:mx-6"
        >
          <SiJavascript className="backdrop-blur text-7xl text-yellow-400 border border-gray-600 p-4 rounded-xl xl:text-8xl 2xl:text-9xl" />
        </motion.div>

        {/* HTML */}
        <motion.div
          drag
          dragConstraints={constraintsRef}
          dragElastic={0.2}
          variants={icon(3.2)}
          initial="initial"
          animate="animate"
          className="xl:mx-4 2xl:mx-6"
        >
          <SiHtml5 className="backdrop-blur text-7xl text-orange-600 border border-gray-600 p-4 rounded-xl xl:text-8xl 2xl:text-9xl" />
        </motion.div>

        {/* CSS */}
        <motion.div
          drag
          dragConstraints={constraintsRef}
          dragElastic={0.2}
          variants={icon(2)}
          initial="initial"
          animate="animate"
          className="xl:mx-4 2xl:mx-6"
        >
          <SiCss3 className="backdrop-blur text-7xl text-blue-400 border border-gray-600 p-4 rounded-xl xl:text-8xl 2xl:text-9xl" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Technologies;
