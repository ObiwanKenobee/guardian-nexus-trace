
import React from 'react';
import { 
  LineChart, Line, AreaChart, Area,
  BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, 
  ResponsiveContainer, Legend 
} from 'recharts';
import { Card } from '@/components/ui/card';
import { Shield, AlertTriangle, Activity, Globe2 } from 'lucide-react';

// Sample data
const monthlyData = [
  { name: 'Jan', wildlife: 65, human: 45 },
  { name: 'Feb', wildlife: 59, human: 49 },
  { name: 'Mar', wildlife: 80, human: 40 },
  { name: 'Apr', wildlife: 81, human: 36 },
  { name: 'May', wildlife: 56, human: 45 },
  { name: 'Jun', wildlife: 55, human: 50 },
  { name: 'Jul', wildlife: 40, human: 52 },
];

const riskData = [
  { name: 'Low', value: 40 },
  { name: 'Medium', value: 30 },
  { name: 'High', value: 20 },
  { name: 'Critical', value: 10 },
];

const COLORS = ['#2CA58D', '#F6AE2D', '#FF8C42', '#E53935'];

const Dashboard = () => {
  return (
    <section id="dashboard" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-guardian-dark mb-4">Live Intelligence Dashboard</h2>
          <p className="text-guardian-gray max-w-2xl mx-auto">
            Real-time analytics on wildlife trafficking and modern slavery risks across global supply chains.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-start">
              <div className="p-3 rounded-full bg-guardian-teal/20 mr-4">
                <Shield className="h-6 w-6 text-guardian-teal" />
              </div>
              <div>
                <p className="text-sm text-guardian-gray font-medium">Protected Species</p>
                <h3 className="text-2xl font-bold text-guardian-dark">1,248</h3>
                <p className="text-xs text-green-600">+12% from last month</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-start">
              <div className="p-3 rounded-full bg-guardian-amber/20 mr-4">
                <AlertTriangle className="h-6 w-6 text-guardian-amber" />
              </div>
              <div>
                <p className="text-sm text-guardian-gray font-medium">High Risk Suppliers</p>
                <h3 className="text-2xl font-bold text-guardian-dark">87</h3>
                <p className="text-xs text-red-600">+3% from last month</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-start">
              <div className="p-3 rounded-full bg-blue-100 mr-4">
                <Activity className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-guardian-gray font-medium">Active Monitors</p>
                <h3 className="text-2xl font-bold text-guardian-dark">3,724</h3>
                <p className="text-xs text-green-600">+28% from last month</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-start">
              <div className="p-3 rounded-full bg-purple-100 mr-4">
                <Globe2 className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-guardian-gray font-medium">Countries Covered</p>
                <h3 className="text-2xl font-bold text-guardian-dark">57</h3>
                <p className="text-xs text-green-600">+2 new this month</p>
              </div>
            </div>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="p-6 shadow-md">
            <h3 className="font-bold mb-4 text-guardian-dark">Monthly Seizure Trends</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Area type="monotone" dataKey="wildlife" stroke="#2CA58D" fill="#2CA58D" fillOpacity={0.2} name="Wildlife Trafficking" />
                  <Area type="monotone" dataKey="human" stroke="#F6AE2D" fill="#F6AE2D" fillOpacity={0.2} name="Human Trafficking" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </Card>
          
          <Card className="p-6 shadow-md">
            <h3 className="font-bold mb-4 text-guardian-dark">Supplier Risk Distribution</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={riskData}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {riskData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
