import { RiReactjsLine } from "react-icons/ri";
import { SiTailwindcss, SiTypescript, SiJavascript, SiHtml5, SiCss3 } from "react-icons/si";

const Tehnologies = () => {
  return (
    <div className="mt-24 mb-16 pb-12 z-50">
      <h1 className="text-gray-300  text-center text-3xl capitalize font-normal my-12  ">
        Technologies
      </h1>

      <div className="flex flex-row  justify-center flex-wrap gap-6 mx-8 ">
        {/* React */}
        <RiReactjsLine className=" backdrop-blur text-7xl text-cyan-400 border border-gray-600 p-4 rounded-xl" />
        
        {/* Tailwind CSS */}
        <SiTailwindcss className="backdrop-blur text-7xl text-blue-500 border border-gray-600 p-4 rounded-xl" />
        
        {/* TypeScript */}
        <SiTypescript className="backdrop-blur text-7xl text-blue-600 border border-gray-600 p-4 rounded-xl" />
        
        {/* JavaScript */}
        <SiJavascript className="backdrop-blur text-7xl text-yellow-400 border border-gray-600 p-4 rounded-xl" />
        
        {/* HTML */}
        <SiHtml5 className="backdrop-blur text-7xl text-orange-600 border border-gray-600 p-4 rounded-xl" />
        
        {/* CSS */}
        <SiCss3 className="backdrop-blur text-7xl text-blue-400 border border-gray-600 p-4 rounded-xl" />
      </div>

    </div>
  );
};

export default Tehnologies;
