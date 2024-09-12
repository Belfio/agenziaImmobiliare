import { useState } from "react";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { RetrofitLoanProposals } from "./RetrofitLoanProposals";

interface PropertyFeature {
  name: string;
  checked: boolean;
}

export function RetrofitLoanOptions() {
  const [currentFeatures, setCurrentFeatures] = useState<PropertyFeature[]>([
    { name: "Roof insulation", checked: false },
    { name: "Wall insulation", checked: false },
    { name: "Energy efficiency rating of main heating", checked: false },
    { name: "Floor insulation", checked: false },
    { name: "Low energy lighting", checked: true },
    { name: "Heat recovery waste water system", checked: false },
    { name: "Area with thermostat control", checked: false },
    { name: "Solar panels", checked: false },
    { name: "Solar heated hot water system", checked: false },
    { name: "Thermostatic radiator valves", checked: true },
    { name: "Heating control programmer", checked: true },
    { name: "Multi-glazing window coverage", checked: true },
    { name: "Heat recovery flue gas system", checked: false },
  ]);

  const [potentialFeatures, setPotentialFeatures] = useState<PropertyFeature[]>(
    [
      { name: "Roof insulation", checked: true },
      { name: "Wall insulation", checked: true },
      { name: "Energy efficiency rating of main heating", checked: true },
      { name: "Floor insulation", checked: true },
      { name: "Low energy lighting", checked: true },
      { name: "Heat recovery waste water system", checked: true },
      { name: "Area with thermostat control", checked: true },
      { name: "Solar panels", checked: false },
      { name: "Solar heated hot water system", checked: false },
      { name: "Thermostatic radiator valves", checked: true },
      { name: "Heating control programmer", checked: true },
      { name: "Multi-glazing window coverage", checked: true },
      { name: "Heat recovery flue gas system", checked: false },
    ]
  );

  const handleCurrentFeatureChange = (index: number) => {
    const updatedFeatures = [...currentFeatures];
    updatedFeatures[index].checked = !updatedFeatures[index].checked;
    setCurrentFeatures(updatedFeatures);
  };

  const handlePotentialFeatureChange = (index: number) => {
    const updatedFeatures = [...potentialFeatures];
    updatedFeatures[index].checked = !updatedFeatures[index].checked;
    setPotentialFeatures(updatedFeatures);
  };

  return (
    <div className="font-sans">
      <h2 className="text-2xl font-bold mb-4">Retrofit Loan Options</h2>

      <h3 className="text-xl font-semibold mb-2">Current property features</h3>
      <p className="mb-4">Set the current property features.</p>

      <div className="grid grid-cols-2 gap-4 mb-8">
        {currentFeatures.map((feature, index) => (
          <div key={feature.name} className="flex items-center space-x-2">
            <Checkbox
              id={`current-${feature.name}`}
              checked={feature.checked}
              onCheckedChange={() => handleCurrentFeatureChange(index)}
            />
            <Label htmlFor={`current-${feature.name}`}>{feature.name}</Label>
          </div>
        ))}
      </div>

      <h3 className="text-xl font-semibold mb-2">
        Potential property features
      </h3>
      <p className="mb-4">
        Uncheck options here to exclude them from consideration.
      </p>

      <div className="grid grid-cols-2 gap-4 mb-12">
        {potentialFeatures.map((feature, index) => (
          <div key={feature.name} className="flex items-center space-x-2">
            <Checkbox
              id={`potential-${feature.name}`}
              checked={feature.checked}
              onCheckedChange={() => handlePotentialFeatureChange(index)}
            />
            <Label htmlFor={`potential-${feature.name}`}>{feature.name}</Label>
          </div>
        ))}
      </div>
      <RetrofitLoanProposals />
    </div>
  );
}
