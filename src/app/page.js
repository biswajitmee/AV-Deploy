"use client";
import React, { useState, useLayoutEffect, useRef } from 'react';
import Link from 'next/link';


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
import MenuAnimation from './menu';
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

      menuItems.current.forEach((item) => {
        const underline = item.querySelector('.underline');
        const textWidth = item.offsetWidth;


        item.addEventListener('mouseenter', () => {
          gsap.fromTo(underline,
            { width: '0', duration: 0.5, left: 0 },
            { width: textWidth, duration: 0.5, left: 0 });
        });

        item.addEventListener('mouseleave', () => {
          gsap.fromTo(underline,
            { width: textWidth, duration: 0.5, right: 0 },
            { width: '0', duration: 0.5, right: 0 }
          );
        });
      });


    }, main);
    return () => ctx.revert();


  }, []);

  return (
    <>
      <CustomCursor />
      <SquerAnimation />
      <div id="smooth-wrapper" ref={main}>
        <div id="smooth-content">
          <nav className="absolute w-full z-50 mt-3">
            <div className="relative w-full mx-auto flex items-center justify-between">
              <div className="absolute left-0 h-12 flex items-center justify-center">
                <MenuAnimation />
              </div>
              <div className="logo w-24 h-12 mx-auto flex items-center justify-center">
                <Link href="/">
                  <img src='./logo_av.svg' alt="Logo" className="cursor-pointer" />
                </Link>
              </div>
              <div className="absolute right-0 mr-4 h-12 flex items-center justify-center">
                <a href="#" className="schduleSM lg:schdule">Schedule a call</a>
              </div>
            </div>
          </nav>


          <div className='menuContentCover lg:hidden'>
            <div className='menuContent'>
              <li ref={el => menuItems.current[0] = el} className="menuItem">
                What We Do
                <div className="underline"></div>
              </li>
              <li ref={el => menuItems.current[1] = el} className="menuItem">
                About Us
                <div className="underline"></div>
              </li>
              <li ref={el => menuItems.current[2] = el} className="menuItem">
                Latest News
                <div className="underline"></div>
              </li>
              <li ref={el => menuItems.current[3] = el} className="menuItem">
                Get in Touch
                <div className="underline"></div>
              </li>
            </div>
          </div>
          
          <LeftNav />



          <div className="leftPanel2 absolute inset-0 flex items-center w-64 z-40">
            <div className="pl-3">
              <div className='menuContent'>
                <li ref={el => menuItems.current[0] = el} className="menuItem">
                  What We Do
                  <div className="underline"></div>
                </li>
                <li ref={el => menuItems.current[1] = el} className="menuItem">
                  About Us
                  <div className="underline"></div>
                </li>
                <li ref={el => menuItems.current[2] = el} className="menuItem">
                  Latest News
                  <div className="underline"></div>
                </li>
                <li ref={el => menuItems.current[3] = el} className="menuItem">
                  Get in Touch
                  <div className="underline"></div>
                </li>
              </div>


              {Object.keys(images).map((item, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredItem(item)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className="left_nav"
                >
                  <Link href={`/${item.toLowerCase()}Page`}>{item}</Link>
                </div>
              ))}
            </div>
          </div>

          <div className="ShowCaseSection">
            <div className="showcase w-full h-full inset-0">
              <div className="leftBar"></div>
              <div className="righttBar"></div>
              <div className="topBar"></div>
              <div className="bottomBar"></div>
              <div className="cornerShowcase z-50 ">

                <div className="absolute top-0 left-0 z-50">
                  <img src="corner-left-top-2.svg" alt="top-left corner" className="w-8 h-8" />
                </div>

                <div className="absolute top-0 right-0 z-50">
                  <img src="corner-right-top-2.svg" alt="top-right corner" className="w-8 h-8" />
                </div>

                <div className="absolute bottom-0 left-0 z-50">
                  <img src="corner-left-bottom-2.svg" alt="bottom-left corner" className="w-8 h-8" />
                </div>

                <div className="absolute bottom-0 right-0 z-50">
                  <img src="corner-right-bottom-2.svg" alt="bottom-right corner" className="w-8 h-8" />
                </div>

                {Object.keys(images).map((item, index) => (
                  <img
                    key={index}
                    src={images[item]}
                    alt={item}
                    className={`cornerBox absolute w-64 h-auto transition-opacity duration-300 ${hoveredItem === item ? 'opacity-100' : 'opacity-0'}`}
                    style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', }}
                  />
                ))}
              </div>

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
            <Slider />
            <KeyFeature />
            <CardCarousel />
            <Compare />
            <Faq />
            <Howcanhelp />

          </div>





        </div>
      </div>
    </>
  );
}
