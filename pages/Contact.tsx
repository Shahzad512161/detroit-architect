
import React from 'react';
import SectionTitle from '../components/SectionTitle';

const Contact: React.FC = () => {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Let's Connect" 
            subtitle="Ready to discuss your next architectural landmark? Our team is standing by." 
          />
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <div>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-gray-700 uppercase tracking-wider mb-2">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full border border-gray-200 px-4 py-3 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-gray-700 uppercase tracking-wider mb-2">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full border border-gray-200 px-4 py-3 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-bold text-gray-700 uppercase tracking-wider mb-2">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full border border-gray-200 px-4 py-3 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
                    placeholder="New Project Inquiry"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-700 uppercase tracking-wider mb-2">Your Message</label>
                  <textarea 
                    id="message" 
                    rows={6}
                    className="w-full border border-gray-200 px-4 py-3 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
                    placeholder="Tell us about your project goals..."
                  ></textarea>
                </div>
                <button type="submit" className="bg-gray-900 text-white px-10 py-4 font-bold hover:bg-orange-600 transition-all uppercase tracking-widest shadow-lg">
                  Send Message
                </button>
              </form>
            </div>

            {/* Info & Map */}
            <div className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-orange-600 font-bold uppercase text-xs tracking-widest mb-4">Our Office</h4>
                  <address className="not-italic text-gray-600 leading-relaxed">
                    1644 Ford Avenue,<br />
                    Wyandotte, Michigan 48192
                  </address>
                </div>
                <div>
                  <h4 className="text-orange-600 font-bold uppercase text-xs tracking-widest mb-4">Inquiries</h4>
                  <p className="text-gray-600">(734) 556-3259</p>
                  <p className="text-gray-600">info@detroitarch.com</p>
                </div>
              </div>

              {/* Placeholder Map */}
              <div className="w-full aspect-video bg-gray-100 relative group overflow-hidden border border-gray-200">
                <img 
                  src="https://picsum.photos/seed/detroit-map/1200/800" 
                  className="w-full h-full object-cover grayscale opacity-50"
                  alt="Map Placeholder"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="bg-white p-4 shadow-xl border-t-4 border-orange-500">
                     <p className="font-bold text-sm">DAG HQ</p>
                     <p className="text-xs text-gray-500">Wyandotte, MI</p>
                   </div>
                </div>
              </div>

              <div>
                 <h4 className="text-gray-900 font-bold uppercase text-xs tracking-widest mb-4">Follow Us</h4>
                 <div className="flex space-x-6 text-2xl">
                    <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">LinkedIn</a>
                    <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Instagram</a>
                    <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">YouTube</a>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
