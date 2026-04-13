import { useState } from "react";
import TrinioLogo from "@/components/TrinioLogo";
import DemoButton from "@/components/DemoButton";
import DemoModal from "@/components/DemoModal";
import IdleOverlay from "@/components/IdleOverlay";
import TrinioOSTab from "@/components/tabs/TrinioOSTab";
import MaisReceitaTab from "@/components/tabs/MaisReceitaTab";
import MaisMargemTab from "@/components/tabs/MaisMargemTab";
import MaisExperienciaTab from "@/components/tabs/MaisExperienciaTab";

const tabs = [
  { id: "trinio-os", label: "Trinio OS" },
  { id: "receita", label: "Mais receita" },
  { id: "margem", label: "Mais margem" },
  { id: "experiencia", label: "Mais experiência" },
];

const MainPage = () => {
  const [activeTab, setActiveTab] = useState("trinio-os");
  const [demoOpen, setDemoOpen] = useState(false);

  const renderTab = () => {
    switch (activeTab) {
      case "trinio-os": return <TrinioOSTab />;
      case "receita": return <MaisReceitaTab />;
      case "margem": return <MaisMargemTab />;
      case "experiencia": return <MaisExperienciaTab />;
      default: return <TrinioOSTab />;
    }
  };

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <IdleOverlay />

      {/* Header */}
      <div className="flex justify-center pt-8 pb-4">
        <TrinioLogo size="sm" />
      </div>

      {/* Tab navigation */}
      <div className="flex gap-2 px-6 pb-4 justify-center">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2.5 rounded-full text-sm font-medium transition-all ${
              activeTab === tab.id
                ? "bg-primary text-primary-foreground"
                : "bg-[rgba(164,168,255,0.12)] border border-[rgba(164,168,255,0.19)] text-muted-foreground"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto pb-4">
        {renderTab()}
      </div>

      {/* Footer CTA */}
      <div className="px-6 pb-6 pt-2">
        <DemoButton onClick={() => setDemoOpen(true)} variant="outline" />
      </div>

      <DemoModal open={demoOpen} onOpenChange={setDemoOpen} />
    </div>
  );
};

export default MainPage;
