"use client"
import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import MenuAnimation from '../menu';
import LeftNavInner from '../leftNavinner';
import TopNav from '../topNav';
import CustomCursor from '../component/customCursor';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import LeftNav2 from '../leftNav2';
import SquerAnimation from '../squerAnimation';
 

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function FullfashionPage() {
    const nineShowcaseRef = useRef(null);
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
       <LeftNav2/>
       <LeftNavInner />
        <div ref={nineShowcaseRef} className="ShowCaseSection   bg-[url('/fullfashion_bg.jpg')] ">
           <div className='nineShowcase'> 
            <div className="flex flex-col lg:flex-row justify-center">
                <div className='pt-24 lg:pt-24 pr-0 lg:pr-10 sansita text-6xl text-white'>
                Full Fashion
                </div>
                <div className='pt-20 lg:pt-20'>
                    <div className='compresCoverSM lg:compresCover'>
                        <div ref={compresDivRef} className='compresDivSM right-0 mr-4 lg:compresDiv'>
                            <div className="compresImgSM lg:compresImg bg-[url('/fullfashion_box.jpg')] bg-contain">
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
                                    <p className='text-[60px] font-medium text-[#00305F] gurmukhi' >Full Fashion</p>
                                </div>
                                <div  className='lg:basis-1/2 pt-[85px]'>
                                    <p className='text-[33px] font-medium text-[#00305F] gurmukhi' >A luxury full-fashion brand seeking high-quality yarn and statement pieces, combining timeless designs with modern touches, from grade A cashmere, wool, alpaca, to organic cotton, and more.</p>
                                </div>
                            </div>
                        </div>
        </div>
        </div>
        </>
    );
}

export default FullfashionPage;
