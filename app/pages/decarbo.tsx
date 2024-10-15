// import { Separator } from "@radix-ui/react-dropdown-menu";

// import { LineChartUI } from "~/@/components/LineChart";
import TargetEPC from "~/@/components/TargetEPC";

import { Button } from "~/@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle,
// } from "~/@/components/ui/card";
// import { EmissionsTrend } from "~/@/data/data";

const target = {
  target: "Emission",
  targetValue: "50",
  calendarValue: "12/12/2034",
};
import TargetPreview from "~/@/components/DecarboFlow/TargetPreview";
import { useState } from "react";
import { DecarboFlow } from "~/@/components/DecarboFlow";
export default function DecarboPage() {
  const [isFlowOpen, setIsFlowOpen] = useState(false);

  if (isFlowOpen) {
    return <DecarboFlow setIsFlowOpen={setIsFlowOpen} />;
  }
  return (
    <div className="font-sans p-4">
      <h1 className="text-3xl">Decarbonisation Pathways </h1>
      <p className="text-sm text-gray-500">
        Plan your decarbonisation strategy and get insights on your properties.
      </p>
      <>
        {/* <Card className="mt-8">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle> Model and progress </CardTitle>
            </div>
            <p className="text-gray-500">
              Create a strategy based on GL1 models to decarbonise your mortgage
              portfolio.
            </p>
          </CardHeader>
          <CardContent className="pl-2 grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <LineChartUI className="col-span-4" series={EmissionsTrend} />
            <div className="col-span-3 relative pl-8">
              <div className="absolute ">
                <Button onClick={() => setIsFlowOpen(true)}>
                  Explore new target
                </Button>
              </div>
              <div className="mt-12">
                <p className="text-sm text-gray-500">
                  10% reduction from last year
                </p>
                <p className="text-sm text-gray-500">20% reduction from 2019</p>
                <Separator className="my-4" />
                <p className="text-gray-500 text-sm">
                  65 retrofitting projects started in 2024
                </p>
                <p className="text-gray-500 text-sm">
                  89 retrofitting projects to complete the 2024 target
                </p>
              </div>
              <div className="absolute bottom-8">{}</div>
            </div>
          </CardContent>
        </Card> */}
        <div className="w-full flex justify-center items-center mt-8">
          <div className="w-2/3">
            <TargetEPC className="w-full" />
          </div>
          <div className="w-1/3 p-4 space-y-4">
            <Button onClick={() => setIsFlowOpen(true)}>
              Explore new target
            </Button>
            <TargetPreview
              target={target.target}
              targetValue={Number(target.targetValue)}
              calendarValue={target.calendarValue}
            />
          </div>
        </div>
        {/* <Card className="my-8">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle> Priority actions </CardTitle>
            </div>
            <p className="text-gray-500">
              Create a strategy based on GL1 models to decarbonise your mortgage
              portfolio.
            </p>
          </CardHeader>
          <CardContent className="">
            <p className="text-gray-500">
              Create a strategy based on GL1 models to decarbonise your mortgage
              portfolio.
            </p>{" "}
            <p className="text-gray-500">
              Create a strategy based on GL1 models to decarbonise your mortgage
              portfolio.
            </p>{" "}
            <p className="text-gray-500">
              Create a strategy based on GL1 models to decarbonise your mortgage
              portfolio.
            </p>
          </CardContent>
        </Card> */}
      </>
    </div>
  );
}
