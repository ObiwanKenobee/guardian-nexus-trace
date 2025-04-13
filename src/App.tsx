
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Authentication from "./pages/Authentication";
import Dashboard from "./pages/Dashboard";
import Traceability from "./pages/Traceability";
import AdminPanel from "./pages/AdminPanel";
import Engagement from "./pages/Engagement";
import DemoArea from "./pages/DemoArea";
import VotingPage from "./pages/VotingPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/auth" element={<Authentication />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/traceability" element={<Traceability />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/engagement" element={<Engagement />} />
          <Route path="/demo" element={<DemoArea />} />
          <Route path="/vote" element={<VotingPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
