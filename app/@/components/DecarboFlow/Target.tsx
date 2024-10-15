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

import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";

import { TargetSchema, TargetType } from "~/@/lib/types";

type TargetObjType = {
  value: TargetNameType;
  label: string;
};
const TARGETS: TargetObjType[] = [
  {
    value: "EPCmin",
    label: "Improve EPC ratings in portfolio",
  },
  // {
  //   value: "Emission",
  //   label: "Decrease total financed emissions",
  // },
  {
    value: "EmissionPercent",
    label: "Decrease total financed emissions (soon)",
  },
  // {
  //   value: "EmissionIntensity",
  //   label: "Reach target emissions intensity",
  // },
  {
    value: "EmissionIntensityPercent",
    label: "Reach target emissions intensity (soon)",
  },
];

export type TargetNameType =
  | "EPCmin"
  | "Emission"
  | "EmissionPercent"
  | "EmissionIntensity"
  | "EmissionIntensityPercent";

const TARGET_DETAIL_INPUT = {
  EPCmin: (setValue: (value: string) => void) => (
    <div className="flex items-center justify-between w-full">
      <p className="text-gray-200 min-w-[160px] font-regular">
        Share of properties
      </p>
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
    </div>
  ),
  Emission: (setValue: (value: string) => void) => (
    <div className="flex items-center space-x-2 justify-between w-full">
      <p className="font-regular text-gray-200">
        Reduction from today’s baseline
      </p>
      <Input
        type="number"
        placeholder="0"
        min="0"
        max="100"
        className="pr-5 max-w-[84px] text-gray-700"
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  ),
  EmissionPercent: (setValue: (value: string) => void) => (
    <div className="flex items-center space-x-2 justify-between w-full">
      <p className="font-regular text-gray-200">
        Reduction from today’s baseline
      </p>{" "}
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
    <div className="flex items-center space-x-2 justify-between w-full">
      <p className="font-regular text-gray-200">
        Reduction in emissions intensity from today&apos;s baseline
      </p>
      <Input
        type="number"
        placeholder="0"
        min="0"
        max="100"
        className="max-w-[64px]"
        onChange={(e) => setValue(e.target.value)}
      />{" "}
      <p className="font-regular text-gray-200">tCO2/sqmt</p>
    </div>
  ),
  EmissionIntensityPercent: (setValue: (value: string) => void) => (
    <div className="flex items-center space-x-2 justify-between w-full">
      <p className="font-regular text-gray-200">
        Reduction in emissions intensity from today&apos;s baseline
      </p>

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

export function Target({
  setPath,
  setTarget,
  regions,
}: {
  setPath: (path: FlowSteps) => void;
  setTarget: (target: TargetType) => void;
  regions: string[];
}) {
  const [targetSelected, setTargetSelected] = useState<string | undefined>(
    undefined
  );
  const [targetValue, setTargetValue] = useState<string | undefined>(undefined);
  const [benefitFilter, setBenefitFilter] = useState<string | undefined>("no");
  const [loanAmount, setLoanAmount] = useState<string | undefined>("fixed");
  const [subsidyAmount, setSubsidyAmount] = useState<string | undefined>("500");
  const [calendarValue, setCalendarValue] = useState<string | undefined>(
    undefined
  );

  const handleSubmit = () => {
    const newTarget: TargetType = {
      region: regions,
      target: targetSelected as TargetNameType,
      targetValue: targetValue as string,
      benefitFilter: benefitFilter as string,
      loanAmount: loanAmount as string,
      subsidyAmount: subsidyAmount as string,
      calendarValue: calendarValue as string,
      createdAt: new Date().toISOString(),
      userId: "123",
      targetId: "123",
    };
    console.log(newTarget);
    const parsedTarget: TargetType = TargetSchema.parse(newTarget);
    setTarget(parsedTarget);
    setPath("summary");
  };

  return (
    <DialogHeader className="h-full">
      <DialogTitle>
        <h1 className="text-3xl">Climate target settings</h1>
        <p className="text-gray-500 mt-2 leading-relaxed">
          Set specific climate targets for your portfolio. Choose to improve EPC
          ratings for your properties, reduce overall emissions, or decrease
          emissions intensity, in alignment with your decarbonisation strategy.
        </p>
      </DialogTitle>
      <DialogDescription className=" h-full flex flex-col justify-between ">
        <div className="flex justify-center items-center mt-2">
          <div className="flex flex-col py-4 space-y-2 bg-[var(--darkblue)]  w-1/2 h-[360px] justify-between ">
            <div className=" flex items-center space-x-4 px-4 ">
              <Select
                onValueChange={(value) => setTargetSelected(value)}
                name="target"
              >
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
                          onClick={() => setTargetSelected(t.value)}
                        >
                          {t.label}
                        </Label>
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            {targetSelected && (
              <>
                <div className=" flex justify-between items-center space-x-4 px-4 ">
                  <span className="text-gray-200 font-regular">
                    Filter homeowners that will see net benefits:{" "}
                  </span>

                  <Tabs
                    value={benefitFilter}
                    className="w-fit"
                    onChange={(value) => setBenefitFilter(String(value))}
                  >
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="yes">Yes</TabsTrigger>
                      <TabsTrigger value="no">No</TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>
                <div className=" flex justify-between items-center space-x-4 px-4 ">
                  <span className="text-gray-200 font-regular">
                    Loan amount:{" "}
                  </span>

                  <Tabs
                    value={loanAmount}
                    className="w-fit"
                    onChange={(value) => setLoanAmount(String(value))}
                  >
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="fixed">Fixed</TabsTrigger>
                      <TabsTrigger value="retrofitCost">
                        Retrofit cost
                      </TabsTrigger>
                      <TabsTrigger value="breakeven">Breakeven</TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>

                <div className="flex items-center justify-between space-x-4 px-4 ">
                  <span className="text-gray-200 font-regular">
                    Maximum subsidy amount:{" "}
                  </span>
                  <Tabs
                    value={subsidyAmount}
                    className="w-fit"
                    onChange={(value) => setSubsidyAmount(String(value))}
                  >
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="500">£500</TabsTrigger>
                      <TabsTrigger value="2000">£2000</TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>

                <div className=" flex items-center justify-between px-4 ">
                  {TARGET_DETAIL_INPUT[
                    targetSelected as keyof typeof TARGET_DETAIL_INPUT
                  ](setTargetValue)}
                </div>

                <div className="flex items-center justify-between space-x-4 px-4">
                  <>
                    <p className="text-md text-gray-200 font-regular">By</p>

                    <Input
                      type="date"
                      name="calendar"
                      placeholder="dd/mm/yyyy"
                      className="max-w-fit h-fit border-none text-gray-700 font-regular  "
                      pattern="\d{2}/\d{2}/\d{4}"
                      title="Please enter a valid year in the format 20nn"
                      min="2025"
                      max="2099"
                      onChange={(e) => setCalendarValue(e.target.value)}
                    />
                  </>
                </div>
              </>
            )}
          </div>
          <div className="flex flex-col  px-2 w-1/2 justify-between ">
            {targetValue && (
              <TargetPreview
                target={targetSelected as TargetNameType}
                targetValue={Number(targetValue)}
                calendarValue={calendarValue}
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

          <Button className="mt-4 w-fit" type="submit" onClick={handleSubmit}>
            Continue
          </Button>
        </div>
      </DialogDescription>
    </DialogHeader>
  );
}
