'use client';

import React from 'react';

const BookSection = ({
  title = "Join 1,000,000+ creatives",
  description = "Be part of a global community of top creatives. Get early access to new tools, share your work, and stay inspired.",
  featuredBook = {
    title: 'Halo 5: Guardians',
    badge: 'Halo',
    price: '$29',
    oldPrice: '$39',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800',
    platforms: ['Xbox', 'Playstation', 'PC'],
  },
  items = [
    { title: 'Call of Duty: MW3', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=300' },
    { title: 'Cyberpunk 2077', image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&q=80&w=300' },
    { title: 'Halo Infinite', image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=300' },
    { title: 'Forza Horizon 5', image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=300' },
  ]
}) => {
  return (
    <section className="w-full">
      <div className="w-full rounded-2xl bg-zinc-200 dark:bg-slate-900 shadow-sm">
        <div className="grid grid-cols-[0.85fr_1.15fr] lg:grid-cols-[0.8fr_1.2fr] gap-2.5 sm:gap-5 lg:gap-7 items-stretch">
          
          {/* Left Side: Large Feature Poster / Card */}
          <div className="relative flex flex-col justify-end overflow-hidden rounded-2xl bg-black min-h-[210px] sm:min-h-[360px] lg:min-h-[420px] aspect-auto shadow-md group">
            <img
              src={featuredBook.image}
              alt={featuredBook.title}
              className="absolute inset-0 h-full w-full object-cover opacity-100 sm:opacity-90 transition-transform duration-500 group-hover:scale-105"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent sm:from-black/90 sm:via-black/40" />
            
            {/* Play overlay button */}
            <button
              type="button"
              className="absolute right-2 top-2 h-7 w-7 sm:right-6 sm:top-6 sm:h-10 sm:w-10 z-10 flex items-center justify-center rounded-full bg-red-600 text-white shadow-lg transition hover:scale-110 active:scale-95"
              aria-label="Play trailer"
            >
              <span className="ml-0.5 text-[8px] sm:text-sm">▶</span>
            </button>

            {/* Feature Content Overlay */}
            <div className="relative z-10 space-y-0.5 p-1.5 sm:space-y-2 sm:p-6 text-white">
              {featuredBook.badge && (
                <span className="inline-block rounded bg-red-600 px-1.5 py-0.5 text-[8px] sm:px-2.5 sm:text-xs font-bold uppercase tracking-wider">
                  {featuredBook.badge}
                </span>
              )}

              <h3 className="text-[11px] sm:text-2xl lg:text-4xl font-extrabold leading-tight drop-shadow-md sm:drop-shadow-sm">
                {featuredBook.title}
              </h3>

              {featuredBook.platforms && (
                <div className="flex flex-wrap sm:flex-nowrap gap-x-1 gap-y-0.5 text-[8px] sm:gap-2 sm:text-xs text-slate-200 sm:text-slate-300 font-medium drop-shadow-md sm:drop-shadow-none">
                  {featuredBook.platforms.map((plat, idx) => (
                    <span key={idx}>{plat}{idx < featuredBook.platforms.length - 1 ? ' •' : ''}</span>
                  ))}
                </div>
              )}

              <div className="flex items-center gap-1.5 pt-0.5 sm:gap-3 sm:pt-2">
                <div className="flex flex-col leading-none">
                  <span className="text-[11px] sm:text-2xl font-bold text-white drop-shadow-md sm:drop-shadow-none">{featuredBook.price}</span>
                  {featuredBook.oldPrice && (
                    <span className="text-[8px] sm:text-xs text-slate-400 line-through">{featuredBook.oldPrice}</span>
                  )}
                </div>
                <button
                  type="button"
                  className="rounded-full bg-red-600 hover:bg-red-700 px-2 py-1 text-[9px] sm:px-4 sm:py-2 sm:text-sm font-bold text-white shadow transition active:scale-95 whitespace-nowrap"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>

          {/* Right Side: Header Info & Side-by-Side Cards */}
          <div className="flex min-w-0 flex-col justify-between gap-2 py-0 sm:gap-6 sm:py-1 py-3.5 sm:py-5 lg:py-7">
            {/* Header Content */}
            <div className="space-y-1 sm:space-y-2.5">
              <h2 className="text-sm sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white leading-tight">
                {title}
              </h2>
              <p className="text-[9px] leading-snug sm:text-sm sm:leading-relaxed text-slate-600 dark:text-slate-300 font-medium max-w-md">
                {description}
              </p>
            </div>

            {/* Bottom 2 Cards Row */}
            <div className="book-card-strip mt-auto flex snap-x snap-mandatory gap-2 overflow-x-auto scroll-smooth sm:grid sm:grid-cols-2 sm:gap-4 sm:snap-none sm:overflow-visible">
              {items.map((item, index) => (
                <div
                  key={index}
                  className={`group relative flex shrink-0 basis-[41%] snap-start flex-col justify-end overflow-hidden rounded-xl bg-black aspect-[3/4] min-h-0 sm:min-h-[200px] shadow-sm transition hover:-translate-y-1 hover:shadow-md cursor-pointer ${index >= 2 ? 'sm:hidden' : ''}`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 h-full w-full object-cover opacity-90 transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                  <div className="relative z-10 p-1.5 sm:p-3 text-white">
                    <p className="line-clamp-2 text-[9px] sm:text-sm font-bold leading-snug drop-shadow-sm">
                      {item.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <style jsx global>{`
        .book-card-strip {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .book-card-strip::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default BookSection;