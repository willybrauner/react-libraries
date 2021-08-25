import { useEffect, useState } from "react";

/**
 * Window size dimensions interface
 */
export interface IWindowSize {
  width: number;
  height: number;
}

/**
 * Window Size
 * return a object with innerDimension
 */
export function useWindowSize(): IWindowSize {
  const [windowSize, setWindowSize] = useState<IWindowSize>({
    width: window?.innerWidth,
    height: window?.innerHeight,
  });

  useEffect(() => {
    const resizeHandler = () => {
      setWindowSize({
        width: window?.innerWidth,
        height: window?.innerHeight,
      });
    };
    resizeHandler();
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return windowSize;
}
