"use client"
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

function Swim() {
    const sevenShowcaseRef = useRef(null);
    const compresDivRef = useRef(null);
    const compresTextRef = useRef(null);


    useEffect(() => {
        const showSevenShowcase = () => {

            gsap.killTweensOf(sevenShowcaseRef.current);
            gsap.killTweensOf(compresDivRef.current);
            gsap.killTweensOf(compresTextRef.current);

            gsap.fromTo('.coverVideo',
                { display: 'block',  duration: 0, },
                { display: 'none', duration: 0, }
            );

            gsap.fromTo(sevenShowcaseRef.current,
                { display: 'none', opacity:0, duration: 0.5, },
                { display: 'block', duration: 0.5, opacity:1 }
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

        const hideSevenShowcase = () => {

            gsap.killTweensOf(sevenShowcaseRef.current);
            gsap.killTweensOf(compresDivRef.current);
            gsap.killTweensOf(compresTextRef.current);

            gsap.fromTo('.coverVideo',
                { display: 'none',  duration: 0, },
                { display: 'block', duration: 0, }
            );


            gsap.to(sevenShowcaseRef.current,
                { display: 'none', duration: 0.1 }
            );

            gsap.fromTo(compresDivRef.current,
                { height: '100%', top: 'auto' },
                { height: '0%', duration: 1, ease: "power4.out",  bottom: '0', }
            );

        };

        const spanElement = document.querySelector('.seven');
        if (spanElement) {
            spanElement.addEventListener('mouseenter', showSevenShowcase);
            spanElement.addEventListener('mouseleave', hideSevenShowcase);
        }

        return () => {
            if (spanElement) {
                spanElement.removeEventListener('mouseenter', showSevenShowcase);
                spanElement.removeEventListener('mouseleave', hideSevenShowcase);
            }
        };
    }, []);

    return (
        <div ref={sevenShowcaseRef} className="showcase  bg-red-500 bg-[url('/swim_bg.jpg')] hidden">
            <div className='sevenShowcase'> 
            <div className="flex flex-col lg:flex-row justify-center">
                <div className='pt-24 lg:pt-24 pr-0 lg:pr-10 sansita text-6xl text-white'>
                Swim
                </div>
                <div className='pt-20 lg:pt-20'>
                    <div className='compresCover'>
                        <div ref={compresDivRef} className='compresDiv'>
                            <div className="compresImgB bg-[url('/swim_box.jpg')]">
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

export default Swim;
