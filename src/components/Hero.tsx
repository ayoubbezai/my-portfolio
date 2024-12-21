import {  HERO_CONTENT } from "../constants";
import image1 from "../assets/kevinRushProfile.png"
const Hero: React.FC = () => {
  return (
    <div className="  flex flex-col-reverse md:flex-row justify-evenly m-12  md:px-8 pt-8 md:m-24 md:mt-12 space-x-2 align-center  text-center md:text-left  ">
      <div className="z-50  ml-4">
        <h1 className="text-white text-5xl capitalize first-letter:text-purple-600 font-thin  mb-8 mt-4">Ayoub Bezai</h1>
        <h2 className="mb-2 "><span className=" bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl md:text-3xl tracking-tight text-transparent">Front-end Developer </span></h2>
        <p className=" text-gray-400 sm:text:sm md:text-md  text-left leading-normal w-full  md:w-[70%] md:mt-4 lg:text:xl ">{HERO_CONTENT}</p>
      </div>
      <img src={image1} alt="Hero" className="  w-[60%] self-center md:w-[40%] z-50  md:mr-12" />
    </div>
  );
};

export default Hero;
