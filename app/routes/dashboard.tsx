import {
  ActionFunctionArgs,
  type LoaderFunctionArgs,
  type MetaFunction,
} from "@remix-run/node";

import { createContext } from "react";

import { PropertyData } from "~/@/lib/types";

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
export const PropContext = createContext<PropertyData | undefined>(undefined);

export default function Index() {
  return (
    <>
      <DashboardLayout />
    </>
  );
}

export async function loader({ request }: LoaderFunctionArgs) {
  console.log("loader in the dashboard");
  await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });
  return {};
}

export async function action({ request }: ActionFunctionArgs) {
  console.log("action in the dashboard");
  return await authenticator.logout(request, {
    redirectTo: "/logout",
  });
}
