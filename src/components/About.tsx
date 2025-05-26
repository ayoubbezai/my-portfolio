import { ABOUT_TEXT } from "../constants";
import image2 from "../assets/me4.jpg";
import pdf from "../assets/ayoub_bezai.pdf";
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

  return (
    <section
      id="about"
      className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Background decorative elements */}
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
          className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600"
        >
          About <span className="text-gray-800 dark:text-gray-300">Me</span>
        </motion.h1>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mt-4 rounded-full"
        />
      </motion.div>

      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Image section */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/3 relative"
        >
          <div className="relative group">
            <img
              src={image2}
              alt="Profile"
              className="w-full max-w-md mx-auto rounded-2xl shadow-xl border-4 border-white dark:border-gray-800 transform transition-transform duration-500 group-hover:-translate-y-2"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-indigo-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute -inset-4 border-2 border-purple-400/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          </div>
        </motion.div>

        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full lg:w-2/3"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8"
          >
            {ABOUT_TEXT}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center lg:justify-start"
          >
            <button
              onClick={handleDownload}
              className="relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium text-white transition-all duration-300 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl group hover:from-purple-700 hover:to-indigo-700 shadow-lg hover:shadow-purple-500/30"
            >
              <span className="absolute inset-0 border-0 border-white rounded-xl transition-all duration-300 group-hover:border-[6px] group-hover:border-opacity-30"></span>
              <span className="relative flex items-center gap-2">
                <FiDownload className="text-lg" />
                Download My CV
              </span>
            </button>
          </motion.div>
        </motion.div>
      </div>

      <Alert showMessage={showMessage} />
    </section>
  );
};

export default About;
