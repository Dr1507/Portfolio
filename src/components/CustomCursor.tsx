import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    // Only enable on desktop devices with fine pointer and no reduced-motion preference
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (isTouch || prefersReducedMotion) {
      setEnabled(false);
      return;
    }

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.getAttribute('role') === 'button' ||
        target.classList.contains('clickable')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!enabled || !isVisible) return null;

  return (
    <>
      {/* Outer subtle glow ring */}
      <div
        className="pointer-events-none fixed z-50 transition-transform duration-100 ease-out -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#00E5D4]/60 mix-blend-screen"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isHovering ? '44px' : '26px',
          height: isHovering ? '44px' : '26px',
          backgroundColor: isHovering ? 'rgba(0, 229, 212, 0.18)' : 'transparent',
          boxShadow: isHovering ? '0 0 20px rgba(0, 229, 212, 0.5)' : 'none',
        }}
      />
      {/* Center dot */}
      <div
        className="pointer-events-none fixed z-50 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00E5D4]"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isHovering ? '6px' : '4px',
          height: isHovering ? '6px' : '4px',
          boxShadow: '0 0 8px #00E5D4',
        }}
      />
    </>
  );
};
