import React from 'react';

const BookSection = () => {
  return (
    <section className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-[0.7fr_1fr] min-h-[600px] overflow-hidden rounded-[15px] shadow-2xl">
        
        {/* වම් පස කොටස - Image Background */}
        <div className="relative bg-zinc-900 text-white p-10 flex flex-col justify-end bg-cover bg-center" 
             style={{ backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.8), transparent), url('https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80')` }}>
          
          {/* Play Button Overlay */}
          <div className="absolute top-10 -right-6 z-10">
            <button className="bg-red-500 w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition">
              <span className="text-white ml-1">▶</span>
            </button>
          </div>

          <div className="space-y-4">
             <span className="bg-red-600 px-3 py-1 rounded text-xs font-bold uppercase">Halo</span>
             <h1 className="text-5xl font-bold leading-tight">Halo 5:<br /> Guardians</h1>
             
             <div className="flex gap-4 text-sm text-gray-300">
               <span>Xbox</span>
               <span>Playstation</span>
               <span>PC</span>
             </div>

             <div className="flex items-center gap-6 pt-4">
               <div className="flex flex-col">
                 <span className="text-2xl font-bold text-white">$29</span>
                 <span className="text-sm line-through text-gray-400">$39</span>
               </div>
               <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full font-semibold transition">
                 Buy Now
               </button>
             </div>
          </div>
        </div>

        {/* දකුණු පස කොටස - Content Details */}
        <div className="bg-white p-20  flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Review: 4.5/5</h2>
              <button className="text-gray-400 hover:text-gray-600">View More</button>
            </div>

            <p className="text-gray-500 leading-relaxed text-sm mb-8">
              Halo 5: Guardians is a first-person shooter video game developed by 343 Industries... 
              The game's plot follows two fireteams of human supersoldiers: Blue Team, led by Master Chief, 
              and Fireteam Osiris, led by Spartan Locke. Guardians is a first-person shooter video game developed by 343 Industries... 
              The game's plot follows two fireteams of human supersoldiers: Blue Team, led by Master Chief, 
              and Fireteam Osiris, led by Spartan Locke.
            </p>

            <div className="grid grid-cols-2 gap-4 text-sm mb-10">
              <div>
                <span className="text-gray-400">Series : </span>
                <span className="font-semibold text-gray-700">Halo</span>
                <br />
                <span className="text-gray-400">Release Date : </span>
                <span className="font-semibold text-gray-700">October 27, 2015</span>
                <br />
                <span className="text-gray-400">Lesson : </span>
                <span className="font-semibold text-gray-700">Lesson Name</span>
              </div>
              <div className=''>
                <button className="text-red-400 border-red-500 border-2 rounded-full px-5 py-2 hover:text-gray-600">View More</button>
              </div>
            </div>
          </div>

          {/* Related Games Thumbnails */}
          <div>
            <div className="grid grid-cols-4 gap-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="space-y-2">
                  <div className="aspect-[3/4] bg-gray-200 rounded-lg overflow-hidden">
                    <img 
                      src={`https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=100&h=130`} 
                      className="w-full h-full object-cover" 
                      alt="game"
                    />
                  </div>
                  <p className="text-[10px] font-bold truncate">Call of duty: MW3</p>
                </div>
              ))}
            </div>
            <button className="mt-4 text-xs font-bold flex items-center gap-1 hover:gap-2 transition-all">
              See More <span>→</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BookSection;