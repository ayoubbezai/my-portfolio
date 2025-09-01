import { Classic } from "@theme-toggles/react";
import "@theme-toggles/react/css/Classic.css";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

type NavbarProps = {
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  isDarkMode: boolean;
};

const Navbar: React.FC<NavbarProps> = ({ setIsDarkMode, isDarkMode }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleToggle = (): void => {
    document.body.classList.toggle("dark");
    setIsDarkMode((prev) => !prev);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  // Listen for fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200/80 dark:border-gray-800/50 shadow-sm dark:shadow-gray-900/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14 md:h-16">
        {/* Logo */}
        <div className="flex-1 flex justify-start">
          <a href="#home" className="group flex items-center select-none">
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent dark:from-indigo-300 dark:via-purple-300 dark:to-pink-300 tracking-tight transition-all duration-300 group-hover:scale-105">
              <span className="text-indigo-600 dark:text-indigo-300">A</span>B
            </span>
          </a>
        </div>

        {/* Desktop Navigation links */}
        <div className="hidden md:flex flex-1 justify-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative group text-base font-medium text-gray-700 dark:text-gray-200 px-2 py-1 transition-colors duration-200 hover:text-indigo-600 dark:hover:text-indigo-300"
            >
              {link.label}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Right side controls */}
        <div className="flex-1 flex justify-end items-center gap-3">
          {/* Fullscreen Toggle */}
          <button
            onClick={toggleFullscreen}
            className="w-8 h-8 flex items-center justify-center rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400/50 dark:focus:ring-purple-700/50"
            aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
            type="button"
          >
            {isFullscreen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 9V4.5a.5.5 0 00-.5-.5H4m5 5H4.5a.5.5 0 00-.5.5V9m5 5v4.5a.5.5 0 01-.5.5H4m5-5h4.5a.5.5 0 01.5.5V15m-5-5h4.5a.5.5 0 01.5.5V15m0 0v4.5a.5.5 0 01-.5.5H15m0-5h4.5a.5.5 0 01.5.5V19a.5.5 0 01-.5.5H15m0-5v-4.5a.5.5 0 00-.5-.5H15"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5"
                />
              </svg>
            )}
          </button>

          {/* Theme toggle */}
          <button
            onClick={handleToggle}
            className="w-8 h-8 flex items-center justify-center rounded-md bg-white dark:bg-gray-800 text-indigo-600 dark:text-purple-200 shadow-sm hover:shadow-md hover:shadow-indigo-100 dark:hover:shadow-purple-900/30 hover:bg-indigo-50 dark:hover:bg-gray-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400/50 dark:focus:ring-purple-700/50"
            aria-label={
              isDarkMode ? "Switch to light mode" : "Switch to dark mode"
            }
            type="button"
          >
            <Classic
              {...({
                toggled: isDarkMode,
                onToggle: handleToggle,
                duration: 500,
                className:
                  "text-xl bg-transparent text-inherit transition-all duration-300 pointer-events-none",
                type: "button",
                "aria-label": isDarkMode
                  ? "Switch to light mode"
                  : "Switch to dark mode",
              } as unknown as React.ComponentProps<typeof Classic>)}
            />
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <div className="md:hidden flex justify-center gap-4 py-3 px-4 border-t border-gray-100/50 dark:border-gray-800/50">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="relative text-sm font-medium text-gray-600 dark:text-gray-300 px-2 py-1 transition-colors duration-200 hover:text-indigo-600 dark:hover:text-indigo-300"
          >
            {link.label}
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full transition-all duration-300 hover:w-full"></span>
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
