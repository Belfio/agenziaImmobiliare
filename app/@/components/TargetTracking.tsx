import { Separator } from "@radix-ui/react-dropdown-menu";

import { BarChartUI } from "./BarChart";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Link } from "@remix-run/react";
import { Button } from "./ui/button";

export default function TargetTracking() {
  return (
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
              out of 1 scheduled this year
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
  );
}
