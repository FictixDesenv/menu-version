import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useTotemScale } from "@/hooks/use-mobile";
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

const AppLayout = () => {
  const scale = useTotemScale();

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-muted">
      <div
        className="max-w-md w-full min-h-screen bg-background"
        style={scale > 1 ? {
          transform: `scale(${scale})`,
          transformOrigin: 'center top',
          minHeight: `${100 / scale}vh`,
        } : undefined}
      >
        <Routes>
          <Route path="/" element={<SplashPage />} />
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/overview" element={<OverviewPage />} />
          <Route path="/payments" element={<PaymentsPage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/cases" element={<CasesPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppLayout />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
