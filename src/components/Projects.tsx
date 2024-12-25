import {  PROJECTS } from "../constants";
import { motion } from "motion/react"


const Experience = () => {
  return (
    <div className="z-50 mt-8">
        <motion.h1 
        whileInView={{y:0 ,opacity:1}}
        initial={{y:-100 ,opacity:0}}
        transition ={{duration :0.5 }}
        className="z-50 text-gray-300  text-center text-3xl capitalize font-normal mt-8  xl:text-4xl 2xl:text-6xl xl:my-10 2xl:my-18 ">
        Programming Projects
      </motion.h1>
      <div className="mt-8 mx-20  z-50">
        {PROJECTS.map((project,index)=>(
            <div key={index} className="flex flex-col" >

            <motion.div
            
            className=" z-50 flex flex-col-reverse md:flex-row  justify-center md:justify-evenly align-middle  my-4 xl:my-7 2xl:my-9xl ">
                <motion.div
                whileInView={{x:0 ,opacity:1}}
                initial={{x:-100 ,opacity:0}}
                transition ={{duration :1 }}
                className="flex flex-col text-center md:w-1/4">
                <img src={project.image} alt="" className="text-gray-500 w-full text-center mb-4  md:text-left   "/>
                <a
                  href={project.link}
                  
                  className="my-2 mb-5 text-sm  font-medium text-pink-600 md:hover:underline hover:text-pink-500 xl:text-2xl 2xl:text-4xl xl:my-4 2xl:my-8"
                >
                  View Project
                </a>
                </motion.div>

                <motion.div 
                whileInView={{x:0 ,opacity:1}}
                initial={{x:100 ,opacity:0}}
                transition ={{duration :1}}
                className="flex flex-col w-full  md:w-1/2">
                    <h2 className="text-gray-300 text-2xl bg-gradient-to-r from-purple-700 font-semibold via-pink-300 to-pink-300 bg-clip-text  tracking-tight text-transparent  mb-4 xl:text-3xl  2xl:text-5xl xl:my-5 ">{project.title}</h2>
                    <p className="text-gray-300 text-sm w-[
                    50%] xl:text-xl 2xl:text-3xl  2xl:leading-[2.1] xl:leading-relaxed  xl:my-4 2xl:my-8 ">{project.description}</p>
                    <div className="flex flex-wrap gap-3 my-3">
                        {project.technologies.map((tec)=>(
                            <span key={tec} className="text-purple-700 border  border-purple-500 mt-3 rounded-xl  backdrop-blur-lg  bg-transparent  px-2 py-1 text-[12px]  hover:-translate-y-1/12 xl:text-xl 2xl:text-2xl xl:mx-2 2xl:mx-4 xl:py-2 xl:px-3 xl:rounded-3xl">{tec}</span>
                        ))}
                    </div>
                    

                </motion.div>

            </motion.div>
            <hr className="text-gray-900  border-gray-700  m-auto align-middle w-[70%] my-4"/>

            </div>

        ))}

      </div>
      
    </div>
  )
}

export default Experience
