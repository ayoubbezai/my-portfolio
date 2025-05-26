import Navbar from "./components/Navbar";
import Hero from "./components/Hero.tsx";
import About from "./components/About.tsx";
import Technologies from "./components/Technologies.tsx";
import Experience from "./components/Achivements.tsx";
import Projects from "./components/Projects.tsx";
import Contact from "./components/Contact.tsx";
import Events from "./components/Events.tsx";
import { useEffect, useState } from "react";
// import Certifications from "./components/Certifications.tsx";
import { PROJECTS } from "./constants";
// import { DESIGN } from "./constants";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const storedMode = localStorage.getItem("isDarkMode");
    return storedMode === "true" || storedMode === null; // Default to true
  });

  useEffect(() => {
    localStorage.setItem("isDarkMode", isDarkMode.toString());
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className=" relative  overflow-x-hidden  h-full w-full bg-white dark:bg-slate-950">
      <div className="  fixed bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_100%_100%_at_50%_20%,#000_100%,transparent_100%)] dark:[mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      <section id="alert">
        <Navbar setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
        <Hero isDarkMode={isDarkMode} />
        <About />
        {/* <Events isDarkMode={isDarkMode} /> */}
        <Technologies />
        {/* <Certifications /> */}
        <Experience />
        <Projects name="Programming Projects" info={PROJECTS} />
        {/* <Projects name="Design Projects" info={DESIGN} /> */}

        <Contact />
      </section>
    </div>
  );
};

export default App;
