"use client";
import React, { useRef, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';

function TopNav() {
    const [isExpanded, setIsExpanded] = useState(false);


    
  const openMenuTimeline = () => {
 
    gsap.fromTo('.leftPanel',      
      { zIndex:'10', opacity:1  },
      { opacity:0, duration:0.5, zIndex:-10  },
     );

     gsap.fromTo('.intro', 
      { opacity:1  },
      { opacity:0, duration:0.5,  },
     );
     gsap.fromTo('.introHeading',      
      { opacity:1  },
      { opacity:0, duration:0.5,  },
     );



    gsap.fromTo('.leftBar', {
      zIndex: '30', position: 'absolute', height: '100vh', left: '0', width: '0px', backgroundColor: "#fff",
    }, {
      delay:0.5, position: 'absolute', height: '100vh', left: '0', backgroundColor: "#fff", duration: 1, width: '34vw', ease: "power4.in",
    });

    gsap.fromTo('.righttBar', {
      zIndex: '30', position: 'absolute', height: '100vh', right: '0', width: '0px', backgroundColor: "#fff",
    }, {
      delay:0.5, position: 'absolute', height: '100vh', right: '0', backgroundColor: "#fff", duration: 1, width: '34vw',ease: "power4.in",
    });

    gsap.fromTo('.topBar', {
      zIndex: '30', position: 'absolute', top: '0', height: '0vh', width: '100vw', backgroundColor: "#fff",
    }, {
      delay:0.5,  position: 'absolute', top: '0', height: '10vh', width: '100vw', backgroundColor: "#fff", duration: 1,ease: "power4.in",
    });

    gsap.fromTo('.bottomBar', {
      position: 'absolute', bottom: '0', height: '0vh', width: '100vw', backgroundColor: "#fff",
    }, {
      delay:0.5,  zIndex: '30', position: 'absolute', bottom: '0', height: '10vh', width: '100vw', backgroundColor: "#fff", duration: 1,ease: "power4.in",
    });

    gsap.fromTo('.leftPanel2', { 
      marginLeft:'-250px'
    }, {
        delay:1.1,marginLeft:'15px', duration:1, ease: "power4.out",
    });



    gsap.fromTo('.cornerShowcase',
      {display:'none'},
       {delay:1.5, display:'block'});

     

    gsap.to('.openMenubtn', {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        gsap.set('.openMenubtn', { display: 'none' });
        gsap.set('.closeMenubtn', { display: 'block' });
        gsap.to('.closeMenubtn', { opacity: 1, duration: 0.5 });
      }
    });
  };

  
  const closeMenuTimeline = () => {


    gsap.fromTo('.leftPanel',      
      { zIndex:'-10', opacity:0  },
      { delay:0.5, opacity:0, zIndex:10  },
     );

    gsap.fromTo('.leftPanel',      
       {  opacity:0  },
       {delay:2, opacity:1, duration:1,  },
      );

      gsap.fromTo('.intro',      
        { opacity:0  },
        { delay:0.5, opacity:1, duration:0.5,  },
       );
       gsap.fromTo('.introHeading',      
        { opacity:0  },
        {delay:0.5, opacity:1, duration:0.5,  },
       );

       


    gsap.fromTo('.cornerShowcase',
      {delay:0,display:'block'},
       {delay:0,display:'none'});

    gsap.fromTo('.leftBar', {
     position: 'absolute', height: '100vh', left: '0', backgroundColor: "#fff", width: '34vw'
    }, {
      delay:0.5, zIndex: '30', position: 'absolute', height: '100vh', left: '0', width: '0px', backgroundColor: "#fff", duration: 1.5, ease: "power3.out",
    });

    gsap.fromTo('.righttBar', {
       position: 'absolute', height: '100vh', right: '0', backgroundColor: "#fff", width: '34vw'
    }, {
      delay:0.5,  zIndex: '30', position: 'absolute', height: '100vh', right: '0', width: '0px', backgroundColor: "#fff", duration: 1.5,ease: "power3.out",
    });

    gsap.fromTo('.topBar', {
    position: 'absolute', top: '0', height: '10vh', width: '100vw', backgroundColor: "#fff",
    }, {
      delay:0.5,  zIndex: '30', position: 'absolute', top: '0', height: '0vh', width: '100vw', backgroundColor: "#fff", duration: 1.5,ease: "power3.out",
    });

    gsap.fromTo('.bottomBar', {
       position: 'absolute', bottom: '0', height: '10vh', width: '100vw', backgroundColor: "#fff",
    }, {
      delay:0.5,  zIndex: '30', position: 'absolute', bottom: '0', height: '0vh', width: '100vw', backgroundColor: "#fff", duration: 1.5,ease: "power3.out",
    });

   
    gsap.fromTo('.leftPanel2', 
      {marginLeft:'15px',}, 
      {delay:0.2, marginLeft:'-250px', duration:0.4,});
 



    gsap.to('.closeMenubtn', {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        gsap.set('.closeMenubtn', { display: 'none' });
        gsap.set('.openMenubtn', { display: 'block' });
        gsap.to('.openMenubtn', { opacity: 1, duration: 0.5 });
      }
    });
  };



  const openMenuMobile = () => {

    gsap.to('.leftPanel',    
      { left:-250 },
    );
 
  

    gsap.fromTo('.leftPanel2', { 
      marginLeft:'-250px'
    }, {
        delay:1.1,marginLeft:'15px', duration:1, ease: "power4.out",
    });



    gsap.fromTo('.leftBar', {
      zIndex: '30', position: 'absolute', height: '100vh', left: '0', width: '0px', backgroundColor: "#fff",
    }, {
      delay: 0.5, position: 'absolute', height: '100vh', left: '0', backgroundColor: "#fff", duration: 1, width: '2vw', ease: "power4.in",
    });

    gsap.fromTo('.righttBar', {
      zIndex: '30', position: 'absolute', height: '100vh', right: '0', width: '0px', backgroundColor: "#fff",
    }, {
      delay: 0.5, position: 'absolute', height: '100vh', right: '0', backgroundColor: "#fff", duration: 1, width: '2vw', ease: "power4.in",
    });

    gsap.fromTo('.topBar', {
      zIndex: '30', position: 'absolute', top: '0', height: '0vh', width: '100vw', backgroundColor: "#fff",
    }, {
      delay: 0.5, position: 'absolute', top: '0', height: '10vh', width: '100vw', backgroundColor: "#fff", duration: 1, ease: "power4.in",
    });

    gsap.fromTo('.bottomBar', {
      position: 'absolute', bottom: '0', height: '0vh', width: '100vw', backgroundColor: "#fff",
    }, {
      delay: 0.5, zIndex: '30', position: 'absolute', bottom: '0', height: '10vh', width: '100vw', backgroundColor: "#fff", duration: 1, ease: "power4.in",
    });

    gsap.to('.openMenubtn', {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        gsap.set('.openMenubtn', { display: 'none' });
        gsap.set('.closeMenubtn', { display: 'block' });
        gsap.to('.closeMenubtn', { opacity: 1, duration: 0.5 });
      }
    });


  }

  const closeMenuMobile = () => {
    gsap.to('.leftPanel',    
      { left:'5px' },
    );

 
    gsap.fromTo('.leftPanel2', 
      {marginLeft:'15px',}, 
      {delay:0.2, marginLeft:'-250px', duration:0.4,});
 
     


    gsap.fromTo('.leftBar', {
      position: 'absolute', height: '100vh', left: '0', backgroundColor: "#fff", width: '2vw'
    }, {
      delay: 0.5, zIndex: '30', position: 'absolute', height: '100vh', left: '0', width: '0px', backgroundColor: "#fff", duration: 1.5, ease: "power3.out",
    });
    gsap.fromTo('.righttBar', {
      position: 'absolute', height: '100vh', right: '0', backgroundColor: "#fff", width: '2vw'
    }, {
      delay: 0.5, zIndex: '30', position: 'absolute', height: '100vh', right: '0', width: '0px', backgroundColor: "#fff", duration: 1.5, ease: "power3.out",
    });
    gsap.fromTo('.topBar', {
      position: 'absolute', top: '0', height: '10vh', width: '100vw', backgroundColor: "#fff",
    }, {
      delay: 0.5, zIndex: '30', position: 'absolute', top: '0', height: '0vh', width: '100vw', backgroundColor: "#fff", duration: 1.5, ease: "power3.out",
    });
    gsap.fromTo('.bottomBar', {
      position: 'absolute', bottom: '0', height: '10vh', width: '100vw', backgroundColor: "#fff",
    }, {
      delay: 0.5, zIndex: '30', position: 'absolute', bottom: '0', height: '0vh', width: '100vw', backgroundColor: "#fff", duration: 1.5, ease: "power3.out",
    });

    gsap.to('.closeMenubtn', {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        gsap.set('.closeMenubtn', { display: 'none' });
        gsap.set('.openMenubtn', { display: 'block' });
        gsap.to('.openMenubtn', { opacity: 1, duration: 0.5 });
      }
    });

    
  }

 


  // const handleMenuClick = () => {
  //   if (isExpanded) {
  //     closeMenuTimeline();
  //   } else {
  //     openMenuTimeline();
  //   }
  //   setIsExpanded(!isExpanded);
  // };




  const handleMenuClick = () => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    
    if (isExpanded) {
      isMobile ? closeMenuMobile() : closeMenuTimeline();
    } else {
      isMobile ? openMenuMobile() : openMenuTimeline();
    }

    setIsExpanded(!isExpanded);
  };








  return (
    <>
           <nav className="absolute w-full z-50 mt-3 bg-black">
            <div className="relative w-full mx-auto flex items-center justify-between">
              <div className="absolute left-0 h-12 flex items-center justify-center">
              <a className="openMenubtn" onClick={handleMenuClick} style={{ opacity: 1 }}>Menu</a>
              <a className="closeMenubtn" onClick={handleMenuClick} style={{ display: 'none', opacity: 0 }}>Close <span>X</span></a>
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

    </>
  )
}

export default TopNav