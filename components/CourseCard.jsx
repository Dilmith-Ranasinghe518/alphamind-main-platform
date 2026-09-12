'use client';

import React from 'react';
import { HandThumbUpIcon, PlayIcon, UserIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';

export default function CourseCard({
  item,
  theme = 'light',
}) {
  if (!item) return null;

  const isDark = theme === 'dark';

  return (
    <>
      {/* Mobile Version (< md) — New Domestika-style layout */}
      <article
        className={`group flex md:hidden h-full flex-col overflow-hidden rounded-2xl border shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md ${
          isDark ? 'border-slate-800 bg-slate-900 text-slate-100' : 'border-slate-200/80 bg-white text-slate-900'
        }`}
      >
        {/* Mobile Thumbnail Header */}
        <div className="relative aspect-[16/10] w-full flex-shrink-0 overflow-hidden bg-slate-200 dark:bg-slate-800">
          <img
            src={item.image}
            alt={item.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          
          {item.badge && (
            <span className="absolute left-3 top-3 inline-flex items-center rounded-full bg-[#fdd835] px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-slate-950 shadow-sm z-10">
              {item.badge}
            </span>
          )}

          <button
            type="button"
            aria-label={`Play ${item.title}`}
            className="absolute left-1/2 top-1/2 inline-flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-slate-950/70 text-white shadow-lg backdrop-blur-md transition hover:scale-110"
          >
            <PlayIcon className="ml-0.5 h-5 w-5" />
          </button>
        </div>

        {/* Mobile Card Content Body */}
        <div className="flex flex-1 flex-col justify-between gap-3.5 p-4">
          <div className="space-y-2">
            {item.category && (
              <span className="inline-flex rounded-full border border-slate-300/80 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                {item.category}
              </span>
            )}

            <h3 className="line-clamp-2 text-base font-bold leading-snug tracking-tight text-slate-900 dark:text-slate-100">
              {item.title}
            </h3>

            {item.subtitle && (
              <p className={`text-xs font-medium ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                {item.subtitle}
              </p>
            )}

            {item.description && (
              <p className={`line-clamp-2 text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                {item.description}
              </p>
            )}
          </div>

          {/* Mobile Footer Details & Actions */}
          <div className="mt-auto space-y-3 pt-1">
            {(item.learners || item.rating) && (
              <div className={`flex flex-wrap items-center gap-x-4 gap-y-1 text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                {item.learners && (
                  <span className="inline-flex items-center gap-1 font-medium">
                    <UserIcon className="h-4 w-4" />
                    {item.learners}
                  </span>
                )}
                {item.rating && (
                  <span className="inline-flex items-center gap-1 font-medium">
                    <HandThumbUpIcon className="h-4 w-4" />
                    {item.rating}
                  </span>
                )}
              </div>
            )}

            {item.pill && (
              <div>
                <span className="inline-flex rounded-full border border-pink-300 dark:border-pink-500/40 bg-pink-50 dark:bg-pink-950/40 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-pink-600 dark:text-pink-400">
                  {item.pill}
                </span>
              </div>
            )}

            {(item.discount || item.originalPrice) && (
              <div className="flex items-center gap-2 text-xs">
                {item.discount && (
                  <span className="font-bold text-red-600 dark:text-red-400">
                    {item.discount}
                  </span>
                )}
                {item.originalPrice && (
                  <span className="text-slate-400 line-through">
                    {item.originalPrice}
                  </span>
                )}
              </div>
            )}

            <button
              type="button"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#238289] px-4 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-[#1b6a70] active:scale-[0.99]"
            >
              <ShoppingCartIcon className="h-4.5 w-4.5" />
              <span>{item.price ? `Buy ${item.price}` : 'Get started'}</span>
            </button>
          </div>
        </div>
      </article>

      {/* Desktop Version (>= md) — Original Layout */}
      <article
        className={`hidden md:block overflow-hidden rounded-[14px] border shadow-[0_16px_34px_rgba(15,23,42,0.08)] transition-transform duration-200 hover:-translate-y-0.5 ${
          isDark ? 'border-white/10 bg-slate-900 text-slate-100' : 'border-black/10 bg-white text-slate-900'
        }`}
      >
        <div className="relative aspect-[16/9] overflow-hidden bg-slate-200">
          <img
            src={item.image}
            alt={item.title}
            className="h-full w-full object-cover"
          />
          <span className="absolute left-6 top-6 inline-flex rounded-[4px] bg-[#f5df3f] px-2 py-1 text-[15px] font-extrabold uppercase tracking-[0.14em] text-slate-950">
            {item.badge}
          </span>
          <button
            type="button"
            aria-label={`Play ${item.title}`}
            className="absolute left-1/2 top-1/2 inline-flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#2f2a3a]/88 text-white shadow-[0_12px_24px_rgba(15,23,42,0.24)] backdrop-blur-sm"
          >
            <PlayIcon className="ml-1 h-6 w-6" />
          </button>
        </div>

        <div className="space-y-5 px-7 pb-7 pt-7">
          <div className="space-y-3">
            <h3 className="line-clamp-2 text-[25px] font-semibold leading-[2] md:text-[25px]">
              {item.title}
            </h3>
            <p className={`text-[20px] ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              {item.subtitle}
            </p>
            <p className={`line-clamp-2 text-[20px] leading-7 ${isDark ? 'text-slate-300' : 'text-slate-500'}`}>
              {item.description}
            </p>
          </div>

          <div className={`flex flex-wrap items-center gap-x-4 gap-y-2 text-[15px] ${isDark ? 'text-slate-300' : 'text-slate-500'}`}>
            <span className="inline-flex items-center gap-1.5">
              <UserIcon className="h-4.5 w-4.5" />
              {item.learners}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <HandThumbUpIcon className="h-4.5 w-4.5" />
              {item.rating}
            </span>
          </div>

          <span className="inline-flex rounded-[6px] border border-[#ffcfdb] bg-[#fff2f7] px-2 py-1 text-[12px] font-semibold uppercase tracking-[0.08em] text-[#df6d98]">
            {item.pill}
          </span>

          <button
            type="button"
            className="inline-flex w-full items-center justify-center rounded-[6px] bg-[#2ba9bb] px-4 py-3.5 text-[25px] font-semibold text-white shadow-[inset_0_-2px_0_rgba(0,0,0,0.12)] transition hover:bg-[#2398a8]"
          >
            Get started now!
          </button>
        </div>
      </article>
    </>
  );
}


