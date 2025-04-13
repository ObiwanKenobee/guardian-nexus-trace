
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronUp, Award, Clock, Calendar } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const VotingSystem = () => {
  // Hard-coded features for demonstration purposes
  const initialFeatures = [
    {
      id: 1,
      title: "Demo Login + Fake Data Dashboard",
      description: "Allow users to quickly preview the platform with pre-populated sample data and metrics.",
      category: "Authentication",
      votes: 45,
      complexity: "Medium",
      estimatedDelivery: "2 weeks",
      userVoted: false
    },
    {
      id: 2,
      title: "Wildlife Product Trace Page",
      description: "QR code and barcode scanning functionality to trace products through the supply chain.",
      category: "Traceability",
      votes: 38,
      complexity: "High",
      estimatedDelivery: "4 weeks",
      userVoted: false
    },
    {
      id: 3,
      title: "Supply Chain Onboarding Flow",
      description: "Multi-step wizard to register and verify new suppliers in the Guardian-IO ecosystem.",
      category: "Traceability",
      votes: 32,
      complexity: "High",
      estimatedDelivery: "6 weeks",
      userVoted: false
    },
    {
      id: 4,
      title: "AI Risk Assessment Dashboard",
      description: "Visual indicators of potential wildlife trafficking risks based on AI analysis.",
      category: "Dashboard",
      votes: 29,
      complexity: "Very High",
      estimatedDelivery: "8 weeks",
      userVoted: false
    },
    {
      id: 5,
      title: "Partner Collaboration Space",
      description: "Secure messaging and file sharing for NGOs, businesses and law enforcement.",
      category: "Engagement",
      votes: 24,
      complexity: "Medium",
      estimatedDelivery: "3 weeks",
      userVoted: false
    },
  ];

  const [features, setFeatures] = useState(initialFeatures);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Authentication", "Dashboard", "Traceability", "Admin", "Engagement", "Demo"];

  const handleVote = (id: number) => {
    setFeatures(features.map(feature => 
      feature.id === id ? 
        { ...feature, votes: feature.votes + 1, userVoted: true } : 
        feature
    ));
    
    toast({
      title: "Vote Recorded!",
      description: "Thank you for helping shape the future of Guardian-IO Nexus.",
      duration: 3000,
    });
  };

  const filteredFeatures = activeCategory === "All" 
    ? features 
    : features.filter(feature => feature.category === activeCategory);
  
  const sortedFeatures = [...filteredFeatures].sort((a, b) => b.votes - a.votes);

  return (
    <div className="space-y-8">
      <div className="bg-guardian-dark text-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Our next sprint starts April 19th!</h2>
        <p className="mb-4">Vote below on which modules we should build first. The top voted features will be prioritized in our development roadmap.</p>
        <div className="flex items-center space-x-2">
          <Award className="h-5 w-5 text-guardian-teal" />
          <span className="text-guardian-teal font-medium">Current Winner: Demo Login + Fake Data Dashboard (45 votes)</span>
        </div>
      </div>

      {/* Category filter */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Button 
            key={category}
            variant={activeCategory === category ? "default" : "outline"}
            className={activeCategory === category ? "bg-guardian-teal hover:bg-guardian-teal/90" : ""}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Features list */}
      <div className="space-y-6">
        {sortedFeatures.map((feature) => (
          <Card key={feature.id} className="p-6 shadow-lg">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex-grow">
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2 py-0.5 bg-guardian-teal/10 text-guardian-teal text-xs rounded-full">
                    {feature.category}
                  </span>
                  <span className="px-2 py-0.5 bg-gray-100 text-guardian-gray text-xs rounded-full">
                    {feature.complexity} Complexity
                  </span>
                </div>
                <h3 className="text-xl font-bold text-guardian-dark">{feature.title}</h3>
                <p className="text-guardian-gray my-2">{feature.description}</p>
                <div className="flex items-center gap-4 text-sm text-guardian-gray mt-2">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{feature.estimatedDelivery}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>If selected: Sprint 2</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col items-center space-y-2">
                <Button 
                  onClick={() => handleVote(feature.id)}
                  disabled={feature.userVoted}
                  variant="outline"
                  className={`flex flex-col items-center p-3 ${feature.userVoted ? 'border-green-500 text-green-600' : 'border-guardian-teal text-guardian-teal'}`}
                >
                  <ChevronUp className="h-5 w-5" />
                  <span className="text-lg font-bold">{feature.votes}</span>
                  <span className="text-xs">{feature.userVoted ? 'Voted' : 'Vote'}</span>
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Card className="p-6 border-dashed border-2">
        <h3 className="text-xl font-bold text-guardian-dark mb-4">Suggest a New Feature</h3>
        <p className="text-guardian-gray mb-4">Have an idea for a feature that's not listed? Let us know what would make Guardian-IO more valuable for your organization.</p>
        <Button className="bg-guardian-dark hover:bg-guardian-dark/90">
          Submit Feature Suggestion
        </Button>
      </Card>
    </div>
  );
};

export default VotingSystem;
