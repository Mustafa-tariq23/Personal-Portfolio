import React, { useState } from 'react';
import Contact from './Contact';
import About from './About';
import Projects from './Projects';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header id="Home">
            {/* <div className="w-full bg-center bg-cover h-[38rem]"  style={{ backgroundImage: "url('images/header1.png')" }}> */}
            <div class="h-[100vh] w-full bg-center bg-cover bg-gradient-to-r from-cyan-500 to-blue-500">
                <div className="flex items-center justify-center w-full h-full bg-gray-900/40">
                    <div className="text-center">
                        {/* <h1 className="text-3xl font-semibold text-white lg:text-4xl">Hello I Am MUSTAFA TARIQ And I Am A <br /> <span className="text-blue-400">FRONTEND DEVELOPER</span> </h1> */}
                        <h1 className="text-3xl font-semibold text-white lg:text-4xl">
                            Hello, I'm Mustafa Tariq,
                            a <span className="text-blue-400">Frontend Developer</span> <br /> passionate about creating engaging and <br /> responsive web experiences.
                        </h1>

                        <button className="w-full px-5 py-2 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Download CV</button>
                    </div>
                </div>
            </div>
            <About />
            <Projects />
            <Contact />
        </header>
    );
};

export default Header;
