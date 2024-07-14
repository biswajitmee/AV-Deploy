"use client";
import React, {  useLayoutEffect } from 'react';
import { gsap } from 'gsap';

function Loader() {
    useLayoutEffect(() => {
        gsap.fromTo('.leftBarLoader', {
            position: 'absolute', height: '100vh', left: '0', backgroundColor: "#fff", width: '34vw',   zIndex: '100',
           }, {
            delay:1,  zIndex: '50', position: 'absolute', height: '100vh', left: '0', width: '0px', backgroundColor: "#fff", duration: 1.5, ease: "power3.out",
           });
       
           gsap.fromTo('.righttBarLoader', {
              position: 'absolute', height: '100vh', right: '0', backgroundColor: "#fff", width: '34vw',  zIndex: '100',
           }, {
            delay:1, zIndex: '50', position: 'absolute', height: '100vh', right: '0', width: '0px', backgroundColor: "#fff", duration: 1.5,ease: "power3.out",
           });
       
           gsap.fromTo('.topBarLoader', {
           position: 'absolute', top: '0', height: '10vh', width: '100vw', backgroundColor: "#fff",  zIndex: '100',
           }, {
            delay:1, zIndex: '50', position: 'absolute', top: '0', height: '0vh', width: '100vw', backgroundColor: "#fff", duration: 1.5,ease: "power3.out",
           });
       
           gsap.fromTo('.bottomBarLoader', {
              position: 'absolute', bottom: '0', height: '10vh', width: '100vw', backgroundColor: "#fff", zIndex: '100',
           }, {
            delay:1,  zIndex: '50', position: 'absolute', bottom: '0', height: '0vh', width: '100vw', backgroundColor: "#fff", duration: 1.5,ease: "power3.out",
           });
       
    }, []);

     return (
        <>
          
                <div className="leftBarLoader"></div>
                <div className="righttBarLoader"></div>
                <div className="topBarLoader"></div>
                <div className="bottomBarLoader"></div>

               
    
        </>
    )
}

export default Loader