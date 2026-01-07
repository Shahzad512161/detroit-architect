
import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import { SERVICES, CORE_PRINCIPLES } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/hero-detroit/1920/1080" 
            className="w-full h-full object-cover grayscale opacity-20"
            alt="Hero background" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-gray-50/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <span className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-4 block">Detroit Architectural Group</span>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight mb-6">
              Engineering the <span className="text-orange-600">Future</span> of Urban Design.
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Reliable design partners with credible knowledge, valued creativity, and industry expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/portfolio" className="bg-gray-900 text-white px-8 py-4 font-semibold hover:bg-orange-600 transition-all text-center">
                VIEW OUR WORK
              </Link>
              <Link to="/contact" className="border-2 border-gray-900 text-gray-900 px-8 py-4 font-semibold hover:bg-gray-900 hover:text-white transition-all text-center">
                CONTACT US
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tagline Highlight */}
      <section className="bg-gray-900 py-24 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-4xl text-white font-light italic leading-relaxed">
            "Reliable design partners with credible knowledge, valued creativity, and industry expertise."
          </h2>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <SectionTitle 
              title="Our Services" 
              subtitle="Comprehensive architectural solutions tailored to modern industrial and commercial needs." 
            />
            <Link to="/services" className="mb-12 text-orange-600 font-semibold hover:text-orange-800 flex items-center">
              EXPLORE ALL SERVICES 
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.slice(0, 6).map((service, index) => (
              <div key={index} className="p-8 border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-xl hover:border-orange-200 transition-all duration-300 group">
                <span className="text-4xl font-bold text-gray-200 group-hover:text-orange-100 transition-colors block mb-4">0{index + 1}</span>
                <h3 className="text-xl font-bold mb-4">{service}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Delivering high-precision architectural excellence focused on structural integrity and aesthetic value.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach / Core Principles */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Our Core Principles" centered />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16 text-center">
            {CORE_PRINCIPLES.map((principle, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 mb-6">
                   <span className="text-2xl font-bold">{principle.title.charAt(0)}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">{principle.title}</h3>
                <p className="text-gray-600 leading-relaxed">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <SectionTitle title="Selected Works" subtitle="A glimpse into our diverse portfolio of industrial and commercial spaces." centered />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          {[1, 2, 3].map((item) => (
            <Link key={item} to="/portfolio" className="relative h-96 group overflow-hidden block">
              <img 
                src={`https://picsum.photos/seed/port${item}/800/800`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale hover:grayscale-0"
                alt="Portfolio Item"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8 text-white">
                <span className="text-orange-500 font-bold uppercase tracking-wider text-xs mb-2">Architectural Excellence</span>
                <h4 className="text-2xl font-bold">Featured Project 0{item}</h4>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-12 text-center">
           <Link to="/portfolio" className="inline-block border-2 border-gray-900 px-10 py-4 font-bold hover:bg-gray-900 hover:text-white transition-all">
             BROWSE FULL PORTFOLIO
           </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-orange-600 text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to start your next project?</h2>
          <p className="text-xl mb-12 opacity-90">Our team is ready to provide the expertise and creativity your vision requires.</p>
          <Link to="/contact" className="inline-block bg-white text-orange-600 px-12 py-4 font-bold rounded shadow-lg hover:bg-gray-100 transition-all uppercase tracking-widest">
            GET IN TOUCH
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
