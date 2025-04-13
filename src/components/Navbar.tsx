
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Vote } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Authentication", path: "/auth" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Traceability", path: "/traceability" },
    { name: "Admin", path: "/admin" },
    { name: "Engagement", path: "/engagement" },
    { name: "Demo", path: "/demo" }
  ];

  return (
    <nav className="fixed w-full z-50 bg-guardian-dark/90 backdrop-blur-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-guardian-teal flex items-center justify-center">
              <span className="text-white font-bold text-lg">G</span>
            </div>
            <span className="text-white font-bold text-xl">Guardian-IO Nexus™</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          {navItems.map((item) => (
            <Link 
              key={item.name}
              to={item.path} 
              className="text-white/80 hover:text-white transition-colors px-2"
            >
              {item.name}
            </Link>
          ))}
          <Link to="/vote">
            <Button variant="outline" className="text-guardian-teal border-guardian-teal hover:bg-guardian-teal hover:text-white flex items-center gap-2">
              <Vote size={16} />
              Vote
            </Button>
          </Link>
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
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-white/80 hover:text-white transition-colors py-2 border-b border-white/10"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link 
              to="/vote" 
              className="flex items-center gap-2 text-guardian-teal py-2"
              onClick={() => setIsOpen(false)}
            >
              <Vote size={16} />
              Vote on Features
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
