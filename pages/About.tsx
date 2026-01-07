
import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { TEAM_MEMBERS } from '../constants';

const About: React.FC = () => {
  return (
    <div className="pt-24">
      {/* Introduction Header */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-orange-600 font-bold uppercase tracking-widest text-sm mb-4 block">Established 2016</span>
              <SectionTitle title="Detroit Architectural Group" />
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  Detroit Architectural Group (DAG) was founded in 2016 with a singular vision: to deliver world-class architectural solutions that blend technical precision with artistic inspiration.
                </p>
                <p>
                  Based in the heart of the Detroit metropolitan area, our firm has grown into a multi-disciplinary powerhouse, serving diverse industries ranging from heavy industrial to high-end residential. We pride ourselves on being reliable design partners who bring credible knowledge and valued creativity to every board meeting and job site.
                </p>
                <p>
                  Our expertise isn't just in drawing plans; it's in understanding the complex intersection of code, commerce, and community.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://picsum.photos/seed/dag-office/1000/1200" 
                className="w-full h-auto shadow-2xl grayscale"
                alt="DAG Office Culture" 
              />
              <div className="absolute -bottom-10 -left-10 bg-orange-600 p-8 text-white hidden md:block">
                <span className="text-5xl font-bold block mb-2">9+</span>
                <span className="text-sm uppercase tracking-widest">Years of Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detroit Inspiration */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 text-white p-12 md:p-24 relative">
             <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
               <svg className="w-full h-full" viewBox="0 0 100 100" fill="currentColor">
                 <path d="M0 100 L50 0 L100 100 Z" />
               </svg>
             </div>
             <div className="relative z-10 max-w-3xl">
               <h2 className="text-4xl font-bold mb-8">The Detroit Inspiration</h2>
               <p className="text-xl text-gray-400 leading-relaxed italic">
                 "Our design philosophy is deeply rooted in the architectural heritage of Detroit. We draw inspiration from the city's industrial resilience, its modernist masterworks, and its ongoing renaissance. Every project we undertake is a contribution to this storied urban legacy."
               </p>
             </div>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Meet The Team" 
            subtitle="Our diverse team of experts is the engine behind our success." 
            centered 
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {TEAM_MEMBERS.map((member, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden aspect-[3/4] mb-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-orange-600 font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
