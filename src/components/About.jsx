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
          <h1 className="text-2xl md:text-4xl font-bold text-blue-700 mb-4">
            About Me
          </h1>
          <p className=" md:text-2xl text-left mb-2">
            🚀 Grow Your Wealth with Smart Business Investments
          </p>

          <p className="text-gray-700 text-left text-sm md:text-lg leading-relaxed">
            Invest in Businesses, Not the Stock Market! <br /> Haresh Pandya is
            a financial expert and investment strategist who helps businesses
            scale through funding partnerships. Instead of gambling on stock
            market fluctuations, we invest directly in businesses and share in
            their success.
          </p>
          <br />
          <p className="text-gray-700 text-left text-sm md:text-lg leading-relaxed">
            💡 How It Works <br />
            We provide capital to growing businesses and earn returns through a
            structured profit-sharing model—ensuring stable, risk-free gains for
            our investors.
          </p><br />
          <p className="text-gray-700 text-left text-sm md:text-lg leading-relaxed">
            🌟 Why Partner With Us? Take control of your financial future
            with smart, strategic investments!
            <ul>
              <li> ✔️ No reliance on market speculation</li>
              <li>✔️ Transparent and secure profit-sharing</li>
              <li>✔️ High-growth investment opportunities</li>
              <li>✔️ Sustainable wealth-building strategy</li>
            </ul>
            📈 Take control of your financial future with smart, strategic
            investments!
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
