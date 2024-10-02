import { Button } from "~/@/components/ui/button";
import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export function Target({
  setPath,
}: {
  setPath: (path: "welcome" | "loadProps" | "target") => void;
}) {
  return (
    <DialogHeader className="">
      <DialogTitle>
        <h1 className="text-3xl">Target</h1>
      </DialogTitle>
      <DialogDescription className="">
        <p className="text-sm text-gray-500">
          GL1 Decarbonization is a tool that helps you plan your decarbonization
          strategy and get insights on your properties.
        </p>
        <Button className="mt-4 w-fit" onClick={() => setPath("welcome")}>
          Get started
        </Button>
      </DialogDescription>
    </DialogHeader>
  );
}
