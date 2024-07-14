"use client"
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

function Lounge() {
    const fourShowcaseRef = useRef(null);
    const compresDivRef = useRef(null);
    const compresTextRef = useRef(null);


    useEffect(() => {
        const showFourShowcase = () => {

            gsap.killTweensOf(fourShowcaseRef.current);
            gsap.killTweensOf(compresDivRef.current);
            gsap.killTweensOf(compresTextRef.current);

            gsap.fromTo('.coverVideo',
                { display: 'block',  duration: 0, },
                { display: 'none', duration: 0, }
            );

            gsap.fromTo(fourShowcaseRef.current,
                { display: 'none', opacity:0, duration: 0.5, },
                { display: 'block', duration: 0.1, opacity:1 }
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

        const hideFourShowcase = () => {


            gsap.killTweensOf(fourShowcaseRef.current);
            gsap.killTweensOf(compresDivRef.current);
            gsap.killTweensOf(compresTextRef.current);

            gsap.fromTo('.coverVideo',
                { display: 'none',  duration: 0, },
                { display: 'block', duration: 0, }
            );

            gsap.to(fourShowcaseRef.current,
                { display: 'none', duration: 0.1 }
            );

            gsap.to(compresDivRef.current,                
                { width: '100%', duration: 1, ease: "power4.out", },
                { width: '0%', left: '0',right:'auto' }
            );
        };

        const spanElement = document.querySelector('.four');
        if (spanElement) {
            spanElement.addEventListener('mouseenter', showFourShowcase);
            spanElement.addEventListener('mouseleave', hideFourShowcase);
        }

        return () => {
            if (spanElement) {
                spanElement.removeEventListener('mouseenter', showFourShowcase);
                spanElement.removeEventListener('mouseleave', hideFourShowcase);
            }
        };
    }, []);

    return (
        <div ref={fourShowcaseRef} className="showcase  bg-[url('/lounge_bg.jpg')] hidden">
            <div className='fourShowcase'> 
            <div className="flex flex-col lg:flex-row justify-center">
                <div className='pt-24 lg:pt-24 pr-0 lg:pr-10 sansita text-6xl text-white'>
                Lounge
                </div>
                <div className='pt-20 lg:pt-20'>
                    <div className='compresCover'>
                        <div ref={compresDivRef} className='compresDiv'>
                            <div className="compresImgLtoR bg-[url('/lounge_box.jpg')]">
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

export default Lounge;
