import { HERO_CONTENT } from "../constants";
import image1 from "../assets/me2.jpg";
import image2 from "../assets/me4.jpg";
import { motion } from "motion/react";
import { Typewriter } from "react-simple-typewriter";

type SecondChildProps = {
  isDarkMode: boolean;
};

const ContainerL = (delay: number) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});

const Hero: React.FC<SecondChildProps> = ({ isDarkMode }) => {
  return (
    <motion.div
      whileInView={{ x: 0, opacity: 1 }}
      initial={{ x: -100, opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="  flex flex-col-reverse md:flex-row justify-evenly  m-4  md:px-8 pt-8 md:m-24 md:mt-12 space-x-2 align-center  text-center md:text-left  2xl:mt-8 "
    >
      <div className="z-40  ml-4">
        <motion.h1
          variants={ContainerL(0)}
          initial="hidden"
          animate="visible"
          className="text-black dark:text-white text-5xl capitalize e-600 font-thin  mb-8 mt-4 2xl:text-8xl 2xl:mt-6   "
        >
          <span className="text-purple-600  ">A</span>
          <Typewriter
            words={["youb Bezai"]}
            loop={1}
            cursor={false}
            cursorColor="#6b46bb"
            typeSpeed={200}
            deleteSpeed={100}
            delaySpeed={2000}
          />
        </motion.h1>
        <motion.h2
          variants={ContainerL(0.5)}
          initial="hidden"
          animate="visible"
          className="mb-2 "
        >
          <span className=" bg-gradient-to-r from-pink-500 dark:from-pink-300 via-purple-400 dark:via-slate-500 to-purple-800 dark:to-purple-500 bg-clip-text text-2xl md:text-3xl tracking-tight text-transparent 2xl:text-5xl 2xl:mt-6">
            I am a
            <Typewriter
              words={[
                " Front-End Developer",
                " Programmer",
                " Designer",
                " JavaScript Enthusiast",
              ]}
              loop={Infinity}
              cursor={true}
              cursorStyle="|"
              cursorColor="#6b46bb"
              typeSpeed={110}
              deleteSpeed={80}
              delaySpeed={900}
            />
          </span>{" "}
        </motion.h2>

        <motion.p
          variants={ContainerL(1)}
          initial="hidden"
          animate="visible"
          className=" text-gray-950 dark:text-gray-400 text-sm    text-left leading-normal  ml-4  md:w-[80%] md:mt-4 xl:text-[1rem] xl:leading-8 2xl:text-3xl 2xl:mt-8 2xl:leading-[3.5rem]"
        >
          {HERO_CONTENT}
        </motion.p>
      </div>
      <motion.img
        whileInView={{ x: 0, opacity: 1 }}
        initial={{ x: 100, opacity: 0 }}
        transition={{ duration: 1 }}
        src={isDarkMode ? image1 : image2}
        alt="Hero"
        className="  rounded-xl mt-3 w-[60%]  self-center md:w-[40%] z-40   h-[28rem] md:mr-12"
      />
    </motion.div>
  );
};

export default Hero;
