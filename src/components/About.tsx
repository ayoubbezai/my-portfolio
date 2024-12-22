import {  ABOUT_TEXT } from "../constants";
import image2 from "../assets/about.jpg"
import { motion } from "motion/react"


const About = () => {
  return (
    <div className="mt-32 ">
       <h1 className="text-gray-300 text-center text-3xl capitalize font-normal  mb-3  z-50">About <span className="text-gray-600 ">Me</span></h1>

      <div
       
      className="flex flex-col-reverse  gap-x-11 md:flex-row-reverse  justify-between  m-4 mt-2 mb-0  md:px-8 pt-8 md:mx-24 md:my-0  align-center  text-center md:text-left ">
        <motion.p 
        whileInView={{x:0 ,opacity:1}}
        initial={{x:100 ,opacity:0}}
        transition ={{duration :0.5 }}
        className=" z-50 text-gray-400 text-sm text-left ml-3
           leading-relaxed w-[90%]  md:w-[70%] md:mt-4 2xl:text-xl">{ABOUT_TEXT}</motion.p>
        <motion.img 
        whileInView={{x:0 ,opacity:1}}
        initial={{x:-100 ,opacity:0}}
        transition ={{duration :0.5 }}
        src={image2} alt="about" className="  w-[80%] self-center md:w-[40%] z-50    md:mr-16 mb-8 rounded-xl"  />
      </div>
    </div>
  )
}

export default About
