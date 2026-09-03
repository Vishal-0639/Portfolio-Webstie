import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trail, setTrail] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [hidden, setHidden] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Disable custom cursor on touch/mobile devices
    const checkTouch = () => {
      const hasTouch = window.matchMedia('(pointer: coarse)').matches;
      setIsMobile(hasTouch);
    };
    checkTouch();
    window.addEventListener('resize', checkTouch);

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
      
      // Delaying the trail circle slightly for a lagging drag effect
      const animationFrame = requestAnimationFrame(() => {
        setTrail({ x: e.clientX, y: e.clientY });
      });
      return () => cancelAnimationFrame(animationFrame);
    };

    const handleMouseLeave = () => setHidden(true);
    const handleMouseEnter = () => setHidden(false);

    // Watch for hovering over links/buttons/interactive zones
    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;
      
      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.classList.contains('menu-item-btn') ||
        target.classList.contains('qual-tab-btn') ||
        target.classList.contains('project-card') ||
        target.closest('.project-card');
        
      setIsHovered(!!isInteractive);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('resize', checkTouch);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (isMobile || hidden) return null;

  return (
    <>
      {/* 1. Small Center Dot */}
      <div
        style={{
          position: 'fixed',
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: '8px',
          height: '8px',
          backgroundColor: 'var(--primary)',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 9999,
          boxShadow: '0 0 10px var(--primary)'
        }}
      />
      {/* 2. Trailing Outer Glow Ring */}
      <div
        style={{
          position: 'fixed',
          left: `${trail.x}px`,
          top: `${trail.y}px`,
          width: isHovered ? '48px' : '26px',
          height: isHovered ? '48px' : '26px',
          border: '1.5px solid var(--primary)',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 9998,
          transition: 'width 0.2s cubic-bezier(0.25, 1, 0.5, 1), height 0.2s cubic-bezier(0.25, 1, 0.5, 1), left 0.12s cubic-bezier(0.25, 1, 0.5, 1), top 0.12s cubic-bezier(0.25, 1, 0.5, 1)',
          boxShadow: isHovered ? '0 0 20px rgba(239, 68, 68, 0.4)' : 'none',
          backgroundColor: isHovered ? 'rgba(239, 68, 68, 0.08)' : 'transparent'
        }}
      />
    </>
  );
};

export default CustomCursor;
