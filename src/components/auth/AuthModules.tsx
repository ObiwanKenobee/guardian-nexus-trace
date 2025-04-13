
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { KeyRound, ShieldCheck, UserCheck, Users } from 'lucide-react';

const AuthModules = () => {
  const modules = [
    {
      title: "Sign Up / Login",
      icon: <UserCheck className="h-8 w-8 text-guardian-teal" />,
      description: "Email/Password, OAuth (Google/Microsoft), SSO options for seamless integration with existing systems.",
      status: "In Development",
      votes: 24
    },
    {
      title: "Multi-Factor Authentication",
      icon: <ShieldCheck className="h-8 w-8 text-guardian-teal" />,
      description: "Optional security via SMS or Authenticator App to add an additional layer of protection.",
      status: "Planned",
      votes: 18
    },
    {
      title: "Demo Login",
      icon: <KeyRound className="h-8 w-8 text-guardian-teal" />,
      description: "Instant access with fake data for stakeholders & press previews without needing real credentials.",
      status: "Completed",
      votes: 32
    },
    {
      title: "Role-Based Access Control",
      icon: <Users className="h-8 w-8 text-guardian-teal" />,
      description: "Separate dashboards for NGOs, businesses, enforcement agencies, and system administrators.",
      status: "In Development",
      votes: 29
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {modules.map((module, index) => (
        <Card key={index} className="p-6 shadow-lg hover:shadow-xl transition-all">
          <div className="flex items-center gap-4 mb-4">
            {module.icon}
            <h3 className="text-xl font-bold text-guardian-dark">{module.title}</h3>
          </div>
          <p className="text-guardian-gray mb-6">{module.description}</p>
          <div className="flex justify-between items-center">
            <div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium 
                ${module.status === "Completed" ? "bg-green-100 text-green-800" : 
                  module.status === "In Development" ? "bg-blue-100 text-blue-800" : 
                  "bg-amber-100 text-amber-800"}`}>
                {module.status}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-guardian-gray">{module.votes} votes</span>
              <Button variant="outline" size="sm" className="text-xs border-guardian-teal text-guardian-teal">
                Vote
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default AuthModules;
