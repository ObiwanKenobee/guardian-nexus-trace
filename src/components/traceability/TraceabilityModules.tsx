
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ClipboardList, FileBadge, Layers } from 'lucide-react';

const TraceabilityModules = () => {
  const modules = [
    {
      title: "Supplier Onboarding Flow",
      icon: <ClipboardList className="h-8 w-8 text-guardian-teal" />,
      description: "Form wizard to upload documents, photos, locations and verify supplier credentials.",
      status: "In Development",
      votes: 31
    },
    {
      title: "Wildlife DNA Verification Portal",
      icon: <FileBadge className="h-8 w-8 text-guardian-teal" />,
      description: "Simulated input of DNA matches vs illegal species database for scientific authentication.",
      status: "Planned",
      votes: 25
    },
    {
      title: "Blockchain Explorer",
      icon: <Layers className="h-8 w-8 text-guardian-teal" />,
      description: "Smart contract logs of validated transactions with immutable record of product origins.",
      status: "Planned",
      votes: 19
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

export default TraceabilityModules;
