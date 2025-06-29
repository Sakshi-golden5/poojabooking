import React, { useRef, useState, useEffect } from 'react';

const Flowcards = ({ cardsData }) => {
  return (
    <div className="flex justify-center items-center px-6 py-7 space-x-6">
      {cardsData.map((card, index) => (
        <React.Fragment key={card.id}>
          <GlowWrapper>
            <div className="flex flex-col items-center justify-center w-50 h-50 bg-white shadow-md rounded-full text-center relative z-10">
              <img src={card.icon} alt="Card Icon" className="h-12 w-12 mb-2" />
              <h3 className="font-semibold text-sm px-2">{card.title}</h3>
            </div>
          </GlowWrapper>
          {index !== cardsData.length - 1 && (
            <div className="text-2xl text-gray-500 self-center">
              <span>&#8674;</span>
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

const GlowWrapper = ({ children }) => {
  const [position, setPosition] = useState({ x: 100, y: 100 }); 
  const angleRef = useRef(0);

  useEffect(() => {
    let animationFrameId;

    const animate = () => {
      const radius = 60;      
      const centerX = 100;   
      const centerY = 100;

      angleRef.current += 0.03; 
      if (angleRef.current > 2 * Math.PI) angleRef.current -= 2 * Math.PI;

      const x = centerX + radius * Math.cos(angleRef.current);
      const y = centerY + radius * Math.sin(angleRef.current);

      setPosition({ x, y });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div
      className="relative inline-block"
      style={{ width: '200px', height: '200px' }} 
    >
      
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          top: '-8px',
          left: '-8px',
          width: '214px',
          height: '214px',
          background: `radial-gradient(circle at ${position.x}px ${position.y}px, rgba(55, 48, 163, 0.8), transparent 60%)`,
          maskImage: 'radial-gradient(circle, white 60%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(circle, white 60%, transparent 100%)',
          zIndex: 0,
        }}
      />
      {children}
    </div>
  );
};

export default Flowcards;
