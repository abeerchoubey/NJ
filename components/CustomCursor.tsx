import React, { useEffect, useRef, useState } from 'react';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([]);
  const requestRef = useRef<number>();
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX - 10}px, ${e.clientY - 10}px, 0)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    let idCounter = 0;
    
    const animateTrail = () => {
      setTrail(prev => {
        const newPoint = { 
          x: mousePos.current.x, 
          y: mousePos.current.y, 
          id: idCounter++ 
        };
        // Keep last 15 points
        const newTrail = [...prev, newPoint].slice(-15);
        return newTrail;
      });
      
      requestRef.current = requestAnimationFrame(animateTrail);
    };

    requestRef.current = requestAnimationFrame(animateTrail);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Main Cursor Ball */}
      <div 
        ref={cursorRef}
        className="absolute w-5 h-5 rounded-full border-2 border-[#FFD700] bg-[#FFD700]/50 shadow-[0_0_15px_#FFD700] will-change-transform"
        style={{ transition: 'transform 0.05s linear' }}
      />
      
      {/* Trail */}
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="absolute w-3 h-3 rounded-full bg-[#FFD700] will-change-transform"
          style={{
            left: point.x - 6,
            top: point.y - 6,
            opacity: index / trail.length * 0.5,
            transform: `scale(${index / trail.length})`,
          }}
        />
      ))}
    </div>
  );
};

export default CustomCursor;