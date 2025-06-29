import React, { useState } from 'react';

const Card = ({ pooja, openModal }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  // Increased tilt depth for more dramatic effect
  const threshold = 35;

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    setTilt({ x: y * -threshold, y: x * threshold });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const handleBookNowClick = (e) => {
    e.preventDefault();
    openModal(pooja);
  };

  return (
    <div className="flex flex-col items-center justify-center p-3">
      <div
        className="w-full max-w-[80%] h-40"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        <img
          src={pooja.images[0]}
          alt=""
          className="w-full h-full object-cover rounded-md shadow-md border border-solid border-black"
        />
      </div>

      <div className="mt-4 text-center">
        <p className="font-playfair text-xl font-medium text-gray-800">{pooja.name}</p>
        <div className="mt-4">
          <button
            className="px-4 py-2 text-sm font-medium border border-gray-300 rounded hover:bg-gray-50 transition-all cursor-pointer"
            onClick={handleBookNowClick}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
