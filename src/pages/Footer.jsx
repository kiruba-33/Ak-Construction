import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    /* hidden: mobile/tablet-la hide pannum | lg:block: desktop-la mattum show pannum */
    <footer className="hidden lg:block bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-4 gap-12">
          
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center">
                <span className="font-bold text-xl">AK</span>
              </div>
              <h2 className="text-2xl font-bold tracking-tight">
                AK <span className="text-orange-600">Construction</span>
              </h2>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Building premium residential and commercial spaces with over 25 years of excellence. Your vision, our expertise.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-orange-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-orange-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-orange-600 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold border-b-2 border-orange-600 w-fit pb-1">Quick Links</h3>
            <ul className="space-y-4 text-gray-400">
              <li><a href="/" className="hover:text-orange-600 transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-orange-600 transition-colors">About Us</a></li>
              <li><a href="/services" className="hover:text-orange-600 transition-colors">Our Services</a></li>
              <li><a href="/gallery" className="hover:text-orange-600 transition-colors">Project Gallery</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold border-b-2 border-orange-600 w-fit pb-1">Our Services</h3>
            <ul className="space-y-4 text-gray-400">
              <li>Residential Construction</li>
              <li>Commercial Projects</li>
              <li>3D Architectural Design</li>
              <li>Interior Renovation</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold border-b-2 border-orange-600 w-fit pb-1">Contact Us</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="text-orange-600 shrink-0" size={20} />
                <span>123 Construction Ave, <br />Theni, Tamil Nadu</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-orange-600" size={20} />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-orange-600" size={20} />
                <span>info@akconstruction.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} AK Construction. All rights reserved. Designed by Kiruba Karan.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;