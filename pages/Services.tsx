
import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Professional Services" 
            subtitle="Expert architectural and engineering solutions for every phase of development." 
            light
          />
        </div>
      </section>

      {/* Main Services List */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {SERVICES.map((service, index) => (
              <div key={index} className="flex gap-6 group">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 flex items-center justify-center border border-orange-500 text-orange-500 font-bold group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                    {index + 1}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-orange-600 transition-colors">{service}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Customized approaches to {service.toLowerCase()} ensuring all regulatory hurdles are cleared and design goals are met with efficiency.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <img 
                src="https://picsum.photos/seed/blueprint/1000/700" 
                className="w-full h-auto shadow-xl"
                alt="Architectural process"
              />
            </div>
            <div className="lg:w-1/2">
              <SectionTitle title="Our Methodology" />
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-orange-600 text-white flex-shrink-0 flex items-center justify-center font-bold">1</div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Listen & Learn</h4>
                    <p className="text-gray-600">We begin every project by deeply understanding your operational requirements and aesthetic goals.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-orange-600 text-white flex-shrink-0 flex items-center justify-center font-bold">2</div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Analyze & Strategize</h4>
                    <p className="text-gray-600">Our team performs thorough code reviews and feasibility studies to mitigate risks early.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-orange-600 text-white flex-shrink-0 flex items-center justify-center font-bold">3</div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Design & Deliver</h4>
                    <p className="text-gray-600">Utilizing state-of-the-art tools for BIM and rendering, we bring the vision to life with precision.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
