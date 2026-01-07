
import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import { PORTFOLIO_ITEMS, PORTFOLIO_CATEGORIES } from '../constants';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('All');

  const filteredItems = filter === 'All' 
    ? PORTFOLIO_ITEMS 
    : PORTFOLIO_ITEMS.filter(item => item.category === filter);

  return (
    <div className="pt-24">
      <section className="py-20 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Portfolio" 
            subtitle="Showcasing our impact across industries and sectors." 
          />

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 mt-8">
            {PORTFOLIO_CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 text-sm font-semibold transition-all border ${
                  filter === category 
                  ? 'bg-gray-900 text-white border-gray-900' 
                  : 'bg-white text-gray-600 border-gray-200 hover:border-gray-900'
                }`}
              >
                {category.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div key={item.id} className="group relative overflow-hidden bg-gray-100">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gray-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-6">
                  <span className="text-orange-500 font-bold text-xs uppercase tracking-widest mb-2">{item.category}</span>
                  <h3 className="text-white text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm mb-6">{item.location}</p>
                  <button className="border border-white text-white px-6 py-2 text-sm font-bold hover:bg-white hover:text-gray-900 transition-all uppercase">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {filteredItems.length === 0 && (
            <div className="py-24 text-center">
              <p className="text-gray-500 text-lg">No projects found in this category yet.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
