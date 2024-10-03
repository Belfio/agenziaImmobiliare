import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Welcome } from "./Welcome";
import { LoadProps } from "./LoadProps";
import { Target } from "./Target";
import { useState } from "react";
import { Region } from "./Region";
import { Summary } from "./Summary";

export type FlowSteps =
  | "welcome"
  | "loadProps"
  | "target"
  | "summary"
  | "region"
  | "summary"
  | "end";

export function DecarboFlow() {
  const [path, setPath] = useState<FlowSteps>("welcome");

  const pathSlides = (path: FlowSteps) => {
    switch (path) {
      case "welcome":
        return <Welcome setPath={setPath} />;
      case "region":
        return <Region setPath={setPath} />;
      case "loadProps":
        return <LoadProps setPath={setPath} />;
      case "target":
        return <Target setPath={setPath} />;
      case "summary":
        return <Summary setPath={setPath} />;
    }
  };
  return (
    <Dialog open>
      <DialogContent className="max-w-[1024px] h-[480px] overflow-hidden">
        <div className="relative z-10 max-w-[1024px] h-full">
          {pathSlides(path)}
        </div>
      </DialogContent>
    </Dialog>
  );
}
