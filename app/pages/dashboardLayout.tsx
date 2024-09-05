import DashHeader from "~/@/components/DashHeader";
import { Nav } from "~/@/components/DashNav";
import { Separator } from "~/@/components/ui/separator";
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

export default function DashboardLayout({ user }: { user: { email: string } }) {
  const isCollapsed = false;
  console.log("user", user);
  return (
    <div>
      {/* Header */}
      <DashHeader user={user} />
      {/* SideBar */}
      <div className="flex">
        {/* SideBar */}
        <div className="w-1/6 min-w-64">
          <div className="h-screen sticky top-16">
            <div className="flex-1 flex-col ">
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
                    title: "Properties",
                    url: "/dashboard/properties",
                    icon: House,
                  },
                  {
                    title: "Decarbonization Pathways",
                    url: "/dashboard/decarbonization",
                    icon: ChartNetwork,
                  },
                  {
                    title: "Reports (soon)",
                    url: "/dashboard/reports",
                    icon: TextSearch,
                  },
                  {
                    title: "Monitoring (soon)",
                    url: "/dashboard/monitoring",
                    icon: Activity,
                  },
                ]}
              />
            </div>
            <div className="">
              <Separator />
              <Nav
                isCollapsed={isCollapsed}
                links={[
                  {
                    title: "Settings (soon)",
                    url: "/dashboard/settings",
                    icon: Settings,
                  },
                  {
                    title: "Support (soon)",
                    url: "/dashboard/support",
                    icon: Headset,
                  },
                ]}
              />
            </div>
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
