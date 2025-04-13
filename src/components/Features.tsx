
import React from 'react';
import { 
  Shield, AlertTriangle, Zap, 
  Database, LineChart, Award, 
  Lock, Globe, BarChart2 
} from 'lucide-react';
import { Card } from '@/components/ui/card';

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Risk Detection Engine",
      description: "AI-powered monitoring identifies suspicious patterns in supply chain data to flag potential wildlife trafficking."
    },
    {
      icon: Database,
      title: "Secure Registry",
      description: "Encrypted database of supplier information with blockchain verification for immutable audit trails."
    },
    {
      icon: LineChart,
      title: "Predictive Analytics",
      description: "Machine learning algorithms forecast high-risk scenarios to enable proactive intervention."
    },
    {
      icon: Globe,
      title: "Global Coverage",
      description: "Monitoring across 57+ countries with real-time alerts and local regulatory compliance."
    },
    {
      icon: BarChart2,
      title: "ESG Impact Dashboard",
      description: "Measure and visualize environmental and social governance contributions aligned with UN SDGs."
    },
    {
      icon: Lock,
      title: "Secure Collaboration",
      description: "Protected information sharing between businesses, NGOs, and enforcement agencies."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-guardian-dark via-guardian-dark to-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Key Platform Features</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Guardian-IO Nexus combines cutting-edge technologies to create a comprehensive ethical trade intelligence platform.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 hover:bg-white/10 transition-colors">
              <div className="p-3 inline-flex rounded-full bg-guardian-teal/20 mb-4">
                <feature.icon className="h-6 w-6 text-guardian-teal" />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
