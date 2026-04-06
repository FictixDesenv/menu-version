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

const ZOOM_TARGET_WIDTH = 768;

export function useTotemScale() {
  const [scale, setScale] = React.useState(1);

  React.useEffect(() => {
    const calculate = () => {
      const w = window.innerWidth;
      if (w >= 1920) {
        setScale(w / ZOOM_TARGET_WIDTH); // ~2.5x on 1920px
      } else if (w >= 1024) {
        setScale(w / ZOOM_TARGET_WIDTH); // proportional on desktop
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
