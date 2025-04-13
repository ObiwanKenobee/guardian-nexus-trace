
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-guardian-dark">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,125,125,0.2),rgba(0,0,0,0))]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(0,125,125,0.1),rgba(0,0,0,0))]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block mb-4 bg-guardian-teal/20 text-guardian-teal px-4 py-2 rounded-full text-sm font-medium">
              Fighting Wildlife Trafficking & Modern Slavery
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Ethical Trade Intelligence Platform
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-lg">
              Supply chain transparency, risk analytics, and impact reporting to protect endangered species and vulnerable communities.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/auth" state={{ tab: "signup" }}>
                <Button size="lg" className="bg-guardian-teal hover:bg-guardian-teal/90 text-white">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/demo">
                <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
                  Explore Demo
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square w-full max-w-md mx-auto relative">
              <div className="absolute inset-0 rounded-full bg-guardian-teal/20 animate-pulse duration-1000"></div>
              <div className="absolute inset-8 rounded-full bg-guardian-teal/30 animate-pulse duration-2000 delay-500"></div>
              <div className="absolute inset-16 rounded-full bg-guardian-teal/50 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
                  alt="Wildlife Protection" 
                  className="rounded-full w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
