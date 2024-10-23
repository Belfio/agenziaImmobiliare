// import MainKpi from "~/@/components/MainKpi";
import { useState } from "react";
import AddClient from "~/@/components/AddClient";
import AddProperty from "~/@/components/AddProperty";
import { DecarboFlow } from "~/@/components/DecarboFlow";
import NextMeetings from "~/@/components/NextMeetings";
import OverviewBar from "~/@/components/OverviewBar";
import RecordMeeting from "~/@/components/RecordMeeting";

export default function OverviewPage() {
  const [isFlowOpen, setIsFlowOpen] = useState(false);

  if (isFlowOpen) {
    return <DecarboFlow setIsFlowOpen={setIsFlowOpen} />;
  }
  return (
    <div className="font-sans p-4">
      {/* <h1 className="text-3xl">Overview </h1> */}

      <div className="mt-0 ">
        <OverviewBar />
        <div className={`pt-4 flex m-auto w-full space-x-4`}>
          <div className="w-2/3">
            <NextMeetings />
          </div>
          <div className="flex flex-col w-1/3 space-y-4">
            <RecordMeeting className="dark" />
            <AddProperty className="dark" />
            <AddClient className="dark" />
          </div>
        </div>
      </div>
    </div>
  );
}
