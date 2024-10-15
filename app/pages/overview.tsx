// import MainKpi from "~/@/components/MainKpi";
import { useState } from "react";
import { DecarboFlow } from "~/@/components/DecarboFlow";
import OverviewBar from "~/@/components/OverviewBar";
import TargetEPC from "~/@/components/TargetEPC";
import TargetTracking from "~/@/components/TargetTracking";

export default function OverviewPage() {
  const [isFlowOpen, setIsFlowOpen] = useState(true);

  if (isFlowOpen) {
    return <DecarboFlow setIsFlowOpen={setIsFlowOpen} />;
  }
  return (
    <div className="font-sans p-4">
      {/* <h1 className="text-3xl">Overview </h1> */}

      <div className="mt-0 ">
        <div className={`pt-4 flex w-fit m-auto`}>
          <TargetEPC />
          <div className="w-1/4 min-w-[364px]">
            <TargetTracking />
          </div>
        </div>
        <OverviewBar />
      </div>
    </div>
  );
}
