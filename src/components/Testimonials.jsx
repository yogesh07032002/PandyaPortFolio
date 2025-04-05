import React, { useEffect, useState } from "react";

function Testimonials() {
  const [counter, setCounter] = useState({ clients: 0, projects: 0, awards: 0 });

  // Counter Animation (if still needed)
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
      {/* Genuine Promise Section */}
      <div className="bg-white p-8 rounded-xl shadow-xl text-center border border-blue-100">
        <h2 className="text-2xl md:text-4xl font-bold text-blue-700 mb-4">
          💯 Our Genuine Promise 💼
        </h2>
        <ul className="text-gray-700 text-lg space-y-2">
          <li>
            ✅ <strong>Guaranteed 30%+ Annual Return</strong><br />
            We deliver solid, consistent returns — <em>no hype, no false hopes</em>.
          </li>
          <li>
            🧠 <strong>100% Transparency</strong><br />
            Every word we say is <em>real, honest, and backed by results</em>.
          </li>
          <li>
            🚫 <strong>No Overpromising. No Misleading.</strong><br />
            We’re not here to sell dreams — we’re here to <em>build trust and wealth</em>.
          </li>
          <li>
            💸 <strong>Handsome Returns for All</strong><br />
            Whether you're starting small or going big — <em>your money works smarter</em> with us.
          </li>
          <li>
            ❓ <strong>Got Doubts? We’ll Make It Clear.</strong><br />
            Ask us anything — we’ll explain it in <em>simple, clear terms</em> you can trust.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Testimonials;
