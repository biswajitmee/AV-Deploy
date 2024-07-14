"use client";
import React, {  useLayoutEffect } from 'react';
import { gsap } from 'gsap';

 
function SquerAnimation() { 

  useLayoutEffect(() => {    

    gsap.fromTo('.leftBar', {
      position: 'absolute', height: '100vh', left: '0', backgroundColor: "#fff", width: '34vw'
     }, {
     zIndex: '30', position: 'absolute', height: '100vh', left: '0', width: '0px', backgroundColor: "#fff", duration: 1.5, ease: "power3.out",
     });
 
     gsap.fromTo('.righttBar', {
        position: 'absolute', height: '100vh', right: '0', backgroundColor: "#fff", width: '34vw'
     }, {
         zIndex: '30', position: 'absolute', height: '100vh', right: '0', width: '0px', backgroundColor: "#fff", duration: 1.5,ease: "power3.out",
     });
 
     gsap.fromTo('.topBar', {
     position: 'absolute', top: '0', height: '10vh', width: '100vw', backgroundColor: "#fff",
     }, {
         zIndex: '30', position: 'absolute', top: '0', height: '0vh', width: '100vw', backgroundColor: "#fff", duration: 1.5,ease: "power3.out",
     });
 
     gsap.fromTo('.bottomBar', {
        position: 'absolute', bottom: '0', height: '10vh', width: '100vw', backgroundColor: "#fff",
     }, {
      zIndex: '30', position: 'absolute', bottom: '0', height: '0vh', width: '100vw', backgroundColor: "#fff", duration: 1.5,ease: "power3.out",
     });
 
  


     

  }, []);
  

  return (
    <>
        

     

    </>
  )
}

export default SquerAnimation