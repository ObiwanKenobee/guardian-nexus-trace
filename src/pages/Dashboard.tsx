
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DashboardModules from '@/components/dashboard/DashboardModules';

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-guardian-dark mb-4">Core Dashboards</h1>
            <p className="text-guardian-gray max-w-2xl mx-auto">
              Comprehensive visualization of ESG metrics, supply chain risks, and conservation impact data.
            </p>
          </div>
          
          <DashboardModules />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
