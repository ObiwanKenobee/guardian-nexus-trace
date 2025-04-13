
import React from 'react';
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
      <Dashboard />
      <Map />
      <Verification />
      <Footer />
    </div>
  );
};

export default Index;
