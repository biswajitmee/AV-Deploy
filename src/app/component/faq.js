import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const faqRefs = useRef([]);

  const handleToggle = (index) => {
    if (openIndex === index) {
      // Collapse the currently open FAQ
      gsap.to(faqRefs.current[index], { height: 0, duration: 0.5, ease: "power2.inOut" });
      setOpenIndex(null);
    } else {
      // Collapse the previously open FAQ
      if (openIndex !== null) {
        gsap.to(faqRefs.current[openIndex], { height: 0, duration: 0.5, ease: "power2.inOut" });
      }
      // Expand the clicked FAQ
      gsap.to(faqRefs.current[index], { height: "auto", duration: 0.5, ease: "power2.inOut" });
      setOpenIndex(index);
    }
  };

  return (
    <div className=' pt-[100px] pb-[100px] md:pt-[190px] md:pb-[190px] bg-white'>
    <div className='faq'>
      <div className='text-[40px] md:text-[50px] text-black text-center font-extrabold'>FAQ</div>
      <p className='text-[16px] md:text-[20px] text-black text-center font-bold'>Learn more!</p>

      <ul className=" mt-20  text-[21px] roboto">
        {faqItems.map((item, index) => (
          <li key={index}>
            <div
              className="group cursor-pointer flex items-center gap-3 py-10  font-bold"
              onClick={() => handleToggle(index)}
            >
              <svg
                className={`w-[14px] h-[14px] text-black transition-transform ${openIndex === index ? 'rotate-90' : ''}`}
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  stroke="#18181B"
                  strokeWidth="2" // Increase the stroke width for a bolder look
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <span className='text-black text-[16px]'>{item.question}</span>
            </div>
            <div
              ref={el => faqRefs.current[index] = el}
              className=" overflow-hidden "
              style={{ height: 0 }}
            >
              <div className="flex items-center  pb-10">
                <svg
                  className="md:w-[20px] md:h-[20px] w-[50px] h-[50px] text-black mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                    stroke="#18181B"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <p className="flex-grow text-[16px] font-medium">{item.answer}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className='text-[20px] md:text-[36px] text-black text-center font-bold pt-24 gurmukhi'>See more FAQs</div>
      </div>
    </div>
  );
};

const faqItems = [
  {
    question: 'Who is AV for?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ipsum sapien. Vestibulum molestie porttitor augue vitae vulputate. Aliquam nec ex maximus, suscipit diam vel, tristique tellus.',
  },
  {
    question: 'What do I need to get started?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ipsum sapien. Vestibulum molestie porttitor augue vitae vulputate. Aliquam nec ex maximus, suscipit diam vel, tristique tellus.',
  },
  {
    question: 'What type of garments do AV offer?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ipsum sapien. Vestibulum molestie porttitor augue vitae vulputate. Aliquam nec ex maximus, suscipit diam vel, tristique tellus.',
  },
  {
    question: 'Who are the factories on AV? ',
    answer: 'We are best for apparel brands looking to scale their business with quality products in mind. If in the past you have been manufacturing on your own, or with third-party apparel factory, or buying merch to get by, then we are the best solution for you. We eliminate the friction and the headache that comes with apparel manufacturing and provide you with designer-quality basics, style assortment, color & size customization directly from the best factories to help you build your brand effortlessly',
  },
  {
    question: 'Do the products on AV have labels? ',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ipsum sapien. Vestibulum molestie porttitor augue vitae vulputate. Aliquam nec ex maximus, suscipit diam vel, tristique tellus.',
  },
  {
    question: 'Can I first order a sample?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ipsum sapien. Vestibulum molestie porttitor augue vitae vulputate. Aliquam nec ex maximus, suscipit diam vel, tristique tellus.',
  },
];

export default Faq;
