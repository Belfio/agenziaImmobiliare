import { Property } from "~/@/lib/types";
import { TargetType } from "./Target";
import { useProperties } from "~/hooks/useProperties";

export default function TargetPreview({
  target,
  targetValue,
}: {
  target: TargetType;
  targetValue: number;
}) {
  const { propertyData } = useProperties();
  const props: Property[] = propertyData?.properties || [];
  if (!props) return <></>;

  const getProps: { number: number; props: Property[] } =
    target === "EPCmin"
      ? () => {
          const ps =
            props.filter((p) =>
              ["D", "E", "F", "G"].includes(
                p.propertyAttributes.current_epc_band
              )
            ) || [];
          return {
            props: ps,
            number: ps.length * targetValue,
          };
        }
      : target === "Emission"
      ? () => ({ props: [], number: 0 })
      : target === "EmissionIntensity"
      ? () => ({ props: [], number: 0 })
      : { props: [], number: 0 };

  const getEstimatedCO2 = props.reduce(
    (acc, curr) => acc + Number(curr.propertyAttributes.current_co2_emissions),
    0
  );

  const getEstimatedSaving = props.reduce(
    (acc, curr) => acc + Number(curr.propertyAttributes.potential_savings),
    0
  );

  const getEstimatedCost = 0;

  return (
    <div className="">
      <p>Number of tagret properties:{getProps.number}</p>
      <p>Estimated CO2 emission targets:{getEstimatedCO2}</p>
      <p>Estimated property saving:{getEstimatedSaving}</p>
      <p>Estimated total loan cost:{getEstimatedCost}</p>
    </div>
  );
}
