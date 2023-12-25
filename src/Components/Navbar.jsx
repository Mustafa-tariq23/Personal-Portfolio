import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow fixed w-full dark:bg-gray-800">
      <div className="container px-6 py-4 mx-auto">
        <div className="lg:flex lg:items-center">
          <div className="flex items-center justify-between lg:mr-4">
            <ScrollLink 
            to="Home"
             spy={true}
             smooth={true}
             offset={-30}
             duration={500}
             className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200"
            >
              <h1 className='font-bold text-2xl'>Mustafa Tariq</h1>
            </ScrollLink>
          </div>



          <div className="flex lg:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
              aria-label="toggle menu"
            >
              {!isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M4 8h16M4 16h16" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>

          <div
            className={`${isOpen
                ? 'translate-x-0 opacity-100'
                : 'opacity-0 -translate-x-full'
              } absolute inset-x-0 z-20 flex-1 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center lg:justify-between`}
          >
            <div className="flex flex-col text-gray-600 capitalize dark:text-gray-300 lg:flex lg:px-16 lg:-mx-4 lg:flex-row lg:items-center">
              <ScrollLink
                to="Home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200"
              >
                Home
              </ScrollLink>
              <ScrollLink
                to="About"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200"
              >
                About
              </ScrollLink>
              <ScrollLink
                to="Projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200"
              >
                Projects
              </ScrollLink>
              <ScrollLink
                to="Contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200"
              >
                Contact
              </ScrollLink>
            </div>
          </div>




          <div className="flex justify-center items-center mt-6 lg:flex lg:mt-0 lg:-mx-2">
            <a
              href="https://github.com/Mustafa-tariq23"
              className="mx-2 text-gray-600 transition-colors duration-300 transform dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300"
              aria-label="LinkedIn"
            >
              <img className='h-8 w-8' src="images/icons/Github.svg" alt="Github Icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/mustafa-tariq-b11834249"
              className="mx-2 text-gray-600 transition-colors duration-300 transform dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300"
              aria-label="GitHub"
            >
              <img className='h-8 w-8' src="images/icons/LinkedIn.svg" alt="LinkedIn Icon" />
            </a>
            <a
              href="https://twitter.com/Mustafa15771400"
              className="mx-2 text-gray-600 transition-colors duration-300 transform dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300"
              aria-label="Twitter"
            >
              <img className='h-8 w-8' src="images/icons/Twitter.svg" alt="Twitter Icon" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
