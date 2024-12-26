import { motion } from "motion/react"
import {  EVENTS } from "../constants";
import Marquee from "react-fast-marquee";


type SecondChildProps = {
  isDarkMode: boolean;
};

const Events: React.FC<SecondChildProps> = ({ isDarkMode }) => {
 
  
  return (
    <div>
      <motion.h1 
        whileInView={{y:0 ,opacity:1}}
        initial={{y:-100 ,opacity:0}}
        transition ={{duration :0.5 }}
        className="z-50 text-purple-950 dark:text-gray-300  text-center text-3xl capitalize font-normal mt-8  xl:text-4xl 2xl:text-6xl xl:my-10 2xl:my-18 ">
        Events
      </motion.h1>

      <div className="my-12 flex z-50">
      <Marquee
                direction="right"
                speed={100}
                pauseOnClick={true}
                gradient={true}
                gradientColor={isDarkMode ? "rgba(0, 0, 27, 0.7)" : "rgba(255, 255, 255, 0.7)"}
                gradientWidth={"20%"}
                // autoFill={false}
            >

        {EVENTS.map(ev =>(
            <div key={ev.image} className="w-[26rem] 2xl:[35rem]">
            <img src={ev.image} alt="" className="w-[80%] m-4" />
            </div>
        )
        )}
        </Marquee>

      </div>
    </div>
  )
}

export default Events
