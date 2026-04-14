import { useEffect } from "react";

const usePreloadVideos = (urls: string[]) => {
  useEffect(() => {
    const links: HTMLLinkElement[] = [];
    urls.forEach((url) => {
      if (!url) return;
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "video";
      link.href = url;
      document.head.appendChild(link);
      links.push(link);
    });
    return () => {
      links.forEach((link) => document.head.removeChild(link));
    };
  }, [urls]);
};

export default usePreloadVideos;
