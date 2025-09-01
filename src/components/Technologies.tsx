import { RiReactjsLine } from "react-icons/ri";
import {
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiLaravel,
  SiPython,
  SiHtml5,
  SiCss3,
  SiNextdotjs,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiFigma,
  SiPhp,
  SiMysql,
  SiGithub,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { motion, Variants } from "framer-motion";

// Animation variants
const icon = (duration: number): Variants => ({
  initial: { y: -10 },
  animate: {
    y: [5, -5],
    transition: {
      duration: duration,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Technologies: React.FC = () => {
  const technologies = [
    { icon: SiHtml5, name: "HTML", color: "text-orange-500", duration: 2.5 },
    { icon: SiCss3, name: "CSS", color: "text-blue-500", duration: 3 },
    {
      icon: RiReactjsLine,
      name: "React",
      color: "text-cyan-400",
      duration: 2.8,
    },
    {
      icon: TbBrandReactNative,
      name: "React Native",
      color: "text-cyan-500",
      duration: 3.2,
    },
    {
      icon: SiTailwindcss,
      name: "Tailwind",
      color: "text-blue-400",
      duration: 1.8,
    },
    {
      icon: SiTypescript,
      name: "TypeScript",
      color: "text-blue-600",
      duration: 3.4,
    },
    {
      icon: SiJavascript,
      name: "JavaScript",
      color: "text-yellow-400",
      duration: 4,
    },
    { icon: SiLaravel, name: "Laravel", color: "text-red-500", duration: 3.6 },
    { icon: SiPython, name: "Python", color: "text-blue-400", duration: 2.5 },
    {
      icon: SiNextdotjs,
      name: "Next.js",
      color: "text-gray-800 dark:text-gray-200",
      duration: 3.1,
    },
    {
      icon: SiMongodb,
      name: "MongoDB",
      color: "text-green-600",
      duration: 3.5,
    },
    {
      icon: SiPostgresql,
      name: "PostgreSQL",
      color: "text-blue-700",
      duration: 3.7,
    },
    { icon: SiGit, name: "Git", color: "text-orange-600", duration: 2.7 },
    { icon: SiFigma, name: "Figma", color: "text-purple-500", duration: 3.0 },
    { icon: SiPhp, name: "PHP", color: "text-indigo-500", duration: 3.2 },
    { icon: SiMysql, name: "MySQL", color: "text-blue-600", duration: 3.3 },
    {
      icon: SiGithub,
      name: "GitHub",
      color: "text-gray-800 dark:text-gray-200",
      duration: 2.9,
    },
  ];



  return (
    <section className="relative py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            x: [0, -10, 0],
            y: [0, 10, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-20 -left-20 w-48 h-48 bg-purple-500 rounded-full filter blur-3xl opacity-10 dark:opacity-15"
        />
        <motion.div
          animate={{
            x: [0, 15, 0],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
            delay: 2,
          }}
          className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-600 rounded-full filter blur-3xl opacity-10 dark:opacity-15"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-12 md:mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">
          My{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">
            Tech Stack
          </span>
        </h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "80px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full"
        />
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8"
      >
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            variants={item}
            className="flex flex-col items-center group"
          >
            <motion.div
              variants={icon(tech.duration)}
              initial="initial"
              animate="animate"
              className="relative p-5 rounded-2xl bg-white/5 backdrop-blur-sm border border-gray-200/20 hover:border-purple-300/30 dark:hover:border-purple-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 mb-3"
              style={{
                borderRadius: "20px",
              }}
              whileHover={{
                scale: 1.05,
                rotate: index % 2 === 0 ? -2 : 2,
              }}
            >
              <tech.icon className={`text-5xl md:text-[3.5rem] ${tech.color}`} />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-indigo-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300 text-center">
              {tech.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Technologies;
