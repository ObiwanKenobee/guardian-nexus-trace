
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import EngagementModules from '@/components/engagement/EngagementModules';

const Engagement = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-guardian-dark mb-4">Engagement & Media</h1>
            <p className="text-guardian-gray max-w-2xl mx-auto">
              Collaboration tools, success stories, and API endpoints for partners and stakeholders.
            </p>
          </div>
          
          <EngagementModules />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Engagement;
