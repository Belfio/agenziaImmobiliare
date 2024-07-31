import DashHeader from "@/components/DashHeader";
import { Nav } from "@/components/DashNav";
import { Separator } from "@/components/ui/separator";
import { Outlet } from "@remix-run/react";
import {
  Activity,
  ChartNetwork,
  ChartPie,
  Headset,
  House,
  LayoutDashboard,
  Settings,
  TextSearch,
} from "lucide-react";

export default function DashboardLayout() {
  const isCollapsed = false;
  return (
    <div>
      {/* Header */}
      <DashHeader />
      {/* SideBar */}

      <div className="flex">
        {/* SideBar */}
        <div className="w-1/6">
          <div className="h-screen">
            <Nav
              isCollapsed={false}
              links={[
                {
                  title: "Overview",
                  label: "128",
                  icon: LayoutDashboard,
                  variant: "default",
                },
                {
                  title: "Portfolio",
                  label: "9",
                  icon: ChartPie,
                  variant: "ghost",
                },
                {
                  title: "Propreties",
                  label: "",
                  icon: House,
                  variant: "ghost",
                },
                {
                  title: "Decarbonization Model",
                  label: "23",
                  icon: ChartNetwork,
                  variant: "ghost",
                },
                {
                  title: "Data and Reports",
                  label: "",
                  icon: TextSearch,
                  variant: "ghost",
                },
                {
                  title: "Monitoring",
                  label: "",
                  icon: Activity,
                  variant: "ghost",
                },
              ]}
            />
            <Separator />
            <Nav
              isCollapsed={isCollapsed}
              links={[
                {
                  title: "Settings",
                  label: "972",
                  icon: Settings,
                  variant: "ghost",
                },
                {
                  title: "Support",
                  label: "342",
                  icon: Headset,
                  variant: "ghost",
                },
              ]}
            />
          </div>
        </div>
        {/* Content */}
        <div className="w-5/6 bg-white">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
