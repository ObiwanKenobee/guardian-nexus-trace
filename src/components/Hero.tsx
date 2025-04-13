
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Globe } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-guardian-dark via-guardian-dark to-black overflow-hidden pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] rounded-full bg-guardian-teal/10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-guardian-amber/10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 flex flex-col lg:flex-row relative z-10">
        <div className="lg:w-1/2 space-y-6 lg:pr-10 mb-10 lg:mb-0">
          <div className="inline-block px-4 py-1 rounded-full bg-guardian-teal/20 text-guardian-teal text-sm font-medium animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Fighting wildlife trafficking & modern slavery
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <span className="text-guardian-teal">Ethical Trade</span> Intelligence Platform
          </h1>
          
          <p className="text-lg text-white/80 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            Real-time traceability, risk analytics, and impact reporting for global supply chains. Protect wildlife and human rights through transparent, ethical trade.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <Button className="bg-guardian-teal hover:bg-guardian-teal/90 text-white px-6">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="text-white border-white/30 hover:bg-white/10 px-6">
              Watch Demo
            </Button>
          </div>
          
          <div className="pt-8 flex flex-wrap gap-x-8 gap-y-4 animate-fade-in" style={{ animationDelay: '1s' }}>
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-guardian-teal/20 flex items-center justify-center mr-3">
                <span className="text-guardian-teal font-bold text-lg">82%</span>
              </div>
              <span className="text-white/70 text-sm">Increase in detection rate</span>
            </div>
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-guardian-teal/20 flex items-center justify-center mr-3">
                <span className="text-guardian-teal font-bold text-lg">57+</span>
              </div>
              <span className="text-white/70 text-sm">Countries using Guardian-IO</span>
            </div>
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-guardian-teal/20 flex items-center justify-center mr-3">
                <span className="text-guardian-teal font-bold text-lg">24/7</span>
              </div>
              <span className="text-white/70 text-sm">Real-time monitoring</span>
            </div>
          </div>
        </div>
        
        <div className="lg:w-1/2 flex items-center justify-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center animate-globe-rotate">
              <div className="w-[500px] h-[500px] border border-guardian-teal/30 rounded-full"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center animate-globe-rotate" style={{ animationDelay: '0.2s', animationDuration: '25s' }}>
              <div className="w-[400px] h-[400px] border border-guardian-teal/20 rounded-full"></div>
            </div>
            <div className="relative z-10 w-[300px] h-[300px] bg-guardian-teal/20 backdrop-blur-sm rounded-full flex items-center justify-center">
              <Globe className="h-32 w-32 text-guardian-teal animate-pulse-slow" />
            </div>
            
            {/* Floating elements */}
            <div className="absolute top-10 right-20 glass-card px-2 py-1 rounded-md animate-float">
              <span className="text-xs text-guardian-dark font-medium">Species Detection</span>
            </div>
            <div className="absolute -bottom-4 left-10 glass-card px-2 py-1 rounded-md animate-float" style={{ animationDelay: '1s' }}>
              <span className="text-xs text-guardian-dark font-medium">Supply Chain Alert</span>
            </div>
            <div className="absolute top-1/2 -left-10 glass-card px-2 py-1 rounded-md animate-float" style={{ animationDelay: '2s' }}>
              <span className="text-xs text-guardian-dark font-medium">Risk Score: 82%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
