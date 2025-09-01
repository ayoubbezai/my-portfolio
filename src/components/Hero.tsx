import { HERO_CONTENT } from "../constants";
import image1 from "../assets/photo_2025-05-26_07-36-10.jpg";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  // Text animations
  const textVariants = (delay: number) => ({
    hidden: { y: 15, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, delay, ease: [0.16, 0.77, 0.47, 0.97] },
    },
  });

  // Image animation
  const imageVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.8, ease: "backOut" },
    },
  };



  return (
    <section className="relative overflow-hidden transition-colors duration-500 py-12 md:py-16">
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

 

      <div className="container mx-auto px-6 md:px-10">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-14">
          {/* Text Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            className="md:w-7/12 lg:w-1/2 space-y-5"
          >
            <motion.div
              variants={textVariants(0.1)}
              className="flex items-center"
            >
              <div className="w-4 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 mr-2"></div>
              <span className="text-xs font-medium text-purple-500 dark:text-purple-400 tracking-wide">
                FULL-STACK DEVELOPER
              </span>
            </motion.div>

            <motion.div variants={textVariants(0.2)}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl text-gray-800 dark:text-gray-200 font-bold tracking-tight">
                Hi, I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
                  <Typewriter
                    words={["Ayoub Bezai"]}
                    loop={1}
                    cursor={false}
                    typeSpeed={100}
                    deleteSpeed={60}
                    delaySpeed={1200}
                  />
                </span>
              </h1>
            </motion.div>

            <motion.div variants={textVariants(0.3)}>
              <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-400">
                <span className="mr-2">I craft</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 dark:from-pink-400 dark:to-purple-500 font-semibold">
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
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={2000}
                  />
                </span>
              </h2>
            </motion.div>

            <motion.div variants={textVariants(0.4)}>
              <p className="text-gray-600 dark:text-gray-300/90 text-sm sm:text-base leading-relaxed max-w-2xl">
                {HERO_CONTENT}
              </p>
            </motion.div>

            <motion.div
              variants={textVariants(0.5)}
              className="flex flex-wrap gap-3 pt-2"
            >
              <motion.button
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 8px 20px -10px rgba(192, 38, 211, 0.3)",
                }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 text-white text-sm font-medium shadow-lg hover:shadow-purple-500/20 dark:hover:shadow-pink-500/20 transition-all duration-300 flex items-center gap-1.5"
              >
                <span>Get in Touch</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
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
              </motion.button>
              <motion.button
                whileHover={{
                  scale: 1.03,
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 text-sm font-medium hover:bg-gray-100/70 dark:hover:bg-gray-800/50 transition-all duration-300 flex items-center gap-1.5"
              >
                <span>View Projects</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </motion.button>
            </motion.div>

            {/* Social links */}
            {/* <motion.div
              variants={textVariants(0.6)}
              className="flex gap-4 pt-5"
            >
              {[
                {
                  name: "GitHub",
                  icon: "github",
                  color: "hover:text-gray-800 dark:hover:text-white",
                },
                {
                  name: "LinkedIn",
                  icon: "linkedin",
                  color: "hover:text-blue-600",
                },
                {
                  name: "Twitter",
                  icon: "twitter",
                  color: "hover:text-blue-400",
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ y: -2 }}
                  className={`text-gray-500 dark:text-gray-400 ${social.color} transition-colors duration-300`}
                  aria-label={social.name}
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </motion.a>
              ))}
              </motion.div> */}
          </motion.div>

          {/* Image */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={imageVariants}
            className="md:w-5/12 lg:w-[30%] mx-auto  mb-12 flex justify-center"
          >
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-br from-purple-400/20 to-pink-400/20 dark:from-purple-600/30 dark:to-pink-600/30 blur-lg rounded-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>

              <motion.div
                whileHover={{
                  scale: 1.02,
                }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="relative overflow-hidden rounded-xl border-3 border-white/80 dark:border-gray-800/80 group-hover:border-purple-300/50 dark:group-hover:border-purple-500/30 transition-all duration-500"
              >
                <motion.img
                  src={image1}
                  alt="Ayoub Bezai"
                  className="w-full max-w-xs sm:max-w-sm object-cover aspect-square"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>

              {/* Decorative corner accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
