"use client"
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

function Athletic() {
    const sixShowcaseRef = useRef(null);
    const compresDivRef = useRef(null);
    const compresTextRef = useRef(null);


    useEffect(() => {
        const showSixShowcase = () => {

            gsap.killTweensOf(sixShowcaseRef.current);
            gsap.killTweensOf(compresDivRef.current);
            gsap.killTweensOf(compresTextRef.current);

            gsap.fromTo('.coverVideo',
                { display: 'block',  duration: 0, },
                { display: 'none', duration: 0, }
            );

            gsap.fromTo(sixShowcaseRef.current,
                { display: 'none', opacity:0, duration: 0.5, },
                { display: 'block', duration: 0.9, opacity:1 }
            );

            gsap.fromTo(compresDivRef.current,
                {delay:0.5, height: '0%', bottom: '0', top: 'auto' },
                { height: '100%', duration: 1, ease: "power4.out", }
            );

            gsap.fromTo(compresTextRef.current,
                {opacity:0, x:-200},
                {opacity:1,x:0, duration:0.5 }
            );


        };

        const hideSixShowcase = () => {

            gsap.killTweensOf(sixShowcaseRef.current);
            gsap.killTweensOf(compresDivRef.current);
            gsap.killTweensOf(compresTextRef.current);


            gsap.fromTo('.coverVideo',
                { display: 'none',  duration: 0, },
                { display: 'block', duration: 0, }
            );

            
            gsap.to(sixShowcaseRef.current,
                { display: 'none', duration: 0.1 }
            );

            gsap.fromTo(compresDivRef.current,
                { height: '100%', top: 'auto' },
                { height: '0%', duration: 1, ease: "power4.out",  bottom: '0', }
            );

            gsap.fromTo(sixShowcaseRef.current,
               
                { display: 'block', duration: 0.9, opacity:1 },
                { display: 'none', opacity:0, duration: 0.5, }
            );
        };

        const spanElement = document.querySelector('.six');
        if (spanElement) {
            spanElement.addEventListener('mouseenter', showSixShowcase);
            spanElement.addEventListener('mouseleave', hideSixShowcase);
        }

        return () => {
            if (spanElement) {
                spanElement.removeEventListener('mouseenter', showSixShowcase);
                spanElement.removeEventListener('mouseleave', hideSixShowcase);
            }
        };
    }, []);

    return (
        <div ref={sixShowcaseRef} className="showcase bg-[url('/athletics_bg.jpg')] hidden">          
          <div className='sixShowcase'> 
            <div className="flex flex-col lg:flex-row justify-center">
                <div className='pt-24 lg:pt-24 pr-0 lg:pr-10 sansita text-6xl text-white'>
                Athletics
                </div>
                <div className='pt-20 lg:pt-20'>
                    <div className='compresCover'>
                        <div ref={compresDivRef} className='compresDiv'>
                            <div className="compresImgB bg-[url('/athletics_box.jpg')]">
                            </div>
                        </div>
                    </div>
                    <p className='text-3xl text-white'  ref={compresTextRef} >Build a quality brand <br /> worth your effort</p>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Athletic;
