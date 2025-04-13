
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Check, Upload, Search, FileText } from 'lucide-react';

const Verification = () => {
  return (
    <section id="verification" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-guardian-dark mb-4">Supply Chain Verification Portal</h2>
          <p className="text-guardian-gray max-w-2xl mx-auto">
            Upload shipping documents, customs forms, and supplier information for AI-powered verification and risk assessment.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Card className="p-8 border border-gray-200 shadow-lg">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 flex flex-col items-center justify-center bg-white">
                <Upload className="h-12 w-12 text-guardian-gray mb-4" />
                <h3 className="text-xl font-semibold mb-2">Upload Documentation</h3>
                <p className="text-guardian-gray text-sm text-center mb-6">
                  Drag and drop or click to upload shipping documents, certificates, or supplier data
                </p>
                <Button className="bg-guardian-teal hover:bg-guardian-teal/90">
                  Select Files
                </Button>
                <p className="mt-4 text-xs text-guardian-gray">
                  Supported formats: PDF, CSV, XLSX, JPG, PNG
                </p>
              </div>
              
              <div className="mt-6">
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <div className="flex items-center">
                    <FileText className="h-5 w-5 text-guardian-gray mr-3" />
                    <span className="text-sm">shipping_manifest_04122025.pdf</span>
                  </div>
                  <span className="text-xs font-medium px-2 py-1 bg-green-100 text-green-800 rounded-full">Verified</span>
                </div>
                
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <div className="flex items-center">
                    <FileText className="h-5 w-5 text-guardian-gray mr-3" />
                    <span className="text-sm">supplier_audit_Q1_2025.xlsx</span>
                  </div>
                  <span className="text-xs font-medium px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full">Processing</span>
                </div>
              </div>
            </Card>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-guardian-teal">
              <h3 className="font-bold text-xl flex items-center mb-2">
                <Check className="h-5 w-5 text-guardian-teal mr-2" /> AI-Powered Verification
              </h3>
              <p className="text-guardian-gray">
                Our advanced algorithms analyze your documents for compliance issues, fraud indicators, and sustainability metrics in seconds.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-guardian-teal">
              <h3 className="font-bold text-xl flex items-center mb-2">
                <Search className="h-5 w-5 text-guardian-teal mr-2" /> Real-time Risk Assessment
              </h3>
              <p className="text-guardian-gray">
                Instantly identify high-risk suppliers in your network with detailed risk scores and remediation recommendations.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-lg shadow-md text-center">
                <div className="text-4xl font-bold text-guardian-teal mb-2">98%</div>
                <p className="text-sm text-guardian-gray">Document processing accuracy</p>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow-md text-center">
                <div className="text-4xl font-bold text-guardian-teal mb-2">&lt;30s</div>
                <p className="text-sm text-guardian-gray">Average verification time</p>
              </div>
            </div>
            
            <Button className="w-full bg-guardian-dark hover:bg-guardian-dark/90">
              Try Verification Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Verification;
