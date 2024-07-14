import React, { useState, useEffect, useRef } from 'react';

const Compare = () => {

    
    return(<>
    
    <div className="w-screen overflow-x-scroll compare pt-[80px] pl-[20px] pr-[20px] md:pl-[70px] md:pr-[70px] lg:pl-[70px] lg:pr-[70px] xl:pl-[70px] xl:pr-[70px] bg-white ">
  
        <div className='text-[20px] text-[#00305F] gurmukhi'>How do we compare?</div>

        <div className='text-[40px] md:text-[50px] text-[#00305F] gurmukhi mt-[35px] w-[100%] md:w-[42%] font-medium leading-tight ' >We measure our value in customers feedback</div>

        <div className='overflow-x-scroll'>
            <div class="flex flex-row pt-[80px]">
                
                <div class="sm:w-1/4 md:w-1/4 lg:w-1/4 xl:w-1/4 2xl:w-1/4">
                <div className='alllist'>
                     <ul class="list-outside text-left justify-left list-none sm:list-inside font-bold text-[16px] md:text-[18px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px]  text-black roboto">
                        <li className='flex items-center p-[10px] md:pl-[105px] md:pr-[105px] lg:pl-[105px] lg:pr-[105px] xl:pl-[105px] xl:pr-[105px] 2xl:pl-[105px] 2xl:pr-[105px]'></li>
                        <li className=''>Quality</li>
                        <li className=''>AQL</li>
                        <li className=''>Minimum</li>
                        <li className=''>Turn around</li>
                        <li className=' custom-orange'>Knitting</li>
                        <li className=' custom-orange'>Dying</li>
                        <li className=' custom-orange'>Development</li>
                        <li className=' custom-orange'>Sustainable fabric</li>
                        <li className=' custom-orange'>Ethical Prodcution</li>

                    </ul>
                </div>
                </div>
                <div class="bg-secondgrid sm:w-1/4 md:w-1/4 lg:w-1/4 xl:w-1/4 2xl:w-1/4">
                <div className='alllist '>
                <ul class=" list-outside text-center justify-center list-none sm:list-inside font-medium text-[16px] md:text-[18px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px]  text-black roboto">
                        <li className='flex items-center p-[10px] md:pl-[105px] md:pr-[105px] lg:pl-[105px] lg:pr-[105px] xl:pl-[105px] xl:pr-[105px] 2xl:pl-[105px] 2xl:pr-[105px] justify-center'>  <svg width="60" height="40" viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M59.7447 0.0573862C59.9773 0.181851 60.0674 0.473549 59.946 0.710417L40.7334 38.2353L40.7097 38.2693C40.3233 38.7978 39.9078 39.0643 39.4734 39.0643C39.4017 39.0643 39.3304 39.0594 39.2538 39.0451C38.1789 38.8247 37.6631 36.9621 37.5632 36.5525C37.5606 36.541 37.5579 36.5328 37.5541 36.5213L31.7366 18.7469C31.6535 18.4925 31.789 18.2178 32.0393 18.1333L32.0474 18.1306C32.2946 18.0472 32.5617 18.1805 32.648 18.43L39.0833 37.0416C39.2214 37.4408 39.7611 37.4813 39.9553 37.1074L59.0982 0.258615C59.2213 0.0222955 59.5094 -0.0687237 59.742 0.0557414L59.7447 0.0573862Z" fill="#EE2C43"/>
<path d="M36.766 38.5287L36.6557 38.1839L25.1557 2.50235C25.047 2.16453 24.7302 1.93555 24.3727 1.93555H11.9984C11.6376 1.93555 11.3191 2.16884 11.2132 2.51043L3.24473 28.1426L1.59932 33.4857L0.545663 36.8617L0.00280606 38.6095C-0.0200168 38.7383 0.103879 38.7033 0.103879 38.7033L9.82477 38.7097C10.0753 38.7097 10.0525 38.581 10.0525 38.581L11.3599 34.0503L12.0853 31.5865C12.1147 31.4512 12.238 31.4895 12.238 31.4895H23.6989C23.8483 31.4669 23.8711 31.5671 23.8711 31.5671L23.9429 31.8058L26.011 38.5713C26.0534 38.7485 26.2844 38.7033 26.2844 38.7033H36.659C36.8182 38.7033 36.766 38.5287 36.766 38.5287ZM21.9192 23.7439H14.0068C13.7497 23.7439 13.8573 23.5182 13.8573 23.5182L17.6204 8.80074H18.0334L21.9687 23.5182C22.0366 23.773 21.9192 23.7439 21.9192 23.7439Z" fill="#0B4E90"/>
</svg></li>
                        <li>

                        <div class="flex items-center justify-center gap-4">

<div class="flex">
    <svg xmlns="http://www.w3.org/2000/svg" className="text-yellow-500 w-5 h-auto fill-star hover:text-red-600"
        viewBox="0 0 16 16">
        <path
            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" className="text-yellow-500 w-5 h-auto fill-star hover:text-yellow-600"
        viewBox="0 0 16 16">
        <path
            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" className="text-yellow-500 w-5 h-auto fill-star hover:text-yellow-600"
        viewBox="0 0 16 16">
        <path
            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
    </svg>

    <svg xmlns="http://www.w3.org/2000/svg" className="text-yellow-500 w-5 h-auto fill-star hover:text-green-600"
        viewBox="0 0 16 16">
        <path
            d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z" />
    </svg>

    <svg xmlns="http://www.w3.org/2000/svg" className="text-yellow-500 w-5 h-auto fill-star hover:text-green-600"
        viewBox="0 0 16 16">
        <path
            d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
    </svg>
</div>

</div>
</li>
                        <li className=''>2.5+</li>
                        <li>50-100 units</li>
                        <li>6-10 weeks</li>
                        <li className='flex items-center justify-center'><svg class="w-[30px] h-[30px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#34A853" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z" clip-rule="evenodd"/>
</svg>

</li>
                        <li className='flex items-center justify-center'><svg class="w-[30px] h-[30px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#34A853" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z" clip-rule="evenodd"/>
</svg>

</li>
                        <li>Credit up to 90%</li>

                        <li className='flex items-center justify-center'><svg class="w-[30px] h-[30px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#34A853" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z" clip-rule="evenodd"/>
</svg>

</li>

                        <li className='flex items-center justify-center'><svg class="w-[30px] h-[30px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#34A853" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z" clip-rule="evenodd"/>
</svg>

</li>

                    </ul>
                    </div>
                </div>
                <div class="sm:w-1/4 md:w-1/4 lg:w-1/4 xl:w-1/4 2xl:w-1/4">
                <div className='alllist'>
                <ul class="list-outside text-center justify-center list-none sm:list-inside font-medium text-[16px] md:text-[18px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px]  text-black roboto">
                        <li className='flex items-center p-[10px] md:pl-[105px] md:pr-[105px] lg:pl-[105px] lg:pr-[105px] xl:pl-[105px] xl:pr-[105px] 2xl:pl-[105px] 2xl:pr-[105px]'>Local
                        Agencies</li>
                        <li><div class="flex items-center justify-center gap-4">

<div class="flex">
    <svg xmlns="http://www.w3.org/2000/svg" className="text-yellow-500 w-5 h-auto fill-star hover:text-red-600"
        viewBox="0 0 16 16">
        <path
            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" className="text-yellow-500 w-5 h-auto fill-star hover:text-yellow-600"
        viewBox="0 0 16 16">
        <path
            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" className="text-yellow-500 w-5 h-auto fill-star hover:text-green-600"
        viewBox="0 0 16 16">
        <path
            d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z" />
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" className="text-yellow-500 w-5 h-auto fill-star hover:text-green-600"
        viewBox="0 0 16 16">
        <path
            d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" className="text-yellow-500 w-5 h-auto fill-star hover:text-green-600"
        viewBox="0 0 16 16">
        <path
            d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
    </svg>
</div>

</div></li>
                        <li className='flex items-center justify-center' ><svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.87109 0.78125L6.28906 6.23047L9.70703 0.78125H11.9043L7.41211 7.82227L12.0117 15H9.79492L6.28906 9.44336L2.7832 15H0.566406L5.16602 7.82227L0.673828 0.78125H2.87109Z" fill="#9FC5E8"/>
</svg>
</li>
                        <li>300 units</li>
                        <li>12-24 weeks</li>
                        <li className='flex items-center justify-center'><svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.87109 0.78125L6.28906 6.23047L9.70703 0.78125H11.9043L7.41211 7.82227L12.0117 15H9.79492L6.28906 9.44336L2.7832 15H0.566406L5.16602 7.82227L0.673828 0.78125H2.87109Z" fill="#9FC5E8"/>
</svg>
</li>
                        <li className='flex items-center justify-center'><svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.87109 0.78125L6.28906 6.23047L9.70703 0.78125H11.9043L7.41211 7.82227L12.0117 15H9.79492L6.28906 9.44336L2.7832 15H0.566406L5.16602 7.82227L0.673828 0.78125H2.87109Z" fill="#9FC5E8"/>
</svg>
</li>
                        <li>N/A</li>
                        <li className='flex items-center justify-center'><svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.87109 0.78125L6.28906 6.23047L9.70703 0.78125H11.9043L7.41211 7.82227L12.0117 15H9.79492L6.28906 9.44336L2.7832 15H0.566406L5.16602 7.82227L0.673828 0.78125H2.87109Z" fill="#9FC5E8"/>
</svg>
</li>
                        <li className='flex items-center justify-center'><svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.87109 0.78125L6.28906 6.23047L9.70703 0.78125H11.9043L7.41211 7.82227L12.0117 15H9.79492L6.28906 9.44336L2.7832 15H0.566406L5.16602 7.82227L0.673828 0.78125H2.87109Z" fill="#9FC5E8"/>
</svg>
</li>

                    </ul>
                    </div>
                </div>
                <div class="sm:w-1/4 md:w-1/4 lg:w-1/4 xl:w-1/4 2xl:w-1/4">
                <div className='alllist last-border'>
                <ul class="list-outside  justify-center text-center list-none sm:list-inside font-medium text-[16px] md:text-[18px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px]  text-black roboto">
                        <li className='flex items-center p-[10px] md:pl-[105px] md:pr-[105px] lg:pl-[105px] lg:pr-[105px] xl:pl-[105px] xl:pr-[105px] 2xl:pl-[105px] 2xl:pr-[105px]'>Local 
                        Factories</li>
                        <li><div class="flex items-center justify-center gap-4">

<div class="flex">
    <svg xmlns="http://www.w3.org/2000/svg" className="text-yellow-500 w-5 h-auto fill-star hover:text-red-600"
        viewBox="0 0 16 16">
        <path
            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" className="text-yellow-500 w-5 h-auto fill-star hover:text-yellow-600"
        viewBox="0 0 16 16">
        <path
            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" className="text-yellow-500 w-5 h-auto fill-star hover:text-yellow-600"
        viewBox="0 0 16 16">
        <path
            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
    </svg>

    <svg xmlns="http://www.w3.org/2000/svg" className="text-yellow-500 w-5 h-auto fill-star hover:text-green-600"
        viewBox="0 0 16 16">
        <path
            d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
    </svg>

    <svg xmlns="http://www.w3.org/2000/svg" className="text-yellow-500 w-5 h-auto fill-star hover:text-green-600"
        viewBox="0 0 16 16">
        <path
            d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
    </svg>
</div>

</div></li>
                        <li className='flex items-center justify-center'><svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.87109 0.78125L6.28906 6.23047L9.70703 0.78125H11.9043L7.41211 7.82227L12.0117 15H9.79492L6.28906 9.44336L2.7832 15H0.566406L5.16602 7.82227L0.673828 0.78125H2.87109Z" fill="#9FC5E8"/>
</svg>
</li>
                        <li>N/A</li>
                        <li className='flex items-center justify-center'><svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.87109 0.78125L6.28906 6.23047L9.70703 0.78125H11.9043L7.41211 7.82227L12.0117 15H9.79492L6.28906 9.44336L2.7832 15H0.566406L5.16602 7.82227L0.673828 0.78125H2.87109Z" fill="#9FC5E8"/>
</svg>
</li>
                        <li className='flex items-center justify-center'><svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.87109 0.78125L6.28906 6.23047L9.70703 0.78125H11.9043L7.41211 7.82227L12.0117 15H9.79492L6.28906 9.44336L2.7832 15H0.566406L5.16602 7.82227L0.673828 0.78125H2.87109Z" fill="#9FC5E8"/>
</svg>
</li>
                        <li className='flex items-center justify-center'><svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.87109 0.78125L6.28906 6.23047L9.70703 0.78125H11.9043L7.41211 7.82227L12.0117 15H9.79492L6.28906 9.44336L2.7832 15H0.566406L5.16602 7.82227L0.673828 0.78125H2.87109Z" fill="#9FC5E8"/>
</svg>
</li>
                        <li className='flex items-center justify-center'><svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.87109 0.78125L6.28906 6.23047L9.70703 0.78125H11.9043L7.41211 7.82227L12.0117 15H9.79492L6.28906 9.44336L2.7832 15H0.566406L5.16602 7.82227L0.673828 0.78125H2.87109Z" fill="#9FC5E8"/>
</svg>
</li>
                        <li className='flex items-center justify-center'><svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.87109 0.78125L6.28906 6.23047L9.70703 0.78125H11.9043L7.41211 7.82227L12.0117 15H9.79492L6.28906 9.44336L2.7832 15H0.566406L5.16602 7.82227L0.673828 0.78125H2.87109Z" fill="#9FC5E8"/>
</svg>
</li>
                        <li className='flex items-center justify-center'><svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.87109 0.78125L6.28906 6.23047L9.70703 0.78125H11.9043L7.41211 7.82227L12.0117 15H9.79492L6.28906 9.44336L2.7832 15H0.566406L5.16602 7.82227L0.673828 0.78125H2.87109Z" fill="#9FC5E8"/>
</svg>
</li>

                    </ul>
                    </div>
                </div>
            </div>
            </div>
    </div>

    
    </>)

}        

export default Compare;