import { Button } from "~/@/components/ui/button";
import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { FlowSteps } from ".";
// import { MultiSelectorComplete } from "../ui/multicombo";
import { useState } from "react";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
const CITIES = [
  {
    value: "Portfolio",
    label: "All cities",
  },
  {
    value: "Leicester",
    label: "Leicester",
  },
];

// change the name of the cities into regions: “North East, North West, Yorkshire and The Humber, East Midlands, West Midlands, East of England, London, South East and South West
const REGIONS = [
  {
    value: "Portfolio",
    label: "All regions",
  },
  {
    value: "North East",
    label: "North East",
  },
  {
    value: "North West",
    label: "North West",
  },
  {
    value: "Yorkshire and The Humber",
    label: "Yorkshire and The Humber",
  },
  {
    value: "East Midlands",
    label: "East Midlands",
  },
  {
    value: "West Midlands",
    label: "West Midlands",
  },
  {
    value: "East of England",
    label: "East of England",
  },
  {
    value: "London",
    label: "London",
  },
  {
    value: "South East",
    label: "South East",
  },
  {
    value: "South West",
    label: "South West",
  },
];
export type Regions =
  | "Portfolio | Leicester | London | Birmingham | Manchester"
  | undefined;
export function Region({ setPath }: { setPath: (path: FlowSteps) => void }) {
  const [regions, setRegions] = useState<Regions[]>([]);
  return (
    <DialogHeader className="h-full">
      <DialogTitle>
        <h1 className="text-3xl">Target regions/cities</h1>
        <p className="text-sm text-gray-500 mt-2">
          Select the regions or cities you want to analyse in terms of
          decarbonisation.
        </p>
      </DialogTitle>
      <DialogDescription className="mt-2 h-full flex flex-col justify-between">
        <Tabs defaultValue="Cities" className="space-y-4 mt-8">
          <TabsList>
            <TabsTrigger value="Cities">Cities</TabsTrigger>
            <TabsTrigger value="Regions">Regions</TabsTrigger>
          </TabsList>
          <TabsContent value="Cities" className="space-y-4">
            <div className="flex flex-col gap-2 my-4 mx-4">
              {CITIES.map((region) => (
                <div key={region.value} className="flex items-center gap-2">
                  <Checkbox
                    id={region.value}
                    onCheckedChange={(checked) => {
                      console.log(region.value);
                      if (checked) {
                        if (region.value === "Portfolio")
                          setRegions(CITIES.map((r) => r.value) as Regions[]);
                        else setRegions([...regions, region.value as Regions]);
                      } else {
                        if (region.value === "Portfolio") setRegions([]);
                        else
                          setRegions(regions.filter((r) => r !== region.value));
                      }
                    }}
                    checked={regions.includes(region.value as Regions)}
                  />
                  <Label htmlFor={region.value}>{region.label}</Label>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="Regions" className="space-y-4">
            <div className="flex flex-col gap-2 my-4 mx-4">
              {REGIONS.map((region) => (
                <div key={region.value} className="flex items-center gap-2">
                  <Checkbox
                    id={region.value}
                    onCheckedChange={(checked) => {
                      console.log(region.value);
                      if (checked) {
                        if (region.value === "Portfolio")
                          setRegions(CITIES.map((r) => r.value) as Regions[]);
                        else setRegions([...regions, region.value as Regions]);
                      } else {
                        if (region.value === "Portfolio") setRegions([]);
                        else
                          setRegions(regions.filter((r) => r !== region.value));
                      }
                    }}
                    checked={regions.includes(region.value as Regions)}
                  />
                  <Label htmlFor={region.value}>{region.label}</Label>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="flex justify-end gap-4 z-[1] absolute bottom-0 right-0">
          <Button
            className="mt-4 w-fit"
            onClick={() => setPath("welcome")}
            variant="secondary"
          >
            Back
          </Button>
          <Button className="mt-4 w-fit" onClick={() => setPath("target")}>
            Continue
          </Button>
        </div>
      </DialogDescription>
    </DialogHeader>
  );
}
