import { BiImageAdd } from "react-icons/bi";
import React, { useState } from "react";

// const images = [
//   'https://via.placeholder.com/300x200.png?text=Image+1',
//   'https://via.placeholder.com/300x200.png?text=Image+2',
//   'https://via.placeholder.com/300x200.png?text=Image+3',
//   'https://via.placeholder.com/300x200.png?text=Image+4',
//   'https://via.placeholder.com/300x200.png?text=Image+5',
// ];

const ShopImagesCarousel = ({images}) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
      
      <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
        {images?.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Carousel ${index}`}
            className="w-74 h-48   object-cover rounded-lg shadow-md cursor-pointer transition-transform duration-300 hover:scale-105"
            onClick={() => handleImageClick(image)}
          />
        ))}
      </div>

      {selectedImage && (
        <div className="fixed inset-0  bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative">
            <img
              src={selectedImage}
              alt="Full Size"
              className="max-w-full max-h-full p-4 object-cover rounded-lg"
            />
            <button
              className="absolute top-2 right-2 text-white text-xl font-bold bg-black bg-opacity-50 rounded-md p-2"
              onClick={handleCloseModal}
            >
              &times;
            </button>
          </div>
        </div>
      )}

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default ShopImagesCarousel;
