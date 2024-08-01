"use client";

import { Link } from "@remix-run/react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { LineChartUI } from "./LineChart";
import { EmissionsTrend } from "@/data/data";

export default function MainKpi() {
  return (
    <div className="pt-4">
      <Card className="">
        <CardHeader>
          <CardTitle>Expected emissions for 2034</CardTitle>
          <p className="text-sm text-gray-500">
            Projected CO2 emissions trend vs. reduction target
          </p>
        </CardHeader>
        <CardContent className="pl-2 grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <LineChartUI className="col-span-4" series={EmissionsTrend} />
          <div className="col-span-3 relative pl-8">
            <div className="absolute top-[-80px]">
              <h1 className="text-8xl font-black">
                90{" "}
                <span className="text-sm text-gray-500 font-normal">
                  kgC02 /sq mt / year
                </span>{" "}
              </h1>
            </div>
            <div className="absolute bottom-8">
              <Link to="/dashboard/decarbonization">
                <Button>Review targets</Button>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
