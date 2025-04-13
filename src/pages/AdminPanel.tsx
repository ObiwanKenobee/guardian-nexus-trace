
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AdminModules from '@/components/admin/AdminModules';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import { Navigate } from 'react-router-dom';

const AdminPanel = () => {
  // In a real app, this would come from an auth context
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);
  const [userRole, setUserRole] = useState<string | null>(null);
  const [userName, setUserName] = useState<string | null>(null);

  // Check if user is logged in
  useEffect(() => {
    const userData = localStorage.getItem('guardian-user');
    if (userData) {
      const user = JSON.parse(userData);
      setIsLoggedIn(true);
      setUserRole(user.role);
      setUserName(user.name);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  // Show loading state while checking auth
  if (isLoggedIn === null) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-guardian-gray">Loading dashboard...</div>
        </main>
        <Footer />
      </div>
    );
  }

  // Redirect to login if not authenticated or not an admin
  if (isLoggedIn === false || userRole !== 'admin') {
    return <Navigate to="/auth" replace />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-16">
          <DashboardHeader userRole="admin" userName={userName || undefined} />
          
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
