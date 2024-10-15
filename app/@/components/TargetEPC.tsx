"use client";

import { Link } from "@remix-run/react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { ChartComposedUI } from "./ChartComposed";
import { DataEPCComposedChart } from "~/@/data/target_EPC_improvement";
import { Separator } from "./ui/separator";
import { BarChartUI } from "./BarChart";

export default function TargetEPC({ className }: { className?: string }) {
  return (
    <div className={`pt-4 flex w-fit m-auto ${className}`}>
      <Card className="w-[900px] h-[580px]">
        <CardHeader>
          <CardTitle className="font-semibold">
            Improvement to EPC C+ by 2035
          </CardTitle>
          <p className="text-sm text-gray-500">
            Projected share of properties to address to improve to EPC C+ by
            2035
          </p>
        </CardHeader>
        <CardContent className="pl-2 grid gap-4 md:grid-cols-2 ">
          <ChartComposedUI
            className="col-span-4 px-6"
            series={DataEPCComposedChart}
          />
        </CardContent>
      </Card>
      <div className="w-1/4 min-w-[364px]">
        <Card className="h-[580px] border-l-0">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg ">Approved retrofits</CardTitle>
          </CardHeader>
          <CardContent className="pl-2 ">
            <div className="mx-4 ">
              <div className="flex items-end">
                <h1 className="text-8xl font-bold">0</h1>
                <p className="text-sm text-gray-500 font-normal pb-3 pl-2">
                  properties retrofitted <br />
                  out of 1 scheduled
                </p>
              </div>
              <Separator className="my-8" />
              <div className="bottom-8 flex justify-start gap-4 items-center">
                <h1 className="text-lg font-semibold">Annual target gap</h1>
                <Link to="/decarbonisation">
                  <Button>Review targets</Button>
                </Link>
              </div>
              <div className="my-0">
                <BarChartUI
                  yHide={true}
                  height={260}
                  width={240}
                  className="mx-auto mt-4"
                  data={[
                    {
                      name: "Completed",
                      total: [0, 0],
                    },
                    {
                      name: "Pending",
                      total: [0, 100],
                    },
                    {
                      name: "Total",
                      total: [0, 100],
                    },
                  ]}
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
