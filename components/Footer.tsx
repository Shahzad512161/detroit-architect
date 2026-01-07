
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo & Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-white text-xl font-bold mb-6 tracking-tighter">
              DETROIT ARCHITECTURAL GROUP <span className="text-orange-500">.</span>
            </h3>
            <p className="max-w-md mb-6 leading-relaxed">
              Reliable design partners with credible knowledge, valued creativity, and industry expertise. Since 2016, we've been shaping the built environment of Detroit and beyond.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-orange-500 transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-orange-500 transition-colors">Instagram</a>
              <a href="#" className="hover:text-orange-500 transition-colors">Facebook</a>
              <a href="#" className="hover:text-orange-500 transition-colors">YouTube</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase text-sm tracking-widest">Navigation</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="hover:text-orange-500 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-orange-500 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-orange-500 transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="hover:text-orange-500 transition-colors">Portfolio</Link></li>
              <li><Link to="/contact" className="hover:text-orange-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase text-sm tracking-widest">Contact</h4>
            <address className="not-italic space-y-4">
              <p>1644 Ford Avenue,<br />Wyandotte, Michigan 48192</p>
              <p>(734) 556-3259</p>
              <p><a href="mailto:info@detroitarch.com" className="hover:text-orange-500 transition-colors">info@detroitarch.com</a></p>
            </address>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} Detroit Architectural Group. All rights reserved.</p>
          <p className="mt-4 md:mt-0">Design & Architecture in the heart of Michigan.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
