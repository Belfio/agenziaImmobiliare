import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Welcome } from "./Welcome";
import { LoadProps } from "./LoadProps";
import { Target } from "./Target";
import { useState } from "react";

export function DecarboFlow() {
  const [path, setPath] = useState<"welcome" | "loadProps" | "target">(
    "welcome"
  );
  const pathSlides = (path: "welcome" | "loadProps" | "target") => {
    switch (path) {
      case "welcome":
        return <Welcome setPath={setPath} />;
      case "loadProps":
        return <LoadProps setPath={setPath} />;
      case "target":
        return <Target setPath={setPath} />;
    }
  };
  return (
    <Dialog open>
      <DialogContent className="max-w-[800px]">
        {pathSlides(path)}
      </DialogContent>
    </Dialog>
  );
}
