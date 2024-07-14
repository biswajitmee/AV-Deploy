import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX: x, clientY: y } = event;
      if (cursorRef.current) {
        cursorRef.current.style.left = `${x}px`;
        cursorRef.current.style.top = `${y}px`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const handleMouseEnter = () => {
      cursorRef.current.classList.add('cursor-hover');
    };

    const handleMouseLeave = () => {
      cursorRef.current.classList.remove('cursor-hover');
    };

    document.querySelectorAll('a, button, .left_nav, .menuButton').forEach((element) => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.querySelectorAll('a, button, .left_nav, .menuButton').forEach((element) => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <div ref={cursorRef} className="custom-cursor fixed z-[1000] pointer-events-none">
      <div className="inner-dot"></div>
    </div>
  );
};

export default CustomCursor;
