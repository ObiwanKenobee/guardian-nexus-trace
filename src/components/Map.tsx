
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Search, Layers, Filter } from 'lucide-react';

const Map = () => {
  return (
    <section id="map" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-guardian-dark mb-4">Interactive Supply Chain Map</h2>
          <p className="text-guardian-gray max-w-2xl mx-auto">
            Visualize your entire supply chain with real-time risk indicators and traceability metrics.
          </p>
        </div>
        
        <Card className="relative overflow-hidden shadow-xl rounded-lg border border-gray-200">
          {/* Top controls */}
          <div className="absolute top-4 left-4 right-4 z-10 flex flex-col sm:flex-row justify-between gap-4">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search locations or suppliers..."
                  className="w-full pl-10 pr-4 py-2 bg-white rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-guardian-teal text-sm"
                />
              </div>
            </div>
            
            <div className="flex space-x-2">
              <Button variant="outline" className="bg-white text-guardian-dark flex items-center gap-2">
                <Layers className="h-4 w-4" />
                <span className="hidden sm:inline">Layers</span>
              </Button>
              <Button variant="outline" className="bg-white text-guardian-dark flex items-center gap-2">
                <Filter className="h-4 w-4" />
                <span className="hidden sm:inline">Filters</span>
              </Button>
            </div>
          </div>
          
          {/* Map visualization */}
          <div className="h-[500px] bg-[#EAEFF2] relative">
            {/* Simplified world map visualization */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center opacity-30"></div>
            
            {/* Map pins */}
            <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                <MapPin className="h-6 w-6 text-red-500" />
                <div className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-red-500 animate-ping"></div>
              </div>
            </div>
            
            <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <MapPin className="h-6 w-6 text-guardian-amber" />
            </div>
            
            <div className="absolute top-1/2 left-2/3 transform -translate-x-1/2 -translate-y-1/2">
              <MapPin className="h-6 w-6 text-guardian-teal" />
            </div>
            
            {/* Connected routes */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
              <line 
                x1="25%" y1="25%" 
                x2="50%" y2="33%" 
                stroke="#2CA58D" 
                strokeWidth="2" 
                strokeDasharray="5,5" 
                strokeOpacity="0.7"
              />
              <line 
                x1="50%" y1="33%" 
                x2="67%" y2="50%" 
                stroke="#2CA58D" 
                strokeWidth="2" 
                strokeDasharray="5,5" 
                strokeOpacity="0.7"
              />
            </svg>
            
            {/* Legend */}
            <div className="absolute bottom-4 left-4 bg-white p-3 rounded-md shadow-md">
              <p className="text-sm font-bold mb-2">Risk Level</p>
              <div className="flex flex-col space-y-1">
                <div className="flex items-center">
                  <div className="h-3 w-3 rounded-full bg-guardian-teal mr-2"></div>
                  <span className="text-xs">Low Risk</span>
                </div>
                <div className="flex items-center">
                  <div className="h-3 w-3 rounded-full bg-guardian-amber mr-2"></div>
                  <span className="text-xs">Medium Risk</span>
                </div>
                <div className="flex items-center">
                  <div className="h-3 w-3 rounded-full bg-red-500 mr-2"></div>
                  <span className="text-xs">High Risk</span>
                </div>
              </div>
            </div>
            
            {/* Selected node info */}
            <div className="absolute bottom-4 right-4 bg-white p-4 rounded-md shadow-md max-w-xs">
              <h4 className="font-bold text-sm flex items-center">
                <MapPin className="h-4 w-4 text-red-500 mr-1" />
                High Risk Supplier
              </h4>
              <p className="text-xs text-guardian-gray mt-1">Coordinates: 34.0522° N, 118.2437° W</p>
              <div className="mt-2 flex justify-between text-xs">
                <span>Risk Score:</span>
                <span className="text-red-500 font-bold">87%</span>
              </div>
              <div className="mt-1 flex justify-between text-xs">
                <span>Last Verified:</span>
                <span>2 days ago</span>
              </div>
              <Button className="mt-3 w-full text-xs h-7 bg-guardian-dark hover:bg-guardian-dark/80">
                View Details
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Map;
