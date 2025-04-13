
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { TabsContent } from '@/components/ui/tabs';
import { BuildingIcon, Users, ShieldCheck, BarChartHorizontalIcon, Loader2 } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';

const DemoRoleCard = ({ 
  role, 
  title, 
  description, 
  icon, 
  onClick, 
  isLoading 
}: { 
  role: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  onClick: () => void;
  isLoading: boolean;
}) => (
  <Card 
    className="p-4 cursor-pointer border-2 hover:border-guardian-teal transition-colors flex flex-col"
    onClick={isLoading ? undefined : onClick}
  >
    <div className="mb-2 text-guardian-teal">{icon}</div>
    <h3 className="font-medium mb-1">{title}</h3>
    <p className="text-xs text-guardian-gray">{description}</p>
  </Card>
);

const DemoLoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleDemoLogin = async (role: string) => {
    setSelectedRole(role);
    setIsLoading(true);
    
    // Simulate login delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Demo mode activated",
      description: `You are now viewing the platform as a ${role}`,
    });
    
    // Redirect based on role
    switch(role) {
      case 'business':
        navigate('/dashboard');
        break;
      case 'ngo':
        navigate('/dashboard');
        break;
      case 'enforcement':
        navigate('/dashboard');
        break;
      case 'admin':
        navigate('/admin');
        break;
      default:
        navigate('/dashboard');
    }
    
    setIsLoading(false);
  };

  return (
    <TabsContent value="demo">
      <div className="mb-4 text-center">
        <p className="text-sm text-guardian-gray">
          Experience Guardian-IO Nexus with pre-populated demo accounts.
          No sign-up required.
        </p>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <DemoRoleCard
          role="business"
          title="Business View"
          description="Supply chain owner dashboard with ESG metrics and supplier management"
          icon={<BuildingIcon className="h-6 w-6" />}
          onClick={() => handleDemoLogin('business')}
          isLoading={isLoading}
        />
        
        <DemoRoleCard
          role="ngo"
          title="NGO View"
          description="Conservation organization interface for wildlife tracking and reporting"
          icon={<Users className="h-6 w-6" />}
          onClick={() => handleDemoLogin('ngo')}
          isLoading={isLoading}
        />
        
        <DemoRoleCard
          role="enforcement"
          title="Enforcement View"
          description="Customs and agency portal with alerts, seized products, and verification tools"
          icon={<ShieldCheck className="h-6 w-6" />}
          onClick={() => handleDemoLogin('enforcement')}
          isLoading={isLoading}
        />
        
        <DemoRoleCard
          role="admin"
          title="Admin View"
          description="Platform management with user controls, data oversight, and AI training tools"
          icon={<BarChartHorizontalIcon className="h-6 w-6" />}
          onClick={() => handleDemoLogin('admin')}
          isLoading={isLoading}
        />
      </div>
      
      {isLoading && (
        <div className="flex items-center justify-center mt-6">
          <Loader2 className="h-5 w-5 animate-spin mr-2" />
          <span>Loading {selectedRole} demo...</span>
        </div>
      )}
      
      <div className="mt-6 text-center">
        <p className="text-xs text-guardian-gray">
          All demo data is fictional and for illustration purposes only.
        </p>
      </div>
    </TabsContent>
  );
};

export default DemoLoginForm;
