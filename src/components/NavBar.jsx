import React from 'react';
import { LuLayoutDashboard } from "react-icons/lu";

const variantClasses = {
  primary: ' hover:',
  secondary: '-500 hover:bg-gray-600',
};

export default function NavBar() {
  return (
    <div className='flex justify-between items-center h-[50px] px-4 bg-primary-200 text-primary-100'>
      <div className='flex items-center gap-4 px-20'>
        <LuLayoutDashboard className='text-2xl ' />
        <h1 className='font-bold text-xl text-black'>Business</h1>
        <h1 className='font-bold text-xl  '>Cafe</h1>
      </div>
      <ul className='flex gap-4'> 
        <li>
          <a href="/" className={`${variantClasses.primary} text-teal-400 px-4 py-2 `}>Home</a>
        </li>
        <li>
          <a href="/about" className={`${variantClasses.secondary} text-black px-4 py-2 `}>Space</a>
        </li>
        <li>
          <a href="/blog" className={`${variantClasses.secondary} text-black px-4 py-2 rounded`}>About</a>
        </li>
        <li>
          <a href="/contact" className={`${variantClasses.secondary} text-black px-4 py-2 rounded`}>Contact</a>
        </li>
      </ul>
    </div>
  );
}
