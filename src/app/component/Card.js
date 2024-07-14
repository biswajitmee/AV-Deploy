import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const Card = ({ card, selected, isMobile , index  }) => {
  const cardRef = useRef(null);
  const videoRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (selected) {
      const direction = selected ? -1 : 1;

      gsap.to(cardRef.current, {
        height: isMobile ? '40rem' : '100vh',
        duration: 1,
        ease: 'power4.inOut',
        onComplete: () => {
          gsap.fromTo(videoRef.current, { x: direction * 0, opacity: 1 }, { x: 0, opacity: 1, duration: 1, ease: 'power4.inOut' });
          gsap.fromTo(textRef.current, { x: direction * 0, opacity: 1 }, { x: 0, opacity: 1, duration: 1, ease: 'power4.inOut' });
        },
      });
    } else {
      gsap.to(cardRef.current, {
        height: isMobile ? '5.5rem' : '100vh',
        duration: 1,
        ease: 'power4.inOut',
      });
    }
  }, [selected, isMobile]);

  useEffect(() => {
    gsap.set(videoRef.current, { x: 0, opacity: 1 });
    gsap.set(textRef.current, { x: 0, opacity: 1 });
  }, []);
 // Positioning logic based on index for desktop view
 const getTitlePosition = (index) => {
  if (!isMobile) {
    switch (index) {
      case 0:
        return 'mt-[107px] pl-[13px]';
      case 1:
        return 'mt-[112px] pl-[8px]';
      case 2:
        return 'mt-[106px] pl-[19px]';
      case 3:
        return 'mt-[120px] l-[22px]';
      case 4:
        return 'mt-[123px] ml-[-5px]';
      
    }
  } else {
    return ''; // No specific positioning for mobile
  }
};
  return (
    <div className={`relative overflow-hidden md:border-tr-white mt-[-2px] rounded-md ${index === 0 ? 'md:border-solid md:border-l ' : ''}`}>
      <div ref={cardRef} className={`md:h-screen rounded-md ${selected ? 'h-40' : 'h-12 '} ${card.bgCardColor}`}>
        <div className="flex">
          {/* Right Side (cardTitle) */}
          <div className={`absolute font-semibold text-[16px] roboto ${card.textColor} ${getTitlePosition(index)} ${isMobile ? 'w-1/2 mt-[35px] left-0 text-left pl-[30px]' : 'mt-[100px]'}`}>
            <h2 className=' md:rotate-270 roboto'>{card.cardTitle}</h2>
          </div>
          {/* Left Side (cardNo) */} 
          <span className={`pl-[30px] font-semibold text-[20px]  absolute ${card.textColor} ${isMobile ? 'w-1/2 right-0 text-right  pr-[25px] pt-[35px]' : 'pt-[45px]'}`}>{card.cardNo}</span>
        </div>
        <div className={`${isMobile ? '' : 'flex'}`}>
          <div ref={videoRef} className={`${isMobile ? 'w-full mt-[150px]' : 'w-[60%] pl-[80px]'} h-full overflow-hidden`}>
            <video className="md:h-screen object-cover" autoPlay muted>
              <source src={card.videoSource} type="video/mp4" />
              {card.videoSource}
            </video>
          </div>
          <div ref={textRef} className={`flex items-center ${isMobile ? 'w-full h-[300px] text-center' : 'w-[40%] h-screen'} p-4 overflow-hidden `}>
            <p className="text-[#00305F] text-[20px] overflow-hidden h-[120px] w-full md:w-[300px] pl-[25px]">
              {card.content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
