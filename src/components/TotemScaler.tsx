import React from "react";
import { useTotemScale } from "@/hooks/use-mobile";

const TotemScaler: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const scale = useTotemScale();

  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
      <div
        style={{
          width: "768px",
          height: `${100 / scale}vh`,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          overflow: "hidden",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default TotemScaler;
