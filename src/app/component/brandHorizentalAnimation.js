import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Draggable } from 'gsap/Draggable';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(ScrollTrigger, Draggable, MotionPathPlugin);

const logos = [
  '/brandLogo/logo1.jpg',
  '/brandLogo/logo2.png',
  '/brandLogo/logo3.webp',
  '/brandLogo/logo4.png',
  '/brandLogo/logo5.png',
  '/brandLogo/logo6.png',
  '/brandLogo/logo7.png',
  '/brandLogo/logo8.png',
  '/brandLogo/logo9.png',
  '/brandLogo/logo10.png',
  '/brandLogo/logo11.png',
  '/brandLogo/logo12.png',
  '/brandLogo/logo13.png',
  '/brandLogo/logo14.png',
];

export default function LogoScroller() {
  const scrollerRef = useRef(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    const duration = 40; // Adjust the duration as needed

    const totalWidth = scroller.scrollWidth;
    const viewWidth = scroller.clientWidth;

    gsap.to(scroller, {
      x: `-=${totalWidth - viewWidth}`,
      duration,
      ease: 'none',
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % (totalWidth - viewWidth)), // Ensure continuous loop
      },
    });

    return () => {
      gsap.killTweensOf(scroller);
    };
  }, []);

  return (
    <div className="overflow-hidden whitespace-nowrap bg-white mt-[90px]">
      <div ref={scrollerRef} className="flex">
        {logos.concat(logos).map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Logo ${index}`}
            className="h-6 mx-7 inline-block"
          />
        ))}
      </div>
    </div>
  );
}
