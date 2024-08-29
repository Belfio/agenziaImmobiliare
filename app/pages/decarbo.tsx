import { Separator } from "@radix-ui/react-dropdown-menu";
import { useNavigate } from "@remix-run/react";
import { DataTable } from "~/@/components/DataTable";
import { columns } from "~/@/components/DataTable/columns";
import { LineChartUI } from "~/@/components/LineChart";
import { Button } from "~/@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "~/@/components/ui/card";
import { EmissionsTrend } from "~/@/data/data";
import { PropertyData } from "~/@/lib/types";
import { parsePropertyForTable } from "~/@/lib/utils";

export default function DecarboPage({
  properties,
}: {
  properties: PropertyData;
}) {
  const navigate = useNavigate();

  const propertyTableParsed = parsePropertyForTable(properties);

  return (
    <div className="font-sans p-4">
      <>
        <Card className="">
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
                <Button
                  onClick={() => navigate("/dashboard/decarbonization/start")}
                >
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
        </Card>
        <Card className="my-8">
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
        </Card>
        <DataTable data={propertyTableParsed} columns={columns} />
      </>
      <div className="mt-8">Models and graphs and input spaces.</div>
    </div>
  );
}
