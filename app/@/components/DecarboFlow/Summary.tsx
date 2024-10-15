import { Button } from "~/@/components/ui/button";
import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { FlowSteps } from ".";
import { TargetType } from "~/@/lib/types";
import TargetPreview from "./TargetPreview";
import { TargetNameType } from "./Target";
import { TargetSummaryChart } from "./TargetSummaryChart";

export function Summary({
  setPath,
  submitTarget,
  target,
}: {
  setPath: (path: FlowSteps) => void;
  submitTarget: () => void;
  target: TargetType;
}) {
  return (
    <DialogHeader className="h-full">
      <DialogTitle>
        <h1 className="text-3xl">Summary</h1>
      </DialogTitle>
      <DialogDescription className="mt-2 h-full flex flex-col justify-between">
        <div className="">
          <div>
            <p className="text-sm text-gray-500">
              Review your decarbonisation pathway. Click &quot;Back&quot; to
              modify or &quot;Confirm&quot; to make your decarbonisation pathway
              active.
            </p>
          </div>
          <div className="flex items-center gap-8 mt-8">
            <div className="flex w-1/2 items-center ">
              <TargetPreview
                target={target.target as TargetNameType}
                targetValue={Number(target.targetValue)}
                calendarValue={target.calendarValue}
              />
            </div>
            <TargetSummaryChart
              target={target.target as TargetNameType}
              targetValue={Number(target.targetValue)}
              calendarValue={target.calendarValue}
            />
          </div>
        </div>
        <div className="justify-end flex items-center gap-4 mt-4">
          <Button
            className="w-fit"
            onClick={() => setPath("target")}
            variant="secondary"
          >
            Back
          </Button>
          <Button className="w-fit" onClick={submitTarget}>
            Confirm
          </Button>
        </div>
      </DialogDescription>
    </DialogHeader>
  );
}
