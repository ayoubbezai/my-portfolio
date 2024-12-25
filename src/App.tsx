import Navbar from "./components/Navbar"
import Hero from "./components/Hero.tsx"
import About from "./components/About.tsx"
import Technologies from "./components/Technologies.tsx"
import Experience from "./components/Experience.tsx"
import Projects from "./components/Projects.tsx"
import Contact from "./components/Contact.tsx"

const App = () =>{
  return (
    <div className=" relative  overflow-x-hidden  h-full w-full bg-slate-950" >
        <div className="  fixed bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" >

          
  </div >
  <section id="alert">
  <Navbar />
  <Hero />
   <About />
   <Technologies />
   <Experience />
   <Projects />
   <Contact />
  </section>

   
  </div>

  )
}

export default App

