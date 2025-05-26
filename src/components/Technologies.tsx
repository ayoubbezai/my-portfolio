import { RiReactjsLine } from "react-icons/ri";
import {
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiLaravel,
  SiPython,
  SiReact,
} from "react-icons/si";
import { motion, Variants } from "framer-motion";

// Animation variants
const icon = (duration: number): Variants => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies: React.FC = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <motion.h1
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: -50, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600"
      >
        Technologies
      </motion.h1>

      <motion.div
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.5, staggerChildren: 0.1 }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
      >
        {/* React */}
        <motion.div
          variants={icon(2.8)}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center"
        >
          <RiReactjsLine className="text-6xl text-cyan-400 bg-white/5 p-4 rounded-xl backdrop-blur-sm border border-gray-200/20" />
          <span className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            React
          </span>
        </motion.div>

        {/* React Native */}
        <motion.div
          variants={icon(3.2)}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center"
        >
          <SiReact className="text-6xl text-cyan-500 bg-white/5 p-4 rounded-xl backdrop-blur-sm border border-gray-200/20" />
          <span className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            React Native
          </span>
        </motion.div>

        {/* Tailwind CSS */}
        <motion.div
          variants={icon(1.8)}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center"
        >
          <SiTailwindcss className="text-6xl text-blue-500 bg-white/5 p-4 rounded-xl backdrop-blur-sm border border-gray-200/20" />
          <span className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            Tailwind
          </span>
        </motion.div>

        {/* TypeScript */}
        <motion.div
          variants={icon(3.4)}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center"
        >
          <SiTypescript className="text-6xl text-blue-600 bg-white/5 p-4 rounded-xl backdrop-blur-sm border border-gray-200/20" />
          <span className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            TypeScript
          </span>
        </motion.div>

        {/* JavaScript */}
        <motion.div
          variants={icon(4)}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center"
        >
          <SiJavascript className="text-6xl text-yellow-400 bg-white/5 p-4 rounded-xl backdrop-blur-sm border border-gray-200/20" />
          <span className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            JavaScript
          </span>
        </motion.div>

        {/* Laravel */}
        <motion.div
          variants={icon(3.6)}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center"
        >
          <SiLaravel className="text-6xl text-red-500 bg-white/5 p-4 rounded-xl backdrop-blur-sm border border-gray-200/20" />
          <span className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            Laravel
          </span>
        </motion.div>

        {/* Python */}
        <motion.div
          variants={icon(2.5)}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center"
        >
          <SiPython className="text-6xl text-blue-400 bg-white/5 p-4 rounded-xl backdrop-blur-sm border border-gray-200/20" />
          <span className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            Python
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Technologies;
