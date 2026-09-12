'use client';

import React from 'react';

const PAGE_LINKS = ['Podcasts', 'Radio Station', 'About Us 1', 'About Us 2', 'Features'];
const USEFUL_LINKS = ['Useful Links', 'Terms & Conditions', 'Disclaimer', 'Support', 'FAQ'];
const STREAMING = ['Spotify', 'Apple Podcast', 'Google Podcast', 'Soundcloud'];

export default function Footer() {
  return (
    <footer className="relative w-full overflow-x-clip bg-[#0D0D0E] text-neutral-400 font-sans pt-0 lg:pt-56 pb-10 md:pb-16 px-4 sm:px-6 md:px-12 mt-24 sm:mt-32 md:mt-48">

      {/* 1. 🤍 TOP FLOATING CARD (Accelerate Your Impact) */}
      {/* Under lg it sits in normal flow, pulled up over the footer edge. lg+: absolutely centred on the edge. */}
      <div className="relative z-20 mx-auto -mt-16 sm:-mt-20 mb-10 sm:mb-12 w-full max-w-5xl bg-white text-zinc-950 rounded-[20px] sm:rounded-[28px] md:rounded-[32px] p-5 sm:p-8 md:p-14 text-center shadow-[0_20px_50px_-15px_rgba(0,0,0,0.45)] border border-neutral-100 lg:absolute lg:top-0 lg:left-1/2 lg:mx-0 lg:mt-0 lg:mb-0 lg:w-[calc(100%-4rem)] lg:-translate-x-1/2 lg:-translate-y-1/2">
        <h3 className="font-black text-xl sm:text-3xl md:text-5xl tracking-tight mb-2.5 sm:mb-4 text-zinc-900 leading-tight md:leading-none">
          Accelerate Your Impact, <br className="hidden sm:inline" />
          Become a Sponsor!
        </h3>
        <p className="text-[13px] sm:text-sm md:text-base text-neutral-500 max-w-2xl mx-auto mb-5 sm:mb-8 leading-relaxed font-medium">
          Maximize Product Visibility and reach your audience by sponsoring our dynamic radio station &amp; podcast platform. Join us in shaping the future of content!
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            type="button"
            className="w-full sm:w-auto bg-zinc-950 hover:bg-zinc-800 text-white font-extrabold text-xs sm:text-sm tracking-wider px-8 py-3.5 sm:py-4 rounded-full transition-all active:scale-[0.98] shadow-lg"
          >
            Let&apos;s Talk
          </button>
        </div>
        <p className="text-[11px] sm:text-xs text-neutral-400 font-medium mt-4">
          Or send an email to{' '}
          <span className="block sm:inline underline cursor-pointer hover:text-zinc-950 font-semibold text-zinc-700 break-all">
            sponsor@yourdomain.com
          </span>
        </p>
      </div>

      {/* MAIN FOOTER CONTENT WRAPPER */}
      <div className="max-w-7xl mx-auto">

        {/* 2. 🗂️ GRID LAYOUT FOR LOGO & LINKS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-10 pb-8 md:pb-14 border-b border-neutral-800/60">

          {/* Column 1: Logo & Branding Description (Takes 2 grid spaces on large screens) */}
          <div className="lg:col-span-2 flex flex-col gap-4 sm:gap-5">
            <div className="flex items-center gap-3 text-white font-black text-xl sm:text-2xl md:text-3xl tracking-widest">
              {/* 🎧 Custom Headphones Logo Icon */}
              <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 flex-shrink-0 rounded-xl bg-white/10 flex items-center justify-center p-2 text-white shadow-inner">
                <svg className="w-full h-full text-white fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12v7c0 1.1.9 2 2 2h3v-8H4v-1c0-4.41 3.59-8 8-8s8 3.59 8 8v1h-3v8h3c1.1 0 2-.9 2-2v-7c0-5.52-4.48-10-10-10z"/>
                </svg>
              </div>
              POTSHOW
            </div>
            <p className="text-[13px] sm:text-sm text-neutral-400 leading-relaxed max-w-sm font-normal">
              Potshow is a full featured WordPress Template Kit created to help you set up and manage your Radio Station &amp; Podcast website in no time.
            </p>

            {/* 🎵 Streaming Platform Audio Shortcuts */}
            <div className="flex flex-wrap gap-2 sm:gap-2.5 pt-1 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-neutral-400">
              {STREAMING.map((name) => (
                <span
                  key={name}
                  className="hover:text-white cursor-pointer transition-colors bg-white/5 hover:bg-white/10 px-2.5 sm:px-3 py-1.5 rounded-lg border border-white/5"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>

          {/* Links Section Container: 2-column grid on phones, promoted into the parent grid from md up */}
          <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-6 md:contents lg:col-span-3">
            {/* Column 2: Page List Links */}
            <div className="flex flex-col gap-3 sm:gap-4">
              <h4 className="text-white font-bold text-[13px] sm:text-sm md:text-base tracking-wider uppercase">Page List</h4>
              <ul className="flex flex-col gap-2 sm:gap-3 text-[13px] sm:text-sm md:text-base text-neutral-300 font-medium">
                {PAGE_LINKS.map((label) => (
                  <li key={label} className="hover:text-white cursor-pointer transition-colors flex items-center gap-2 sm:gap-2.5 py-1">
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"/></svg>
                    {label}
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Useful Links */}
            <div className="flex flex-col gap-3 sm:gap-4">
              <h4 className="text-white font-bold text-[13px] sm:text-sm md:text-base tracking-wider uppercase">Useful Links</h4>
              <ul className="flex flex-col gap-2 sm:gap-3 text-[13px] sm:text-sm md:text-base text-neutral-300 font-medium">
                {USEFUL_LINKS.map((label) => (
                  <li key={label} className="hover:text-white cursor-pointer transition-colors py-1">{label}</li>
                ))}
              </ul>
            </div>

            {/* Column 4: Work Hours Details */}
            <div className="col-span-2 md:col-span-1 flex flex-col gap-3 sm:gap-4">
              <h4 className="text-white font-bold text-[13px] sm:text-sm md:text-base tracking-wider uppercase">Work Hours</h4>
              <ul className="flex flex-col gap-2 sm:gap-3 text-[13px] sm:text-sm md:text-base text-neutral-300 font-medium">
                <li className="py-1"><span className="text-white font-semibold">Mon - Fri:</span> 09:00 - 17:00</li>
                <li className="py-1"><span className="text-white font-semibold">Sat:</span> 09:00 - 15:00</li>
                <li className="py-1"><span className="text-white font-semibold">Sun:</span> 09:00 - 13:00</li>
              </ul>
            </div>
          </div>

        </div>

        {/* 3. 📝 BOTTOM COPYRIGHT & SOCIAL BAR */}
        <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4 pt-6 sm:pt-8 pb-2 sm:pb-4 text-[11px] sm:text-sm text-neutral-500 font-medium text-center sm:text-left">
          <div className="text-balance">
            © Potshow Radio Station &amp; Podcast WordPress Theme.
          </div>

          {/* 🌐 Social Icons Layout */}
          <div className="flex items-center gap-2.5 sm:gap-3 text-[11px] sm:text-sm font-semibold">
            {['FB', 'TW', 'IG'].map((name) => (
              <span
                key={name}
                className="hover:text-white cursor-pointer transition-colors bg-white/5 hover:bg-white/10 px-3 sm:px-3.5 py-1.5 rounded-lg border border-white/5"
              >
                {name}
              </span>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
