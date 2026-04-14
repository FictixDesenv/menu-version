import React from "react";
import { useTotemScale } from "@/hooks/use-mobile";

const TotemScaler: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const scale = useTotemScale();

  return (
    <div style={{ zoom: scale, width: "768px", height: "100vh", overflow: "hidden" }}>
      {children}
    </div>
  );
};

export default TotemScaler;
