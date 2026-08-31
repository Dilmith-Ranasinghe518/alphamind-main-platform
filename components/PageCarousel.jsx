'use client';

import React from 'react';
import Image from 'next/image';

const defaultPromoItems = [
  {
    id: 1,
    src: '/images/Poster10.jpg',
    title: 'Timecop',
    badge: 'On Sale',
    price: 'Starts at $3.99',
  },
  {
    id: 2,
    src: '/images/Poster11.jpg',
    title: 'Blue Beetle',
    badge: 'Member Deal',
    price: 'Starts at $4.49',
  },
  {
    id: 3,
    src: '/images/Poster3.jpg',
    title: 'Clash of the Titans',
    badge: 'On Sale',
    price: 'Starts at $3.59',
  },
  {
    id: 4,
    src: '/images/Poster4.jpg',
    title: 'Instant Family',
    badge: 'Buy on sale',
    price: 'Family movie night',
  },
  {
    id: 5,
    src: '/images/Poster5.jpg',
    title: 'Peppermint',
    badge: 'On Sale',
    price: 'Starts at $3.99',
  },
  {
    id: 6,
    src: '/images/Poster12.jpg',
    title: 'Kung Fu Panda 4',
    badge: 'On Sale',
    price: 'Starts at $4.19',
  },
];

function CarouselCard({ item, accent = 'amber' }) {
  const badgeClass =
    accent === 'cyan'
      ? 'bg-[#70f0ff] text-slate-950 shadow-[0_10px_18px_rgba(112,240,255,0.3)]'
      : 'bg-[#e8ff36] text-slate-950 shadow-[0_10px_18px_rgba(232,255,54,0.28)]';

  return (
    // Mobile වලදී කාඩ්පත කැපී නොපෙනී snap වීමට 'snap-center' හෝ 'snap-start' එක් කර ඇත
    <article className="group relative min-h-[365px] overflow-hidden rounded-[10px] bg-slate-900 shadow-[0_16px_30px_rgba(15,23,42,0.18)] ring-1 ring-black/10 flex-shrink-0 snap-start
                        w-[70vw] sm:w-[calc((100%-24px)/3)] md:w-[calc((100%-36px)/4)] lg:w-[calc((100%-48px)/5)]">
      <Image
        src={item.src}
        alt={item.title}
        fill
        sizes="(min-width: 1024px) 16vw, (min-width: 640px) 50vw, 100vw"
        className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,10,15,0)_0%,rgba(9,10,15,0.08)_46%,rgba(11,12,18,0.58)_76%,rgba(8,8,12,0.9)_100%)]" />
      <div className="absolute inset-x-2 bottom-2 rounded-[8px] bg-[linear-gradient(180deg,rgba(32,34,42,0.12),rgba(11,12,18,0.72))] px-2.5 pb-3 pt-2.5 backdrop-blur-[8px]">
        <p className="truncate text-[11px] font-medium text-white">{item.title}</p>
        <div className="mt-2 flex flex-col items-start gap-1">
          <span className={`inline-flex rounded-[4px] px-2 py-1 text-[8px] font-bold uppercase tracking-[0.08em] ${badgeClass}`}>
            {item.badge}
          </span>
          <span className="text-[10px] text-white/80">{item.price}</span>
        </div>
      </div>
    </article>
  );
}

export default function PageCarousel({
  accent = 'amber',
  items = defaultPromoItems,
}) {
  return (
    <div className="w-full py-4 overflow-hidden">
      {/* 🔄 Horizontal Scrollable Track */}
      <div 
        className="flex gap-3 overflow-x-auto pb-4 pt-1 scroll-smooth snap-x snap-mandatory scrollbar-none"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {items.map((item) => (
          <CarouselCard key={item.id} item={item} accent={accent} />
        ))}
      </div>
    </div>
  );
}