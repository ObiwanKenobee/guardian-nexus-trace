
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart3, Map, AlertTriangle, QrCode } from 'lucide-react';

const DashboardModules = () => {
  const modules = [
    {
      title: "Main ESG Dashboard",
      icon: <BarChart3 className="h-8 w-8 text-guardian-teal" />,
      description: "Live data widgets, compliance scores, impact meters, and real-time analytics on conservation metrics.",
      status: "In Development",
      votes: 38
    },
    {
      title: "Supply Chain Map View",
      icon: <Map className="h-8 w-8 text-guardian-teal" />,
      description: "Interactive geographic visualization with flags for high-risk zones and supplier relationships.",
      status: "Completed",
      votes: 27
    },
    {
      title: "AI Risk Engine Panel",
      icon: <AlertTriangle className="h-8 w-8 text-guardian-teal" />,
      description: "Visualizations of flagged behaviors or suspect shipments detected by our machine learning system.",
      status: "Planned",
      votes: 42
    },
    {
      title: "Wildlife Product Trace Page",
      icon: <QrCode className="h-8 w-8 text-guardian-teal" />,
      description: "Users can scan QR/barcodes to trace product origin to current location with full chain of custody.",
      status: "In Development",
      votes: 35
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

export default DashboardModules;
