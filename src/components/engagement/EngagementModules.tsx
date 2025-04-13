
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageSquare, BookOpen, Code } from 'lucide-react';

const EngagementModules = () => {
  const modules = [
    {
      title: "NGO/Partner Collaboration Portal",
      icon: <MessageSquare className="h-8 w-8 text-guardian-teal" />,
      description: "Secure messaging and document share space for cross-sector coordination.",
      status: "In Development",
      votes: 27
    },
    {
      title: "Impact Stories Feed",
      icon: <BookOpen className="h-8 w-8 text-guardian-teal" />,
      description: "Mini blogs / cards from frontline conservation workers sharing success stories.",
      status: "Completed",
      votes: 21
    },
    {
      title: "API Playground",
      icon: <Code className="h-8 w-8 text-guardian-teal" />,
      description: "Try out and test API endpoints with mock data for integration partners.",
      status: "Planned",
      votes: 16
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

export default EngagementModules;
