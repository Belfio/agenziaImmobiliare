import { Button } from "~/@/components/ui/button";
import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { FlowSteps } from ".";

export function Summary({ setPath }: { setPath: (path: FlowSteps) => void }) {
  return (
    <DialogHeader className="h-full">
      <DialogTitle>
        <h1 className="text-3xl">Decarbonisation pathway summary</h1>
      </DialogTitle>
      <DialogDescription className="mt-2 h-full flex flex-col justify-between">
        <p className="text-sm text-gray-500">
          GL1 Decarbonisation is a tool that helps you plan your decarbonisation
          strategy and get insights on your properties.
        </p>
        <div className="justify-end flex items-center gap-4 ">
          <Button
            className="mt-4 w-fit"
            onClick={() => setPath("welcome")}
            variant="secondary"
          >
            Back
          </Button>
          <Button className="mt-4 w-fit" onClick={() => setPath("end")}>
            Get started
          </Button>
        </div>
      </DialogDescription>
    </DialogHeader>
  );
}
