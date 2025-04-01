import { FaGraduationCap, FaUniversity } from "react-icons/fa";

import React from "react";

function Education() {
  return (
    <section className="max-w-screen-2xl container mx-auto px-6 md:px-20 py-16">
      <div  name="Education" className="bg-gray-100 shadow-lg rounded-3xl p-10 md:p-16">
        <h1 className="text-4xl font-bold text-blue-700 text-center md:text-start mb-6">
          Education
        </h1>

        {/* MBA - Finance */}
        <div className="flex flex-col md:flex-row items-center mb-8">
          <div className="text-orange-500 text-5xl md:mr-6">
            <FaGraduationCap />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Master of Business Administration (MBA) - Finance</h2>
            <p className="text-gray-600 text-lg">
              Specialized in **Investment Strategies, Wealth Management, and Risk Assessment**  
            </p>
            <p className="text-gray-600 mt-2">
              🎓 Year of Completion: <span className="font-semibold">[Insert Year]</span>  
              <br />🏛️ [Insert University Name]
            </p>
          </div>
        </div>

        {/* B.Com - Finance & Accounting */}
        <div className="flex flex-col md:flex-row items-center">
          <div className="text-orange-500 text-5xl md:mr-6">
            <FaUniversity />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Bachelor of Commerce (B.Com) - Finance & Accounting</h2>
            <p className="text-gray-600 text-lg">
              Focused on **Financial Analysis, Portfolio Management, and Business Economics**  
            </p>
            <p className="text-gray-600 mt-2">
              🎓 Year of Completion: <span className="font-semibold">[Insert Year]</span>  
              <br />🏛️ [Insert University Name]
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
