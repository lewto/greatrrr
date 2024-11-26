import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';

interface ConfettiProps {
  active: boolean;
}

const Confetti: React.FC<ConfettiProps> = ({ active }) => {
  useEffect(() => {
    if (active) {
      const colors = ['#FF1801', '#FF4D4D', '#FFD700', '#FFFFFF'];
      
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: colors,
        startVelocity: 30,
        gravity: 0.8,
        ticks: 300,
        shapes: ['circle', 'square'],
        zIndex: 1000,
      });
    }
  }, [active]);

  return null;
};

export default Confetti;