import {  HERO_CONTENT } from "../constants";
import image1 from "../assets/me2.jpg"
import { motion } from "motion/react"
import {Cursor} from "react-simple-typewriter"
import { Typewriter } from 'react-simple-typewriter'

const ContainerL = (delay:number ) =>({
    hidden:{x: -100 , opacity : 0},
    visible:{x: 0 , opacity : 1,transition :{duration :0.5 ,delay: delay}},
});





const Hero: React.FC = () => {
 

  return (
    <motion.div
    whileInView={{x:0 ,opacity:1}}
                 initial={{x:-100 ,opacity:0}}
                 transition ={{duration :0.5 }}
    className="  flex flex-col-reverse md:flex-row justify-evenly  m-4  md:px-8 pt-8 md:m-24 md:mt-12 space-x-2 align-center  text-center md:text-left  2xl:mt-8">
      <div className="z-50  ml-4">
        <motion.h1 
        variants={ContainerL(0)}
        initial="hidden"
        animate="visible"
        className="text-white text-5xl capitalize first-letter:text-purple-600 font-thin  mb-8 mt-4 2xl:text-8xl 2xl:mt-6 ">Ayoub Bezai</motion.h1>
        <motion.h2
        variants={ContainerL(0.5)}
        initial="hidden"
        animate="visible"
        className="mb-2 "><span className=" bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl md:text-3xl tracking-tight text-transparent 2xl:text-5xl 2xl:mt-6">I am a  
                <Typewriter 
                words={[" Front-End Developer", " Programmer", " Designer", " JavaScript Enthusiast"]}
                loop={Infinity}
                cursor  
                cursorStyle='|'
                typeSpeed={110}
                deleteSpeed={80}
                delaySpeed={900}
                /><Cursor 
           cursorColor={"#6b46aa"} 
           cursorBlinking ={true}
           />
           </span> </motion.h2>

        <motion.p
        variants={ContainerL(1)}
        initial="hidden"
        animate="visible"
        className=" text-gray-400 text-sm   text-left leading-normal w-full  md:w-[70%] md:mt-4 xl:text-[1.3rem] xl:leading-8 2xl:text-4xl 2xl:mt-8 2xl:leading-[3.5rem]">{HERO_CONTENT}</motion.p>
      </div>
      <motion.img
      
      whileInView={{x:0 ,opacity:1}}
                 initial={{x:100 ,opacity:0}}
                 transition ={{duration :1 }}
      src={image1} alt="Hero" className="  rounded-xl  w-[80%] self-center md:w-[40%] z-50  md:mr-12" />
    </motion.div>
  );
};

export default Hero;
