import { Check } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import type { FeatureInfo } from "@/data/tabData";

interface FeatureContentProps {
  data: FeatureInfo;
  slideDirection?: "left" | "right";
}

const FeatureContent = ({ data, slideDirection = "right" }: FeatureContentProps) => {
  const [isVideoLoading, setIsVideoLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setIsVideoLoading(true);
    if (videoRef.current && data.video) {
      videoRef.current.src = data.video;
      videoRef.current.load();
    }
    const timer = setTimeout(() => setIsVideoLoading(false), 5000);
    return () => clearTimeout(timer);
  }, [data.video]);

  return (
    <div className={`glass-card p-4 flex-1 flex flex-col pb-[8px] ${slideDirection === "right" ? "animate-slide-in-from-right" : "animate-slide-in-from-left"}`}>
      <h3 className="text-xl font-bold text-foreground mb-2">{data.title}</h3>

      <p className="text-muted-foreground leading-relaxed mb-3 text-[10px]">{data.description}</p>

      {/* Video */}
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
              className="w-full h-full object-cover"
            />
          </>
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
  );
};

export default FeatureContent;
