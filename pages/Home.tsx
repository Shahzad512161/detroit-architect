import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle.tsx';
import { SERVICES, CORE_PRINCIPLES } from '../constants.tsx';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] lg:h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070" 
            className="w-full h-full object-cover grayscale opacity-20 dark:opacity-30"
            alt="Hero background" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-gray-50/90 to-transparent dark:from-gray-950 dark:via-gray-950/90"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
          <div className="max-w-3xl">
            <span className="text-orange-500 font-bold uppercase tracking-[0.2em] text-xs md:text-sm mb-4 block">Detroit Architectural Group</span>
            <h1 className="text-4xl md:text-7xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
              Engineering the <span className="text-orange-600">Future</span> of Urban Design.
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed max-w-xl">
              Reliable design partners with credible knowledge, valued creativity, and industry expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/portfolio" className="bg-gray-900 dark:bg-orange-600 text-white px-10 py-5 font-bold hover:bg-orange-600 dark:hover:bg-orange-700 transition-all text-center shadow-xl">
                VIEW OUR WORK
              </Link>
              <Link to="/contact" className="border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white px-10 py-5 font-bold hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all text-center">
                CONTACT US
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tagline Highlight */}
      <section className="bg-gray-900 dark:bg-gray-900 py-20 md:py-32 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-xl md:text-4xl text-white font-light italic leading-relaxed">
            "Reliable design partners with credible knowledge, valued creativity, and industry expertise."
          </h2>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 md:py-32 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <SectionTitle 
              title="Our Services" 
              subtitle="Comprehensive architectural solutions tailored to modern industrial and commercial needs." 
            />
            <Link to="/services" className="text-orange-600 font-bold hover:text-orange-800 flex items-center group">
              EXPLORE ALL SERVICES 
              <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.slice(0, 6).map((service, index) => (
              <div key={index} className="p-10 border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 hover:bg-white dark:hover:bg-gray-800 hover:shadow-2xl transition-all duration-300 group">
                <span className="text-5xl font-bold text-gray-200 dark:text-gray-800 group-hover:text-orange-200 dark:group-hover:text-orange-900 transition-colors block mb-6">0{index + 1}</span>
                <h3 className="text-xl font-bold mb-4 dark:text-white">{service}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  Delivering high-precision architectural excellence focused on structural integrity and aesthetic value.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-20 md:py-32 bg-gray-50 dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Our Core Principles" centered />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mt-16 text-center">
            {CORE_PRINCIPLES.map((principle, index) => (
              <div key={index} className="flex flex-col items-center max-w-xs mx-auto">
                <div className="w-20 h-20 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center text-orange-600 mb-8 shadow-inner">
                   <span className="text-3xl font-bold">{principle.title.charAt(0)}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 dark:text-white">{principle.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 md:py-32 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <SectionTitle title="Selected Works" subtitle="A glimpse into our diverse portfolio." centered />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <Link key={item} to="/portfolio" className="relative h-80 md:h-[500px] group overflow-hidden block">
              <img 
                src={`https://picsum.photos/seed/dagwork${item}/1000/1200`} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                alt="Portfolio Item"
              />
              <div className="absolute inset-0 bg-gray-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-10 text-white">
                <span className="text-orange-500 font-bold uppercase tracking-widest text-xs mb-3">Architectural Excellence</span>
                <h4 className="text-2xl md:text-3xl font-bold">Project 0{item}</h4>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-16 text-center">
           <Link to="/portfolio" className="inline-block border-2 border-gray-900 dark:border-white px-12 py-5 font-bold hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all uppercase tracking-widest">
             BROWSE FULL PORTFOLIO
           </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-6xl font-bold mb-8 leading-tight">Ready to start your next project?</h2>
          <p className="text-lg md:text-xl mb-12 opacity-90 max-w-2xl mx-auto">Our team is ready to provide the expertise and creativity your vision requires.</p>
          <Link to="/contact" className="inline-block bg-white text-orange-600 px-12 py-5 font-bold shadow-2xl hover:bg-gray-100 transition-all uppercase tracking-[0.2em]">
            GET IN TOUCH
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;