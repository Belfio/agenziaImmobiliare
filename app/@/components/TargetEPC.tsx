"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { ChartComposedUI } from "./ChartComposed";
import { DataEPCComposedChart } from "~/@/data/target_EPC_improvement";

export default function TargetEPC({ className }: { className?: string }) {
  return (
    <Card className={`w-[900px] h-[580px] ${className}`}>
      <CardHeader>
        <CardTitle className="font-semibold">
          Improvement to EPC C+ by 2035
        </CardTitle>
        <p className="text-sm text-gray-500">
          Projected share of properties to address to improve to EPC C+ by 2035
        </p>
      </CardHeader>
      <CardContent className="pl-2 grid gap-4 md:grid-cols-2 ">
        <ChartComposedUI
          className="col-span-4 px-6"
          series={DataEPCComposedChart}
        />
      </CardContent>
    </Card>
  );
}
