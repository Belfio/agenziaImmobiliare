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
                  url: "/dashboard",
                  icon: LayoutDashboard,
                },
                {
                  title: "Portfolio",
                  url: "/dashboard/portfolio",
                  icon: ChartPie,
                },
                {
                  title: "Propreties",
                  url: "/dashboard/properties",
                  icon: House,
                },
                {
                  title: "Decarbonization Model",
                  url: "/dashboard/decarbonization",
                  icon: ChartNetwork,
                },
                {
                  title: "Data and Reports",
                  url: "/dashboard/data",
                  icon: TextSearch,
                },
                {
                  title: "Monitoring",
                  url: "/dashboard/monitoring",
                  icon: Activity,
                },
              ]}
            />
            <Separator />
            <Nav
              isCollapsed={isCollapsed}
              links={[
                {
                  title: "Settings",
                  url: "/dashboard/settings",
                  icon: Settings,
                },
                {
                  title: "Support",
                  url: "/dashboard/support",
                  icon: Headset,
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
