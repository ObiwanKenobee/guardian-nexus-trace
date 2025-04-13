
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AuthModules from '@/components/auth/AuthModules';

const Authentication = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-guardian-dark mb-4">Authentication & Access Control</h1>
            <p className="text-guardian-gray max-w-2xl mx-auto">
              Secure login options, role-based access, and identity management for the Guardian-IO ecosystem.
            </p>
          </div>
          
          <AuthModules />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Authentication;
