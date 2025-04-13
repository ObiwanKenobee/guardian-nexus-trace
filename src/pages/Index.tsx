
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Vote } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Dashboard from '@/components/Dashboard';
import Map from '@/components/Map';
import Features from '@/components/Features';
import Verification from '@/components/Verification';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      
      {/* Voting Callout Section */}
      <section className="py-16 bg-guardian-dark">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-guardian-teal/20 to-transparent p-8 rounded-lg border border-guardian-teal/30 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Help Shape Our Development Roadmap</h2>
              <p className="text-white/80 mb-6">
                Guardian-IO Nexus is built with community input. Vote on which features we should prioritize in our upcoming development sprints.
              </p>
              <div className="flex items-center gap-2">
                <Vote className="h-5 w-5 text-guardian-teal" />
                <span className="text-guardian-teal font-medium">45 votes for our top feature so far</span>
              </div>
            </div>
            <div>
              <Link to="/vote">
                <Button size="lg" className="bg-guardian-teal hover:bg-guardian-teal/90 text-white">
                  Cast Your Vote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Dashboard />
      <Map />
      <Verification />
      <Footer />
    </div>
  );
};

export default Index;
