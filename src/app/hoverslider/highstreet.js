"use client"
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

function Highstreet() {
    const fiveShowcaseRef = useRef(null);
    const compresDivRef = useRef(null);
    const compresTextRef = useRef(null);


    useEffect(() => {
        const showFiveShowcase = () => {

            gsap.killTweensOf(fiveShowcaseRef.current);
            gsap.killTweensOf(compresDivRef.current);
            gsap.killTweensOf(compresTextRef.current);

            gsap.fromTo('.coverVideo',
                { display: 'block',  duration: 0, },
                { display: 'none', duration: 0, }
            );


            gsap.fromTo(fiveShowcaseRef.current,
                { display: 'none', opacity:0, duration: 0.5, },
                { display: 'block', duration: 0.5, opacity:1 }
            );

             // left to right
             gsap.fromTo(compresDivRef.current,
                { width: '0%', left: '0',right:'auto' },
                { width: '100%', duration: 1, ease: "power4.out", }
            );

            gsap.fromTo(compresTextRef.current,
                {opacity:0, x:-200},
                {opacity:1,x:0, duration:0.5 }
            );


        };

        const hideFiveShowcase = () => {

            gsap.killTweensOf(fiveShowcaseRef.current);
            gsap.killTweensOf(compresDivRef.current);
            gsap.killTweensOf(compresTextRef.current);

            gsap.fromTo('.coverVideo',
                { display: 'none',  duration: 0, },
                { display: 'block', duration: 0, }
            );


            gsap.to(fiveShowcaseRef.current,
                { display: 'none', duration: 0.1 }
            );

            gsap.to(compresDivRef.current,                
                { width: '100%', duration: 1, ease: "power4.out", },
                { width: '0%', left: '0',right:'auto' }
            );
        };

        const spanElement = document.querySelector('.five');
        if (spanElement) {
            spanElement.addEventListener('mouseenter', showFiveShowcase);
            spanElement.addEventListener('mouseleave', hideFiveShowcase);
        }

        return () => {
            if (spanElement) {
                spanElement.removeEventListener('mouseenter', showFiveShowcase);
                spanElement.removeEventListener('mouseleave', hideFiveShowcase);
            }
        };
    }, []);

    return (
        <div ref={fiveShowcaseRef} className="showcase   bg-[url('/highstreet_bg.jpg')] hidden">
           
           <div className='fiveShowcase'> 
            <div className="flex flex-col lg:flex-row justify-center">
                <div className='pt-24 lg:pt-24 pr-0 lg:pr-10 sansita text-6xl text-white'>
                High Street
                </div>
                <div className='pt-20 lg:pt-20'>
                    <div className='compresCover'>
                        <div ref={compresDivRef} className='compresDiv'>
                            <div className="compresImgLtoR bg-[url('/highstreet_box.jpg')]">
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

export default Highstreet;
