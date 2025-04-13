
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AdminModules from '@/components/admin/AdminModules';

const AdminPanel = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-guardian-dark mb-4">Admin & AI Panel</h1>
            <p className="text-guardian-gray max-w-2xl mx-auto">
              Advanced controls, AI insights, and system management tools for platform administrators.
            </p>
          </div>
          
          <AdminModules />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AdminPanel;
