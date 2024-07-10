import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi'; // Import hamburger and close icons from React Icons

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-[#0099B0] text-white py-4 fixed w-full z-10 top-0  px-0">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-16">
          {/* Logo on the left */}
          <div className="flex-shrink-0 pl-2">

            <Link to="/" className="text-white text-md md:text-lg font-bold">
              <div className='flex flex-row gap-2 md:gap-4 h-full'>
                <div className='text-yellow-400   border-2 p-2 border-yellow-400 rounded-full'>Logo
                </div>
                <div className=' flex items-center'>Shore Community Services</div></div></Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden sm:flex sm:items-center sm:justify-end">
            <div className="flex space-x-4">
              <Link to="/" className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium">Home</Link>
              <Link to="/about" className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium">About</Link>
              <Link to="/services" className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium">Services</Link>
              <Link to="/contact" className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium">Contact</Link>
            </div>
          </div>

          {/* Hamburger menu icon for mobile */}
          <div className="absolute inset-y-0 right-4 flex items-center pr-2 sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white md:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white "
              onClick={toggleMenu}
            >
              {isOpen ? <HiX className="h-8 w-8" /> : <HiMenu className="h-8 w-8" />}
            </button>
          </div>
        </div>

        {/* Mobile menu, show/hide based on menu state */}
        {isOpen && (
          <div className="sm:hidden border-2 border-black bg-white absolute top-20 left-0 w-full z-20 shadow-md shadow-gray-400">
            <div className="px-2 py-4 space-y-1">
              <Link to="/" onClick={closeMenu} className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-lg font-medium">Home</Link>
              <Link to="/about" onClick={closeMenu} className="text-black hover:bg-gray-700 hover:text-black block px-3 py-2 rounded-md text-lg font-medium">About</Link>
              <Link to="/services" onClick={closeMenu} className="text-black hover:bg-gray-700 hover:text-black block px-3 py-2 rounded-md text-lg font-medium">Services</Link>
              <Link to="/contact" onClick={closeMenu} className="text-black hover:bg-gray-700 hover:text-black block px-3 py-2 rounded-md text-lg font-medium">Contact</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
