
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { HelpCircle, Box, MessageSquarePlus } from 'lucide-react';

const DemoModules = () => {
  const modules = [
    {
      title: "Guided Tour Mode",
      icon: <HelpCircle className="h-8 w-8 text-guardian-teal" />,
      description: "Walkthrough overlay with tooltips explaining each feature for new users.",
      status: "In Development",
      votes: 14
    },
    {
      title: "Live Sandbox Data View",
      icon: <Box className="h-8 w-8 text-guardian-teal" />,
      description: "Use synthetic data to simulate supply chain or incident response scenarios.",
      status: "Planned",
      votes: 19
    },
    {
      title: "Feedback/Request Button",
      icon: <MessageSquarePlus className="h-8 w-8 text-guardian-teal" />,
      description: "Crowdsource what to build or improve next directly from users.",
      status: "Completed",
      votes: 23
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

export default DemoModules;
