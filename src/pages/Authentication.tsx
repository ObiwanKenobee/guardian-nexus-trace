
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AuthLayout from '@/components/auth/AuthLayout';
import LoginForm from '@/components/auth/LoginForm';
import SignupForm from '@/components/auth/SignupForm';
import DemoLoginForm from '@/components/auth/DemoLoginForm';
import { useLocation } from 'react-router-dom';

const Authentication = () => {
  const location = useLocation();
  const defaultTab = location.state?.tab || "login";

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <AuthLayout defaultTab={defaultTab}>
          <LoginForm />
          <SignupForm />
          <DemoLoginForm />
        </AuthLayout>
      </main>
      <Footer />
    </div>
  );
};

export default Authentication;
