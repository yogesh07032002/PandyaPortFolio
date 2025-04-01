import React, { useState } from "react";

import { FaTimes } from "react-icons/fa";

// Image paths from the public folder
const images = [
  "/gallery1.jpeg",
  "/gallery2.jpeg",
  "/gallery3.jpeg",
  "/gallery4.jpeg",
  "/gallery5.jpeg",
  "/gallery6.jpeg",
];

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div name="Gallery" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
      <h1 className="text-3xl font-bold mb-5 text-blue-700 text-center">Gallery</h1>

      {/* Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, index) => (
          <div key={index} className="relative group cursor-pointer">
            <img
              src={img}
              alt={`Gallery ${index + 1}`}
              className="w-full h-48 md:h-64 lg:h-72 object-contain rounded-lg transition-transform duration-300 hover:scale-105 bg-gray-100"
              onClick={() => setSelectedImage(img)}
            />
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 p-4">
          <div className="relative p-2 rounded-lg shadow-lg max-w-screen max-h-screen bg-white">
            <button
              className="absolute top-2 right-2 text-white text-3xl bg-gray-700 p-2 rounded-full"
              onClick={() => setSelectedImage(null)}
            >
              <FaTimes />
            </button>
            <img src={selectedImage} alt="Full View" className="max-w-full max-h-screen object-contain rounded-lg" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
  