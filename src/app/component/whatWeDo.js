"use client"
import React from 'react';
import WhatWeRow from './whatWeDoRow';

function WhatWeDo() {
  const rowsData = [
    {
      rowClass: 'imgReveal1',
      videoSrc: 'comp1.mp4',
      title: 'Get a clear understanding of your brand’s needs',
      description: 'We will conduct a brand assessment to ensure we are a good fit and can collaborate and grow together.'
    },
    {
      rowClass: 'imgReveal2',
      videoSrc: 'comp2.mp4',
      title: 'Prepare a quote for approval based on your needs',
      description: 'Once we understand your needs, we will prepare a free, detailed quote, followed by a formal contract to start the process.'
    },
    {
      rowClass: 'imgReveal3',
      videoSrc: 'comp3.mp4',
      title: 'Prepare a quote for approval based on your needs',
      description: 'Once we understand your needs, we will prepare a free, detailed quote, followed by a formal contract to start the process.'
    },
    {
      rowClass: 'imgReveal4',
      videoSrc: 'comp4.mp4',
      title: 'Prepare a quote for approval based on your needs',
      description: 'Once we understand your needs, we will prepare a free, detailed quote, followed by a formal contract to start the process.'
    },
    {
      rowClass: 'imgReveal5',
      videoSrc: 'comp5.mp4',
      title: 'Prepare a quote for approval based on your needs',
      description: 'Once we understand your needs, we will prepare a free, detailed quote, followed by a formal contract to start the process.'
    },

  ];

  return (
    <>
      <p className="flex justify-center items-center text-center font-medium text-black text-3xl leading-tight sm:font-medium text-[35px] md:text-[74px] lg:text-[74px] pt-[100px] pb-[100px] sm:pt-[100px] md:pt-[200px] md:pb-[200px] gurmukhi">
        Odds are you’ve worn a<br /> product we’ve made
      </p>
      <p className=' md:pl-[40px] pl-[20px] pb-[85px] text-[30px] md:text-[45px] font-medium text-black	whtdo'>What we do</p>
      {rowsData.map((row, index) => (
        <WhatWeRow
          key={index}
          rowClass={row.rowClass}
          videoSrc={row.videoSrc}
          title={row.title}
          description={row.description}
        />
      ))}
    </>
  );
}

export default WhatWeDo;
