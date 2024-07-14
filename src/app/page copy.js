"use client";
import React, { useState, useLayoutEffect, useRef } from 'react';



import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from 'gsap/ScrollSmoother';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
import Loader from './loader';
import Designer from './hoverslider/designer';
import Casual from './hoverslider/casual';
import Athleisure from './hoverslider/athleisure';
import Lounge from './hoverslider/Lounge';
import CustomCursor from './component/customCursor';
import LogoScroller from './component/brandHorizentalAnimation';
import WhatWeDo from './component/whatWeDo';
import MenuAnimation from './menu11';
import KeyFeature from './component/keyFeature';

import CardCarousel from './component/CardCarousel';
import Highstreet from './hoverslider/highstreet';
import Athletic from './hoverslider/athletic';
import Swim from './hoverslider/swim';
import Denim from './hoverslider/denim';
import Fullfashion from './hoverslider/fullfashion';
import Outdoors from './hoverslider/outdoors';
import Others from './hoverslider/others';
import Slider from './component/slider';
import Compare from './component/compare';
import Faq from './component/faq';
import Howcanhelp from './component/howcanhelp';
import LeftNav from './leftNav';
import TopNav from './topNav';
import LeftNav2 from './squerAnimation';
import SquerAnimation from './squerAnimation';


const images = {
  Designer: 'designer_box.jpg',
  Casual: 'casual_box.jpg',
  Athleisure: 'athleisure_box.jpg',
  Lounge: 'lounge_box.jpg',
  HighStreet: 'highstreet_box.jpg',
  Athletic: 'athletics_box.jpg',
  Swim: 'swim_box.jpg',
  Denim: 'denim_box.jpg',
  Fullfashion: 'fullfashion_box.jpg',
  Outdoors: 'outdoors_box.jpg'
};

export default function Home() {
  const main = useRef();
  const smoother = useRef();
  const [hoveredItem, setHoveredItem] = useState(null);
  const menuItems = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      smoother.current = ScrollSmoother.create({
        smooth: 2,
        effects: true,
      });
   
      });

  }, []);

  return (
    <>      
      <CustomCursor />    
      <div id="smooth-wrapper" ref={main}>
        <div id="smooth-content">
        <TopNav /> 
        <LeftNav/>        
        <LeftNav2/>
          <div className="ShowCaseSection">
            <div className="showcase w-full h-full inset-0">
            
            <SquerAnimation />


              <div className='videoCover'>
                <video
                  className="w-full h-full object-cover coverVideo"
                  src="bg_video.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
                <div className='intro hidden md:block'>Since 2006, we’ve been manufacturing clothing in Los Angeles for the
                  most innovative designer brands, creating, building, and delivering apparel worth talking about.</div>
                <div className='introHeading hidden  md:block'>
                  <div>We produce </div>
                  <div className='text-right'>luxury cloth</div>
                </div>
              </div>
            </div>
            <Designer />
            <Casual />
            <Athleisure />
            <Lounge />
            <Highstreet />
            <Athletic />
            <Swim />
            <Denim />
            <Fullfashion />
            <Outdoors />
            <Others />
          </div>
          <div className="ScrollSection bg-white pt-5 ">
            <LogoScroller />
            <WhatWeDo />
          </div>
          <Slider />
          <KeyFeature />
         
          <CardCarousel />

         

          <Compare />

          <Faq />

          <Howcanhelp />



       
        </div>
      </div>
    </>
  );
}