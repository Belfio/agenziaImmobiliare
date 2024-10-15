import { useState, useEffect } from "react";
import { Cell, Legend, Pie, PieChart, Tooltip } from "recharts";
import { Property } from "~/@/lib/types";
import { useProperties } from "~/hooks/useProperties";
import { TargetNameType } from "./Target";
const COLORS = ["rgba(19, 26, 28, 0.8)", "rgb(192, 217, 220)"];

export function TargetSummaryChart({
  target,
  targetValue,
  calendarValue,
}: {
  target: TargetNameType;
  targetValue: number;
  calendarValue: string;
}) {
  const { propertyData } = useProperties();
  const [props, setProps] = useState<Property[]>([]);

  useEffect(() => {
    if (!propertyData?.properties) return setProps([]);
    switch (target) {
      case "EPCmin":
        {
          const all =
            propertyData?.properties.filter((p) =>
              ["D", "E", "F", "G"].includes(
                p.propertyAttributes.current_epc_band
              )
            ) || [];
          // const all = propertyData?.properties || [];
          const numProps = Number(
            ((all.length * targetValue) / 100).toFixed(0)
          );
          const targetProps = all.slice(0, numProps);
          setProps(targetProps);
        }
        break;
      case "Emission":
        setProps(propertyData?.properties);
        break;
      case "EmissionPercent":
        setProps(propertyData?.properties);
        break;
      case "EmissionIntensity":
        setProps(propertyData?.properties);
        break;
      case "EmissionIntensityPercent":
        setProps(propertyData?.properties);
        break;
      default:
        setProps(propertyData?.properties);
    }
  }, [propertyData, target, targetValue]);

  const propsNumber = props.length;

  const currentC02 = props
    .reduce(
      (acc, curr) => acc + (curr.propertyAttributes.current_co2_emissions || 0),
      0
    )
    .toFixed(0);
  const totalCurrentC02 = propertyData?.properties
    .reduce(
      (acc, curr) => acc + curr.propertyAttributes.current_co2_emissions,
      0
    )
    .toFixed(0);
  const potentialC02 = props
    .reduce(
      (acc, curr) => acc + curr.propertyAttributes.potential_co2_emissions,
      0
    )
    .toFixed(0);

  const potentialC02Saving = (
    Number(potentialC02) - Number(currentC02)
  ).toFixed(0);
  const potentialC02SavingPercent = (
    (Number(potentialC02Saving) / Number(totalCurrentC02)) *
    100
  ).toFixed(0);

  const estimatedSaving =
    props.reduce(
      (acc, curr) => acc + curr.potentialSavingsFromEPC.total_potential_savings,
      0
    ) / propsNumber;

  const monthsToDate = calendarValue
    ? (
        (new Date(calendarValue).getTime() - new Date().getTime()) /
        (1000 * 60 * 60 * 24 * 30)
      ).toFixed(0)
    : 0;
  const propertiesPerMonth = monthsToDate
    ? (propsNumber / Number(monthsToDate)).toFixed(0)
    : 0;

  const estTotLoanCost = props.reduce(
    (acc, curr) =>
      acc +
      (curr.retrofitOptions?.[curr.retrofitOptions.length - 1]
        ?.indicative_costs || 0),
    0
  );

  const estTotSubsidyCost = props.reduce(
    (acc, curr) =>
      acc +
      (curr.retrofitOptions?.[curr.retrofitOptions.length - 1]?.subsidy || 0),
    0
  );

  const data = [
    { name: "Emssion outcome", value: Number(potentialC02) },
    {
      name: "Emission reduction",
      value: Number(potentialC02Saving.replace("-", "")),
    },
  ];
  console.log(data);
  return (
    <div>
      <PieChart width={250} height={280}>
        <Pie
          data={data}
          cx={120}
          cy={120}
          innerRadius={40}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
}
