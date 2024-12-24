import { CONTACT } from "../constants";
import { motion } from "motion/react"

const Contact = () => {
  return (
    <div className="flex  flex-col justify-center  align-middle text-center">
       <motion.h1
       whileInView={{y:0 ,opacity:1}}
       initial={{y:-100 ,opacity:0}}
       transition ={{duration :0.5 }}
       
       className="text-gray-300  text-center text-4xl capitalize font-normal mt-14 mb-4 z-50 xl:text-5xl 2xl:text-8xl xl:my-3 2xl:my-6   ">
        Get iN Touch
      </motion.h1>

      <motion.p
      whileInView={{x:0 ,opacity:1}}
      initial={{x:-100 ,opacity:0}}
      transition ={{duration :0.7 }}
      className=" text-base m-3 text-gray-400 z-50 xl:text-xl 2xl:text-3xl xl:my-3 2xl:my-4">{CONTACT.address}</motion.p>
      <motion.p 
      whileInView={{x:0 ,opacity:1}}
      initial={{x:100 ,opacity:0}}
      transition ={{duration :0.7 }}
      className=" text-sm mb-3 text-gray-400 z-50 xl:text-xl 2xl:text-3xl xl:my-3 2xl:my-4">{CONTACT.phoneNo}</motion.p>
      <p className=" text-sm mb-8  underline  text-gray-400 z-50 xl:text-xl 2xl:text-3xl xl:my-4">{CONTACT.email}</p>
    </div>
  )
}

export default Contact
