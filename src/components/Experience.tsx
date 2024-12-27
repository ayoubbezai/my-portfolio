import {  EXPERIENCES } from "../constants";
import { motion } from "motion/react"

const Experience = () => {
  return (
    <div className="z-50">
              <hr className="text-gray-900  h-[0.1px]  m-auto align-middle w-[70%]"/>
        <motion.h1 
        whileInView={{y:0 ,opacity:1}}
        initial={{y:-100 ,opacity:0}}
        transition ={{duration :0.5 }}
        className="z-50 text-purple-950 dark:text-gray-300  text-center text-3xl capitalize font-normal mt-8  xl:text-4xl 2xl:text-6xl xl:my-10 2xl:my-18 ">
        Experience
      </motion.h1>
      <div className="mt-8 mx-20  z-50">
        {EXPERIENCES.map((exp)=>(
            <div

            key={exp.role} className="flex flex-col" >

            <div className=" z-50 flex flex-col md:flex-row  justify-center md:justify-evenly align-middle  my-4 xl:my-7 2xl:my-9xl ">
                <motion.p 
                 whileInView={{x:0 ,opacity:1}}
                 initial={{x:-100 ,opacity:0}}
                 transition ={{duration :0.7 }}
                className="dark:text-gray-500 text-gray-700 w-full text-center mb-4  md:text-left  md:w-1/4 xl:text-2xl 2xl:text-4xl xl:my-4 2xl:my-8">{exp.year}</motion.p>

                <motion.div
                whileInView={{x:0 ,opacity:1}}
                initial={{x:100 ,opacity:0}}
                transition ={{duration :0.7 }}
                className="flex flex-col w-full  md:w-1/2">
                    <h2 className="text-gray-300 bg-gradient-to-r from-purple-700 font-semibold via-pink-300 to-pink-300 bg-clip-text  tracking-tight text-transparent  mb-4 xl:text-3xl  2xl:text-5xl xl:my-4">{exp.role}</h2>
                    <p className="text-gray-950 dark:text-gray-300 text-sm w-[
                    50%] xl:text-xl 2xl:text-3xl  2xl:leading-[2.1] xl:leading-relaxed  xl:my-4 2xl:my-8">{exp.description}</p>
                    <div className="flex flex-wrap gap-3 my-3">
                        {exp.technologies.map((tec)=>(
                            <span key={tec} className="text-purple-700 border  border-purple-500 mt-3 rounded-xl  backdrop-blur-lg  bg-transparent   px-2 py-1 text-[12px]  hover:-translate-y-1/12 xl:text-xl 2xl:text-2xl xl:mx-2 2xl:mx-4 xl:py-2 xl:px-3 xl:rounded-3xl">{tec}</span>
                        ))}
                    </div>

                </motion.div>

            </div>
            <hr className="text-gray-900  border-gray-700  m-auto align-middle w-[70%] my-4 border-[1.2px] dark:border-[1px]"/>

            </div>

        ))}

      </div>
      
    </div>
  )
}

export default Experience
