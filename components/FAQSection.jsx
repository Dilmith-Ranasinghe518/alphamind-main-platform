'use client';

import React, { useState } from 'react';
import { PlusIcon, MinusIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

const faqData = [
  {
    question: "What services does your digital agency offer?",
    answer: "We provide comprehensive digital solutions including custom web development, brand identity design, and result-driven digital marketing strategies tailored for your business."
  },
  {
    question: "What industries do you specialize in?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    question: "What is your process for working with clients?",
    answer: "Our workflow is structured around transparency; starting from discovery, moving through design and development, and ending with dedicated support and optimization."
  },
  {
    question: "What platforms and technologies do you specialize in?",
    answer: "We are experts in modern frameworks like Next.js, React, and Tailwind CSS, as well as robust backend technologies to ensure your platform is scalable and fast."
  },
  {
    question: "How can your agency help my business grow online?",
    answer: "By optimizing your user experience and implementing high-converting marketing funnels, we help turn your visitors into loyal customers."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(1);

  return (
    <section className="w-full bg-white rounded-2xl py-6 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 font-sans shadow-sm">
      <div className="w-full max-w-6xl mx-auto">
        
        {/* TOP HEADER SECTION */}
        <div className="text-center mb-6 sm:mb-10 md:mb-14 px-2 sm:px-0">
          <div className="flex items-center justify-center gap-2 mb-1.5 sm:mb-2">
            <div className="w-5 sm:w-6 h-[2px] bg-[#cbf33b]"></div>
            <span className="text-[11px] sm:text-xs font-black tracking-[0.25em] sm:tracking-[0.3em] text-neutral-400 uppercase">FAQs</span>
          </div>
          <h2 className="text-[22px] sm:text-[32px] md:text-[46px] font-bold text-neutral-900 tracking-tight leading-tight">
            Question? Look here.
          </h2>
        </div>

        {/* ACCORDION SECTION */}
        <div className="space-y-2.5 sm:space-y-4">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div 
                key={index} 
                className={`transition-all duration-300 ease-in-out rounded-xl sm:rounded-[20px] overflow-hidden ${
                  isOpen 
                    ? 'bg-[#cbf33b] shadow-md border-none' 
                    : 'bg-[#efefef] hover:bg-[#e0e0e0]'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between py-3.5 sm:py-5 md:py-6 px-3.5 sm:px-6 md:px-8 text-left focus:outline-none"
                >
                  <span className="text-[14px] sm:text-[17px] md:text-[19px] font-bold text-neutral-900 pr-2 sm:pr-8">
                    {item.question}
                  </span>
                  
                  <div className="flex-shrink-0 ml-2">
                    {isOpen ? (
                      <MinusIcon className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-neutral-900 stroke-[3px]" />
                    ) : (
                      <PlusIcon className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-neutral-400 stroke-[2px]" />
                    )}
                  </div>
                </button>

                {/* Animated Answer Wrapper */}
                <div 
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-3.5 sm:px-6 md:px-8 pb-4 sm:pb-6 md:pb-8 text-[13px] sm:text-[14px] md:text-[15px] leading-[1.6] text-neutral-800 font-medium max-w-full md:max-w-[90%]">
                      {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* BOTTOM CTA SECTION */}
        <div className="text-center mt-8 sm:mt-14 md:mt-20 px-2 sm:px-0">
          <h3 className="text-[18px] sm:text-[26px] md:text-[36px] font-bold text-neutral-900 mb-4 sm:mb-8 tracking-tight">
            Still have a questions?
          </h3>
          
          {/* IMAGE STYLE BUTTON */}
          <div className="flex justify-center">
            <button className="flex items-center gap-3 sm:gap-6 bg-[#cbf33b] hover:bg-[#b8da32] transition-colors p-1.5 sm:p-2 pl-4 sm:pl-8 rounded-full group cursor-pointer shadow-sm">
              <span className="text-black font-extrabold text-[12px] sm:text-[14px] tracking-wide uppercase whitespace-nowrap">
                Contact Us
              </span>
              <div className="bg-black rounded-full p-2.5 sm:p-3.5 transition-transform group-hover:translate-x-1 flex-shrink-0">
                <ArrowRightIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-white stroke-[3.5px]" />
              </div>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}