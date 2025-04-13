
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BarChart3, 
  Map, 
  ShieldAlert, 
  FileBarChart, 
  FileCheck2
} from 'lucide-react';

interface DashboardHeaderProps {
  userRole?: string;
  userName?: string;
}

const DashboardHeader = ({ userRole = 'business', userName = 'User' }: DashboardHeaderProps) => {
  // Role-based greeting and quick links
  const roleInfo = {
    business: {
      greeting: "Supply Chain Dashboard",
      description: "Monitor sustainability metrics and supplier compliance",
      links: [
        { name: "Supplier Map", icon: <Map className="h-4 w-4" />, path: "/dashboard" },
        { name: "Compliance", icon: <FileCheck2 className="h-4 w-4" />, path: "/dashboard" },
        { name: "Risk Reports", icon: <ShieldAlert className="h-4 w-4" />, path: "/dashboard" }
      ]
    },
    ngo: {
      greeting: "Conservation Dashboard",
      description: "Track wildlife protection efforts and trafficking incidents",
      links: [
        { name: "Incident Map", icon: <Map className="h-4 w-4" />, path: "/dashboard" },
        { name: "Impact Data", icon: <BarChart3 className="h-4 w-4" />, path: "/dashboard" },
        { name: "Reports", icon: <FileBarChart className="h-4 w-4" />, path: "/dashboard" }
      ]
    },
    enforcement: {
      greeting: "Enforcement Dashboard",
      description: "Monitor trafficking alerts and verify seized products",
      links: [
        { name: "Active Alerts", icon: <ShieldAlert className="h-4 w-4" />, path: "/dashboard" },
        { name: "Verification", icon: <FileCheck2 className="h-4 w-4" />, path: "/dashboard" },
        { name: "Intelligence", icon: <Map className="h-4 w-4" />, path: "/dashboard" }
      ]
    },
    admin: {
      greeting: "Admin Dashboard",
      description: "Platform management and system oversight",
      links: [
        { name: "User Management", icon: <FileBarChart className="h-4 w-4" />, path: "/admin" },
        { name: "Analytics", icon: <BarChart3 className="h-4 w-4" />, path: "/admin" },
        { name: "System Status", icon: <ShieldAlert className="h-4 w-4" />, path: "/admin" }
      ]
    }
  };

  const info = roleInfo[userRole as keyof typeof roleInfo] || roleInfo.business;

  return (
    <div className="bg-guardian-dark text-white p-6 rounded-lg mb-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold">{info.greeting}</h1>
          <p className="text-white/70">{info.description}</p>
        </div>
        <div className="flex gap-2 flex-wrap">
          {info.links.map((link, i) => (
            <Link
              key={i}
              to={link.path}
              className="inline-flex items-center gap-1 px-3 py-1 bg-white/10 hover:bg-white/20 rounded-md text-sm transition-colors"
            >
              {link.icon} 
              <span>{link.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
