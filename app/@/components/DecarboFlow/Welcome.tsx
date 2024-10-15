import { Button } from "~/@/components/ui/button";
import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { FlowSteps } from ".";
import Top from "@/assets/images/topView.jpg";
export function Welcome({ setPath }: { setPath: (path: FlowSteps) => void }) {
  return (
    <DialogHeader className="h-full">
      <DialogTitle className="relative z-10">
        <h1 className="text-3xl">Welcome to GL1 Decarbonisation tool</h1>
        <p className="text-sm text-gray-500">
          GL1 Decarbonisation Planning enables you to strategically align your
          portfolio with your climate commitments.
        </p>
      </DialogTitle>
      <DialogDescription className=" z-10 mt-2 h-full flex flex-col justify-between">
        <div className="flex items-center space-x-12 m-auto">
          <div className="">
            <div className="flex space-x-2 items-center mt-4">
              <div className="rounded-full w-10 h-10 flex items-center justify-center bg-transparent border-2 font-semibold ">
                1
              </div>
              <h3 className="text-lg ">Select the regions/cities</h3>
            </div>
            <p className="text-sm text-gray-500 pl-12">
              Choose to assess your entire portfolio or focus on specific
              regions or cities.
            </p>
            <div className="flex space-x-2 items-center mt-4">
              <div className="rounded-full w-10 h-10 flex items-center justify-center bg-transparent border-2 font-semibold ">
                2
              </div>
              <h3 className="text-lg ">Define your targets</h3>
            </div>
            <p className="text-sm text-gray-500 pl-12">
              Establish climate goals by specifying key timelines, relevant
              performance metrics, and desired decarbonisation outcomes.
            </p>
            <div className="flex space-x-2 items-center mt-4">
              <div className="rounded-full w-10 h-10 flex items-center justify-center bg-transparent border-2 font-semibold ">
                3
              </div>
              <h3 className="text-lg ">Assess impact</h3>
            </div>
            <p className="text-sm text-gray-500 pl-12">
              Evaluate the necessary actions and interventions required to meet
              your targets, based on a detailed analysis of your current
              portfolio composition.
            </p>
          </div>
          <img src={Top} alt="Building" className="w-[280px]" loading="eager" />
        </div>
        <div className="flex justify-end mt-4">
          <Button className="mt-4 w-fit" onClick={() => setPath("region")}>
            Get started
          </Button>
        </div>
      </DialogDescription>
    </DialogHeader>
  );
}
