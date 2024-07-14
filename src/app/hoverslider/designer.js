"use client"
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

function Designer() {
    const oneShowcaseRef = useRef(null);
    const compresDivRef = useRef(null);
    const compresTextRef = useRef(null);


    useEffect(() => {
        const showOneShowcase = () => {

            gsap.killTweensOf(oneShowcaseRef.current);
            gsap.killTweensOf(compresDivRef.current);
            gsap.killTweensOf(compresTextRef.current);

            gsap.fromTo('.coverVideo',
                { display: 'block',  duration: 0, },
                { display: 'none', duration: 0, }
            );

          

            gsap.fromTo(oneShowcaseRef.current,
                { display: 'none', opacity:0, duration: 0.5, },
                { display: 'block', duration: 0.1, opacity:1 }
            );

         


    //   left to right
            // gsap.fromTo(compresDivRef.current,
            //     { width: '0%', left: '0',right:'auto' },
            //     { width: '100%', duration: 1, ease: "power4.out", }
            // );
    
    //   right to left
            // gsap.fromTo(compresDivRef.current,
            //     { width: '0%', right: '0', left: 'auto' },
            //     { width: '100%', duration: 1, ease: "power4.out", }
            // );
    
             
            gsap.fromTo(compresDivRef.current,
                {delay:0.5, height: '0%', bottom: '0', top: 'auto' },
                { height: '100%', duration: 1, ease: "power4.out", }
            );






            gsap.fromTo(compresTextRef.current,
                {opacity:0, x:-200},
                {opacity:1,x:0, duration:0.5 }
            );


        };

        const hideOneShowcase = () => {

            gsap.killTweensOf(oneShowcaseRef.current);
            gsap.killTweensOf(compresDivRef.current);
            gsap.killTweensOf(compresTextRef.current);

            gsap.fromTo('.coverVideo',
                { display: 'none',  duration: 0, },
                { display: 'block', duration: 0, }
            );


            gsap.to(oneShowcaseRef.current,
                { display: 'none', duration: 0.1 }
            );

            // gsap.to(compresDivRef.current,
            //     { width: '0%', duration: 1, ease: "power4.out" }
            // );

            gsap.fromTo(compresDivRef.current,
                { height: '100%', top: 'auto' },
                { height: '0%', duration: 1, ease: "power4.out",  bottom: '0', }
            );

            gsap.fromTo(oneShowcaseRef.current,
                { display: 'block', duration: 0.2, opacity:1 },
                { display: 'none', opacity:0, duration: 0.5, }
               
            );
        };

        const spanElement = document.querySelector('.one');
        if (spanElement) {
            spanElement.addEventListener('mouseenter', showOneShowcase);
            spanElement.addEventListener('mouseleave', hideOneShowcase);
        }
        return () => {
            if (spanElement) {
                spanElement.removeEventListener('mouseenter', showOneShowcase);
                spanElement.removeEventListener('mouseleave', hideOneShowcase);
            }
        };


        
    }, []);

    return (
        <>
        <div ref={oneShowcaseRef} className="showcase  bg-[url('/designer_bg.jpg')] hidden">
            <div className='oneShowcase pl-20 lg:ml-0 '> 
            <div className="flex flex-col lg:flex-row justify-center">
                <div className='pt-24 lg:pt-24 pr-0 lg:pr-10 sansita text-6xl text-white'>
                    Designer
                </div>
                <div className='pt-20 lg:pt-20'>
                    <div className='compresCover'>
                        <div ref={compresDivRef} className='compresDiv'>
                            <div className="compresImgB bg-[url('/designer_box.jpg')]">
                            </div>
                        </div>
                    </div>
                    <p className='text-3xl text-white'  ref={compresTextRef} >Build a quality brand <br /> worth your effort</p>
                </div>
            </div>
            </div>
        </div>

        </>
    );
}

export default Designer;




