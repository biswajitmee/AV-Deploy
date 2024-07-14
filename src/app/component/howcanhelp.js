import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const Howcanhelp = () => {

    return(<>

        <div className='help pt-[100px] pb-[100px] md:pt-[150px] md:pb-[135px] pl-[50px] pr-[50px] gurmukhi'>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
                <div className='text-white text-[40px] md:text-[80px]'>How can <br />we help?</div>
                <div>
                    
                        <ul class="max-w-md ">
                        <li class="pb-3 sm:pb-4 cborder cborder-top pt-[20px]">
                            <div class="flex items-center space-x-4 rtl:space-x-reverse">
                            
                                <div class="flex-1 min-w-0">
                                    <p class="text-sm text-white font-medium truncate dark:text-white">
                                    Work together
                                    </p>
                                  
                                </div>
                                <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-2 custom-rotation text-white ">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                </svg>


                                </div>
                            </div>
                        </li>
                        <li class="py-3 sm:py-4 cborder">
                            <div class="flex items-center space-x-4 rtl:space-x-reverse">
                                
                                <div class="flex-1 min-w-0">
                                    <p class="text-sm text-white font-medium  truncate dark:text-white">
                                    Book a call
                                    </p>
                                
                                </div>
                                <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-2 custom-rotation text-white ">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                </svg>

                                </div>
                            </div>
                        </li>
                        <li class="py-3 sm:py-4 cborder">
                            <div class="flex items-center space-x-4 rtl:space-x-reverse">
                                
                                <div class="flex-1 min-w-0">
                                    <p class="text-sm text-white font-medium truncate dark:text-white">
                                    Just  say hello
                                    </p>
                                  
                                </div>
                                <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-2 custom-rotation text-white ">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                </svg>

                                </div>
                            </div>
                        </li>
                      
                     
                        </ul>

                </div>
            </div>
        </div>


    </>)


}

export default Howcanhelp;