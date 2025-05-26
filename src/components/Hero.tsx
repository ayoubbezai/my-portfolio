import { HERO_CONTENT } from "../constants";
import image1 from "../assets/photo_2025-05-26_07-36-10.jpg";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const Hero = ({isDarkMode :boolan}) => {
  // Smooth text animations
  const textVariants = (delay: number) => ({
    hidden: { y: 15, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, delay, ease: [0.16, 0.77, 0.47, 0.97] },
    },
  });

  // Image floating effect
  const imageVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.8, ease: "backOut" },
    },
  };

  return (
    <section className="relative overflow-hidden transition-colors duration-500">
      {/* Subtle animated gradient background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            x: [0, -20, 0],
            y: [0, 10, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-purple-300/5 dark:bg-purple-600/5 blur-[100px]"
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
          className="absolute bottom-1/4 right-1/3 w-72 h-72 rounded-full bg-pink-300/5 dark:bg-pink-600/5 blur-[100px]"
        />
      </div>

      <div className="container mx-auto px-10 py-16 md:py-18 ">
        <div className="flex flex-col-reverse  md:flex-row items-center gap-16 ">
          {/* Text Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            className="md:w-7/12 lg:w-1/2 space-y-6"
          >
            <motion.div variants={textVariants(0.1)}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl text-gray-300 font-medium tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r pr-1  from-purple-500 to-pink-500">
                  A
                </span>
                <Typewriter
                  words={["youb Bezai"]}
                  loop={1}
                  cursor={false}
                  typeSpeed={100}
                  deleteSpeed={60}
                  delaySpeed={1200}
                />
              </h1>
            </motion.div>

            <motion.div variants={textVariants(0.3)}>
              <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-400">
                <span className="mr-2">I craft</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 dark:from-pink-400 dark:to-purple-500">
                  <Typewriter
                    words={[
                      "digital experiences",
                      "web applications",
                      "creative solutions",
                      "scalable systems",
                    ]}
                    loop={Infinity}
                    cursor
                    cursorStyle="|"
                    typeSpeed={60}
                    deleteSpeed={40}
                    delaySpeed={2000}
                  />
                </span>
              </h2>
            </motion.div>

            <motion.div variants={textVariants(0.5)}>
              <p className="text-gray-600 dark:text-gray-300/90 text-sm sm:text-base leading-relaxed max-w-2xl">
                {HERO_CONTENT}
              </p>
            </motion.div>

            <motion.div
              variants={textVariants(0.7)}
              className="flex gap-4 pt-2"
            >
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 text-white text-sm font-medium shadow-lg hover:shadow-purple-500/20 dark:hover:shadow-pink-500/20 transition-all duration-300"
              >
                Get in Touch
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 text-sm font-medium hover:bg-gray-50/70 dark:hover:bg-gray-800/50 transition-all duration-300"
              >
                View Projects
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={imageVariants}
            className="md:w-5/12 lg:w-1/2 flex justify-center"
          >
            <div className="relative group">
              <motion.img
                src={image1}
                alt="Ayoub Bezai"
                className="w-[90%] max-w-xs sm:max-w-sm rounded-2xl object-cover aspect-square shadow-xl dark:shadow-gray-800/50 border-4 border-white dark:border-gray-800/80 group-hover:border-purple-200/30 dark:group-hover:border-purple-500/30 transition-all duration-500"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              />
              <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-purple-100/30 to-pink-100/30 dark:from-purple-900/20 dark:to-pink-900/20 opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-4 left-4 w-full h-full rounded-2xl border-2 border-purple-300/30 dark:border-purple-500/20 -z-20 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-500" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
