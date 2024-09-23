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
  return (
    <div className="">
      {/* Header */}
      {/* SideBar */}
      <div className="flex">
        {/* SideBar */}
        <div className="w-1/6 min-w-64 h-screen agradient-background-light">
          <div className="fixed  w-1/6 min-w-64 border-r border-dark dark:border-muted h-screen">
            <div className="flex items-center space-x-4 h-16 px-4">
              <h1 className="text-3xl font-semibold tracking-wide">GL1</h1>
            </div>
            <div className="flex-1 flex-col w-full">
              <Nav
                isCollapsed={false}
                links={[
                  {
                    title: "Overview",
                    url: "/dashboard",
                    icon: LayoutDashboard,
                  },
                ]}
              />
            </div>
            {/* <Separator /> */}

            <div className="flex-1 flex-col ">
              <Nav
                isCollapsed={false}
                links={[
                  {
                    title: "Portfolio",
                    url: "/dashboard/portfolio",
                    icon: ChartPie,
                  },
                  {
                    title: "Decarbonization Pathways",
                    url: "/dashboard/decarbonization",
                    icon: ChartNetwork,
                  },
                  {
                    title: "Properties",
                    url: "/dashboard/properties",
                    icon: House,
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
        <div className="w-5/6 ">
          <DashHeader user={user} />
          {/* Content */}

          <Outlet />
        </div>
      </div>
    </div>
  );
}
