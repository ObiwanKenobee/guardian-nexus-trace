
import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-guardian-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="h-8 w-8 rounded-full bg-guardian-teal flex items-center justify-center">
                <span className="text-white font-bold text-lg">G</span>
              </div>
              <span className="text-white font-bold text-xl">Guardian-IO Nexus™</span>
            </div>
            <p className="text-white/70 mb-6">
              Fighting wildlife trafficking and modern slavery through ethical trade intelligence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-guardian-teal transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-guardian-teal transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-guardian-teal transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-guardian-teal transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Platform</h3>
            <ul className="space-y-2">
              <li><a href="#dashboard" className="text-white/70 hover:text-guardian-teal transition-colors">Dashboard</a></li>
              <li><a href="#map" className="text-white/70 hover:text-guardian-teal transition-colors">Supply Chain Map</a></li>
              <li><a href="#verification" className="text-white/70 hover:text-guardian-teal transition-colors">Verification Portal</a></li>
              <li><a href="#" className="text-white/70 hover:text-guardian-teal transition-colors">Impact Stories</a></li>
              <li><a href="#" className="text-white/70 hover:text-guardian-teal transition-colors">API Documentation</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-guardian-teal transition-colors">About Us</a></li>
              <li><a href="#" className="text-white/70 hover:text-guardian-teal transition-colors">Partners</a></li>
              <li><a href="#" className="text-white/70 hover:text-guardian-teal transition-colors">Careers</a></li>
              <li><a href="#" className="text-white/70 hover:text-guardian-teal transition-colors">Press</a></li>
              <li><a href="#" className="text-white/70 hover:text-guardian-teal transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 text-guardian-teal" />
                <span className="text-white/70">info@guardian-nexus.io</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 text-guardian-teal" />
                <span className="text-white/70">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-guardian-teal" />
                <span className="text-white/70">123 Tech Plaza, Suite 400<br/>San Francisco, CA 94105</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            &copy; 2025 Guardian-IO Nexus. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white/60 text-sm hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/60 text-sm hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-white/60 text-sm hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
