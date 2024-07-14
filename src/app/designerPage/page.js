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


function DesignerPage() {
   
 
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
        <div className="ShowCaseSection  bg-[url('/designer_bg.jpg')]">
            <div className='oneShowcase pl-20 lg:ml-0 '> 
            <div className="flex flex-col lg:flex-row justify-center">
                <div className='pt-24 lg:pt-24 pr-0 lg:pr-10 sansita text-6xl text-white'>
                    Designer
                </div>
                <div className='pt-20 lg:pt-20'>
                    <div className='compresCoverSM lg:compresCover'>
                        <div  className='compresDivSM right-0 mr-4 lg:compresDiv'>
                            <div className="compresImgBSM lg:compresImgB bg-[url('/designer_box.jpg')] bg-contain">
                            </div>
                        </div>
                    </div>
                    <p className='text-3xl text-white'  >Build a quality brand <br /> worth your effort</p>
                </div>
            </div>
            </div>
        </div>
        <div className=' flex justify-center items-center relative bg-white py-5 pl-5 pr-5'>
                            <div class="flex flex-col md:flex-row  ">
                                <div className='lg:basis-1/2 pt-[115px]'>
                                    <p className='text-[30px] font-normal text-[#00305F] gurmukhi' >Brand Type: </p>
                                    <p className='text-[60px] font-medium text-[#00305F] gurmukhi' >Designer</p>
                                </div>
                                <div  className='lg:basis-1/2 pt-[85px]'>
                                    <p className='text-[33px] font-medium text-[#00305F] gurmukhi' >A designer brand offers products made with high-quality fabrication and construction, often featuring intricate details. Examples include Alice & Olivia, Sandro, Helmut Lang, and others.</p>
                                </div>
                            </div>
                        </div>
        </div>
        </div>
      
        </>
    );
}

export default DesignerPage;