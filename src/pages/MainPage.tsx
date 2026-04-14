import { useState, useEffect, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import TrinioLogo from "@/components/TrinioLogo";
import DemoModal from "@/components/DemoModal";
import IdleOverlay from "@/components/IdleOverlay";
import FeatureContent from "@/components/tabs/FeatureContent";
import usePreloadVideos from "@/hooks/use-preload-videos";
import { allTabs } from "@/data/tabData";

const MainPage = () => {
  const { section } = useParams<{ section: string }>();
  const navigate = useNavigate();
  const [activeTabId, setActiveTabId] = useState(section || "trinio-os");
  const [activeFeatureId, setActiveFeatureId] = useState<string | null>(null);
  const [demoOpen, setDemoOpen] = useState(false);

  const activeTab = useMemo(() => allTabs.find((t) => t.id === activeTabId) || allTabs[0], [activeTabId]);

  // All videos for preloading
  const allVideos = useMemo(() => allTabs.flatMap((t) => t.videos), []);
  usePreloadVideos(allVideos);

  // When tab changes, select first feature
  useEffect(() => {
    setActiveFeatureId(activeTab.featureIds[0]);
  }, [activeTab]);

  // Sync with URL param
  useEffect(() => {
    if (section && allTabs.some((t) => t.id === section)) {
      setActiveTabId(section);
    }
  }, [section]);

  const currentFeatureId = activeFeatureId || activeTab.featureIds[0];
  const currentFeature = activeTab.featureData[currentFeatureId];

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <IdleOverlay />

      {/* Header */}
      <div className="flex items-center justify-between px-[36px] pb-8 pt-[36px]">
        <TrinioLogo size="sm" onClick={() => navigate("/app")} />
        <button
          onClick={() => setDemoOpen(true)}
          className="px-4 py-2 rounded-[6px] border border-primary text-primary text-xs font-semibold hover:bg-primary/10 transition-colors"
        >
          Agendar uma Demo
        </button>
      </div>

      {/* Unified navigation block */}
      <div className="px-[36px] pb-8">
        <div className="glass-card p-3">
          {/* Line 1: Main tabs */}
          <div className="flex gap-2 justify-center mb-2">
            {allTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTabId(tab.id)}
                className={`flex-1 px-4 rounded-[6px] text-[6px] font-medium transition-all py-[5px] ${
                  activeTabId === tab.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-[rgba(164,168,255,0.12)] border border-[rgba(164,168,255,0.19)] text-muted-foreground"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Line 2: Sub-feature pills */}
          <div className="flex flex-row gap-2 w-full">
            {activeTab.featureIds.map((id) => (
              <button
                key={id}
                onClick={() => setActiveFeatureId(id)}
                className={`flex-1 text-center px-1 py-[4px] rounded-[4px] text-[5px] font-medium leading-tight transition-all ${
                  currentFeatureId === id
                    ? "bg-foreground text-card"
                    : "bg-card border border-[rgba(164,168,255,0.19)] text-foreground"
                }`}
              >
                {activeTab.featureData[id].shortTitle || activeTab.featureData[id].title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-[36px] pb-4">
        {currentFeature && <FeatureContent data={currentFeature} />}
      </div>

      {/* Bottom spacing */}
      <div className="pb-6" />

      <DemoModal open={demoOpen} onOpenChange={setDemoOpen} />
    </div>
  );
};

export default MainPage;
