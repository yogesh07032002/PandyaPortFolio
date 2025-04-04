import { FaGraduationCap, FaUniversity } from "react-icons/fa";

import React from "react";

function Education() {
  return (
    <section className="max-w-screen-2xl container mx-auto px-6 md:px-20 py-16">
      <div name="Education" className="bg-gray-100 shadow-lg rounded-3xl p-10 md:p-16">
        <h1 className="text-4xl font-bold text-blue-700 text-center md:text-start mb-6">
          Education
        </h1>

        {/* MBA - Marketing */}
        <div className="flex flex-col md:flex-row items-center mb-8">
          <div className="text-orange-500 text-5xl md:mr-6">
            <FaGraduationCap />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Master of Business Administration (MBA) - Marketing</h2>
            <p className="text-gray-600 text-lg">
              Specialized in **Brand Management, Market Research, and Digital Marketing Strategies**  
            </p>
          
          </div>
        </div>

        {/* Master of Arts (M.A) */}
        <div className="flex flex-col md:flex-row items-center mb-8">
          <div className="text-orange-500 text-5xl md:mr-6">
            <FaUniversity />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Master of Arts (M.A)</h2>
            <p className="text-gray-600 text-lg">
              Focused on **Strategic Communication, Business Development, and Market Trends**  
            </p>
          
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
