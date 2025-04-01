import React from "react";
import pic from "../../public/Advisor.jpeg";

function About() {
  return (
    <section className="max-w-screen-2xl container mx-auto px-6 md:px-20 py-5">
      <div
        name="About"
        className="bg-gradient-to-r from-gray-100 to-gray-300 shadow-lg rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center"
      >
        {/* Left Content - Image */}
        <div className="md:w-1/3 flex justify-center mb-6 md:mb-0">
          <img
            src={pic}
            alt="Haresh Pandya"
            className="w-[250px] md:w-[300px] h-auto rounded-full border-4 border-blue-700 shadow-lg transition-all hover:scale-105"
          />
        </div>

        {/* Right Content - About Text */}
        <div className="md:w-2/3 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">
            About Me
          </h1>
          <p className="text-xl mb-2">
            🚀 Partner with us & watch your investments grow!
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            Fueling Business Growth, Sharing Success <br />
            Haresh Pandya is a seasoned financial expert and investment
            strategist specializing in business funding and profit-sharing
            partnerships. Unlike traditional investors who rely on stock market
            trends, he helps businesses grow by providing capital investments in
            exchange for a percentage of their profits.
          </p>
          <p>
            💡 Our mission? To create a sustainable investment model that
            benefits businesses while ensuring consistent, risk-free profits for
            our investors.
          </p>
          <p>
            🌟 Why choose us?
            <ul>
              <li>✅ No stock market risks</li>
              <li>✅ Direct business partnerships</li>
              <li>✅ Guaranteed profit-sharing model</li>
              <li>✅ Smart investments with high ROI</li>
            </ul>
            📈 Invest in businesses, not speculation!
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
