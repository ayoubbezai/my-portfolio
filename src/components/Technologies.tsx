import { RiReactjsLine } from "react-icons/ri";
import { SiTailwindcss, SiTypescript, SiJavascript, SiHtml5, SiCss3 } from "react-icons/si";
import { motion, Variants } from "framer-motion";

// Function for animation variants with duration and delay
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
  return (
    <div className="mt-24 mb-16 pb-12 z-50">
      <motion.h1
      whileInView={{y:0 ,opacity:1}}
      initial={{y:-100 ,opacity:0}}
      transition ={{duration :0.5 }}
      className="text-gray-300 text-center text-3xl capitalize font-normal my-12  xl:text-4xl 2xl:text-6xl xl:my-14 2xl:my-18">
        Technologies
      </motion.h1>

      <motion.div
       whileInView={{x:0 ,opacity:1}}
       initial={{x:-100 ,opacity:0}}
       transition ={{duration :0.5 }}
      className="flex flex-row justify-center flex-wrap gap-6 mx-8 2xl:mt-8 ">
        {/* React */}
        <motion.div
          variants={icon(2.8)}
          initial="initial"
          animate="animate"
          className="xl:mx-4 2xl:mx-6"
        >
          <RiReactjsLine className="backdrop-blur text-7xl text-cyan-400 border border-gray-600 p-4 rounded-xl xl:text-8xl 2xl:text-9xl" />
        </motion.div>

        {/* Tailwind CSS */}
        <motion.div
          variants={icon(1.8)}
          initial="initial"
          animate="animate"
          className="xl:mx-4 2xl:mx-6"
        >
          <SiTailwindcss className="backdrop-blur text-7xl text-blue-500 border border-gray-600 p-4 rounded-xl xl:text-8xl 2xl:text-9xl" />
        </motion.div>

        {/* TypeScript */}
        <motion.div
          variants={icon(3.4)}
          initial="initial"
          animate="animate"
          className="xl:mx-4 2xl:mx-6"
        >
          <SiTypescript className="backdrop-blur text-7xl text-blue-600 border border-gray-600 p-4 rounded-xl xl:text-8xl 2xl:text-9xl" />
        </motion.div>

        {/* JavaScript */}
        <motion.div
          variants={icon(4)}
          initial="initial"
          animate="animate"
          className="xl:mx-4 2xl:mx-6"
        >
          <SiJavascript className="backdrop-blur text-7xl text-yellow-400 border border-gray-600 p-4 rounded-xl xl:text-8xl 2xl:text-9xl" />
        </motion.div>

        {/* HTML */}
        <motion.div
          variants={icon(3.2)}
          initial="initial"
          animate="animate"
          className="xl:mx-4 2xl:mx-6"
        >
          <SiHtml5 className="backdrop-blur text-7xl text-orange-600 border border-gray-600 p-4 rounded-xl xl:text-8xl 2xl:text-9xl" />
        </motion.div>

        {/* CSS */}
        <motion.div
          variants={icon(2)}
          initial="initial"
          animate="animate"
          className="xl:mx-4 2xl:mx-6"
        >
          <SiCss3 className="backdrop-blur text-7xl text-blue-400 border border-gray-600 p-4 rounded- xl:text-8xl 2xl:text-9xl" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
