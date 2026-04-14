import { useState } from "react";
import TrinioOSDetail from "./TrinioOSDetail";
import usePreloadVideos from "@/hooks/use-preload-videos";
import { trinioOsFeatures, trinioOsVideos } from "@/data/trinioOsFeatures";

const TrinioOSTab = () => {
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);
  usePreloadVideos(trinioOsVideos);

  if (selectedFeature) {
    return <TrinioOSDetail featureId={selectedFeature} onBack={() => setSelectedFeature(null)} />;
  }

  return (
    <div className="flex flex-col h-full px-6 pb-[60px] pl-[36px] pr-[36px]">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-foreground">O que é o Trinio OS?</h2>
        <p className="text-muted-foreground text-xs mt-1">
          Agentes especializados que monitoram sua operação 24/7 e sugerem ações concretas — você aprova, eles executam.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 px-0 py-0">
        {trinioOsFeatures.map((feature) => (
          <button
            key={feature.id}
            onClick={() => setSelectedFeature(feature.id)}
            className="glass-card flex flex-col items-center justify-center text-center p-4 h-[100px] active:scale-95 transition-transform duration-100"
          >
            <img src={feature.icon} alt={feature.title} className="w-6 h-6 mb-3" />
            <h3 className="text-sx font-semibold text-foreground text-xs">{feature.title}</h3>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TrinioOSTab;
