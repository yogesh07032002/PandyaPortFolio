import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import React, { useEffect, useState } from "react";

const testimonials = [
  {
    name: "John Doe",
    feedback: "This service exceeded my expectations! Highly recommend.",
    image: "/images/testimonial1.jpg",
  },
  {
    name: "Sarah Smith",
    feedback: "Absolutely fantastic experience. Professional and reliable!",
    image: "/images/testimonial2.jpg",
  },
  {
    name: "David Johnson",
    feedback: "Excellent support and seamless process. Great job!",
    image: "/images/testimonial3.jpg",
  },
];

function Testimonials() {
  const [index, setIndex] = useState(0);
  const [counter, setCounter] = useState({ clients: 0, projects: 0, awards: 0 });

  // Auto-slide Testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Counter Animation
  useEffect(() => {
    const startCount = () => {
      let start = 0;
      const duration = 5000;
      const increment = duration / 100;
      
      const updateCount = () => {
        start += 5;
        if (start >= 1000) {
          setCounter({ clients: 1000, projects: 500, awards: 50 });
        } else {
          setCounter({
            clients: Math.min(start, 1000),
            projects: Math.min(start / 2, 500),
            awards: Math.min(start / 20, 50),
          });
          setTimeout(updateCount, increment);
        }
      };
      
      updateCount();
    };

    startCount();
  }, []);

  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
      {/* Testimonials Section */}
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-5">What Our Clients Say</h1>
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
        <FaQuoteLeft className="text-3xl text-gray-500 inline-block mb-2" />
        <p className="text-lg italic text-gray-700">{testimonials[index].feedback}</p>
        <FaQuoteRight className="text-3xl text-gray-500 inline-block mt-2" />
        <div className="flex flex-col items-center mt-4">
          <img src={testimonials[index].image} alt={testimonials[index].name} className="w-16 h-16 rounded-full border-2 border-blue-500" />
          <h3 className="font-semibold text-lg mt-2">{testimonials[index].name}</h3>
        </div>
      </div>

      
    </div>
  );
}

export default Testimonials;
