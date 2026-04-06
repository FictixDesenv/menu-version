import * as React from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined);

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return !!isMobile;
}

const TOTEM_MIN_WIDTH = 1920;

export function useTotemScale() {
  const [scale, setScale] = React.useState(1);

  React.useEffect(() => {
    const calculate = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      if (w >= TOTEM_MIN_WIDTH) {
        // Scale the 448px mobile layout to fill the screen height
        const targetHeight = h;
        const targetWidth = targetHeight * (9 / 16); // maintain ~9:16 aspect
        const s = Math.min(targetHeight / 896, targetWidth / 448); // 896 = ~mobile viewport height
        setScale(Math.max(s, 1));
      } else if (w >= 1024) {
        // Desktop but not totem — moderate scale
        const s = Math.min(h / 896, 1.5);
        setScale(Math.max(s, 1));
      } else {
        setScale(1);
      }
    };
    calculate();
    window.addEventListener("resize", calculate);
    return () => window.removeEventListener("resize", calculate);
  }, []);

  return scale;
}
