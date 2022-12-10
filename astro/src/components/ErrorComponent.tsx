import { useEffect } from "react";

/**
 * Component to simulate error
 */
export const ErrorComponent = () => {
  useEffect(() => {
    // @ts-expect-error
    undefined[0];
  }, []);

  return null;
};
