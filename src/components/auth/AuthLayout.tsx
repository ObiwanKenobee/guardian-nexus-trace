
import React, { ReactNode } from 'react';
import { Card } from '@/components/ui/card';
import { LogIn, UserPlus, KeyRound } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

interface AuthLayoutProps {
  children: ReactNode;
  defaultTab?: string;
}

const AuthLayout = ({ children, defaultTab = "login" }: AuthLayoutProps) => {
  return (
    <div className="min-h-[calc(100vh-180px)] flex items-center justify-center px-4">
      <Card className="w-full max-w-md p-6 shadow-xl">
        <div className="mb-8 text-center">
          <div className="h-12 w-12 rounded-full bg-guardian-teal mx-auto flex items-center justify-center mb-4">
            <span className="text-white font-bold text-2xl">G</span>
          </div>
          <h1 className="text-2xl font-bold text-guardian-dark">Guardian-IO Access Portal</h1>
          <p className="text-guardian-gray mt-2">Access your ethical trade intelligence dashboard</p>
        </div>
        
        <Tabs defaultValue={defaultTab} className="w-full">
          <TabsList className="grid grid-cols-3 mb-6">
            <TabsTrigger value="login" className="flex items-center gap-2">
              <LogIn size={16} />
              <span>Login</span>
            </TabsTrigger>
            <TabsTrigger value="signup" className="flex items-center gap-2">
              <UserPlus size={16} />
              <span>Sign Up</span>
            </TabsTrigger>
            <TabsTrigger value="demo" className="flex items-center gap-2">
              <KeyRound size={16} />
              <span>Demo</span>
            </TabsTrigger>
          </TabsList>
          
          {children}
        </Tabs>
      </Card>
    </div>
  );
};

export default AuthLayout;
