import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

import React from "react";
import { ReactTyped } from "react-typed";
import pic from "../../public/Advisor.jpeg";

function Home() {
  return (
    <section  className="max-w-screen-2xl container mx-auto px-6 md:px-20 py-28">
      <div  name="Home" className="flex flex-col-reverse md:flex-row items-center bg-gradient-to-r from-gray-100 to-gray-300 shadow-xl rounded-3xl p-10 md:p-16">
        
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left space-y-5">
          <span className="text-sm md:text-lg font-semibold text-gray-600 tracking-wider">Welcome To My Portfolio</span>
          
          <h1 className="text-xl md:text-5xl text-left  font-bold text-gray-800 leading-tight">
            Hello, I am <br />
            <span className="text-blue-700">
              <ReactTyped 
                strings={["Financial Advisor", "Investment Expert", "Wealth Manager"]}
                typeSpeed={100}
                backSpeed={100}
                loop
              />
            </span>
          </h1>
          <p className="text-sm md:text-2xl  text-red-800 font-bold">OUR GENUINE PROMISE</p>
          <p className="text-sm md:text-2xl text-red-800">Smart Investments, Profitable Partnerships!</p>
          <p className="text-gray-700 text-sm md:text-lg leading-relaxed text-start">
            I am <span className="font-semibold text-blue-800">Haresh Pandya</span>, an experienced financial advisor and proprietor, 
            dedicated to helping individuals and businesses maximize their wealth 
            through strategic investment planning, fund management, and portfolio growth.
          </p>
          {/* Social Media Links */}
          <div>
            <h2 className="text-xl font-bold text-gray-800">Connect With Me</h2>
            <div className="flex justify-center md:justify-start space-x-4 mt-3">
              <a href="https://www.linkedin.com/in/haresh-pandya" target="_blank" className="text-blue-700 hover:text-blue-900 text-3xl transition-all">
                <FaLinkedin />
              </a>
              <a href="https://api.whatsapp.com/send?phone=9638724190" target="_blank" className="text-green-600 hover:text-green-800 text-3xl transition-all">
                <FaWhatsapp />
              </a>
              <a href="https://www.instagram.com/haresh_pandya_advisor" target="_blank" className="text-pink-600 hover:text-pink-800 text-3xl transition-all">
                <FaInstagram />
              </a>
              <a href="https://www.facebook.com/haresh.pandya" target="_blank" className="text-blue-600 hover:text-blue-800 text-3xl transition-all">
                <FaFacebook />
              </a>
            </div>
          </div>

          {/* Call-to-Action Button */}
          <div className="mt-20">
            <a 
              href="https://api.whatsapp.com/send?phone=9638724190"
              target="_blank"
              className="bg-blue-700 text-white font-bold px-6 py-3 rounded-lg hover:bg-blue-900 transition-all shadow-md"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Content - Profile Image */}
        <div className="md:w-1/2 flex justify-center">
          <img 
            src={pic} 
            alt="Haresh Pandya" 
            className="w-[320px] md:w-[400px] h-auto rounded-full border-4 border-blue-700 shadow-lg transition-all hover:scale-105"
          />
        </div>
      </div>
      
    </section>
  );
}

export default Home;
