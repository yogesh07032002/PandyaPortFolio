import React, { useState } from "react";

import { IoClose } from "react-icons/io5";
import { Link } from "react-scroll";
import { MdOutlineMenu } from "react-icons/md";
import pic from "../../public/Advisor.jpeg";

function Navbar() {
  const [menu, setMenu] = useState(false);
  
  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Education" },
    { id: 4, text: "Services" },
    { id: 5, text: "Contact" },
  ];

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md transition-all duration-300">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 flex justify-between items-center">
          
          {/* Logo and Profile */}
          <div className="flex items-center space-x-3">
            <img src={pic} className="h-12 w-12 rounded-full" alt="profile" />
            <div>
              <h1 className="font-semibold text-xl">Haresh Pandya</h1>
              <p className="text-sm text-rose-500">Financial Advisor</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8">
            {navItems.map(({ id, text }) => (
              <li key={id} className="cursor-pointer font-semibold text-black hover:text-red-600 transition-all">
                <Link to={text} smooth={true} duration={500} offset={-70} activeClass="active">
                  {text}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Icon */}
          <div className="md:hidden text-2xl cursor-pointer" onClick={() => setMenu(!menu)}>
            {menu ? <IoClose size={24} /> : <MdOutlineMenu size={24} />}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${menu ? "opacity-100 visible" : "opacity-0 invisible"}`}>
          <div className={`absolute top-0 right-0 w-64 bg-white h-full shadow-lg transform transition-transform duration-300 ${menu ? "translate-x-0" : "translate-x-full"}`}>
            <button className="absolute top-4 right-4 text-2xl" onClick={() => setMenu(false)}>
              <IoClose />
            </button>
            
            <ul className="mt-16 flex flex-col space-y-6 text-center">
              {navItems.map(({ id, text }) => (
                <li key={id} className="font-semibold text-lg hover:text-red-600 transition-all">
                
                 <Link
                 to={text}
                 smooth={true}
                 duration={500}
                 offset={-70} // Adjust this based on your navbar height
                 activeClass="active"
                 onClick={() => {
                   setMenu(false); // Close the menu
                 }}
               >
                 {text}
               </Link>
               
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
