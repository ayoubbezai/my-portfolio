import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaInstagramSquare} from "react-icons/fa"
import {FaFacebookSquare} from "react-icons/fa"

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between text-center align-center  pt-6 relative">
      <h1 className=" font-bold  text-xl text-neutral-200 first-letter:text-purple-500 md:text-2xl mx-8 bg-transparent self-center  lg:mx-16  xl:text-3xl xl:mx-24 ">
        AB</h1>
       <div className="self-center justify-between text-center align-center text-xl text-neutral-200 md:text-xl flex space-x-2 lg:space-x-4 mx-8 lg:mx-16 xl:text-3xl xl:mx-24">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/your-linkedin-profile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="hover:scale-105 lg:hover:-translate-y-1 cursor-pointer" />
        </a>
        {/* GitHub */}
        <a
          href="https://github.com/ayoubbezai"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub className="hover:scale-105 lg:hover:-translate-y-1 cursor-pointer" />
        </a>
        {/* Instagram */}
        <a
          href="https://www.instagram.com/your-instagram-profile"
          aria-label="Instagram"
        >
          <FaInstagramSquare className="hover:scale-105 lg:hover:-translate-y-1 cursor-pointer" />
        </a>
        {/* Facebook */}
        <a
          href="https://web.facebook.com/profile.php?id=61553499324461&locale=fr_FR"
          aria-label="Facebook"
        >
          <FaFacebookSquare className="hover:scale-105 lg:hover:-translate-y-1 cursor-pointer" />
        </a>
      </div>
    </nav>
  )
}

export default Navbar
