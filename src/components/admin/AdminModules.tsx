
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileCheck, LineChart, FileSearch } from 'lucide-react';

const AdminModules = () => {
  const modules = [
    {
      title: "Content Moderation Queue",
      icon: <FileCheck className="h-8 w-8 text-guardian-teal" />,
      description: "AI suggestions on what to review from field inputs with smart prioritization.",
      status: "Planned",
      votes: 15
    },
    {
      title: "Machine Learning Insights",
      icon: <LineChart className="h-8 w-8 text-guardian-teal" />,
      description: "Charts of anomaly detection or prediction models in action with explainable AI features.",
      status: "Planned",
      votes: 22
    },
    {
      title: "Audit Log Viewer",
      icon: <FileSearch className="h-8 w-8 text-guardian-teal" />,
      description: "Who accessed what, when, and why — for transparency and compliance tracking.",
      status: "In Development",
      votes: 18
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

export default AdminModules;
