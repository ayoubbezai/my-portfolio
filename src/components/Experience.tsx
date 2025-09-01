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
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 14,
        mass: 0.5,
      },
    },
  };

  // Header animation variants
  const headerVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      id="experience"
      className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            x: [0, -8, 0],
            y: [0, 8, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-24 -left-24 w-48 h-48 bg-purple-500 rounded-full filter blur-3xl opacity-10 dark:opacity-15"
        />
        <motion.div
          animate={{
            x: [0, 12, 0],
            y: [0, -12, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
            delay: 1,
          }}
          className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-600 rounded-full filter blur-3xl opacity-10 dark:opacity-15"
        />
      </div>

      {/* Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={headerVariants}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-3">
          Work{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">
            Experience
          </span>
        </h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full"
        />
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-sm md:text-base"
        >
          My professional journey through innovative companies and challenging
          projects
        </motion.p>
      </motion.div>

      {/* Experiences timeline */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="space-y-12 relative"
      >
        {/* Timeline line */}
        <div className="hidden md:block absolute left-4 md:left-1/4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-400/30 via-purple-500/30 to-pink-400/30"></div>

        {EXPERIENCES.map((exp: Experience) => (
          <motion.div
            key={`${exp.role}-${exp.company}`}
            variants={item}
            className="relative group"
          >
            {/* Timeline dot */}
            <div className="hidden md:block absolute left-4 md:left-1/4 transform -translate-x-1/2 -translate-y-1/2 top-10 w-3 h-3 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 ring-3 ring-purple-500/10 group-hover:ring-purple-500/30 transition-all duration-300 z-10"></div>

            <div className="flex flex-col md:flex-row gap-5 md:gap-6">
              {/* Year and company link */}
              <motion.div whileHover={{ x: 5 }} className="md:w-1/4">
                <p className="text-base font-medium text-indigo-600 dark:text-indigo-300 bg-indigo-50/70 dark:bg-indigo-900/20 px-3 py-1.5 rounded-lg inline-block">
                  {exp.year}
                </p>
                {exp.companyUrl && (
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1.5 inline-flex items-center text-xs text-indigo-500 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors"
                  >
                    Visit site <FiExternalLink className="ml-1 text-xs" />
                  </a>
                )}
              </motion.div>

              {/* Experience card */}
              <div className="md:w-3/4">
                <motion.div
                  whileHover={{ y: -2 }}
                  className="bg-white/80 dark:bg-gray-800/70 p-5 rounded-xl shadow-sm border border-gray-100/60 dark:border-gray-700/40 group-hover:border-purple-300/30 group-hover:shadow-md group-hover:shadow-purple-500/5 transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-3">
                    <div>
                      <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                        {exp.role}
                      </h2>
                      <h3 className="text-base text-indigo-600 dark:text-indigo-400">
                        {exp.company}
                      </h3>
                    </div>
                    {exp.location && (
                      <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700/50 px-2 py-1 rounded-full sm:mt-1.5">
                        {exp.location}
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{ scale: 1.05 }}
                        className="text-xs px-2.5 py-1 rounded-full bg-purple-100/60 text-purple-700 dark:bg-purple-900/30 dark:text-purple-200"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Experience;
