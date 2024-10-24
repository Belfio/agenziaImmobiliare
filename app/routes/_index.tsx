import {
  ActionFunctionArgs,
  redirect,
  type LoaderFunctionArgs,
  type MetaFunction,
} from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useCallback, useContext, useEffect, useState } from "react";

import { User } from "~/@/lib/types";
import { useProperties } from "~/hooks/useProperties";
import OverviewPage from "~/pages/overview";
import { UserContext } from "~/providers/userContext";

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
{
  /* <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png">
<link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png">
<link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png">
<link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png">
<link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png">
<link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png">
<link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png">
<link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png">
<link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="manifest" href="/manifest.json">
<meta name="msapplication-TileColor" content="#ffffff">
<meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
<meta name="theme-color" content="#ffffff"></meta> */
}

export default function Index() {
  const { userProfile } = useLoaderData<typeof loader>();
  const { setUser } = useContext(UserContext);
  const { propertyOverview, loadPropsAsync } = useProperties();

  // I want to redirect to /decarbonisation if it is the first time in this sessioni. It refreshes at each refresh
  // useEffect(() => {
  //   const firstTime = sessionStorage.getItem("firstTime");
  //   if (!firstTime) {
  //     sessionStorage.setItem("firstTime", "true");
  //     redirect("/decarbonisation");
  //   }
  // }, []);

  useCallback(() => {
    loadPropsAsync();
  }, [loadPropsAsync]);

  useEffect(() => {
    setUser(userProfile);
  }, [userProfile, setUser]);

  return (
    <div className="font-sans p-4">
      {propertyOverview && <OverviewPage propertyOverview={propertyOverview} />}
    </div>
  );
}

export async function loader({ request }: LoaderFunctionArgs) {
  console.log("loader in the dashboard");
  // const user = await authenticator.isAuthenticated(request, {
  //   failureRedirect: "/login",
  // });
  // if (!user) {
  //   return redirect("/login");
  // }

  // const userProfile: User = {
  //   email: user.email,
  //   name: "name",
  //   id: "id",
  //   roles: ["user"],
  //   createdAt: user.createdAt,
  //   avatar: "img",
  //   surname: "surname",
  // };

  const userProfile: User = {
    email: "ciao",
    name: "name",
    id: "id",
    roles: ["user"],
    createdAt: "ciao",
    avatar: "img",
    surname: "surname",
  };

  return { userProfile };
}

export async function action({ request }: ActionFunctionArgs) {
  return await authenticator.logout(request, {
    redirectTo: "/logout",
  });
}
