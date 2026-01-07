import React from 'react';
import SectionTitle from '../components/SectionTitle.tsx';
import { TEAM_MEMBERS } from '../constants.tsx';

const About: React.FC = () => {
  return (
    <div className="pt-24 bg-white dark:bg-gray-950 transition-colors duration-300">
      {/* Introduction Header */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-orange-600 font-bold uppercase tracking-widest text-xs md:text-sm mb-4 block">Established 2016</span>
              <SectionTitle title="Detroit Architectural Group" />
              <div className="space-y-6 text-gray-600 dark:text-gray-400 text-base md:text-lg leading-relaxed">
                <p>
                  Detroit Architectural Group (DAG) was founded in 2016 with a singular vision: to deliver world-class architectural solutions that blend technical precision with artistic inspiration.
                </p>
                <p>
                  Based in the heart of the Detroit metropolitan area, our firm has grown into a multi-disciplinary powerhouse, serving diverse industries ranging from heavy industrial to high-end residential.
                </p>
              </div>
            </div>
            <div className="relative order-1 lg:order-2">
              <img 
                src="https://images.unsplash.com/photo-1541976590-713941681591?auto=format&fit=crop&q=80&w=1000" 
                className="w-full h-auto shadow-2xl grayscale dark:grayscale-[0.5]"
                alt="DAG Office Culture" 
              />
              <div className="absolute -bottom-6 -left-6 md:-bottom-10 md:-left-10 bg-orange-600 p-6 md:p-10 text-white">
                <span className="text-4xl md:text-6xl font-bold block mb-2">9+</span>
                <span className="text-xs md:text-sm uppercase tracking-widest font-bold">Years of Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detroit Inspiration */}
      <section className="py-20 md:py-32 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 dark:bg-gray-900 text-white p-10 md:p-24 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
               <svg className="w-full h-full" viewBox="0 0 100 100" fill="currentColor"><path d="M0 100 L50 0 L100 100 Z" /></svg>
             </div>
             <div className="relative z-10 max-w-3xl">
               <h2 className="text-3xl md:text-5xl font-bold mb-8">The Detroit Inspiration</h2>
               <p className="text-lg md:text-2xl text-gray-400 leading-relaxed italic font-light">
                 "Our design philosophy is deeply rooted in the architectural heritage of Detroit. We draw inspiration from the city's industrial resilience, its modernist masterworks, and its ongoing renaissance."
               </p>
             </div>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 md:py-32 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Meet The Team" 
            subtitle="Our diverse team of experts is the engine behind our success." 
            centered 
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mt-16">
            {TEAM_MEMBERS.map((member, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden aspect-[4/5] mb-6 shadow-lg">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-1">{member.name}</h3>
                <p className="text-orange-600 font-bold uppercase tracking-widest text-xs">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;