import React from 'react';
import SectionTitle from '../components/SectionTitle.tsx';
import { SERVICES } from '../constants.tsx';

const Services: React.FC = () => {
  return (
    <div className="pt-24 bg-white dark:bg-gray-950 transition-colors duration-300">
      {/* Header */}
      <section className="py-20 md:py-32 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" alt="" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionTitle 
            title="Professional Services" 
            subtitle="Expert architectural and engineering solutions for every phase of development." 
            light
          />
        </div>
      </section>

      {/* Main Services List */}
      <section className="py-16 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16">
            {SERVICES.map((service, index) => (
              <div key={index} className="flex gap-6 group">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 flex items-center justify-center border-2 border-orange-500 text-orange-500 font-bold group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 shadow-lg">
                    {index + 1}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-orange-600 transition-colors">{service}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm md:text-base">
                    Customized approaches to {service.toLowerCase()} ensuring all regulatory hurdles are cleared and design goals are met with efficiency.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-32 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            <div className="lg:w-1/2 w-full order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&q=80&w=1200" 
                className="w-full h-auto shadow-2xl grayscale dark:grayscale-[0.5]"
                alt="Architectural process"
              />
            </div>
            <div className="lg:w-1/2 w-full order-1 lg:order-2">
              <SectionTitle title="Our Methodology" />
              <div className="space-y-10 md:space-y-12">
                {[
                  { step: '1', title: 'Listen & Learn', desc: 'We begin every project by deeply understanding your operational requirements and aesthetic goals.' },
                  { step: '2', title: 'Analyze & Strategize', desc: 'Our team performs thorough code reviews and feasibility studies to mitigate risks early.' },
                  { step: '3', title: 'Design & Deliver', desc: 'Utilizing state-of-the-art tools for BIM and rendering, we bring the vision to life with precision.' }
                ].map((item) => (
                  <div key={item.step} className="flex gap-6">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-orange-600 text-white flex-shrink-0 flex items-center justify-center font-bold shadow-lg">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-2 dark:text-white">{item.title}</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;