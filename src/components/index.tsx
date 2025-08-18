import Navbar from "../components/Navbar";
import { useEffect, useState, Suspense, lazy } from "react";
import { PROJECTS } from "../constants/projects.ts";

const Hero = lazy(() => import("../components/Hero.tsx"));
const About = lazy(() => import("../components/About.tsx"));
const Technologies = lazy(() => import("../components/Technologies.tsx"));
const Achivements = lazy(() => import("../components/Achivements.tsx"));
const Experience = lazy(() => import("../components/Experience.tsx"));
const Projects = lazy(() => import("../components/Projects.tsx"));
const Contact = lazy(() => import("../components/Contact.tsx"));
const Stats = lazy(() => import("../components/Stats.tsx"));

const Home = () => {
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

  const fallback = (label: string) => (
    <div className="w-full flex justify-center py-20 text-xl text-indigo-500">
      Loading {label}...
    </div>
  );

  return (
    <div className=" relative  overflow-x-hidden  h-full w-full bg-white dark:bg-slate-950">
      <div className="  fixed bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_100%_100%_at_50%_20%,#000_100%,transparent_100%)] dark:[mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      <section id="alert">
        <Navbar setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
        <Suspense fallback={fallback("Hero")}>
          {" "}
          <Hero />{" "}
        </Suspense>
        <Suspense fallback={fallback("About")}>
          {" "}
          <About />{" "}
        </Suspense>
        <Suspense fallback={fallback("Technologies")}>
          {" "}
          <Technologies />{" "}
        </Suspense>
        <Suspense fallback={fallback("Stats")}>
          {" "}
          <Stats />{" "}
        </Suspense>
        {/* <Certifications /> */}
        <Suspense fallback={fallback("Experience")}>
          {" "}
          <Experience />{" "}
        </Suspense>
        <Suspense fallback={fallback("Achivements")}>
          {" "}
          <Achivements isDarkMode={isDarkMode} />{" "}
        </Suspense>
        <Suspense fallback={fallback("Projects")}>
          {" "}
          <Projects name="Programming Projects" info={PROJECTS} />{" "}
        </Suspense>
        {/* <Projects name="Design Projects" info={DESIGN} /> */}
        <Suspense fallback={fallback("Contact")}>
          {" "}
          <Contact />{" "}
        </Suspense>
      </section>
    </div>
  );
};

export default Home;
