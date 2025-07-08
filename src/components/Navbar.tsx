import { Classic } from "@theme-toggles/react";
import "@theme-toggles/react/css/Classic.css";

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
  const handleToggle = (): void => {
    document.body.classList.toggle("dark");
    setIsDarkMode((prev) => !prev);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border-b border-indigo-100 dark:border-indigo-900/40 shadow-lg dark:shadow-gray-900/20 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex-1 flex justify-center">
          <a href="#home" className="group flex items-center select-none">
            <span className="text-3xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent dark:from-indigo-300 dark:via-purple-300 dark:to-pink-300 tracking-tight drop-shadow-lg transition-all duration-300 group-hover:scale-105">
              <span className="text-indigo-600 dark:text-indigo-300">A</span>B
            </span>
          </a>
        </div>
        {/* Navigation links */}
        <div className="hidden md:flex flex-1 justify-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative text-lg font-semibold text-gray-700 dark:text-gray-200 px-2 py-1 transition-colors duration-200 hover:text-indigo-600 dark:hover:text-indigo-300"
            >
              {link.label}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full transition-all duration-300 group-hover:w-full hover:w-full"></span>
            </a>
          ))}
        </div>
        {/* Theme toggle */}
        <div className="flex-1 flex justify-end">
          <button
            onClick={handleToggle}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 text-indigo-600 dark:text-purple-200 shadow hover:shadow-indigo-200 dark:hover:shadow-purple-900 hover:bg-indigo-50 dark:hover:bg-gray-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:focus:ring-purple-700"
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
                  "text-2xl md:text-3xl bg-transparent text-inherit transition-all duration-300 pointer-events-none",
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
      <div className="md:hidden flex justify-center gap-6 py-2">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="relative text-base font-semibold text-gray-700 dark:text-gray-200 px-2 py-1 transition-colors duration-200 hover:text-indigo-600 dark:hover:text-indigo-300"
          >
            {link.label}
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full transition-all duration-300 group-hover:w-full hover:w-full"></span>
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
