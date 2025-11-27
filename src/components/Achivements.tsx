import { motion } from "framer-motion";
import { ACHIEVEMENTS } from "../constants";
import { FaTrophy, FaCalendarAlt, FaAward } from "react-icons/fa";

type AchievementsProps = {
  isDarkMode: boolean;
};

const Achievements: React.FC<AchievementsProps> = ({ isDarkMode }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const cardHover = {
    scale: 1.03,
    boxShadow: isDarkMode
      ? "0 10px 25px -5px rgba(99, 102, 241, 0.25)"
      : "0 10px 25px -5px rgba(99, 102, 241, 0.35)",
  };

  return (
    <div className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-8">
          Achievements{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">
            & Events
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
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {ACHIEVEMENTS.map((achievement) => (
          <motion.div
            key={achievement.title}
            variants={item}
            transition={{ duration: 0.3 }}
            whileHover={cardHover}
            className="relative overflow-hidden rounded-xl shadow-lg bg-white dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/50 group h-full flex flex-col"
          >
            {/* Ribbon for special achievements */}
            {achievement.isSpecial && (
              <div className="absolute -right-8 -top-2 w-32 bg-indigo-600 text-white text-xs font-bold py-1 px-2 transform rotate-45 text-center z-10">
                <FaAward className="inline mr-1" /> Featured
              </div>
            )}

            {/* Achievement Image */}
            <div className="relative h-52 overflow-hidden">
              <motion.img
                src={achievement.image}
                alt={achievement.title}
                className="w-full h-full object-cover"
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.4 },
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Achievement Content */}
            <div className="p-5 flex-grow flex flex-col">
              <div className="flex items-center mb-2">
                {achievement.type === "award" ? (
                  <FaTrophy className="text-yellow-500 mr-2 text-sm" />
                ) : (
                  <FaCalendarAlt className="text-indigo-500 mr-2 text-sm" />
                )}
                <span className="text-xs font-medium uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                  {achievement.type}
                </span>
              </div>

              <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2 line-clamp-2">
                {achievement.title}
              </h3>

              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                {achievement.description}
              </p>

              <div className="flex justify-between items-center mt-auto pt-2">
                <span className="text-xs font-medium text-indigo-600 dark:text-indigo-400">
                  {achievement.date}
                </span>

                {achievement.link && (
                  <a
                    href={achievement.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-200 hover:bg-indigo-200 dark:hover:bg-indigo-800 transition-colors"
                  >
                    Details
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Additional Marquee Section for Certifications */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mt-16"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-8">
            Certifications{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">
              & Badges
            </span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full"
          />
        </motion.div>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-800/50 p-5 rounded-xl">
          <div className="flex overflow-x-auto gap-5 pb-3 scrollbar-hide">
            {ACHIEVEMENTS.filter((a) => a.type === "certification").map(
              (cert) => (
                <motion.div
                  key={cert.title}
                  whileHover={{ scale: 1.05 }}
                  className="flex-shrink-0 w-56 h-36 bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-600 flex flex-col"
                >
                  <div className="h-20 bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center p-2">
                    <motion.img
                      src={cert.image}
                      alt={cert.title}
                      className="h-full object-contain"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <div className="p-3 flex-grow">
                    <h4 className="text-xs font-semibold text-gray-800 dark:text-white line-clamp-2">
                      {cert.title}
                    </h4>
                    <p className="text-[10px] text-gray-500 dark:text-gray-400 mt-1">
                      Issued: {cert.date}
                    </p>
                  </div>
                </motion.div>
              )
            )}
          </div>
        </div>
      </motion.div> */}
    </div>
  );
};

export default Achievements;
