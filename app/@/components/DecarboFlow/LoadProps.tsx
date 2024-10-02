import { Button } from "~/@/components/ui/button";
import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export function LoadProps({
  setPath,
}: {
  setPath: (path: "welcome" | "loadProps" | "target") => void;
}) {
  return (
    <DialogHeader className="">
      <DialogTitle>
        <h1 className="text-3xl">Load props</h1>
      </DialogTitle>
      <DialogDescription className="">
        <p className="text-sm text-gray-500">
          GL1 Decarbonization is a tool that helps you plan your decarbonization
          strategy and get insights on your properties.
        </p>
        <Button className="mt-4 w-fit" onClick={() => setPath("target")}>
          Get started
        </Button>
      </DialogDescription>
    </DialogHeader>
  );
}
