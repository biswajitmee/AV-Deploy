"use client"
import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import MenuAnimation from '../menu';
import LeftNavInner from '../leftNavinner';


import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import CustomCursor from '../component/customCursor';
import TopNav from '../topNav';
import LeftNav2 from '../leftNav2';
import SquerAnimation from '../squerAnimation';
 

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
function SwimPage() {
    const sevenShowcaseRef = useRef(null);
    const compresDivRef = useRef(null);
    const compresTextRef = useRef(null);

    const main = useRef();
    const smoother = useRef();

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            smoother.current = ScrollSmoother.create({
                smooth: 2,
                effects: true,
            });

        }, main);
        return () => ctx.revert();


    }, []);

    // useEffect(() => {
    //     const showSevenShowcase = () => {

    //         gsap.killTweensOf(sevenShowcaseRef.current);
    //         gsap.killTweensOf(compresDivRef.current);
    //         gsap.killTweensOf(compresTextRef.current);

    //         gsap.fromTo('.coverVideo',
    //             { display: 'block',  duration: 0, },
    //             { display: 'none', duration: 0, }
    //         );

    //         gsap.fromTo(sevenShowcaseRef.current,
    //             { display: 'none', opacity:0, duration: 0.5, },
    //             { display: 'block', duration: 0.5, opacity:1 }
    //         );

    //         gsap.fromTo(compresDivRef.current,
    //             {delay:0.5, height: '0%', bottom: '0', top: 'auto' },
    //             { height: '100%', duration: 1, ease: "power4.out", }
    //         );

    //         gsap.fromTo(compresTextRef.current,
    //             {opacity:0, x:-200},
    //             {opacity:1,x:0, duration:0.5 }
    //         );


    //     };

    //     const hideSevenShowcase = () => {

    //         gsap.killTweensOf(sevenShowcaseRef.current);
    //         gsap.killTweensOf(compresDivRef.current);
    //         gsap.killTweensOf(compresTextRef.current);

    //         gsap.fromTo('.coverVideo',
    //             { display: 'none',  duration: 0, },
    //             { display: 'block', duration: 0, }
    //         );


    //         gsap.to(sevenShowcaseRef.current,
    //             { display: 'none', duration: 0.1 }
    //         );

    //         gsap.fromTo(compresDivRef.current,
    //             { height: '100%', top: 'auto' },
    //             { height: '0%', duration: 1, ease: "power4.out",  bottom: '0', }
    //         );

    //     };

    //     const spanElement = document.querySelector('.seven');
    //     if (spanElement) {
    //         spanElement.addEventListener('mouseenter', showSevenShowcase);
    //         spanElement.addEventListener('mouseleave', hideSevenShowcase);
    //     }

    //     return () => {
    //         if (spanElement) {
    //             spanElement.removeEventListener('mouseenter', showSevenShowcase);
    //             spanElement.removeEventListener('mouseleave', hideSevenShowcase);
    //         }
    //     };
    // }, []);

    return (
        <>
         <CustomCursor />
         <SquerAnimation/>
            <div id="smooth-wrapper" ref={main}>
                <div id="smooth-content">
       <TopNav />
       <LeftNav2/>
       <LeftNavInner />
        <div ref={sevenShowcaseRef} className="ShowCaseSection  bg-red-500 bg-[url('/swim_bg.jpg')] ">
            <div className='sevenShowcase'> 
            <div className="flex flex-col lg:flex-row justify-center">
                <div className='pt-24 lg:pt-24 pr-0 lg:pr-10 sansita text-6xl text-white'>
                Swim
                </div>
                <div className='pt-20 lg:pt-20'>
                    <div className='compresCoverSM lg:compresCover'>
                        <div ref={compresDivRef} className='compresDivSM right-0 mr-4 lg:compresDiv'>
                            <div className="compresImgBSM lg:compresImgB bg-[url('/swim_box.jpg')] bg-contain">
                            </div>
                        </div>
                    </div>
                    <p className='text-3xl text-white'  ref={compresTextRef} >Build a quality brand <br /> worth your effort</p>
                </div>
            </div>
            </div>

        </div>
        <div className=' flex justify-center items-center relative bg-white py-5 pl-5 pr-5'>
                            <div class="flex flex-col md:flex-row  ">
                                <div className='lg:basis-1/2 pt-[115px]'>
                                    <p className='text-[30px] font-normal text-[#00305F] gurmukhi' >Brand Type: </p>
                                    <p className='text-[60px] font-medium text-[#00305F] gurmukhi' >Swim</p>
                                </div>
                                <div  className='lg:basis-1/2 pt-[85px]'>
                                    <p className='text-[33px] font-medium text-[#00305F] gurmukhi' >A contemporary swim brand offering stylish, high-quality swimsuits made from sustainable materials, combining modern designs with exceptional comfort and fit.</p>
                                </div>
                            </div>
                        </div>
        </div>
        </div>
        </>
    );
}

export default SwimPage;
