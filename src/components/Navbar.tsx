
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-guardian-dark/90 backdrop-blur-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-guardian-teal flex items-center justify-center">
            <span className="text-white font-bold text-lg">G</span>
          </div>
          <span className="text-white font-bold text-xl">Guardian-IO Nexus™</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#dashboard" className="text-white/80 hover:text-white transition-colors">Dashboard</a>
          <a href="#map" className="text-white/80 hover:text-white transition-colors">Map</a>
          <a href="#verification" className="text-white/80 hover:text-white transition-colors">Verification</a>
          <a href="#impact" className="text-white/80 hover:text-white transition-colors">Impact</a>
          <Button variant="outline" className="text-guardian-teal border-guardian-teal hover:bg-guardian-teal hover:text-white">
            Partner Login
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-guardian-dark/95 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a 
              href="#dashboard" 
              className="text-white/80 hover:text-white transition-colors py-2 border-b border-white/10"
              onClick={() => setIsOpen(false)}
            >
              Dashboard
            </a>
            <a 
              href="#map" 
              className="text-white/80 hover:text-white transition-colors py-2 border-b border-white/10"
              onClick={() => setIsOpen(false)}
            >
              Map
            </a>
            <a 
              href="#verification" 
              className="text-white/80 hover:text-white transition-colors py-2 border-b border-white/10"
              onClick={() => setIsOpen(false)}
            >
              Verification
            </a>
            <a 
              href="#impact" 
              className="text-white/80 hover:text-white transition-colors py-2 border-b border-white/10"
              onClick={() => setIsOpen(false)}
            >
              Impact
            </a>
            <Button 
              variant="outline" 
              className="text-guardian-teal border-guardian-teal hover:bg-guardian-teal hover:text-white w-full"
              onClick={() => setIsOpen(false)}
            >
              Partner Login
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
