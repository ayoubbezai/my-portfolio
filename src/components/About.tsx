import {  ABOUT_TEXT } from "../constants";
import image2 from "../assets/about.jpg"

const About = () => {
  return (
    <div className="mt-32 ">
       <h1 className="text-gray-300 text-center text-3xl capitalize font-normal  mb-3  z-50">Ayoub <span className="text-gray-600 ">Me</span></h1>

      <div className="flex flex-col-reverse md:space-x-24 md:flex-row  justify-between  m-4 mt-2 mb-0  md:px-8 pt-8 md:mx-24 md:my-0  align-center  text-center md:text-left ">
        <p className=" z-50 text-gray-400 text-sm text-left ml-3
         md:text-md  leading-normal w-[90%]  md:w-[70%] md:mt-4 lg:text-xl">{ABOUT_TEXT}</p>
        <img src={image2} alt="about" className="  w-[80%] self-center md:w-[40%] z-50 mr   md:mr-12 mb-8 rounded-xl"  />
      </div>
    </div>
  )
}

export default About
