import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <motion.h1
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: -50, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-500"
      >
        Experience
      </motion.h1>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-12 relative"
      >
        {/* Timeline line */}
        <div className="hidden md:block absolute left-1/4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-400/20 via-purple-500/50 to-pink-400/20"></div>

        {EXPERIENCES.map((exp) => (
          <motion.div
            key={exp.role}
            variants={item}
            transition={{ duration: 0.5 }}
            className="relative group"
          >
            {/* Timeline dot */}
            <div className="hidden md:block absolute left-1/4 transform -translate-x-1/2 -translate-y-1/2 top-12 w-4 h-4 rounded-full bg-purple-500 ring-4 ring-purple-500/30 z-10"></div>

            <div className="flex flex-col md:flex-row gap-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="md:w-1/4 text-right"
              >
                <p className="text-lg font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20 px-4 py-2 rounded-lg inline-block">
                  {exp.year}
                </p>
              </motion.div>

              <div className="md:w-3/4">
                <div className="bg-white dark:bg-gray-800/50 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700/50 group-hover:border-purple-300/50 transition-all duration-300">
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                    {exp.role}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.technologies.map((tec) => (
                      <span
                        key={tec}
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-200 transition-all hover:bg-purple-200 dark:hover:bg-purple-800"
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
    </div>
  );
};

export default Experience;
