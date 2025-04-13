
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TraceabilityModules from '@/components/traceability/TraceabilityModules';

const Traceability = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-guardian-dark mb-4">Traceability & Compliance</h1>
            <p className="text-guardian-gray max-w-2xl mx-auto">
              Tools to verify supply chain integrity, authenticate wildlife products, and ensure regulatory compliance.
            </p>
          </div>
          
          <TraceabilityModules />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Traceability;
