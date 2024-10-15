// import MainKpi from "~/@/components/MainKpi";
import TargetEPC from "~/@/components/TargetEPC";

import Tile from "~/@/components/Tiles";
import { OverviewPropertiesType } from "~/@/lib/types";

export default function OverviewPage({
  propertyOverview,
}: {
  propertyOverview: OverviewPropertiesType;
}) {
  return (
    <div className="font-sans p-4">
      {/* <h1 className="text-3xl">Overview </h1> */}

      <div className="mt-0 ">
        <TargetEPC />
        <div className="flex justify-center gap-8 mt-8">
          <Tile
            title="Number of properties"
            value={"6388"}
            // value={String(propertyOverview.numberProperties)}
            description="Leicester"
            // variant="ghost"
          />

          <Tile
            title="Average emissions/property"
            // value={String(
            //   propertyOverview.averageCO2EmissionPerSqMt.toFixed(2)
            // )}
            value={String((24634 / 6388).toFixed(2))}
            description="tonneC02 /sq mt / year"
            // variant="ghost"
          />
          <Tile
            title="EPC C+ rating"
            // value={`${(
            //   (propertyOverview.numberOfPropertiesEPCCOrHigher /
            //     propertyOverview.numberProperties) *
            //   100
            // ).toFixed(2)}%`}
            value={"37.3%"}
            // description={`${propertyOverview.numberOfPropertiesEPCCOrHigher}  properties with EPC C or higher`}
            description={`2388 properties with EPC C or higher`}
            // variant="ghost"
          />
          <Tile
            title="Potential EPC C+ target"
            value="99.8%"
            description="3985 properties can retrofit up to EPC C+"
            // variant="ghost"
          />
        </div>
      </div>
    </div>
  );
}
