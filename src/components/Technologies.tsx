import { RiReactjsLine } from "react-icons/ri";
import {
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiLaravel,
  SiPython,
  SiReact,
  SiHtml5,
  SiCss3,
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
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl opacity-10 dark:opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600 rounded-full filter blur-3xl opacity-10 dark:opacity-20"></div>
      </div>

      <motion.h1
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: -50, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 w-full mx-auto text-center pb-4 to-indigo-600"
      >
        My <span className="text-gray-800 dark:text-gray-300">Tech Stack</span>
      </motion.h1>

      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "100px" }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mb-16 rounded-full"
      />

      <motion.div
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.5, staggerChildren: 0.1 }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8"
      >
        {/* HTML */}
        <motion.div
          variants={icon(2.5)}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center"
        >
          <SiHtml5 className="text-7xl md:text-8xl text-orange-500 bg-white/5 p-5 rounded-2xl backdrop-blur-sm border border-gray-200/20 hover:scale-105 transition-transform duration-300" />
          <span className="mt-3 text-lg font-medium text-gray-600 dark:text-gray-300">
            HTML
          </span>
        </motion.div>

        {/* CSS */}
        <motion.div
          variants={icon(3)}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center"
        >
          <SiCss3 className="text-7xl md:text-8xl text-blue-500 bg-white/5 p-5 rounded-2xl backdrop-blur-sm border border-gray-200/20 hover:scale-105 transition-transform duration-300" />
          <span className="mt-3 text-lg font-medium text-gray-600 dark:text-gray-300">
            CSS
          </span>
        </motion.div>

        {/* React */}
        <motion.div
          variants={icon(2.8)}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center"
        >
          <RiReactjsLine className="text-7xl md:text-8xl text-cyan-400 bg-white/5 p-5 rounded-2xl backdrop-blur-sm border border-gray-200/20 hover:scale-105 transition-transform duration-300" />
          <span className="mt-3 text-lg font-medium text-gray-600 dark:text-gray-300">
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
          <SiReact className="text-7xl md:text-8xl text-cyan-500 bg-white/5 p-5 rounded-2xl backdrop-blur-sm border border-gray-200/20 hover:scale-105 transition-transform duration-300" />
          <span className="mt-3 text-lg font-medium text-gray-600 dark:text-gray-300">
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
          <SiTailwindcss className="text-7xl md:text-8xl text-blue-500 bg-white/5 p-5 rounded-2xl backdrop-blur-sm border border-gray-200/20 hover:scale-105 transition-transform duration-300" />
          <span className="mt-3 text-lg font-medium text-gray-600 dark:text-gray-300">
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
          <SiTypescript className="text-7xl md:text-8xl text-blue-600 bg-white/5 p-5 rounded-2xl backdrop-blur-sm border border-gray-200/20 hover:scale-105 transition-transform duration-300" />
          <span className="mt-3 text-lg font-medium text-gray-600 dark:text-gray-300">
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
          <SiJavascript className="text-7xl md:text-8xl text-yellow-400 bg-white/5 p-5 rounded-2xl backdrop-blur-sm border border-gray-200/20 hover:scale-105 transition-transform duration-300" />
          <span className="mt-3 text-lg font-medium text-gray-600 dark:text-gray-300">
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
          <SiLaravel className="text-7xl md:text-8xl text-red-500 bg-white/5 p-5 rounded-2xl backdrop-blur-sm border border-gray-200/20 hover:scale-105 transition-transform duration-300" />
          <span className="mt-3 text-lg font-medium text-gray-600 dark:text-gray-300">
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
          <SiPython className="text-7xl md:text-8xl text-blue-400 bg-white/5 p-5 rounded-2xl backdrop-blur-sm border border-gray-200/20 hover:scale-105 transition-transform duration-300" />
          <span className="mt-3 text-lg font-medium text-gray-600 dark:text-gray-300">
            Python
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Technologies;
