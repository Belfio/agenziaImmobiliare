"use client";
import {
  ActionFunctionArgs,
  type LoaderFunctionArgs,
  type MetaFunction,
} from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { createContext } from "react";
import DashboardLayout from "~/pages/dashboardLayout";
import { authenticator } from "~/services/auth.server";

export const meta: MetaFunction = () => {
  return [
    { title: "GL1 - Platform" },
    {
      name: "Green Lending 1 - Platform",
      content: "GL1 supports the green transition of your mortgage portfolio.",
    },
  ];
};

export const UserContext = createContext<{ email: string } | undefined>(
  undefined
);

export default function Index() {
  const { user } = useLoaderData<typeof loader>() as {
    user: { email: string };
  };

  return (
    <UserContext.Provider value={user}>
      <DashboardLayout user={user} />
    </UserContext.Provider>
  );
}

export async function loader({ request }: LoaderFunctionArgs) {
  console.log("loader in the dashboard");
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });
  return { user };
}

export async function action({ request }: ActionFunctionArgs) {
  console.log("action in the dashboard");
  return await authenticator.logout(request, {
    redirectTo: "/logout",
  });
}
