import { ArrowLeft, Check } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { trinioOsFeatureMap, trinioOsFeatureIds } from "@/data/trinioOsFeatures";

interface TrinioOSDetailProps {
  featureId: string;
  onBack: () => void;
}

const TrinioOSDetail = ({ featureId, onBack }: TrinioOSDetailProps) => {
  const [activeTab, setActiveTab] = useState(featureId);
  const [isVideoLoading, setIsVideoLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const data = trinioOsFeatureMap[activeTab];

  useEffect(() => {
    setIsVideoLoading(true);
    if (videoRef.current && data.video) {
      videoRef.current.src = data.video;
      videoRef.current.load();
    }
    const timer = setTimeout(() => setIsVideoLoading(false), 5000);
    return () => clearTimeout(timer);
  }, [activeTab, data.video]);

  return (
    <div className="flex flex-col h-full pl-[36px] pr-[36px] pb-[40px]">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-foreground hover:text-foreground/80 transition-colors mb-2 p-2 -ml-2"
      >
        <ArrowLeft className="w-5 h-5" />
        <span className="text-base font-bold">O que é o Trinio OS?</span>
      </button>

      <div className="flex flex-row gap-2 mb-3 w-full">
        {trinioOsFeatureIds.map((id) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className={`flex-1 text-center px-1 py-[4px] rounded-[4px] text-[5px] font-medium leading-tight transition-all ${
              activeTab === id
                ? "bg-foreground text-card"
                : "bg-card border border-[rgba(164,168,255,0.19)] text-foreground"
            }`}
          >
            {trinioOsFeatureMap[id].title}
          </button>
        ))}
      </div>

      <div className="glass-card p-4 flex-1 flex flex-col transition-opacity duration-200 pb-[8px]">
        <h3 className="text-xl font-bold text-foreground mb-2">{data.title}</h3>
        <p className="text-muted-foreground leading-relaxed mb-3 text-[10px]">{data.description}</p>

        <div className="w-full aspect-video rounded-xl bg-[rgba(164,168,255,0.08)] border border-[rgba(164,168,255,0.12)] overflow-hidden mb-3 relative">
          {data.video ? (
            <>
              {isVideoLoading && <Skeleton className="absolute inset-0 rounded-xl bg-muted/30" />}
              <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                onCanPlay={() => setIsVideoLoading(false)}
                style={{ willChange: 'transform' }}
                className="w-full h-full object-cover"
              />
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-muted-foreground text-sm">Vídeo em breve</span>
            </div>
          )}
        </div>

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

export default TrinioOSDetail;
