"use client"; 

import React, { useState } from "react"; 
import Link from "next/link";
import "./navbar.css"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItem = [
    { name: "Features", link: "/features" },
    { name: "Why Us", link: "/whyus" },
    { name: "Tokenomics", link: "/tocken" },
    { name: "Roadmap", link: "/roadmap" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen); 
  };

  return (
   
    <nav className="shadow-md py-4 z-[1000] fixed top-0 left-0 w-full ">
      <div style={{margin:"auto"}} id="navmain" className="container mx-auto max-w-[1400px] flex justify-around items-center ">
      <Link href="/">
        <div className="text-2xl flex font-bold text-gray-800">
          
            <div >
            <svg width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="12.3428" width="11.3143" height="11.3143" fill="#1ADEF5"/>
<path d="M0.5 0C6.7487 0 11.8143 5.06558 11.8143 11.3143H0.5V0Z" fill="#1E808C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.8143 7.05628V0C10.0746 0 8.4265 0.392677 6.95395 1.09424C9.15929 2.48982 10.8818 4.57953 11.8143 7.05628Z" fill="#1E808C"/>
<rect x="12.8429" width="11.3143" height="11.3143" fill="#1ADEF5"/>
<path d="M25.1857 0C31.4344 0 36.5 5.06558 36.5 11.3143H25.1857V0Z" fill="#1ADEF5"/>
<rect x="25.1857" y="12.3428" width="11.3143" height="11.3143" fill="#1ADEF5"/>
<path d="M25.1857 24.6858H36.5V36.0001C30.2513 36.0001 25.1857 30.9345 25.1857 24.6858Z" fill="#1ADEF5"/>
<path d="M0.5 24.6858H11.8143V36.0001C5.56558 36.0001 0.5 30.9345 0.5 24.6858Z" fill="#1ADEF5"/>
<path d="M12.8429 24.6858H24.1572C24.1572 30.9345 19.0916 36.0001 12.8429 36.0001V24.6858Z" fill="#1E808C"/>
</svg>
            </div>
           
            <div id="eathai" style={{color:"white",marginLeft:"20px"}}>
            EathAi
            </div>
          
            </div>
            </Link>
         
        <div style={{marginLeft:"60px"}} className="hidden md:flex flex-grow justify-center">
          <ul  style={{ backgroundColor: 'rgb(10, 31, 34)',color:" rgb(116, 176, 182) "}} className="flex items-center justify-around w-[655px] h-16 max-w-lg  rounded-3xl p-2 text-center">
            {menuItem.map((menu) => (
              <li key={menu.link}>
                <Link  style={{color:"rgb(116, 176, 182)"}}
                  href={menu.link}
                  className=" hover:text-gray-900 transition-colors duration-300"
                >
                  {menu.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden md:flex space-x-4">
          <button style={{color:"white"}} className="px-4 py-2 text-gray-700 rounded hover:bg-gray-300 transition-colors duration-300">
            Log in
          </button>
          <button style={{ backgroundColor: 'rgb(206, 251, 254)',color:"black" }} className="px-4 py-2 text-white rounded hover:bg-blue-700 transition-colors duration-300">
            Whitepaper
          </button>
        </div>

        {/* Hamburger Icon for mobile view */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg style={{color:"white"}}
              className="w-6 h-6 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div style={{position:"absolute",top:0,backdropFilter:"blur(10px)"}} 
        className={`  md:hidden ${
          isOpen ? "block" : "hidden"
        } p-4 absolute w-full left-0 top-full z-10`}
       
      >
        {/* Close Button */}
        <div className="flex justify-end">
          <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
            
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path style={{color:"white"}}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <ul  className="flex flex-col space-y-4 mt-4">
          {menuItem.map((menu) => (
            <li key={menu.link}>
              <Link  style={{color:"rgb(116, 176, 182)",fontSize:"20px",fontWeight:"bolder"}}
                href={menu.link}
                className="block text-gray-600 hover:text-gray-900 transition-colors duration-300"
              >
                
                {menu.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Buttons in mobile view */}
        <div className="flex flex-col space-y-4 mt-4">
        <button style={{color:"white"}} className="px-4 py-2 text-gray-700 rounded hover:bg-gray-300 transition-colors duration-300">
            Log in
          </button>
          <button style={{ backgroundColor: 'rgb(206, 251, 254)',color:"black" }} className="px-4 py-2 text-white rounded hover:bg-blue-700 transition-colors duration-300">
            Whitepaper
          </button>
        </div>
      </div>
    </nav>
   
  );
};

export default Navbar;
