import { useEffect, useState } from "react";
import { Target } from "~/@/lib/types";

export function useTarget(): {
  targets: Target[];
  isLoading: boolean;
  setTargets: (targets: Target[]) => void;
} {
  const [targets, setTargets] = useState<Target[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [targets]);
  return { targets, isLoading, setTargets };
}
