import { motion } from "motion/react"
import {  CERTIFICATIONS } from "../constants";
const Certifications = () => {
  return (
    <div>
    <motion.h1 
        whileInView={{y:0 ,opacity:1}}
        initial={{y:-100 ,opacity:0}}
        transition ={{duration :0.5 }}
        className="z-50 text-purple-950 dark:text-gray-300  text-center text-3xl capitalize font-normal mt-8  xl:text-4xl 2xl:text-6xl xl:my-10 2xl:my-18 ">
        Certifications
      </motion.h1>

      <div className="flex flex-col align-middle  text-center md:flex-row justify-evenly flex-wrap my-8">
        {CERTIFICATIONS.map((cert)=>(
            <motion.div
            whileInView={{x:0 ,opacity:1}}
            initial={{x:-100 ,opacity:0}}
            transition ={{duration :0.5 }}
            key={cert.title} 
            className="w-[80%] md:w-[40%] relative self-center z-50"
            >
                <img src={cert.img} alt="" 
                className=" border-[4px] box-border my-4 border-purple-600 :active:scale-105 md:active:scale-125 active:border-[6px] active:border-purple-400 hover:scale-105 z-50"
                />
              
            </motion.div>
        )

        )}

      </div>
    </div>
  )
}

export default Certifications
