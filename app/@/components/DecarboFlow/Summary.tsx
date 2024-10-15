import { Button } from "~/@/components/ui/button";
import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { FlowSteps } from ".";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { useTarget } from "~/hooks/useTarget";

const data = [
  { name: "Current Emissions", value: 3182 },
  { name: "Emission Outcome", value: 1563 },
];

const COLORS = ["#0088FE", "#00C49F"];

export function Summary({ setPath }: { setPath: (path: FlowSteps) => void }) {
  const { targets } = useTarget();
  return (
    <DialogHeader className="h-full">
      <DialogTitle>
        <h1 className="text-3xl">Summary</h1>
      </DialogTitle>
      <DialogDescription className="mt-2 h-full flex flex-col justify-between">
        <div className="flex justify-between">
          <div>
            <p className="text-sm text-gray-500">
              Review your decarbonisation pathway. Click &quot;Back&quot; to
              modify or &quot;Confirm&quot; to make your decarbonisation pathway
              active.
            </p>
            <ul className="text-sm text-gray-500 mt-4">
              <li>Number of target properties: 797</li>
              <li>Current Emissions: 3182 tCO₂e</li>
              <li>Emission Outcome: 1563 tCO₂e</li>
              <li>Emission reduction: -1619 tCO₂e (-9%)</li>
              <li>Estimated Homeowner Savings: £281.99 per year</li>
              <li>Estimated total subsidy amount: £398,500</li>
              <li>Estimated total loan amount: £914,150</li>
              <li>Retrofits per month: 7 (122 months)</li>
            </ul>
          </div>
          <PieChart width={200} height={200}>
            <Pie
              data={data}
              cx={100}
              cy={100}
              innerRadius={40}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>
        <div className="justify-end flex items-center gap-4 mt-4">
          <Button
            className="w-fit"
            onClick={() => setPath("target")}
            variant="secondary"
          >
            Back
          </Button>
          <Button className="w-fit" onClick={() => setPath("end")}>
            Confirm
          </Button>
        </div>
      </DialogDescription>
    </DialogHeader>
  );
}
