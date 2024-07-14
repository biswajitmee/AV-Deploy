import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const KeyFeature = () => {
  const divs = useRef([]);

  const keyFeatures = [
    { id: 1, title: 'Early Stage', content: 'We have formed a process that gives our customers clarity and takes care of all your needs in any way possible. We&apos;ll walk you through it in our introduction meeting.' },
    { id: 2, title: 'Trust', content: 'We have formed a process that gives our customers clarity and takes care of all your needs in any way possible. We&apos;ll walk you through it in our introduction meeting.' },
    { id: 3, title: 'Loyalty', content: 'We have formed a process that gives our customers clarity and takes care of all your needs in any way possible. We&apos;ll walk you through it in our introduction meeting.' },
    { id: 4, title: 'Quality', content: 'We have formed a process that gives our customers clarity and takes care of all your needs in any way possible. We&apos;ll walk you through it in our introduction meeting.' },
    { id: 5, title: 'Expenditure', content: 'We have formed a process that gives our customers clarity and takes care of all your needs in any way possible. We&apos;ll walk you through it in our introduction meeting.' },
    { id: 6, title: 'Success', content: 'We have formed a process that gives our customers clarity and takes care of all your needs in any way possible. We&apos;ll walk you through it in our introduction meeting.' },
  ];

  useEffect(() => {
    divs.current.forEach((div) => {
      div.addEventListener('mouseenter', () => {
        gsap.to(div, { flexGrow: 3, duration: 0.5 });
      });

      div.addEventListener('mouseleave', () => {
        gsap.to(divs.current, { flexGrow: 1, duration: 0.5 });
      });
    });
  }, []);

  return (
    <div className='KeayFeatureSection  text-black pb-[20px] bg-white'> 
    <div className='bg-white'>
      <p className='md:text-[45px] text-[40px] pl-6 py-10 lg:text-[45px] lg:pl-[40px] lg:pt-[175px] lg:pb-[150px] md:pt-[175px] md:pb-[150px] lg:w-1/2 leading-tight gurmukhi'>
        After helping hundreds of brands, there are a few key things we&apos;ve learned are needed to do the best work
      </p>
      </div>
      <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row">
        {keyFeatures.map((feature, index) => (
          <div ref={el => divs.current[index] = el} key={feature.id} className="grow lg:h-80 md:h-80 sm:h-80 ">
            <div className=" pt-7 pb-7 md:cutout lg:cutout  ">
              <div className="flex flex-col items-stretch sm:grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 h-60">
                <div className="grow text-black flex items-stretch">
                  <div className="self-start pl-6">
                    <div className='absolute'> 
                      {`0${feature.id}`}
                    </div>
                  </div>
                  <div className="self-end text-left text-black text-xl">{feature.title}</div>
                </div>
                <div className="text-black self-end px-7 lg:px-0 md:px-0 sm:px-0">{feature.content}</div>
              </div>
            </div>
            <div className='lineKey lg:lineKeyLG md:lineKeyLG'></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default KeyFeature;
