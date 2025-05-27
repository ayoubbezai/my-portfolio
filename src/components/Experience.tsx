import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

interface Experience {
  year: string;
  role: string;
  company: string;
  description: string;
  technologies: string[];
  companyUrl?: string;
  location?: string;
}

const Experience = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section
      id="experience"
      className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl opacity-10 dark:opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600 rounded-full filter blur-3xl opacity-10 dark:opacity-20"></div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <motion.h1
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-500"
        >
          Work Experience
        </motion.h1>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-4 rounded-full"
        />
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-16 relative"
      >
        {/* Timeline line */}
        <div className="hidden md:block absolute left-1/4 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-400/20 via-purple-500/30 to-pink-400/20"></div>

        {EXPERIENCES.map((exp: Experience) => (
          <motion.div
            key={`${exp.role}-${exp.company}`}
            variants={item}
            className="relative group"
          >
            {/* Timeline dot */}
            <div className="hidden md:block absolute left-1/4 transform -translate-x-1/2 -translate-y-1/2 top-12 w-5 h-5 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 ring-4 ring-purple-500/20 z-10"></div>

            <div className="flex flex-col md:flex-row gap-6">
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="md:w-1/4 text-right"
              >
                <p className="text-lg font-medium text-indigo-600 dark:text-indigo-300 bg-indigo-50/80 dark:bg-indigo-900/30 px-4 py-2 rounded-lg inline-block shadow-sm">
                  {exp.year}
                </p>
                {exp.companyUrl && (
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center text-sm text-indigo-500 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors"
                  >
                    Company Site <FiExternalLink className="ml-1" />
                  </a>
                )}
              </motion.div>

              <div className="md:w-3/4">
                <div className="bg-white/90 dark:bg-gray-800/80 p-6 rounded-2xl shadow-lg border border-gray-100/80 dark:border-gray-700/50 group-hover:border-purple-300/50 transition-all duration-300 hover:shadow-purple-500/10 hover:-translate-y-1">
                  <div className="flex justify-between items-start">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-1">
                      {exp.role}
                    </h2>
                    {exp.location && (
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {exp.location}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg text-indigo-600 dark:text-indigo-400 mb-4">
                    {exp.company}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 mb-5 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-5">
                    {exp.technologies.map((tec) => (
                      <span
                        key={tec}
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100/80 text-purple-800 dark:bg-purple-900/40 dark:text-purple-200 transition-all hover:bg-purple-200 dark:hover:bg-purple-800 hover:scale-105"
                      >
                        {tec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Experience;
