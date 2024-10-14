import { Property } from "~/@/lib/types";
import { TargetType } from "./Target";
import { useProperties } from "~/hooks/useProperties";
import { useState, useEffect } from "react";

export default function TargetPreview({
  target,
  targetValue,
}: {
  target: TargetType;
  targetValue: number;
}) {
  const { propertyData } = useProperties();
  const [props, setProps] = useState<Property[]>([]);

  useEffect(() => {
    switch (target) {
      case "EPCmin":
        {
          const all =
            propertyData?.properties.filter((p) =>
              ["D", "E", "F", "G"].includes(
                p.propertyAttributes.current_epc_band
              )
            ) || [];
          const numProps = ((all.length * targetValue) / 100).toFixed(0);
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

  const getEstimatedSaving = props
    .reduce(
      (acc, curr) => acc + curr.potentialSavingsFromEPC.total_potential_savings,
      0
    )
    .toFixed(0);

  const getEstimatedCost = 0;
  console.log(props[0]);
  return (
    <table className="table-auto border-collapse border border-gray-400 w-full">
      <tbody>
        <tr className="border border-gray-400">
          <td className="border border-gray-400 px-4 py-2 w-1/2">
            Number of target properties:
          </td>
          <td className="border border-gray-400 px-4 py-2 w-1/2">
            {propsNumber}
          </td>
        </tr>
        <tr className="border border-gray-400">
          <td className="border border-gray-400 px-4 py-2 w-1/2">
            Emission current:
          </td>
          <td className="border border-gray-400 px-4 py-2 w-1/2">
            {currentC02} tnC02
          </td>
        </tr>
        <tr className="border border-gray-400">
          <td className="border border-gray-400 px-4 py-2 w-1/2">
            Emission target:
          </td>
          <td className="border border-gray-400 px-4 py-2 w-1/2">
            {potentialC02} tnCO2
          </td>
        </tr>
        <tr className="border border-gray-400">
          <td className="border border-gray-400 px-4 py-2 w-1/2">
            Emission saved:
          </td>
          <td className="border border-gray-400 px-4 py-2 w-1/2">
            {potentialC02Saving} tnCO2, ({potentialC02SavingPercent}%)
          </td>
        </tr>
        <tr className="border border-gray-400">
          <td className="border border-gray-400 px-4 py-2 w-1/2">
            Estimated property saving:
          </td>
          <td className="border border-gray-400 px-4 py-2 w-1/2">
            £{getEstimatedSaving}
          </td>
        </tr>
        <tr className="border border-gray-400">
          <td className="border border-gray-400 px-4 py-2 w-1/2">
            Estimated total loan cost:
          </td>
          <td className="border border-gray-400 px-4 py-2 w-1/2">
            {getEstimatedCost}
          </td>
        </tr>
      </tbody>
    </table>
  );
}
