import React from "react";
import { useTotemScale } from "@/hooks/use-mobile";

const TotemScaler: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const scale = useTotemScale();

  const isScaled = scale > 1;

  return (
    <div style={{
      width: isScaled ? "432px" : "100%",
      height: isScaled ? `${100 / scale}vh` : "100vh",
      transform: isScaled ? `scale(${scale})` : undefined,
      transformOrigin: "top left",
      overflow: "hidden"
    }}>
      {children}
    </div>
  );
};

export default TotemScaler;
