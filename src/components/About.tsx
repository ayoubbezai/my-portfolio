import { ABOUT_TEXT } from "../constants";
import image2 from "../assets/about.jpg";
import pdf from "../assets/ayoub_bezai.pdf";
import { motion } from "motion/react";
import { useState } from "react";
import Alert from "./small components/Alert"

const About = () => {

  const [showMessage, setShowMessage] = useState<boolean>(false);

  const handleDownload = () => {
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 2000); 
  };


  
  return (
    <div className="mt-32">
      <h1 className="text-gray-300 text-center text-3xl capitalize font-normal mb-3 z-50 xl:text-4xl 2xl:text-6xl">
        About <span className="text-gray-600 z-50">Me</span>
      </h1>

      <div className="flex flex-col-reverse gap-x-11 md:flex-row-reverse justify-between m-4 mt-2 mb-0 md:px-8 pt-8 md:mx-24 md:my-0 align-center text-center md:text-left">
        <div className="z-50 flex flex-col">
          <motion.p
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: 100, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="z-50 text-gray-400 text-sm text-left ml-3 leading-relaxed w-[90%] md:w-[100%] md:mt-4 xl:text-[1.3rem] 2xl:text-4xl 2xl:mt-12 2xl:leading-[3.5rem]"
          >
            {ABOUT_TEXT}
          </motion.p>

          <a
            href={pdf}
            download="ayoub_bezai.pdf"
            className="inline-flex h-10 my-6 w-[60%] text-center self-center animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#010113,45%,#1e2631,55%,#010113)] bg-[length:200%_100%] px-8 font-medium text-slate-400 transition-colors  md:w-[100%] md:py-4 lg:w-[50%] hover:bg-[linear-gradient(110deg,#000103,45%,#6B21A8,55%,#000103)] xl:my-6 lg:p-6 xl:text-xl"
            onClick={handleDownload}
          >
            Download My CV
          </a>
          <Alert showMessage = {showMessage}/>


        </div>
        <motion.img
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          src={image2}
          alt="about"
          className="w-[80%] self-center md:w-[40%] z-50 md:mr-16 mb-8 rounded-xl"
        />
      </div>
    </div>
  );
};

export default About;
