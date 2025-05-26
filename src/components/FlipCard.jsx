import React, { useState } from 'react';

const FlipCard = ({ logo, name, description = '', experience = '' }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div 
      className="group perspective h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 lg:h-32 lg:w-32 cursor-pointer"
      onClick={handleClick}
    >
      <div className={`relative preserve-3d duration-500 w-full h-full ${isFlipped ? 'my-rotate-y-180' : ''}`}>
        {/* Front of card */}
        <div className="absolute backface-hidden w-full h-full flex flex-col items-center justify-center bg-rn-dark rounded-lg shadow-md">
          <img src={logo} alt={name} className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300" />
          <span className="text-[10px] sm:text-xs md:text-sm text-center px-1">{name}</span>
        </div>
        
        {/* Back of card */}
        <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-rn-gray rounded-lg p-2 sm:p-3 flex flex-col items-center justify-center shadow-md">
          <h4 className="text-[9px] sm:text-xs font-bold mb-1 text-center">{name}</h4>
          <p className="text-[7px] sm:text-[9px] md:text-xs text-gray-300 text-center leading-tight">{description}</p>
          {experience && (
            <p className="text-[7px] sm:text-[9px] md:text-xs text-green-400 mt-1 text-center">{experience}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
