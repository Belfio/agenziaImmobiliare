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
        <h1 className="text-3xl">Welcome to GL1 Decarbonisation</h1>
        <p className="text-sm text-gray-500">
          GL1 Decarbonisation Planning helps you reach specific climate targets.
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
              You can choose to analyse either the entire portfolio or focus on
              specific regions/cities in relation to climate goals.
            </p>
            <div className="flex space-x-2 items-center mt-4">
              <div className="rounded-full w-10 h-10 flex items-center justify-center bg-transparent border-2 font-semibold ">
                2
              </div>
              <h3 className="text-lg ">Set your targets</h3>
            </div>
            <p className="text-sm text-gray-500 pl-12">
              You can define your climate targets by choosing a specific date,
              relevant metrics, and the desired target values.
            </p>
            <div className="flex space-x-2 items-center mt-4">
              <div className="rounded-full w-10 h-10 flex items-center justify-center bg-transparent border-2 font-semibold ">
                3
              </div>
              <h3 className="text-lg ">Review the impact</h3>
            </div>
            <p className="text-sm text-gray-500 pl-12">
              Explore what’s needed to achieve your targets based on your
              current portfolio.
            </p>
          </div>
          <img src={Top} alt="Building" className="w-[280px]" />
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
