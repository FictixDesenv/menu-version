import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import SplashPage from "./pages/SplashPage";
import HomePage from "./pages/HomePage";
import MainPage from "./pages/MainPage";
import NotFound from "./pages/NotFound";
import PasswordGate from "./components/PasswordGate";
import TotemScaler from "./components/TotemScaler";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <PasswordGate>
        <TotemScaler>
          <BrowserRouter>
          <Routes>
            <Route path="/" element={<SplashPage />} />
            <Route path="/app" element={<HomePage />} />
            <Route path="/app/:section" element={<MainPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          </BrowserRouter>
        </TotemScaler>
      </PasswordGate>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
