import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import SplashPage from "./pages/SplashPage";
import LandingPage from "./pages/LandingPage";
import MenuPage from "./pages/MenuPage";
import OverviewPage from "./pages/OverviewPage";
import PaymentsPage from "./pages/PaymentsPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import ExperiencePage from "./pages/ExperiencePage";
import CasesPage from "./pages/CasesPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="max-w-md mx-auto min-h-screen">
          <Routes>
            <Route path="/" element={<SplashPage />} />
            <Route path="/landing" element={<LandingPage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/overview" element={<OverviewPage />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
