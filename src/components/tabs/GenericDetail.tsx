import { ArrowLeft, Check } from "lucide-react";
import { useState } from "react";

interface FeatureInfo {
  title: string;
  description: string;
  features: string[];
  video?: string;
}

interface GenericDetailProps {
  sectionTitle: string;
  featureData: Record<string, FeatureInfo>;
  featureIds: string[];
  initialFeatureId: string;
  onBack: () => void;
}

const GenericDetail = ({ sectionTitle, featureData, featureIds, initialFeatureId, onBack }: GenericDetailProps) => {
  const [activeTab, setActiveTab] = useState(initialFeatureId);
  const data = featureData[activeTab];

  return (
    <div className="flex flex-col h-full pl-[36px] pr-[36px] pb-[40px]">
      {/* Back button with section title */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-foreground hover:text-foreground/80 transition-colors mb-2 p-2 -ml-2"
      >
        <ArrowLeft className="w-5 h-5" />
        <span className="text-base font-bold">{sectionTitle}</span>
      </button>

      {/* Sub-tab pills */}
      <div className="flex flex-row gap-2 mb-3 w-full">
        {featureIds.map((id) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className={`flex-1 text-center px-1 py-[4px] rounded-[4px] text-[5px] font-medium leading-tight transition-all ${
              activeTab === id
                ? "bg-foreground text-card"
                : "bg-card border border-[rgba(164,168,255,0.19)] text-foreground"
            }`}
          >
            {featureData[id].title}
          </button>
        ))}
      </div>

      {/* Content card */}
      <div className="glass-card p-4 flex-1 flex flex-col transition-opacity duration-200 pb-[8px]">
        <h3 className="text-xl font-bold text-foreground mb-2">{data.title}</h3>

        <p className="text-muted-foreground leading-relaxed mb-3 text-xs">{data.description}</p>

        {/* Video placeholder */}
        <div className="w-full aspect-[16/8] rounded-xl bg-[rgba(164,168,255,0.08)] border border-[rgba(164,168,255,0.12)] overflow-hidden mb-3">
          {data.video ? (
            <video autoPlay loop muted playsInline className="w-full h-full object-cover">
              <source src={data.video} type="video/mp4" />
            </video>
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-muted-foreground text-sm">Vídeo em breve</span>
            </div>
          )}
        </div>

        {/* Feature list */}
        <div className="space-y-2">
          {data.features.map((feat, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Check className="w-3 h-3 text-primary" />
              </div>
              <span className="text-[9px] text-foreground">{feat}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GenericDetail;
