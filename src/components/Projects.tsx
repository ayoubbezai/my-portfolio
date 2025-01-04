import { motion } from "framer-motion";

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  technologies: string[];
}

interface ProjectsProps {
  name: string;
  info: Project[]; // Ensure that this matches the structure of PROJECTS
}

const Projects: React.FC<ProjectsProps> = ({ name, info }) => {
  return (
    <div className="z-50 mt-8">
      <motion.h1
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="z-50 text-purple-950 dark:text-gray-300 text-center text-3xl capitalize font-normal mt-8 xl:text-4xl 2xl:text-6xl xl:my-10 2xl:my-18"
      >
        {name}
      </motion.h1>
      <div className="mt-8 mx-20 z-50">
        {info.map((project) => (
          <div key={project.title} className="flex flex-col">
            <motion.div className="z-50 flex flex-col-reverse md:flex-row justify-center   md:justify-evenly align-middle my-4 xl:my-7 2xl:my-9xl">
              <motion.div
                whileInView={{ x: 0, opacity: 1 }}
                initial={{ x: -100, opacity: 0 }}
                transition={{ duration: 1 }}
                className="flex flex-col text-center justify-center   md:w-1/4"
              >
                <img
                  src={project.image}
                  alt=""
                  className="text-gray-500 w-full text-center my-4 md:text-left"
                />
                <a
                  href={project.link}
                  className="my-2 mb-5 text-sm text-pink-600 md:hover:underline hover:text-pink-500 xl:text-base 2xl:text-3xl xl:my-4 2xl:my-8"
                >
                  View Project
                </a>
              </motion.div>

              <motion.div
                whileInView={{ x: 0, opacity: 1 }}
                initial={{ x: 100, opacity: 0 }}
                transition={{ duration: 1 }}
                className="flex flex-col w-full md:w-1/2"
              >
                <h2 className="text-gray-300 text-xl bg-gradient-to-r from-purple-700 font-semibold via-pink-300 to-pink-300 bg-clip-text tracking-tight text-transparent mb-4 xl:text-2xl 2xl:text-5xl xl:my-5">
                  {project.title}
                </h2>
                <p className="text-gray-950 dark:text-gray-400 text-sm  text-left leading-normal   md:w-[80%]  xl:text-[1rem] xl:leading-8 2xl:text-3xl  2xl:leading-[3.5rem]">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3 my-3">
                  {project.technologies.map((tec) => (
                    <span
                      key={tec}
                      className="text-purple-700 border md:text-base border-purple-500 mt-3 rounded-xl backdrop-blur-lg bg-transparent px-1 py-[3px] text-[12px] hover:-translate-y-1/12 xl:text-base 2xl:text-xl xl:mx-2 2xl:mx-4  xl:px-2 xl:rounded-3xl"
                    >
                      {tec}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
            <hr className="text-gray-900 border-gray-700 border-[1.2px] dark:border-[1px] m-auto align-middle w-[70%] my-4" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
