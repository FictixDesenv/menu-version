import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
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
  const { section } = useParams<{ section: string }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(section || "trinio-os");
  const [demoOpen, setDemoOpen] = useState(false);

  useEffect(() => {
    if (section && tabs.some((t) => t.id === section)) {
      setActiveTab(section);
    }
  }, [section]);

  const renderTab = () => {
    switch (activeTab) {
      case "trinio-os":
        return <TrinioOSTab />;
      case "receita":
        return <MaisReceitaTab />;
      case "margem":
        return <MaisMargemTab />;
      case "experiencia":
        return <MaisExperienciaTab />;
      default:
        return <TrinioOSTab />;
    }
  };

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <IdleOverlay />

      {/* Header */}
      <div className="flex items-center justify-between px-6 pb-4 pt-[36px]">
        <TrinioLogo size="sm" />
        <button
          onClick={() => setDemoOpen(true)}
          className="px-4 py-2 rounded-full border border-primary text-primary text-xs font-semibold hover:bg-primary/10 transition-colors"
        >
          Agendar uma Demo
        </button>
      </div>

      {/* Tab navigation */}
      <div className="flex gap-2 pb-4 justify-center px-[36px]">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={` px-4 rounded-[6px] text-[6px] font-medium transition-all py-[5px] ${
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
      <div className="flex-1 overflow-y-auto pb-4">{renderTab()}</div>

      {/* Bottom spacing */}
      <div className="pb-6" />

      <DemoModal open={demoOpen} onOpenChange={setDemoOpen} />
    </div>
  );
};

export default MainPage;
