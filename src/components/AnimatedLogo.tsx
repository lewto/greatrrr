import React, { useState, useEffect } from 'react';

const AnimatedLogo: React.FC<{ onHomeClick?: () => void }> = ({ onHomeClick }) => {
  const [lightsState, setLightsState] = useState<'off' | 'red' | 'green'>('off');
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const startSequence = () => {
      setLightsState('off');
      setStartAnimation(false);
      
      setTimeout(() => {
        setLightsState('red');
        
        setTimeout(() => {
          setLightsState('green');
          requestAnimationFrame(() => {
            setStartAnimation(true);
          });
          
          setTimeout(() => {
            setLightsState('off');
            setStartAnimation(false);
          }, 2000);
        }, 1500);
      }, 1000);
    };

    startSequence();
    const interval = setInterval(startSequence, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center">
      <button 
        onClick={onHomeClick}
        className="relative flex items-center hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-[#FF1801] focus:ring-offset-2 focus:ring-offset-[#0A0A0F] rounded-lg p-2"
      >
        <span className="text-5xl md:text-6xl font-black font-orbitron bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
          GreatRace
        </span>
        <div className="relative ml-1">
          <div className="absolute left-1/2 -translate-x-1/2 -top-4 flex space-x-2">
            {[1, 2, 3].map((light) => (
              <div
                key={light}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-150 ${
                  lightsState === 'off'
                    ? 'bg-gray-700 shadow-none'
                    : lightsState === 'red'
                    ? 'bg-[#FF1801] shadow-[0_0_10px_2px_rgba(255,24,1,0.5)]'
                    : 'bg-green-500 shadow-[0_0_10px_2px_rgba(34,197,94,0.5)]'
                }`}
              />
            ))}
          </div>
          <span 
            className={`text-5xl md:text-6xl font-black font-orbitron text-[#FF1801] inline-block transition-transform duration-500 ${
              startAnimation ? 'animate-gg-racing' : ''
            }`}
          >
            .gg
          </span>
          <div 
            className={`absolute top-1/2 -right-8 transform -translate-y-1/2 transition-opacity duration-300 ${
              startAnimation ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="w-8 h-2 bg-gradient-to-r from-[#FF1801] to-transparent animate-trail"></div>
          </div>
        </div>
      </button>
    </div>
  );
};

export default AnimatedLogo;