import React from 'react';
import { LuLayoutDashboard } from "react-icons/lu";

const variantClasses = {
  primary: 'text-teal-400 hover:text-teal-300 transition-colors duration-200',
  secondary: 'text-black hover:text-teal-400 hover:bg-gray-100 transition-all duration-200',
};

export default function NavBar() {
  return (
    <nav className="w-full max-w-full fiexed top-0 left-0 right-0 z-50 bg-primary-200 text-primary-100 px-3 sm:px-4 lg:px-8 py-3 sm:py-4 shadow-sm overflow-x-hidden">
      <div className="max-w-7xl mx-auto w-full max-w-full overflow-hidden">
        {/* Main navbar container */}
        <div className="flex justify-between items-start sm:items-center w-full max-w-full min-w-0 overflow-hidden">
          {/* Logo Section */}
          <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0 min-w-0 overflow-hidden">
            <LuLayoutDashboard className="text-lg sm:text-xl lg:text-2xl text-teal-400 flex-shrink-0" />
            <div className="flex items-center min-w-0 overflow-hidden">
              <h1 className="font-bold text-sm sm:text-base lg:text-lg text-black truncate">Business</h1>
              <h1 className="font-bold text-sm sm:text-base lg:text-lg text-teal-400 ml-1 truncate">Cafe</h1>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex-shrink-0">
            {/* Desktop Navigation - Horizontal */}
            <ul className="hidden md:flex items-center gap-1 lg:gap-2 font-semibold">
              <li>
                <a 
                  href="/" 
                  className={`${variantClasses.primary} px-2 lg:px-3 py-2 rounded-md text-xs lg:text-sm whitespace-nowrap`}
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="/space" 
                  className={`${variantClasses.secondary} px-2 lg:px-3 py-2 rounded-md text-xs lg:text-sm whitespace-nowrap`}
                >
                  Space
                </a>
              </li>
              <li>
                <a 
                  href="/about" 
                  className={`${variantClasses.secondary} px-2 lg:px-3 py-2 rounded-md text-xs lg:text-sm whitespace-nowrap`}
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="/contact" 
                  className={`${variantClasses.secondary} px-2 lg:px-3 py-2 rounded-md text-xs lg:text-sm whitespace-nowrap`}
                >
                  Contact
                </a>
              </li>
            </ul>

            {/* Mobile Navigation - Vertical */}
            <ul className="md:hidden flex flex-col items-end gap-1 font-medium text-right">
              <li>
                <a 
                  href="/" 
                  className={`${variantClasses.primary} block px-2 py-1 rounded text-xs whitespace-nowrap`}
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="/space" 
                  className={`${variantClasses.secondary} block px-2 py-1 rounded text-xs whitespace-nowrap`}
                >
                  Space
                </a>
              </li>
              <li>
                <a 
                  href="/about" 
                  className={`${variantClasses.secondary} block px-2 py-1 rounded text-xs whitespace-nowrap`}
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="/contact" 
                  className={`${variantClasses.secondary} block px-2 py-1 rounded text-xs whitespace-nowrap`}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}