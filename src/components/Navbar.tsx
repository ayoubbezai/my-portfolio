import {
  FaLinkedin,
  FaGithub,
  FaInstagramSquare,
  FaFacebookSquare,
} from "react-icons/fa";
import { Classic } from "@theme-toggles/react";
import "@theme-toggles/react/css/Classic.css";

type NavbarProps = {
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  isDarkMode: boolean;
};

const Navbar: React.FC<NavbarProps> = ({ setIsDarkMode, isDarkMode }) => {
  const handleToggle = (): void => {
    document.body.classList.toggle("dark");
    setIsDarkMode((prev) => !prev);
  };

  const socialLinks = [
    {
      icon: <FaLinkedin className="group-hover:text-[#0077B5]" />,
      href: "https://linkedin.com",
      label: "LinkedIn",
      color: "#0077B5",
    },
    {
      icon: <FaGithub className="group-hover:text-[#333]" />,
      href: "https://github.com/ayoubbezai",
      label: "GitHub",
      color: "#333",
    },
    {
      icon: <FaInstagramSquare className="group-hover:text-[#E1306C]" />,
      href: "https://instagram.com",
      label: "Instagram",
      color: "#E1306C",
    },
    {
      icon: <FaFacebookSquare className="group-hover:text-[#1877F2]" />,
      href: "https://facebook.com",
      label: "Facebook",
      color: "#1877F2",
    },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full py-2 backdrop-blur-lg  border-b border-gray-200/50 dark:border-gray-700/30 transition-all duration-300 ease-in-out shadow-sm dark:shadow-gray-800/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo with animated underline */}
        <div className="group relative">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent dark:from-purple-400 dark:to-purple-200 sm:text-3xl lg:text-4xl transition-all duration-300">
            <span className="text-purple-600">A</span>B
          </h1>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-300 ease-out"></span>
        </div>

        {/* Right side controls */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          {/* Theme toggle with smooth animation */}
          <button
            onClick={handleToggle}
            className="relative p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-purple-300 dark:hover:bg-gray-700 transition-all duration-300 ease-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
            aria-label={
              isDarkMode ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            <Classic
              {...({
                toggled: isDarkMode,
                onToggle: handleToggle,
                duration: 500,
                className:
                  "text-xl sm:text-2xl bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-purple-300 dark:hover:bg-gray-700 transition-all duration-300 ease-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 rounded-full p-2",
                type: "button",
                "aria-label": isDarkMode
                  ? "Switch to light mode"
                  : "Switch to dark mode",
              } as unknown as React.ComponentProps<typeof Classic>)}
            />
            <span className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-purple-400 pointer-events-none transition-all duration-300"></span>
          </button>

          {/* Social links with brand colors on hover */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className={`group p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-opacity-80 transition-all duration-300 ease-out hover:scale-110`}
                style={{ "--hover-color": link.color } as React.CSSProperties}
              >
                <span className="text-xl sm:text-2xl transition-colors duration-300">
                  {link.icon}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
