import { FaLinkedin, FaGithub, FaInstagramSquare, FaFacebookSquare } from "react-icons/fa";
import "@theme-toggles/react/css/Classic.css";
import { Classic } from "@theme-toggles/react";

type NavbarProps = {
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

const Navbar: React.FC<NavbarProps> = ({ setIsDarkMode }) => {

  const handletoggle =()=>{
    document.body.classList.toggle("dark")
    setIsDarkMode(prev => !prev)
  }
  
  return (
    <nav className="flex flex-row z-50 justify-between text-center align-center pt-6 relative">
      <h1 className="font-bold text-xl text-purple-950 dark:text-gray-400 md:text-2xl mx-8 bg-transparent self-center lg:mx-16 xl:text-3xl xl:mx-24 2xl:text-5xl">
        <span className="text-purple-600">A</span>B
      </h1>
      <div className="self-center justify-between text-center align-center text-xl dark:text-gray-400 text-purple-950 md:text-xl flex space-x-2 lg:space-x-4 xl:space-x-6 mx-8 lg:mx-16 xl:text-2xl xl:mx-24 2xl:text-2xl">
        {/* Theme Toggle */}
        <span className="dark:text-white text-blue-950">
          <Classic
            
            onToggle={() =>handletoggle() }
          />
        </span>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/your-linkedin-profile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="hover:scale-105 hover:text-white lg:hover:-translate-y-1 cursor-pointer xl:text-3xl 2xl:text-5xl" />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/ayoubbezai"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub className="hover:scale-105 hover:text-white lg:hover:-translate-y-1 cursor-pointer xl:text-3xl 2xl:text-5xl" />
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/your-instagram-profile"
          aria-label="Instagram"
        >
          <FaInstagramSquare className="hover:scale-105 hover:text-white lg:hover:-translate-y-1 cursor-pointer xl:text-3xl 2xl:text-5xl" />
        </a>

        {/* Facebook */}
        <a
          href="https://web.facebook.com/profile.php?id=61553499324461&locale=fr_FR"
          aria-label="Facebook"
        >
          <FaFacebookSquare className="hover:scale-105 hover:text-white lg:hover:-translate-y-1 cursor-pointer xl:text-3xl 2xl:text-5xl" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
