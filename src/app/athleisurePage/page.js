"use client"
import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import MenuAnimation from '../menu';
import LeftNavInner from '../leftNavinner';
import TopNav from '../topNav';
import CustomCursor from '../component/customCursor';

import SquerAnimation from '../squerAnimation';

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import LeftNav2 from '../leftNav2';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function AthleisurePage() {
    const threeShowcaseRef = useRef(null);
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


    return (
        <>
            <CustomCursor />
            <SquerAnimation/>
            <div id="smooth-wrapper" ref={main}>
                <div id="smooth-content">                                                        
                    <TopNav />
                    <LeftNav2 />
                    <LeftNavInner />
                    <div ref={threeShowcaseRef} className="ShowCaseSection bg-[url('/athleisure_bg.jpg')] ">
                        <div className='threeShowcase'>
                            <div className="flex flex-col lg:flex-row justify-center">
                                <div className='pt-24 lg:pt-24 pr-0 lg:pr-10 sansita text-6xl text-white pl-3'>
                                    Athleisure
                                </div>
                                <div className='pt-20 lg:pt-20'>
                                    <div className='compresCoverSM lg:compresCover'>
                                        <div ref={compresDivRef} className='compresDivSM lg:compresDiv right-0 mr-4'>
                                            <div className="bg-[url('/athleisure_box.jpg')] bg-contain compresImgSM lg:compresImg ">
                                            </div>
                                        </div>
                                    </div>
                                    <p className='text-3xl text-white pl-3' ref={compresTextRef} >Build a quality brand <br /> worth your effort</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=' flex justify-center items-center relative bg-white py-5 pl-5 pr-5'>
                        <div class="flex flex-col md:flex-row  ">
                            <div className='lg:basis-1/2 pt-[115px]'>
                                <p className='text-[30px] font-normal text-[#00305F] gurmukhi' >Brand Type: </p>
                                <p className='text-[60px] font-medium text-[#00305F] gurmukhi' >Athleisure</p>
                            </div>
                            <div className='lg:basis-1/2 pt-[85px]'>
                                <p className='text-[33px] font-medium text-[#00305F] gurmukhi' >A casual clothing brand offers comfortable, everyday wear focusing on practicality and relaxed style. These brands use stretch materials and simple designs, perfect for informal settings. Examples include Vuori and Rhone.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default AthleisurePage;
