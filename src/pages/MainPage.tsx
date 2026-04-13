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
      <div className="flex items-center justify-between px-6 pt-6 pb-4">
        <button
          onClick={() => navigate("/app")}
          className="w-10 h-10 rounded-full bg-muted/40 flex items-center justify-center active:scale-90 transition-transform"
        >
          <ArrowLeft className="w-5 h-5 text-foreground" />
        </button>
        <TrinioLogo size="sm" />
        <div className="w-10" /> {/* spacer */}
      </div>

      {/* Tab navigation */}
      <div className="flex gap-2 pb-4 justify-center px-[36px]">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`mx-2 px-4 rounded-[6px] text-[6px] font-medium transition-all py-[5px] ${
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

      {/* Footer CTA */}
      <div className="px-6 pt-2 pb-[90px]">
        <DemoButton onClick={() => setDemoOpen(true)} variant="outline" />
      </div>

      <DemoModal open={demoOpen} onOpenChange={setDemoOpen} />
    </div>
  );
};

export default MainPage;
