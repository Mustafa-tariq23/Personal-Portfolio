import React from 'react';
const About = () => {
  return (
    <section className=" bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-16" id="About">

      <div className="container mx-auto text-center flex flex-col justify-center items-center">

        <div className="mt-12 flex flex-wrap w-1/4 justify-center items-center">
          <h3 className="text-2xl font-semibold mb-4">Skills</h3>
          <div className="flex flex-wrap  justify-center">
            <span className="bg-blue-300 text-blue-800 py-1 px-3 rounded-full text-sm mr-2 mb-2">HTML5</span>
            <span className="bg-blue-300 text-blue-800 py-1 px-3 rounded-full text-sm mr-2 mb-2">CSS3</span>
            <span className="bg-blue-300 text-blue-800 py-1 px-3 rounded-full text-sm mr-2 mb-2">JAVASCRIPT</span>
            <span className="bg-blue-300 text-blue-800 py-1 px-3 rounded-full text-sm mr-2 mb-2">REACT JS</span>
            <span className="bg-blue-300 text-blue-800 py-1 px-3 rounded-full text-sm mr-2 mb-2">TAILWIND</span>
            <span className="bg-blue-300 text-blue-800 py-1 px-3 rounded-full text-sm mr-2 mb-2">BOOTSTRAP</span>
            <span className="bg-blue-300 text-blue-800 py-1 px-3 rounded-full text-sm mr-2 mb-2">SQL</span>
            <span className="bg-blue-300 text-blue-800 py-1 px-3 rounded-full text-sm mr-2 mb-2">NODE JS</span>
            <span className="bg-blue-300 text-blue-800 py-1 px-3 rounded-full text-sm mr-2 mb-2">EXPRESS</span>
            <span className="bg-blue-300 text-blue-800 py-1 px-3 rounded-full text-sm mr-2 mb-2">MONGO DB</span>
            <span className="bg-blue-300 text-blue-800 py-1 px-3 rounded-full text-sm mr-2 mb-2">C lang</span>
            <span className="bg-blue-300 text-blue-800 py-1 px-3 rounded-full text-sm mr-2 mb-2">C++</span>
            <span className="bg-blue-300 text-blue-800 py-1 px-3 rounded-full text-sm mr-2 mb-2">Bash</span>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-4">Education</h3>
          <ul className="list-disc pl-6">
            <li className="text-lg  "> <span className='font-bold text-emerald-200	'>MATRIC</span> - Govt. Central Model School, Lower Mall, Lahore</li>
            <li className="text-lg "> <span className='font-bold text-emerald-200'>INTERMEDIATE</span> - Punjab College</li>
            <li className="text-lg "> <span className='font-bold text-emerald-200'>GRADUATION (In Progress)</span> - Comsats University Lahore</li>
          </ul>
        </div>

        <div className="mt-12">
          {/* Work Experience Section */}
          <h3 className="text-2xl font-bold mb-4">Work Experience</h3>
          <p className="text-lg opacity-100">
            <span className='text-xl font-bold text-emerald-200'>Internee</span> at <span className='text-xl font-bold text-emerald-200'>Epoch Clas</span>, <span>(Feburary-2023 - August-2023)</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
