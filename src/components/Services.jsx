import Consulting from "../../public/Consulting.jpg";
import Insurance from "../../public/Insurance.jpg";
import Investment from "../../public/Investment.jpg";
import React from "react";
import Wealth from "../../public/Wealth.jpg";
import Wealth1 from "../../public/Wealth1.jpg";
import Wealth2 from "../../public/Wealth2.jpg";

function Services() {
  const cardItem = [
    {
      id: 1,
      logo: Investment,
      name: "Investment Planning",
      description:
        "Customized investment strategies to maximize returns while managing risks effectively.",
    },
    {
      id: 2,
      logo: Wealth,
      name: "Wealth Management",
      description:
        "Personalized wealth-building plans to help you secure long-term financial growth.",
    },
    {
      id: 3,
      logo: Wealth1,
      name: " Risk-Free Investments",
      description:
        "Our model eliminates stock market fluctuations, focusing only on profitable business collaborations.",
    },
    {
      id: 4,
      logo: Wealth2,
      name: "Profit-Sharing Partnerships",
      description:
        "Instead of stock market risks, we invest in companies and earn through revenue sharing.",
    },
    {
      id: 5,
      logo: Insurance,
      name: "fund management",
      description:
        "Guidance on life, health, and business insurance to protect you and your assets.",
    },
    {
      id: 6,
      logo: Consulting,
      name: "Financial Consulting",
      description:
        "Expert financial consulting for individuals and businesses to achieve financial stability.",
    },
  ];

  return (
    <>
      <div
        name="Services"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16 mt-5"
      >
        <div>
          <h1 className="text-3xl font-bold mb-5 text-blue-700 text-center md:text-start">
            Services
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cardItem.map(({ id, logo, name, description }) => (
              <div
                key={id}
                className="border p-6 rounded-lg cursor-pointer hover:scale-105 duration-300 shadow-md text-center md:text-start bg-white"
              >
                <img
                  src={logo}
                  alt={name}
                  className="h-40 w-full object-cover rounded-md mb-4"
                />
                <div className="text-xl font-semibold text-gray-800">{name}</div>
                <p className="mt-2 text-gray-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Services;
