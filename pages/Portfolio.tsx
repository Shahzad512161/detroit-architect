import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle.tsx';
import { PORTFOLIO_ITEMS, PORTFOLIO_CATEGORIES } from '../constants.tsx';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('All');

  const filteredItems = filter === 'All' 
    ? PORTFOLIO_ITEMS 
    : PORTFOLIO_ITEMS.filter(item => item.category === filter);

  return (
    <div className="pt-24 bg-white dark:bg-gray-950 transition-colors duration-300 min-h-screen">
      <section className="py-12 md:py-20 bg-gray-50 dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Portfolio" 
            subtitle="Showcasing our impact across industries and sectors." 
          />

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 md:gap-3 mt-10">
            {PORTFOLIO_CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2.5 md:px-6 md:py-3 text-[10px] md:text-xs font-bold transition-all border uppercase tracking-widest ${
                  filter === category 
                  ? 'bg-gray-900 dark:bg-orange-600 text-white border-gray-900 dark:border-orange-600 shadow-lg' 
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-700 hover:border-gray-900 dark:hover:border-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-12 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            {filteredItems.map((item) => (
              <div key={item.id} className="group relative overflow-hidden bg-gray-100 dark:bg-gray-900 aspect-[4/3] shadow-xl">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gray-900/90 opacity-0 group-hover:opacity-100 transition-all duration-400 flex flex-col justify-center items-center text-center p-8 translate-y-4 group-hover:translate-y-0">
                  <span className="text-orange-500 font-bold text-xs uppercase tracking-[0.3em] mb-3">{item.category}</span>
                  <h3 className="text-white text-xl md:text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-400 text-xs md:text-sm mb-8 tracking-wider uppercase">{item.location}</p>
                  <button className="border border-white/30 text-white px-8 py-3 text-xs font-bold hover:bg-white hover:text-gray-900 transition-all uppercase tracking-widest">
                    View Project
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {filteredItems.length === 0 && (
            <div className="py-32 text-center">
              <div className="text-gray-300 dark:text-gray-700 text-6xl mb-6">∅</div>
              <p className="text-gray-500 dark:text-gray-400 text-lg font-medium">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;