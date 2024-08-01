"use client";

import MainKpi from "@/components/MainKpi";
import PortfolioOverviwew from "@/components/PortfolioOverview";
import Tile from "@/components/Tiles";

export default function OverviewPage() {
  return (
    <div className="font-sans p-4">
      <h1 className="text-3xl">Overview </h1>

      <div className="mt-8">
        <MainKpi />
        <div className="flex justify-center gap-8 mt-8">
          <Tile
            title="Number of properties"
            value="112.092"
            description="Leicester"
            variant="ghost"
          />
          <Tile
            title="Total mortgage value"
            value="£ 1.2B"
            description="Leicester"
            variant="ghost"
          />
          <Tile
            title="Average emissions/property"
            value="18"
            description="tonneC02 /sq mt / year"
            variant="ghost"
          />
          <Tile
            title="Average EPC rating"
            value="C"
            description="38% of the properties"
            variant="ghost"
          />
        </div>
        <PortfolioOverviwew />
      </div>
    </div>
  );
}
