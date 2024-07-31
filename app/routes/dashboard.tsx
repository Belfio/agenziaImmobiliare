import { Button } from "@/components/ui/button";
import {
  ActionFunctionArgs,
  type LoaderFunctionArgs,
  type MetaFunction,
} from "@remix-run/node";
import { Form, Outlet } from "@remix-run/react";
import DashboardLayout from "~/pages/dashboardLayout";

import { authenticator } from "~/services/auth.server";

export const meta: MetaFunction = () => {
  return [
    { title: "GL1 - Platform" },
    {
      name: "Green Lending 1 - Platform",
      content: "GL1 suppoerts the green transition of your mortgage portfolio.",
    },
  ];
};

export default function Index() {
  return <DashboardLayout />;
}

export async function loader({ request }: LoaderFunctionArgs) {
  console.log("loader in the dashboard");
  await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });

  return {};
}

export async function action({ request }: ActionFunctionArgs) {
  return await authenticator.logout(request, {
    redirectTo: "/logout",
  });
}