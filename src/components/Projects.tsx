import { motion } from "framer-motion";

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  technologies: string[];
  type: "web" | "mobile" | "cyber security" | "ai" | "desktop";
}

interface ProjectsProps {
  name: string;
  info: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ name, info }) => {
  // Combine web and mobile projects
  const projects = info

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
    <div className="relative py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.h1
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: -50, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-500"
      >
        {name}
      </motion.h1>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {projects.map((project) => (
          <motion.div
            key={project.title}
            variants={item}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5 }}
            className={
              project.type === "mobile"
                ? "group relative bg-white dark:bg-gray-800/50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700/50 hover:border-indigo-300/50 flex flex-col sm:flex-row min-h-[220px]"
                : "group relative bg-white dark:bg-gray-800/50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700/50 hover:border-indigo-300/50 flex flex-col h-full"
            }
          >
            {project.type === "mobile" ? (
              // Horizontal card for mobile projects
              <>
                <div className="relative w-full sm:w-2/5 h-48 sm:h-auto flex-shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col justify-between p-5 flex-1">
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2 line-clamp-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-3">
                      {project.description}
                    </p>
                  </div>
                  <div>
                    <div className="flex flex-wrap gap-1.5 mt-2 mb-3">
                      {project.technologies.map((tec) => (
                        <span
                          key={tec}
                          className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
                        >
                          {tec}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-3 py-1.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300 text-xs font-medium shadow-md"
                    >
                      View Project
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3 ml-1.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </>
            ) : (
              // Vertical card for web projects
              <>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-3 py-1.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300 text-xs font-medium shadow-md"
                    >
                      View Project
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3 ml-1.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2 line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-xs mb-3 line-clamp-2 flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {project.technologies.map((tec) => (
                      <span
                        key={tec}
                        className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-200"
                      >
                        {tec}
                      </span>
                    ))}
                  </div>
                </div>
              </>
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
