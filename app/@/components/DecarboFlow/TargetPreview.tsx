import { Property } from "~/@/lib/types";
import { TargetType } from "./Target";
import { useProperties } from "~/hooks/useProperties";
import { useState, useEffect } from "react";

export default function TargetPreview({
  target,
  targetValue,
  calendarValue,
}: {
  target: TargetType;
  targetValue: number;
  calendarValue?: string;
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

  const getEstimatedSaving =
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
            Current Emissions:
          </td>
          <td className="border border-gray-400 px-4 py-2 w-1/2">
            {currentC02} tCO₂e
          </td>
        </tr>
        <tr className="border border-gray-400">
          <td className="border border-gray-400 px-4 py-2 w-1/2">
            Emission Outcome:
          </td>
          <td className="border border-gray-400 px-4 py-2 w-1/2">
            {potentialC02} tCO₂e
          </td>
        </tr>
        <tr className="border border-gray-400">
          <td className="border border-gray-400 px-4 py-2 w-1/2">
            Emission reduction:
          </td>
          <td className="border border-gray-400 px-4 py-2 w-1/2">
            {potentialC02Saving} tCO₂e ({potentialC02SavingPercent}%)
          </td>
        </tr>
        <tr className="border border-gray-400">
          <td className="border border-gray-400 px-4 py-2 w-1/2">
            Estimated Homeowner Savings:
          </td>
          <td className="border border-gray-400 px-4 py-2 w-1/2">
            {getEstimatedSaving.toLocaleString("en-GB", {
              style: "currency",
              currency: "GBP",
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}{" "}
            per year
          </td>
        </tr>
        <tr className="border border-gray-400">
          <td className="border border-gray-400 px-4 py-2 w-1/2">
            Estimated total subsidy amount:
          </td>
          <td className="border border-gray-400 px-4 py-2 w-1/2">
            {estTotSubsidyCost.toLocaleString("en-GB", {
              style: "currency",
              currency: "GBP",
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}
          </td>
        </tr>
        <tr className="border border-gray-400">
          <td className="border border-gray-400 px-4 py-2 w-1/2">
            Estimated total loan amount:
          </td>
          <td className="border border-gray-400 px-4 py-2 w-1/2">
            {estTotLoanCost.toLocaleString("en-GB", {
              style: "currency",
              currency: "GBP",
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}
          </td>
        </tr>

        <tr className="border border-gray-400">
          <td className="border border-gray-400 px-4 py-2 w-1/2">
            Retrofits per month:
          </td>
          <td className="border border-gray-400 px-4 py-2 w-1/2">
            {propertiesPerMonth} ({monthsToDate} months)
          </td>
        </tr>
      </tbody>
    </table>
  );
}
