import { useState, useEffect, useMemo, useRef } from "react";
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
  const [slideDirection, setSlideDirection] = useState<"left" | "right">("right");
  const [demoOpen, setDemoOpen] = useState(false);
  const touchStartX = useRef(0);

  const activeTab = useMemo(() => allTabs.find((t) => t.id === activeTabId) || allTabs[0], [activeTabId]);

  const allVideos = useMemo(() => allTabs.flatMap((t) => t.videos), []);
  usePreloadVideos(allVideos);

  useEffect(() => {
    setActiveFeatureId(activeTab.featureIds[0]);
  }, [activeTab]);

  useEffect(() => {
    if (section && allTabs.some((t) => t.id === section)) {
      setActiveTabId(section);
    }
  }, [section]);

  const currentFeatureId = activeFeatureId || activeTab.featureIds[0];
  const currentFeature = activeTab.featureData[currentFeatureId];

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(deltaX) < 50) return;
    const ids = activeTab.featureIds;
    const idx = ids.indexOf(currentFeatureId);
    if (deltaX > 0 && idx > 0) {
      setSlideDirection("left");
      setActiveFeatureId(ids[idx - 1]);
    } else if (deltaX < 0 && idx < ids.length - 1) {
      setSlideDirection("right");
      setActiveFeatureId(ids[idx + 1]);
    }
  };

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <IdleOverlay />

      {/* Header */}
      <div className="flex items-center justify-between px-[36px] pb-8 pt-[36px]">
        <TrinioLogo size="sm" onClick={() => navigate("/app")} />
        <button
          onClick={() => setDemoOpen(true)}
          className="px-2 py-1 rounded-[6px] border border-primary text-primary text-[8px] font-semibold hover:bg-primary/10 transition-colors"
        >
          Agendar uma Demo
        </button>
      </div>

      {/* Unified navigation block */}
      <div className="px-[36px] pb-3">
        <div className="glass-card p-3">
          <div className="flex gap-1.5 justify-center mb-2">
            {allTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTabId(tab.id)}
                className={`flex-1 justify-evenly px-1.5 rounded-[4px] text-[9px] font-medium transition-all py-[4px] ${
                  activeTabId === tab.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-[rgba(164,168,255,0.12)] border border-[rgba(164,168,255,0.19)] text-muted-foreground"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="flex flex-row gap-2 w-full">
            {activeTab.featureIds.map((id) => (
              <button
                key={id}
                onClick={() => {
                  const ids = activeTab.featureIds;
                  const oldIdx = ids.indexOf(currentFeatureId);
                  const newIdx = ids.indexOf(id);
                  setSlideDirection(newIdx >= oldIdx ? "right" : "left");
                  setActiveFeatureId(id);
                }}
                className={`flex-1 text-center px-1 py-[4px] rounded-[4px] text-[6px] font-medium leading-tight transition-all ${
                  currentFeatureId === id
                    ? "bg-foreground text-card"
                    : "bg-card border border-[rgba(164,168,255,0.19)] text-foreground"
                }`}
              >
                {activeTab.featureData[id].title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div
        className="flex-1 overflow-hidden px-[36px] pb-4"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {currentFeature && <FeatureContent key={currentFeatureId} data={currentFeature} slideDirection={slideDirection} />}
      </div>

      <div className="pb-6" />

      <DemoModal open={demoOpen} onOpenChange={setDemoOpen} />
    </div>
  );
};

export default MainPage;
