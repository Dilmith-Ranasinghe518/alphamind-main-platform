'use client';

import React, { useState } from 'react';

export default function NotificationSection() {
  const [inputValue, setInputValue] = useState('');

  // ඉහළින්ම ඇති අඳුරු cards 7 සඳහා array එකක්
  const topCards = Array(7).fill(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Asking Quantum Capital:', inputValue);
    // Connect AI query or API call 
  };

  return (
    <section className="w-full min-h-[480px] sm:min-h-[580px] md:min-h-screen rounded-2xl bg-black text-white flex flex-col justify-between p-4 sm:p-6 md:p-8 font-sans select-none">
      
      {/* 1. 🔲 TOP SEGMENTED CARDS (Swipable on mobile, Grid on desktop) */}
      <div className="w-full flex snap-x snap-mandatory gap-2.5 overflow-x-auto scroll-smooth pb-2 sm:pb-0 sm:grid sm:grid-cols-7 sm:gap-3 sm:overflow-visible max-w-7xl mx-auto no-scrollbar">
        {topCards.map((_, index) => (
          <div
            key={index}
            className="shrink-0 basis-[30%] sm:basis-auto snap-start aspect-[3/4] sm:aspect-[2/3] w-auto sm:w-full bg-[#161617] rounded-[10px] border border-zinc-900/40 transition-all duration-300 hover:bg-[#1c1c1e] hover:border-zinc-800"
          />
        ))}
      </div>

      {/* 2. 🔔 CENTER NOTIFICATIONS BRANDING */}
      <div className="flex-1 flex items-center justify-center my-10 sm:my-16">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white font-sans text-center">
          notifications
        </h1>
      </div>

      {/* 3. ⌨️ BOTTOM QUANTUM PROMPT INPUT BAR */}
      <div className="w-full max-w-5xl mx-auto pb-2 sm:pb-4">
        <form onSubmit={handleSubmit} className="w-full">
          <div className="relative flex items-center bg-[#161617] rounded-xl border border-zinc-900/80 px-4 sm:px-5 py-3.5 sm:py-4 transition-all duration-300 focus-within:border-zinc-700/60 focus-within:ring-1 focus-within:ring-zinc-800">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="type what you want here to ask from quantum capital"
              className="w-full bg-transparent text-xs sm:text-sm text-zinc-200 placeholder-zinc-500 font-normal tracking-wide focus:outline-none border-none p-0 m-0 pr-12"
            />
            
            {/* Input එක ඇතුලට යමක් ටයිප් කර ඇති විට දිස්වන කුඩා Submit Indicator එකක් */}
            {inputValue.trim() && (
              <button 
                type="submit" 
                className="absolute right-3 sm:right-4 text-xs text-zinc-400 hover:text-white transition-colors uppercase tracking-wider font-bold"
              >
                Ask →
              </button>
            )}
          </div>
        </form>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}