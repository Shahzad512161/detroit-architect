import React from 'react';
import SectionTitle from '../components/SectionTitle.tsx';

const Contact: React.FC = () => {
  return (
    <div className="pt-24 bg-white dark:bg-gray-950 transition-colors duration-300 min-h-screen">
      {/* Header */}
      <section className="py-12 md:py-24 bg-gray-50 dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Let's Connect" 
            subtitle="Ready to discuss your next architectural landmark? Our team is standing by." 
          />
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Contact Form */}
            <div className="bg-white dark:bg-gray-900 p-8 md:p-12 shadow-2xl border border-gray-100 dark:border-gray-800">
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-3">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full bg-gray-50 dark:bg-gray-800 border-b-2 border-gray-200 dark:border-gray-700 px-0 py-4 focus:outline-none focus:border-orange-500 dark:text-white transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-3">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full bg-gray-50 dark:bg-gray-800 border-b-2 border-gray-200 dark:border-gray-700 px-0 py-4 focus:outline-none focus:border-orange-500 dark:text-white transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-3">Your Message</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    className="w-full bg-gray-50 dark:bg-gray-800 border-b-2 border-gray-200 dark:border-gray-700 px-0 py-4 focus:outline-none focus:border-orange-500 dark:text-white transition-all"
                    placeholder="Tell us about your project goals..."
                  ></textarea>
                </div>
                <button type="submit" className="w-full md:w-auto bg-gray-900 dark:bg-orange-600 text-white px-12 py-5 font-bold hover:bg-orange-600 dark:hover:bg-orange-700 transition-all uppercase tracking-[0.2em] shadow-xl">
                  Send Message
                </button>
              </form>
            </div>

            {/* Info & Map Container */}
            <div className="flex flex-col justify-between py-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
                <div>
                  <h4 className="text-orange-600 font-bold uppercase text-xs tracking-[0.2em] mb-6">Our Office</h4>
                  <address className="not-italic text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                    1644 Ford Avenue,<br />
                    Wyandotte, Michigan 48192
                  </address>
                </div>
                <div>
                  <h4 className="text-orange-600 font-bold uppercase text-xs tracking-[0.2em] mb-6">Inquiries</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-lg mb-2">(734) 556-3259</p>
                  <p className="text-gray-600 dark:text-gray-400 text-lg">info@detroitarch.com</p>
                </div>
              </div>

              {/* Placeholder Map */}
              <div className="w-full aspect-[16/9] bg-gray-100 dark:bg-gray-800 relative group overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700 mb-12">
                <img 
                  src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80&w=1200" 
                  className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 transition-all duration-700"
                  alt="Map Placeholder"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="bg-white dark:bg-gray-900 p-6 shadow-2xl border-t-4 border-orange-500 translate-y-2 group-hover:translate-y-0 transition-transform">
                     <p className="font-bold text-gray-900 dark:text-white">DAG HEADQUARTERS</p>
                     <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-widest mt-1">Wyandotte, MI</p>
                   </div>
                </div>
              </div>

              <div>
                 <h4 className="text-gray-900 dark:text-white font-bold uppercase text-xs tracking-widest mb-6">Social Networks</h4>
                 <div className="flex flex-wrap gap-8 text-sm font-bold uppercase tracking-widest">
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