import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaInstagramSquare} from "react-icons/fa"
import {FaFacebookSquare} from "react-icons/fa"

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between text-center align-center  my-6">
      <h1 className=" font-bold  text-xl text-neutral-200 first-letter:text-purple-500 md:text-2xl mx-8 bg-transparent self-center  lg:mx-16  xl:text-5xl xl:mx-24 ">
        AB</h1>
      <div className="self-center justify-between text-center align-center  text-xl text-neutral-200 md:text-xl flex space-x-2 lg:space-x-4 mx-8  lg:mx-16 xl:text-4xl xl:mx-24">
        <FaLinkedin className=" hover:scale-105 lg:hover:-translate-y-1 cursor-pointer"/>
        <FaGithub className=" hover:scale-105 lg:hover:-translate-y-1 cursor-pointer" />
        <FaInstagramSquare  className=" hover:scale-105 lg:hover:-translate-y-1 cursor-pointer" />
        <FaFacebookSquare className=" hover:scale-105 lg:hover:-translate-y-1 cursor-pointer" />
      </div>
    </nav>
  )
}

export default Navbar
