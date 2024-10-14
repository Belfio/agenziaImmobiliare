import { Button } from "~/@/components/ui/button";
import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "../ui/input";
import { FlowSteps } from ".";
import { Label } from "../ui/label";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import TargetPreview from "./TargetPreview";

type TargetObjType = {
  value: TargetType;
  label: string;
};
const TARGETS: TargetObjType[] = [
  {
    value: "EPCmin",
    label: "Improve to EPC C or above",
  },
  {
    value: "Emission",
    label: "Decrease tnC02 by",
  },
  {
    value: "EmissionPercent",
    label: "Decrease emissions by a percentage",
  },
  {
    value: "EmissionIntensity",
    label: "Decrease average emissions per sqmt",
  },
  {
    value: "EmissionIntensityPercent",
    label: "Decrease emissions per sqmt by a percentage",
  },
];

export type TargetType =
  | "EPCmin"
  | "Emission"
  | "EmissionPercent"
  | "EmissionIntensity"
  | "EmissionIntensityPercent";
const TARGET_DETAIL_INPUT = {
  EPCmin: (setValue: (value: string) => void) => (
    <div className="flex items-center space-x-2">
      <div className="relative">
        <Input
          type="number"
          placeholder="0"
          min="0"
          max="100"
          className="pr-5 max-w-[84px] text-gray-700"
          onChange={(e) => setValue(e.target.value)}
        />
        <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-700">
          %
        </span>
      </div>
      <p className="text-gray-200 min-w-[160px] font-regular">
        of the properties
      </p>
    </div>
  ),
  Emission: (setValue: (value: string) => void) => (
    <div className="flex items-center space-x-2 ">
      <Input
        type="number"
        placeholder="0"
        min="0"
        max="100"
        onChange={(e) => setValue(e.target.value)}
        className="max-w-[64px]"
      />{" "}
      <p className="font-regular text-gray-200">tnCO2</p>
    </div>
  ),
  EmissionPercent: (setValue: (value: string) => void) => (
    <div className="flex items-center space-x-2 ">
      <div className="relative">
        <Input
          type="number"
          placeholder="0"
          min="0"
          max="100"
          className="pr-5 max-w-[84px]"
          onChange={(e) => setValue(e.target.value)}
        />
        <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-700">
          %
        </span>
      </div>
    </div>
  ),
  EmissionIntensity: (setValue: (value: string) => void) => (
    <div className="flex items-center space-x-2 ">
      <Input
        type="number"
        placeholder="0"
        min="0"
        max="100"
        className="max-w-[64px]"
        onChange={(e) => setValue(e.target.value)}
      />{" "}
      <p className="font-regular text-gray-200">tnCO2/sqmt</p>
    </div>
  ),
  EmissionIntensityPercent: (setValue: (value: string) => void) => (
    <div className="flex items-center space-x-2 ">
      <div className="relative">
        <Input
          type="number"
          placeholder="0"
          min="0"
          max="100"
          className="pr-5 max-w-[84px]"
          onChange={(e) => setValue(e.target.value)}
        />
        <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-700">
          %
        </span>
      </div>
    </div>
  ),
};

export function Target({ setPath }: { setPath: (path: FlowSteps) => void }) {
  const [targetSelected, setTarget] = useState<string | undefined>(undefined);
  const [targetValue, setTargetValue] = useState<string | undefined>(undefined);

  return (
    <DialogHeader className="h-full">
      <DialogTitle>
        <h1 className="text-3xl">Climate target settings</h1>
        <p className="text-gray-500 mt-2 line-clamp-2">
          Set the climate target for your portfolio. You can choose to improve
          the EPC rating of your properties, reduce the total emissions or the
          emissions intensity.
        </p>
      </DialogTitle>
      <DialogDescription className="mt-2 h-full flex flex-col justify-between ">
        <div className="flex justify-center mt-8">
          <div className="flex flex-col py-6 px-2 bg-[var(--darkblue)]  w-1/2 h-full justify-between">
            <div className="h-8 flex items-baseline space-x-4 px-4 ">
              <Select onValueChange={(value) => setTarget(value)}>
                <SelectTrigger className="w-full focus-visible:ring-0 focus-visible:ring-offset-0 focus:ring-0 focus:ring-offset-0 text-left">
                  <SelectValue
                    placeholder="Select a target"
                    className="text-primary text-left"
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {TARGETS.map((t) => (
                      <SelectItem value={t.value} key={t.value}>
                        <Label
                          className="text-gray-700 text-left w-fill m-0"
                          // className={`text-gray-300 hover:text-gray-700 ${
                          //   targetSelected === t.value && "text-gray-700"
                          // }`}
                          onClick={() => setTarget(t.value)}
                        >
                          {t.label}
                        </Label>
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="h-8 flex items-baseline space-x-4 px-4 ">
              {targetSelected &&
                TARGET_DETAIL_INPUT[
                  targetSelected as keyof typeof TARGET_DETAIL_INPUT
                ](setTargetValue)}
            </div>
            <div className="h-8 flex items-baseline space-x-4 px-4">
              {targetValue && (
                <>
                  <p className="text-md text-gray-200 font-regular">By</p>

                  <Input
                    type="date"
                    placeholder="dd/mm/yyyy"
                    className="max-w-fit h-fit border-none text-gray-700 font-regular  "
                    pattern="\d{2}/\d{2}/\d{4}"
                    title="Please enter a valid year in the format 20nn"
                    min="2025"
                    max="2099"
                  />
                </>
              )}
            </div>
          </div>
          <div className="flex flex-col  px-2 w-1/2 h-full justify-between ">
            {targetValue && (
              <TargetPreview
                target={targetSelected as TargetType}
                targetValue={Number(targetValue)}
              />
            )}
          </div>
        </div>
        <div className="flex justify-end gap-4 ">
          <Button
            className="mt-4 w-fit"
            onClick={() => setPath("region")}
            variant="secondary"
          >
            Back
          </Button>
          <Button className="mt-4 w-fit" onClick={() => setPath("summary")}>
            Continue
          </Button>
        </div>
      </DialogDescription>
    </DialogHeader>
  );
}
