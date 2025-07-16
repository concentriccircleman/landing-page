"use client";

import { createContext, useContext, useEffect, useState } from "react";

const AnimationContext = createContext<{
  isLoaded: boolean;
}>({
  isLoaded: false,
});

export const useAnimation = () => {
  return useContext(AnimationContext);
};

export function Providers({ children }: { children: React.ReactNode }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (document.readyState === "complete") {
      setTimeout(() => {
        setIsLoaded(true);
      }, 500);
    } else {
      const handleLoad = () => {
        setTimeout(() => {
          setIsLoaded(true);
        }, 500);
      };
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <AnimationContext.Provider value={{ isLoaded }}>
      {children}
    </AnimationContext.Provider>
  );
}
