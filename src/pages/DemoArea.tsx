
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DemoModules from '@/components/demo/DemoModules';
import AuthLayout from '@/components/auth/AuthLayout';
import LoginForm from '@/components/auth/LoginForm';
import SignupForm from '@/components/auth/SignupForm';
import DemoLoginForm from '@/components/auth/DemoLoginForm';

const DemoArea = () => {
  const [showDemoOptions, setShowDemoOptions] = useState(true);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        {showDemoOptions ? (
          <AuthLayout defaultTab="demo">
            <LoginForm />
            <SignupForm />
            <DemoLoginForm />
          </AuthLayout>
        ) : (
          <div className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-guardian-dark mb-4">Demo & Testing Area</h1>
              <p className="text-guardian-gray max-w-2xl mx-auto">
                Explore platform features with guided tours, sandbox environments, and sample data.
              </p>
            </div>
            
            <DemoModules />
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default DemoArea;
