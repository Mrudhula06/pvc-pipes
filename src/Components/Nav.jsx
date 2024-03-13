// Nav.jsx
import React, { useState } from 'react';
import { CgNametag } from 'react-icons/cg';
import { HiMenuAlt1 } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import logo from "../images/NSLogo.png";
const Nav = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const closeMenu = (id) => {
    setToggle(false);
    const element = document.getElementById(id);
  
    if (element) {
      const navbarHeight = 54; // Adjust this value based on your fixed navbar height
  
      // Calculate the target position
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - navbarHeight;
  
      // Use window.scroll for smooth scrolling
      window.scroll({
        top: offsetTop,
        left: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className='bg-white fixed top-0 right-0 left-0 start-0 z-10'>
      <div className="flex items-center justify-between p-4 lg:p-8 lg:flex-row">
        <div className="text-black font-bold text-3xl tracking-wider flex items-center cursor-pointer">
        <img
            src={logo}
            alt=""
            className="w-[3rem] h-[3rem]"
          />
        </div>
        <div className="text-black space-x-4 lg:hidden">
          <HiMenuAlt1 onClick={handleToggle} size={30} className='text-black cursor-pointer' />
        </div>
        <div className="hidden lg:flex space-x-2">
          <Link onClick={()=>closeMenu('home')} className="text-black hover:bg-green-200 hover:border-b-2 border-black rounded-full px-5 py-2 text-xl">Home</Link>
          <Link onClick={()=>closeMenu('about')} className="text-black hover:bg-green-200 hover:border-b-2 border-black rounded-full px-5 py-2 text-xl">About</Link>
          <Link onClick={()=>closeMenu('details')} className="text-black hover:bg-green-200 hover:border-b-2 border-black rounded-full px-5 py-2 text-xl">Details</Link>
          <Link onClick={()=>closeMenu('projects')} className="text-black hover:bg-green-200 hover:border-b-2 border-black rounded-full px-5 py-2 text-xl">Projects</Link>
          <Link onClick={()=>closeMenu('contact')} className="text-black hover:bg-green-200 hover:border-b-2 border-black rounded-full px-5 py-2 text-xl">Contact</Link>
        </div>
      </div>
      {toggle && (
         <div className='lg:hidden'>
  <ul>
    <li className='text-black text-xl mb-2 cursor-pointer text-center hover:bg-green-200 hover:border-b-2'>
      <Link onClick={() => closeMenu('home')}>Home</Link>
    </li>
    <li className='text-black text-xl mb-2 cursor-pointer text-center hover:bg-green-200 hover:border-b-2'>
      <Link onClick={() => closeMenu('about')}>About</Link>
    </li>
    <li className='text-black text-xl mb-2 cursor-pointer text-center hover:bg-green-200 hover:border-b-2'>
      <Link onClick={() => closeMenu('details')}>Details</Link>
    </li>
    <li className='text-black text-xl mb-2 cursor-pointer text-center hover:bg-green-200 hover:border-b-2'>
      <Link onClick={() => closeMenu('projects')}>Projects</Link>
    </li>
    <li className='text-black text-xl mb-2 cursor-pointer text-center hover:bg-green-200 hover:border-b-2'>
      <Link onClick={() => closeMenu('contact')}>Contact</Link>
    </li>
  </ul>
</div>
      )}
    </div>
  );
}

export default Nav;
