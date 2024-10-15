import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Welcome } from "./Welcome";
import { LoadProps } from "./LoadProps";
import { Target, TargetType } from "./Target";
import { useState } from "react";
import { Region } from "./Region";
import { Summary } from "./Summary";
import { useNavigate } from "@remix-run/react";

export type FlowSteps =
  | "welcome"
  | "loadProps"
  | "target"
  | "summary"
  | "region"
  | "summary"
  | "end";

export function DecarboFlow({
  setIsFlowOpen,
}: {
  setIsFlowOpen: (isOpen: boolean) => void;
}) {
  const [path, setPath] = useState<FlowSteps>("welcome");
  const [regions, setRegions] = useState<string[]>([]);
  const [target, setTarget] = useState<TargetType | undefined>(undefined);
  const navigate = useNavigate();

  const submitTarget = () => {
    console.log("submit", target);
    navigate("/decarbonisation");
  };
  const pathSlides = (path: FlowSteps) => {
    switch (path) {
      case "welcome":
        return <Welcome setPath={setPath} />;
      case "region":
        return (
          <Region setPath={setPath} setRegions={setRegions} regions={regions} />
        );
      case "loadProps":
        return <LoadProps setPath={setPath} />;
      case "target":
        return (
          <Target setPath={setPath} setTarget={setTarget} regions={regions} />
        );
      case "summary":
        return (
          <Summary
            setPath={setPath}
            submitTarget={submitTarget}
            target={target}
          />
        );
      case "end":
        setIsFlowOpen(false);
        return null;
    }
  };
  return (
    <Dialog open>
      <DialogContent className="max-w-[1024px] h-[580px] w-[1024px] overflow-hidden">
        <div className="relative z-10 max-w-[1024px] w-full h-full">
          {pathSlides(path)}
        </div>
      </DialogContent>
    </Dialog>
  );
}
