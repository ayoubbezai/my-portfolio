import { ABOUT_TEXT } from "../constants";
import image2 from "../assets/me4.jpg";
import { motion } from "framer-motion";
import { useState } from "react";
import Alert from "./small components/Alert";
import { FiDownload } from "react-icons/fi";

const About = () => {
  const [showMessage, setShowMessage] = useState<boolean>(false);

  const handleDownload = () => {
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 2000);
  };

  // Text animation variants
  const textVariants = (delay: number) => ({
    hidden: { y: 15, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, delay, ease: [0.16, 0.77, 0.47, 0.97] },
    },
  });

  return (
    <section
      id="about"
      className="relative  px-4  pr-6  max-w-7xl mx-auto overflow-hidden"
    >
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
          About{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">
            Me
          </span>
        </h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "80px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full"
        />
      </motion.div>

      <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-12">
        {/* Image section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={textVariants(0.3)}
          viewport={{ once: true, margin: "-100px" }}
          className="w-full lg:w-2/5 relative"
        >
          <div className="relative group">
            <motion.img
              src={image2}
              alt="Profile"
              className="w-full max-w-sm mx-auto rounded-xl shadow-lg border-4 border-white dark:border-gray-800/80"
              whileHover={{
                scale: 1.02,
                rotate: 1,
              }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            />
            <div className="absolute -inset-3 bg-gradient-to-br from-purple-400/20 to-indigo-400/20 dark:from-purple-600/20 dark:to-indigo-600/20 blur-xl rounded-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            <div className="absolute top-2 left-2 w-full h-full rounded-xl border border-purple-300/30 dark:border-purple-500/20 -z-20 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-500"></div>
          </div>
        </motion.div>

        {/* Text content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="w-full lg:w-3/5 space-y-6"
        >
          <motion.p
            variants={textVariants(0.4)}
            className="text-gray-600 dark:text-gray-300/90 text-base md:text-lg leading-relaxed"
          >
            {ABOUT_TEXT}
          </motion.p>

          <motion.div
            variants={textVariants(0.5)}
            className="flex justify-center lg:justify-start pt-2"
          >
            <motion.button
              onClick={handleDownload}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 8px 25px -10px rgba(139, 92, 246, 0.4)",
              }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium shadow-lg hover:shadow-purple-500/30 transition-all duration-300 flex items-center gap-2 group"
            >
              <FiDownload className="text-lg transition-transform group-hover:-translate-y-0.5" />
              <span>Download My CV</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      <Alert showMessage={showMessage} />
    </section>
  );
};

export default About;
