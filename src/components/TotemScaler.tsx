import React from "react";
import { useTotemScale } from "@/hooks/use-mobile";

const TotemScaler: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const scale = useTotemScale();

  const isScaled = scale > 1;

  return (
    <div style={{
      zoom: isScaled ? scale : undefined,
      width: isScaled ? "432px" : "100%",
      height: "100vh",
      overflow: "hidden"
    }}>
      {children}
    </div>
  );
};

export default TotemScaler;
