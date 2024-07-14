import React, { useState, useEffect, useRef } from 'react';
import Card from '../component/Card';
import { gsap } from 'gsap';

const cards = [
  { cardNo: '01', cardTitle: 'DESIGN', bgCardColor: 'card-bg-1', textColor: 'text-black', videoSource: '/artwork_simple.mp4', content: "Using 3D design software, our designer can create a detailed digital version of your concept in real time,including how it looks on a person, and make modifications as needed." },
  { cardNo: '02', cardTitle: 'TECHPAC', bgCardColor: 'card-bg-2', textColor: 'text-black', videoSource: '/artwork_simple.mp4', content: "Using 3D design software, our designer can create a detailed digital version of your concept in real time,including how it looks on a person, and make modifications as needed." },
  { cardNo: '03', cardTitle: 'FABRIC', bgCardColor: 'card-bg-3', textColor: 'text-black', videoSource: '/artwork_simple.mp4', content: "Using 3D design software, our designer can create a detailed digital version of your concept in real time,including how it looks on a person, and make modifications as needed." },
  { cardNo: '04', cardTitle: 'PROTOTYPE', bgCardColor: 'card-bg-4', textColor: 'text-black', videoSource: '/artwork_simple.mp4', content: "Using 3D design software, our designer can create a detailed digital version of your concept in real time,including how it looks on a person, and make modifications as needed." },
  { cardNo: '05', cardTitle: 'PRODUCTION', bgCardColor: 'card-bg-5', textColor: 'text-black', videoSource: '/artwork_simple.mp4', content: "Using 3D design software, our designer can create a detailed digital version of your concept in real time,including how it looks on a person, and make modifications as needed." },
];

const Slider = () => {
  const [selected, setSelected] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const cardRefs = useRef([]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    gsap.set(cardRefs.current, (index) => ({
      width: isMobile ? '6.5rem' : index === cards.length - 1 ? '80px' : '6.5rem'
    }));
  }, [isMobile]);

  useEffect(() => {
    if (selected !== null) {
      gsap.to(cardRefs.current[selected], {
        width: '70%',
        duration: 1,
        ease: 'power4.inOut',
      });

      cardRefs.current.forEach((cardRef, index) => {
        if (index !== selected) {
          gsap.to(cardRef, {
            width: isMobile ? '6.5rem' : index === cards.length - 1 ? '85px' : '6.5rem',
            duration: 1,
            ease: 'power4.inOut',
          });
        }
      });
    }
  }, [selected, isMobile]);

  const handleClick = (key) => {
    setSelected(key);
  };

  return (
    <div className='main-yell-bg h-full gurmukhi'>
      <div className='md:pt-[230px] pt-[80px] text-black pb-[120px] md:pl-[50px] text-[30px] md:text-[55px]  font-medium md:w-2/4 pl-[25px]'>
        Our 5 steps end-to-end process created with emerging brands in mind
      </div>
      <div className='hidden md:block'>
        <div className='h-screen flex items-center justify-center'>
          {cards.map((card, key) => (
            <div
              key={key}
              ref={el => cardRefs.current[key] = el}
              className={`${key === 0 ? 'w-70' : key === cards.length - 1 ? 'w-[85px]' : 'w-22'} cursor-pointer ml-custom relative`}
              onClick={() => handleClick(key)}
            >
              <Card card={card} selected={selected === key} isMobile={isMobile} index={key} />
            </div>
          ))}
        </div>
      </div>

      <div className='block md:hidden relative h-screen'>
        <div className='flex flex-col items-center justify-center'>
          {cards.map((card, key) => (
            <div
              key={key}
              className={`w-full cursor-pointer items-center justify-center relative`}
              onClick={() => handleClick(key)}
            >
              <Card card={card} selected={selected === key} isMobile={isMobile} index={key} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
