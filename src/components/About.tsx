import { ABOUT_TEXT } from "../constants";
import image2 from "../assets/me4.jpg";

import pdf from "../assets/ayoub_bezai.pdf";
import { motion } from "motion/react";
import { useState } from "react";
import Alert from "./small components/Alert";

const About = () => {
  const [showMessage, setShowMessage] = useState<boolean>(false);

  const handleDownload = () => {
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 2000);
  };

  return (
    <div className="mt-32">
      <motion.h1
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="dark:text-gray-300 text-purple-600 text-center text-3xl capitalize font-normal mb-3 z-50 xl:text-4xl 2xl:text-6xl"
      >
        About{" "}
        <span className="dark:text-gray-600 text-purple-950 z-50">Me</span>
      </motion.h1>

      <div className="flex flex-col-reverse gap-x-11 md:flex-row-reverse justify-between m-4 mt-2 mb-0 md:px-8 pt-8 md:mx-24 md:my-0 align-center text-center md:text-left">
        <div className="z-50 flex flex-col">
          <motion.p
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: 100, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-gray-950 dark:text-gray-400 text-sm    text-left leading-normal  ml-4  md:w-[80%] md:mt-4 xl:text-[1rem] xl:leading-8 2xl:text-3xl 2xl:mt-8 2xl:leading-[3.5rem]"
          >
            {ABOUT_TEXT}
          </motion.p>

          <a
            href={pdf}
            download="ayoub_bezai.pdf"
            className="inline-flex h-10 my-6 w-[60%] text-center self-center animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#010113,45%,#1e2631,55%,#010113)] bg-[length:200%_100%] px-8 font-medium dark:text-slate-400 transition-colors  md:w-[100%] md:py-4 lg:w-[50%] hover:bg-[linear-gradient(110deg,#000103,45%,#6B21A8,55%,#000103)] text-white xl:my-6 lg:p-6 xl:text-xl"
            onClick={handleDownload}
          >
            Download My CV
          </a>
          <Alert showMessage={showMessage} />
        </div>
        <motion.img
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          src={image2}
          alt="about"
          className="w-[60%] self-center md:w-[40%] z-50 md:mr-16 mb-8 rounded-xl"
        />
      </div>
    </div>
  );
};

export default About;
