
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DemoModules from '@/components/demo/DemoModules';

const DemoArea = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-guardian-dark mb-4">Demo & Testing Area</h1>
            <p className="text-guardian-gray max-w-2xl mx-auto">
              Explore platform features with guided tours, sandbox environments, and sample data.
            </p>
          </div>
          
          <DemoModules />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DemoArea;
